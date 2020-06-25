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
    console.log(contentData);
    /* this.contentInstances = this.config.steps.map((step: any) => {
      step.params = step.params || {};
      const instance = H5P.newRunnable(step.tasks[0], contentId);
      return instance;
    }); */
    // console.log(this.contentInstances);
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
      this.stepsNav.push(new StepNav($stepswrapper, step, () => this.loadStep(index)));
    });

    const $quitbtn = $('<button>', { class: 'flh5p-button flh5p-button--transparent flh5p-button--close', html: 'Close', click: () =>  {
      self.leaveStep();
    }});

    const $nextbtn = $('<button>', {
      class: 'flh5p-button flh5p-button--action flh5p-button--next',
      html: 'Next',
      click: () => self.goToNextTask(),
    });

    const $questionheader = $('<div>', { class: 'flh5p-question-wrapper__header' });
    const $questioninstance = $('<div>', { class: 'flh5p-question-instance'});
    $questioninstance.append($taskcontainer);
    $questionheader.append($quitbtn);
    $questionheader.append($nextbtn);
    $questionwrapper.append($questionheader);
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
    // this.loadFirstStep();
  }

  loadStep = (index: number) => {
    const self = this;
    this.activeTask = this.steps[index].open();
    this.activeStep = this.steps[index];
    this.activeIndex = index;
    this.$wrapper.addClass('flh5p-app--step-open');
    this.activeStep.on('taskCompleted', () => {
      console.log('activeStep triggered taskCompleted');
      console.log(index);
    });
    this.activeStep.on('stepCompleted', () => {
      console.log('Step completed: ', index);
      self.completeStep(index);
      self.leaveStep();
      console.log(self.activeIndex);
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
    console.log('completeStep ', index);
    console.log(this.stepsNav[index]);
    this.stepsNav[index].completed();
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
}
