declare var H5P: any;
declare var H5PIntegration: any;
const $ = H5P.jQuery;

import { createAppHeader, createAppNavigation } from './ui';
import Step from './step/step';

export const H5PData = {
  id: '',
};

export default class ReadAndPlay extends H5P.EventDispatcher {
  $wrapper: JQuery;
  $contantwrapper: JQuery;
  $stepswrapper: JQuery;
  $questioninstance: JQuery;
  config: any;
  contentInstances: any = [];
  activeInstance: any;
  stepsNav: any = [];

  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
    this.config = $.extend(true, {}, {}, config);
    this.id = contentId;
    H5PData.id = contentId;
    this.contentData = contentData;
    if (this.config.steps[0]) {
      const test = H5P.newRunnable(this.config.steps[0].tasks[0], this.id);
      this.on('resize', (event: any) => {
        test.trigger('resize', event);
      });
      this.contentInstances.push(test);
    }

    this.contentInstances = this.config.steps.map((step: any) => {
      step.params = step.params || {};
      const instance = H5P.newRunnable(step.tasks[0], contentId);
      return instance;
    });
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
      this.stepsNav.push(new Step($stepswrapper, step, () => this.loadStep(index)));
    });
    const $quitbtn = $('<button>', { class: 'flh5p-button flh5p-button--transparent flh5p-button--close', html: 'Close', click: () =>  {
      console.log('Close!');
      self.$wrapper.removeClass('flh5p-app--step-open');
      // console.log(this.$questioninstance);
      // this.$questioninstance.children('.flh5p-task').empty();
      this.$taskcontainer.each(function () {
        $(this).children().detach();
      });
      this.$taskcontainer.removeClass();
      this.$taskcontainer.addClass('flh5p-task');
      console.log(console.log(this.$questioninstance));
      /* self.$questioninstance.each(() => {
        console.log($(this).children());
        console.log(self.$questioninstance);
        // $questioninstance.children().detach();
      }); */
    }});

    const $questionheader = $('<div>', { class: 'flh5p-question-wrapper__header' });
    const $questioninstance = $('<div>', { class: 'flh5p-question-instance'});
    $questioninstance.append($taskcontainer);
    $questionheader.append($quitbtn);
    $questionwrapper.append($questionheader);
    $questionwrapper.append($questioninstance);
    $wrapper.append($stepswrapper);
    $wrapper.append($questionwrapper);
    this.$wrapper = $wrapper;
    this.$questionwrapper = $questionwrapper;
    this.$taskcontainer = $taskcontainer;
    this.$questioninstance = $questioninstance;
    this.$stepswrapper = $stepswrapper;
    // this.loadFirstStep();
  }

  loadStep = (index: number) => {
    console.log('load step');
    const step = this.contentInstances[index];
    /* if (this.activeInstance) {
      console.log(this.activeInstance.getCurrentState());
      console.log(this.activeInstance);
      // Sort some stuff
    } */
    // Remove previously loaded step
    /* this.$taskcontainer.each(() => {
      console.log($(this).children());
      $(this).children().detach();
    }); */
    console.log(this.$taskcontainer);
    console.log(this.$taskcontainer.parent());
    step.attach(this.$taskcontainer);
    this.activeInstance = step;
    this.$wrapper.addClass('flh5p-app--step-open');
  }

  leaveStep = () => {
    console.log('Close step and show navigation again');
  }
}
