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
    this.loadTask = this.loadTask.bind(this);
    this.config = config;
    this.$container = $container;

    this.runnableInstances = this.config.tasks.map((task: any) => {
      task.params = task.params || {};
      const instance = H5P.newRunnable(task, H5PData.id);
      return instance;
    });
  }

  open() {
    const firstInstance = this.loadTask(0);
    return firstInstance;
  }

  close() {
  }

  loadTask(index: number) {
    const self = this;
    const instance = this.runnableInstances[index];
    // Remove previously attached tasks
    this.emptyContainer();
    instance.attach(this.$container);
    this.activeTask = instance;
    this.activeIndex = index;
    // IF the content type is embedded just automatically set it to finished when loaded
    if (instance.libraryInfo.machineName === 'H5P.IFrameEmbed' || instance.libraryInfo.machineName === 'H5P.Text') {
      setTimeout(() => {
        self.trigger('taskCompleted', index);
        if (!self.runnableInstances[index + 1]) {
          self.trigger('stepCompleted');
        }
        self.completed = true;
      }, 1000);
    }
    console.log(instance);
    // If the task have triggers then we need to listen for them
    if (instance.trigger) {
      instance.on('xAPI', (event: any) => {
        console.log(event);
        const { statement }= event.data;
        // If the current task have just been completed
        if (statement.result && statement.result.completion) {
          // Task was finished, check what to do next
          self.trigger('taskCompleted', index);
          if (!self.runnableInstances[index + 1]) {
            self.completed = true;
            self.trigger('stepCompleted');
          }
        }
      });
    }

    if (instance.libraryInfo.machineName === 'H5P.SpellTheWord') {
      instance.on('scored', () => {
        console.log('Scored');
        console.log(instance.points);
        if (instance.isCompleted) {
          if (!self.runnableInstances[index + 1]) {
            self.completed = true;
            self.trigger('stepCompleted');
          }
        }
      });
    }

    if (instance.libraryInfo.machineName === 'H5P.ImageSequencing') {
      instance.$submit.click(() => {
        if (instance.isSubmitted) {
          // Task was finished, check what to do next
          self.trigger('taskCompleted', index);
          if (!self.runnableInstances[index + 1]) {
            self.completed = true;
            self.trigger('stepCompleted');
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
        this.trigger('stepCompleted');
      }
    }
  }

  goToPreviousTask() {
    console.log(this.activeIndex);
  }

  complete() {
    this.completed = true;
  }

  getScore() {
    return 0;
  }

  reset() {
    console.log('Reset ', this);
    this.completed = false;
    this.activeTask = 0;
    this.activeIndex = 0;
    this.emptyContainer();
  }

  emptyContainer() {
    this.$container.each(() => {
      $(this).children().detach();
    });
  }
}
