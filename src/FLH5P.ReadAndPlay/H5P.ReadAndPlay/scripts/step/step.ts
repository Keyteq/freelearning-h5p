import './step.scss';

declare var H5P: any;
declare var H5PIntegration: any;
const $ = H5P.jQuery;
import { H5PData } from '../main';

// extends  H5P.EventDispatcher
export default class Step {
  $wrapper: JQuery;
  $element: JQuery;
  config: any;
  callback: Function;

  constructor($wrapper: JQuery, data: any, callback?: Function) {
    this.$wrapper = $wrapper;
    this.config = data;
    this.callback = callback;
    console.log(data);
    this.render();
  }

  render() {
    const self = this;
    const $element = $('<div>', { class: 'flh5p-step' });
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
      console.log(H5PIntegration);
      $element.append($stepIcon);
    }
    $element.append($stepbtn);
    this.$wrapper.append($element);
    this.$element = $element;
  }
}
