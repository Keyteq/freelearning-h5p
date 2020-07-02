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
    if (this.completed) {
      this.trigger('stepCompleted');
    }
  }

  loadTask(index: number) {
    const self = this;
    const instance = this.runnableInstances[index];
    // Remove previously attached tasks
    this.emptyContainer();
    instance.attach(this.$container);
    this.activeTask = instance;
    this.activeIndex = index;
    // If step have more tasks, show next button else hide it
    if (this.runnableInstances[index + 1]) {
      $('.flh5p-button--next').show();
    } else {
      $('.flh5p-button--next').hide();
    }
    $('.flh5p-button--step-restart').show();

    switch (instance.libraryInfo.machineName) {
      case 'H5P.IFrameEmbed':
      case 'H5P.Text':
      case 'H5P.InteractiveVideo':
      case 'H5P.MemoryGame':
      case 'H5P.DragText': {
        this.trigger('taskCompleted', index);
        if (!this.runnableInstances[index + 1]) {
          self.completed = true;
        }
        break;
      }
      default: {
        break;
      }
    }
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
            self.triggerCompleted();
          }
        }
      });
    }

    if (instance.libraryInfo.machineName === 'H5P.SpellTheWord') {
      instance.on('scored', () => {
        if (instance.isCompleted) {
          if (!self.runnableInstances[index + 1]) {
            self.triggerCompleted();
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
            self.triggerCompleted();
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
        $('.flh5p-button--next').hide();
      }
    }
  }

  goToPreviousTask() {
    console.log(this.activeIndex);
  }

  triggerCompleted() {
    this.completed = true;
    this.trigger('stepCompleted');
    $('.flh5p-button--next').hide();
    $('.flh5p-button--step-restart').show();
  }

  complete() {
    this.completed = true;
  }

  getScore() {
    return 0;
  }

  restart() {
    console.log('restart ', this);
  }

  reset() {
    this.completed = false;
    this.activeTask = 0;
    this.activeIndex = 0;
    this.close();
    this.emptyContainer();
  }

  emptyContainer() {
    this.$container.each(() => {
      $(this).children().detach();
    });
  }
}
