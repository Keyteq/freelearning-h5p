import './droppable.scss';
declare var H5P: any;
const $ = H5P.jQuery;

class FLH5PDroppable extends H5P.EventDispatcher {
  classes = ['flh5p-droppable'];
  letter: string;
  $container: JQuery;
  $element: any;
  $droppedElement: JQuery;
  textValue: string;

  constructor(letter: string, $container: JQuery) {
    super();
    this.$container = $container;
    this.letter = letter;

    this.render();
  }

  render() {
    this.$element = $('<div>', { class: this.classes.join(' ') });
    // If letter is not empty allow for draggable items to be dropped
    const self = this;
    this.$element.droppable({
      accept: '.flh5p-draggable',
      drop: (event: any, ui: any) => self.handleDrop(event, ui, self),
    });
    this.$container.append(this.$element);
  }

  handleDrop( event: any, ui: any, self: any ) {
    if (this.$droppedElement) {
      const droppedElementParent = ui.draggable[0].parentNode;
      // Move previous element to parent of new element
      $(droppedElementParent).append(this.$droppedElement);
    }
    const target = event.target;
    $(ui.draggable[0]).css({ left: 0, top: 0 });
    $(target).append(ui.draggable[0]);
    self.textValue = ui.draggable[0].textContent;
    self.$droppedElement = ui.draggable[0];
    self.trigger('dropped', { 'value': self.textValue });
  }

  getText() {
    return this.$element[0].textContent;
  }

  isCorrect() {
    if (this.$element.hasClass('h5p-wrong')) {
      this.$element.removeClass('h5p-wrong');
    }
    this.$element.addClass('h5p-correct');
  }

  isWrong() {
    if (this.$element.hasClass('h5p-correct')) {
      this.$element.removeClass('h5p-correct');
    }
    this.$element.addClass('h5p-wrong');
  }

  reset() {
    this.$element.removeClass(['h5p-wrong', 'h5p-correct']);
  }
}

export default FLH5PDroppable;
