import './step.scss';

declare var H5P: any;
declare var H5PIntegration: any;
const $ = H5P.jQuery;
import { H5PData } from '../main';

// extends  H5P.EventDispatcher
export default class StepNav {
  $wrapper: JQuery;
  $element: JQuery;
  config: any;
  index: number;
  callback: Function;
  isCompleted = false;

  constructor($wrapper: JQuery, data: any, callback?: Function, index?: number) {
    this.$wrapper = $wrapper;
    this.config = data;
    this.callback = callback;
    this.index = index;
    this.render();
  }

  render() {
    const self = this;
    const $element = $('<div>', { class: 'flh5p-step ' + (this.index > -1 ? 'flh5p-step--' + (this.index + 1 ).toString(): '') });
    const $stepbtn = $('<button>', {
      class: 'flh5p-button flh5p-button--step',
      html: this.config.title,
      title: 'Load step ' + this.config.title,
      click: self.callback,
    });
    if (this.config.icon) {
      const $stepIcon = $('<img>', {
        class: 'flh5p-step__icon',
        src: H5P.getPath(this.config.icon.path, H5PData.id),
      });
      $element.append($stepIcon);
    }
    $element.append($stepbtn);
    this.$wrapper.append($element);
    this.$element = $element;
  }

  completed() {
    if (!this.$element.hasClass('flh5p-step--completed')) {
      this.$element.addClass('flh5p-step--completed');
      this.isCompleted = true;
    }
  }

  setAsNext() {
    this.$element.addClass('flh5p-step--next');
  }

  removeNext() {
    this.$element.removeClass('flh5p-step--next');
  }
}
