import './draggable.scss';
declare var H5P: any;
const $ = H5P.jQuery;

class FLH5PDraggable extends (H5P.EventDispatcher as { new(): any; }) {
  $container: JQuery;
  $element: any;
  letter: string;
  $droppableContainer: JQuery;
  classes = ['flh5p-draggable'];
  constructor(letter: string, $container: JQuery) {
    super();
    this.$container = $container;
    this.letter = letter;
    this.render();
  }

  render() {
    const self = this;
    this.$element = $('<div>', { class: this.classes.join(' ') });
    this.$element.html(this.letter);
    // this.$element.
    this.$element.draggable({
      revert: 'invalid'
    });
    this.$element.dblclick((event: any, ui: any) => {
      if (!self.$element.parent().hasClass('flh5p-droppable')) {
        if (!self.droppableContainer) {
          this.trigger('doubleclicked', { 'value': self.letter, event: event });
        }
      }
    });
    this.$container.append(this.$element);
    this.enable();
  }

  // Allows draggable element to be dragged
  enable() {
    this.$element.draggable('enable');
  }

  // Disables draggable element to be dragged
  disable() {
    this.$element.draggable('disable');
  }
}

export default FLH5PDraggable;
