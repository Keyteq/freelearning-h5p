declare var H5P: any;
declare var H5PIntegration: any;
const $ = H5P.jQuery;

import { createAppHeader, createAppNavigation } from './ui';
import Step from './step/step';

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
    this.contentData = contentData;
    if (this.config.steps[0]) {
      const test = H5P.newRunnable(this.config.steps[0].tasks[0], this.id);
      this.contentInstances.push(test);
    }

    this.contentInstances = this.config.steps.map((step: any) => {
      step.params = step.params || {};
      const instance = H5P.newRunnable(step.tasks[0], contentId);
      return instance;
    });

    console.log(this.contentInstances);
  }

  attach = ($wrapper: JQuery) => {
    const self = this;
    $wrapper.addClass('flh5p-app');
    const $questionwrapper = $('<div>', { class: 'flh5p-question-wrapper' });
    const $stepswrapper = $('<div>', { class: 'flh5p-steps' });
    createAppHeader($wrapper, { title: this.contentData.metadata.title });
    createAppNavigation($wrapper, []);
    // console.log(this.config.steps);
    this.config.steps.map((step: any, index: number) => {
      this.stepsNav.push(new Step($stepswrapper, step, () => this.loadStep(index)));
    });
    const $quitbtn = $('<button>', { class: 'flh5p-button flh5p-button--transparent', html: 'Close', click: () =>  {
      console.log('CLOSE!');
      self.$wrapper.removeClass('flh5p-app--step-open');
      self.$questioninstance.each(() => {
        console.log($(this).children());
        $(this).children().detach();
      });
    }});
    const $questionheader = $('<div>', { class: 'flh5p-question-wrapper__header' });
    const $questioninstance = $('<div>');
    $questionheader.append($quitbtn);
    $questionwrapper.append($questionheader);
    $questionwrapper.append($questioninstance);
    $wrapper.append($stepswrapper);
    $wrapper.append($questionwrapper);
    this.$wrapper = $wrapper;
    this.$questionwrapper = $questionwrapper;
    this.$questioninstance = $questioninstance;
    this.$stepswrapper = $stepswrapper;
    // this.loadFirstStep();
  }

  loadStep = (index: number) => {
    console.log('load step');
    const step = this.contentInstances[index];
    if (this.activeInstance) {
      console.log(this.activeInstance.getCurrentState());
      console.log(this.activeInstance);
      // Sort some stuff
    }
    // Remove previously loaded step
    this.$questioninstance.each(() => {
      console.log($(this).children());
      $(this).children().detach();
    });
    step.attach(this.$questioninstance);
    this.activeInstance = step;
    this.$wrapper.addClass('flh5p-app--step-open');
  }

  leaveStep = () => {
    console.log('Close step and show navigation again');
  }
}
