declare var H5P: any;
// declare var H5PIntegration: any;
const $ = H5P.jQuery;

import { H5PData } from '../main';

export default class Step extends (H5P.EventDispatcher as { new(): any; }) {
  $container: JQuery;
  config: any;
  runnableInstances: any = [];
  activeTask: any;
  activeIndex: any;
  completed = false;
  results: any;

  constructor(config: any, $container: JQuery) {
    super();
    this.config = config;
    this.$container = $container;

    this.runnableInstances = this.config.tasks.map((task: any) => {
      task.params = task.params || {};
      const instance = H5P.newRunnable(task, H5PData.id);
      return instance;
    });
  }

  open() {
    console.log('Open: ', this);
    const firstInstance = this.loadTask(0);
    return firstInstance;
  }

  close() {
    console.log('Close: ', this);
  }

  loadTask(index: number) {
    const self = this;
    const instance = this.runnableInstances[index];
    // Remove previously attached tasks
    this.emptyContainer();
    instance.attach(this.$container);
    console.log(instance);
    this.activeTask = instance;
    this.activeIndex = index;
    // If the task have triggers then we need to listen for them
    if (instance.trigger) {
      instance.on('xAPI', (event: any) => {
        const { statement }= event.data;
        // If the current task have just been completed
        if (statement.result && statement.result.completion) {
          // Task was finished, check what to do next
          self.trigger('taskCompleted', index);
          if (self.runnableInstances[index + 1]) {
            // setTimeout(() => self.loadTask(index + 1), 4000);
          } else {
            this.completed = true;
          }
        }
      });
    }
    return instance;
  }

  goToNextTask() {
    if (this.runnableInstances[this.activeIndex + 1]) {
      this.loadTask(this.activeIndex + 1);
    } else {
      if (this.completed) {
        console.log('Step is complete');
        this.trigger('stepCompleted');
      }
    }
  }

  goToPreviousTask() {
    console.log(this.activeIndex);
  }

  getScore() {
    return 0;
  }

  emptyContainer() {

  }
}
