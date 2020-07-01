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

    const $questionheader = $('<div>', { class: 'flh5p-question-wrapper__header' });
    const $questioninstance = $('<div>', { class: 'flh5p-question-instance'});
    const $bottombar = $('<div>', { class: 'flh5p-question-wrapper__modal__bottombar' });
    const $wrapperModal = $('<div>', { class: 'flh5p-question-wrapper__modal' });


    // Add content to question header
    // Nr icon
    const $modalNumberIcon = $('<div>', { class: 'flh5p-modal-number' });
    const $modalStepIcon = $('<div>', { class: 'flh5p-modal-stepicon' });
    const $modalnextbutton = $('<button>', { class: 'flh5p-modal__next' });
    $questionheader.append($modalNumberIcon);
    $questionheader.append($modalStepIcon);
    $questionheader.append($modalnextbutton);
    $questionheader.append($quitbtn);

    $bottombar.append($nextbtn);
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
      console.log(H5P.getPath(this.activeStep.config.icon.path, this.id));
      $stepIconEl.html('');
      $stepIconEl.append($('<img>', { src: H5P.getPath(this.activeStep.config.icon.path, this.id) }));
    }

    this.activeStep.on('taskCompleted', () => {
      // console.log('activeStep triggered taskCompleted');
      // console.log(index);
    });
    this.activeStep.on('stepCompleted', () => {
      self.completeStep(index);
      // self.leaveStep();
      // console.log(self.activeIndex);
      self.stepsNav[self.activeIndex].removeNext();
      if (self.stepsNav[self.activeIndex + 1]) {
        self.stepsNav[self.activeIndex + 1].setAsNext();
      }
    });
    /* const step = this.contentInstances[index];
    if (step.trigger) {
      step.on('xAPI', (event: any) => {
        const { statement }= event.data;
        console.log(statement);
        if (statement.result && statement.result.completion) {
          // Task was finished, check what to do next
          console.log('task finished');
          console.log(step);
        }
      });
    }
    step.attach(this.$taskcontainer);
    this.activeInstance = step;
     */
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

  goToNextTask = () => {
    console.log(this);
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
