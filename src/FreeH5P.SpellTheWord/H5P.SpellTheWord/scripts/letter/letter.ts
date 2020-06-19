import './letter.scss';

declare var H5P: any;
const $ = H5P.jQuery;

class Letter {
  classes = ['flh5p-letter'];
  letter: string;
  randomPosition: number;
  _element: any;
  droppedTextValue: string;

  constructor(
    letter: string,
    $container: JQuery,
    options?: {
      droppable?: boolean, draggable?: boolean,
    }
  ) {
    this._element = $('<div>', { class: this.classes.join(' ') });
    if (options && options.draggable) {
      this._element.html(letter);
      this._element.draggable({
        revert: 'invalid'
      });
      this._element.dblclick(() => {
        console.log('double click');
      });
    }

    if (options && options.droppable && letter !== ' ') {
      this._element.droppable({
        accept: '.flh5p-letter--drag',
        drop: ( event: any, ui: any ) => {
          const target = event.target;
          $(ui.draggable[0]).css({ left: 0, top: 0 });
          $(target).append(ui.draggable[0]);
          this.droppedTextValue = ui.draggable[0].textContent;
        }
      });
    }
    $container.append(this._element);
  }

  dropped() {
    console.log(this);
    console.log('dropped');
  }

  getText() {
    return this.droppedTextValue;
  }

  isCorrect() {
    if (this._element.hasClass('h5p-wrong')) {
      this._element.removeClass('h5p-wrong');
    }
    this._element.addClass('h5p-correct');
  }

  isWrong() {
    if (this._element.hasClass('h5p-correct')) {
      this._element.removeClass('h5p-correct');
    }
    this._element.addClass('h5p-wrong');
  }

  reset() {
    this._element.removeClass(['h5p-wrong', 'h5p-correct']);
  }
}

export default Letter;
