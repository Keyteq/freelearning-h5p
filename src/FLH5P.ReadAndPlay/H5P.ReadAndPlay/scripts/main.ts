declare var H5P: any;
declare var H5PIntegration: any;
const $ = H5P.jQuery;

import { createAppHeader, createAppNavigation } from './ui';
import Step from './step/step';
import StepNav from './step/step.nav';

export const H5PData = {
  id: '',
};

export default class ReadAndPlay extends H5P.EventDispatcher {
  $wrapper: JQuery;
  $contantwrapper: JQuery;
  $stepswrapper: JQuery;
  $questioninstance: JQuery;
  config: any;
  activeStep: Step;
  activeTask: any;
  steps: Step[] = [];
  stepsNav: any = [];

  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
    this.config = $.extend(true, {}, {}, config);
    this.id = contentId;
    H5PData.id = contentId;
    this.contentData = contentData;
    this.goToNextTask = this.goToNextTask.bind(this);
    this.completeStep = this.completeStep.bind(this);
    this.leaveStep = this.leaveStep.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.restartStep = this.restartStep.bind(this);
  }

  attach = ($wrapper: JQuery) => {
    const self = this;
    $wrapper.addClass('flh5p-app');
    const $questionwrapper = $('<div>', { class: 'flh5p-question-wrapper' });
    const $taskcontainer = $('<div>', { class: 'flh5p-task' });
    const $stepswrapper = $('<div>', { class: 'flh5p-steps' });
    createAppHeader($wrapper, { title: this.contentData.metadata.title });
    createAppNavigation($wrapper, []);
    // console.log(this.config.steps);
    this.config.steps.map((step: any, index: number) => {
      this.stepsNav.push(new StepNav($stepswrapper, step, () => this.loadStep(index), index));
    });

    const $quitbtn = $('<button>', { class: 'flh5p-button--close', title: 'Close', click: () =>  {
      self.leaveStep();
    }});

    const $nextbtn = $('<button>', {
      class: 'flh5p-button flh5p-button--action flh5p-button--next',
      html: 'Next',
      click: () => self.goToNextTask(),
    });

    const $restartStepBtn = $('<button>', { class: 'flh5p-button--step-restart', html: 'Go again', click: this.restartStep });

    const $questionheader = $('<div>', { class: 'flh5p-question-wrapper__header' });
    const $questioninstance = $('<div>', { class: 'flh5p-question-instance'});
    const $bottombar = $('<div>', { class: 'flh5p-question-wrapper__modal__bottombar' });
    const $wrapperModal = $('<div>', { class: 'flh5p-question-wrapper__modal' });

    // Add content to question header
    // Nr icon
    const $modalNumberIcon = $('<div>', { class: 'flh5p-modal-number' });
    const $modalStepIcon = $('<div>', { class: 'flh5p-modal-stepicon' });
    const $modalnextbutton = $('<button>', { class: 'flh5p-modal__next', click: this.handleNextClick });
    const $modalfinishedbutton = $('<button>', { html: 'Finished', class: 'flh5p-modal__finished', click: this.handleNextClick });
    $questionheader.append($modalNumberIcon);
    $questionheader.append($modalStepIcon);
    $questionheader.append($modalnextbutton);
    $questionheader.append($modalfinishedbutton);
    $questionheader.append($quitbtn);

    $bottombar.append($nextbtn);
    $bottombar.append($restartStepBtn);

    $wrapperModal.append($questionheader);
    $wrapperModal.append($taskcontainer);
    $wrapperModal.append($bottombar);
    $questioninstance.append($wrapperModal);
    $questionwrapper.append($questioninstance);
    $wrapper.append($stepswrapper);
    $wrapper.append($questionwrapper);
    this.$wrapper = $wrapper;
    this.$questionwrapper = $questionwrapper;
    this.$taskcontainer = $taskcontainer;
    this.$questioninstance = $questioninstance;
    this.$stepswrapper = $stepswrapper;
    this.$nextbtn = $nextbtn;

    // Setup all steps
    this.steps = this.config.steps.map((step: any) => {
      return new Step(step, $taskcontainer);
    });
    this.stepsNav[0].setAsNext();
  }

  loadStep = (index: number) => {
    const self = this;
    this.activeTask = this.steps[index].open();
    this.activeStep = this.steps[index];
    this.activeIndex = index;
    this.$wrapper.addClass('flh5p-app--step-open');
    const $nrIcon = $('.flh5p-modal-number');
    $nrIcon.removeClass();
    $nrIcon.addClass('flh5p-modal-number flh5p-modal-number--' + (index + 1).toString());
    if (this.activeStep.config.icon) {
      const $stepIconEl = $('.flh5p-modal-stepicon');
      $stepIconEl.html('');
      $stepIconEl.append($('<img>', { src: H5P.getPath(this.activeStep.config.icon.path, this.id) }));
    }

    // If activeStep is an embed, add class to flh5p-task to set height
    if (this.activeTask.libraryInfo.machineName === 'H5P.IFrameEmbed') {
      $('.flh5p-task').addClass('flh5p-task--embed');
    }

    if (!this.steps[index + 1]) {
      $('.flh5p-modal__next').hide();
      $('.flh5p-modal__finished').show();
    } else {
      $('.flh5p-modal__next').show();
      $('.flh5p-modal__finished').hide();
      // If next step have an image load it into next-button, else just write next
      if (this.steps[index + 1].config.icon) {
        const $icon = $('<img>', { src: H5P.getPath(this.steps[index + 1].config.icon.path, this.id) });
        $('.flh5p-modal__next').html($icon);
      } else {
        $('.flh5p-modal__next').html('Next');
      }
    }

    this.activeStep.on('taskCompleted', () => {
    });
    this.activeStep.on('stepCompleted', () => {
      self.completeStep(index);
      self.stepsNav[self.activeIndex].removeNext();
      if (self.stepsNav[self.activeIndex + 1]) {
        self.stepsNav[self.activeIndex + 1].setAsNext();
      }
    });
  }

  completeStep = (index: number) => {
    this.stepsNav[index].completed();
    this.steps[index].complete();
    let incompleteStepFound = false;
    // Check if all steps are completed
    this.steps.forEach((step: Step) => {
      if (!step.completed) {
        incompleteStepFound = true;
      }
    });
    if (!incompleteStepFound) {
      this.loadEndScreen();
    }
  }

  restartStep = () => {
    this.activeStep.restart();
  }

  handleNextClick = () => {
    const step = this.activeStep;
    const index = this.activeIndex;
    const steps = this.steps;
    if (steps[index + 1]) {
      step.close();
      this.$taskcontainer.each(function () {
        $(this).children().detach();
      });
      this.$taskcontainer.removeClass();
      this.$taskcontainer.addClass('flh5p-task');
      this.loadStep(index + 1);
    } else {
      this.leaveStep();
    }
  }

  goToNextTask = () => {
    this.activeStep.goToNextTask();
  }

  leaveStep = () => {
    this.activeStep.close();
    this.$wrapper.removeClass('flh5p-app--step-open');
    this.$taskcontainer.each(function () {
      $(this).children().detach();
    });
    this.$taskcontainer.removeClass();
    this.$taskcontainer.addClass('flh5p-task');
  }

  loadEndScreen = () => {
    // Remove possible previous endscreens
    $('.flh5p-endscreen').remove();
    const $endwrapper = $('<div>', { class: 'flh5p-endscreen' });
    this.$stepswrapper.hide();
    const $completedSteps = $('<div>', { class: 'flh5p-endscreen__steps' });

    this.config.steps.forEach((step: any) => {
      const $step = $('<div>', { class: 'flh5p-endscreen__step', html: '' });
      if (step.icon && step.icon.path) {
        $step.append($('<img>', { src: H5P.getPath(step.icon.path, this.id) }))
      } else {
        $step.html(step.title);
      }
      $completedSteps.append($step);
    });

    const $feedbackwrapper = $('<div>', { class: 'flh5p-endscreen__feedback' });
    const $feedbackTitle = $('<h2>', {
      class: 'flh5p-endscreen__feedback__title',
      html: this.config.endscreen && this.config.endscreen.title ? this.config.endscreen.title : 'Well done!',
    });

    const restartBtn = $('<button>', {
      class: 'flh5p-button flh5p-button--restart',
      html: 'Go again',
      click: this.resetAll,
    });

    const goToHomeBtn = $('<a>', {
      href: '/',
      class: 'flh5p-button flh5p-button--home',
      html: 'Home'
    });

    $feedbackwrapper.append($feedbackTitle);
    $feedbackwrapper.append(restartBtn);
    $feedbackwrapper.append(goToHomeBtn);

    const $recommendations = $('<div>', { class: 'flh5p-endscreen__recommendations' });
    const recommended = this.config.recommended || [];
    recommended.forEach((recommendation: any) => {
      const $rec = $('<div>', { class: 'flh5p-endscreen__card' });
      const $linkwrapper = $('<a>', { class: 'flh5p-endscreen__card__link', href: recommendation.link || '/' });
      const $title = $('<div>', { class: 'flh5p-endscreen__card__title', html: recommendation.title });
      const $description = $('<p>', { class: 'flh5p-endscreen__card__description', html: recommendation.description || 'Description goes here' });
      const $image = $('<div>', { class:  'flh5p-endscreen__card__image' });
      if (recommendation.image) {
        $image.css({ backgroundImage: 'url(' + H5P.getPath(recommendation.image.path, this.id) + ')'});
      }
      $linkwrapper.append($image);
      $linkwrapper.append($title);
      $linkwrapper.append($description);
      $rec.append($linkwrapper);
      $recommendations.append($rec);
    });
    // Append recommendations to feedbackwrapper
    $feedbackwrapper.append($recommendations);

    $endwrapper.append($completedSteps);
    $endwrapper.append($feedbackwrapper);
    this.$wrapper.append($endwrapper);
  }

  resetAll = () => {
    $('.flh5p-endscreen').remove();
    this.$stepswrapper.show();
    this.stepsNav.forEach((stepNav: StepNav) => stepNav.reset());
    this.steps.forEach((step: Step) => step.reset());
  }
}
