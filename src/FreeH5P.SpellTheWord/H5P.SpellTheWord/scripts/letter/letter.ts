import './letter.scss';

declare var H5P: any;
const $ = H5P.jQuery;

class Letter {
  letter: string;
  randomPosition: number;
  _element: any;
  classes = ['flh5p-letter'];
  droppedTextValue: string;

  constructor(
    letter: string,
    $container: JQuery,
    options?: {
      droppable?: boolean, draggable?: boolean,
    }
  ) {
    this.letter = letter;
    if (options && options.droppable) {
      letter && letter !== ' ' ? this.classes.push('flh5p-letter--drop') : this.classes.push('flh5p-letter--blank');
      //
    } else if (options && options.draggable) {
      this.classes.push('flh5p-letter--drag');
    } else if (!letter) {
      this.classes.push('flh5p-letter--blank')
    }
    this._element = $('<div>', { class: this.classes.join(' ') });
    if (options && options.draggable) {
      this._element.html(letter);
      this._element.draggable({
        revert: 'invalid'
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
}

export default Letter;
