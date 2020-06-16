import './word.scss';
import { H5PData } from '../main';
import { shuffleArray } from '../helpers';
import Letter from '../letter/letter';
declare var H5P: any;
const $ = H5P.jQuery;

// Class that manages and creates the markup for one word in the game
export default class Word {
  $wrapper: JQuery;
  $wordcontainer: JQuery;
  _element: any;
  classes = ['flh5p-word'];
  _visibleClass = 'flh5p-word--visible';
  config: {
    word: string,
    image?: { path: string, height: number, width: number, mime: string },
    text?: string
  };
  points: number;
  maxPoints: number;
  isComplete = false;
  correctSpelling: string[];
  dropZones: Letter[] = [];

  constructor(
    config: {
      word: string,
      image?: { path: string, height: number, width: number, mime: string },
      text?: string
    },
    $wrapper: JQuery
  ) {
    this.config = config;
    this.$wrapper = $wrapper;
    this.correctSpelling = [...this.config.word.split('')];
    this.render();
  }

  render() {
    const { word, image, text } = this.config;
    const $wordcontainer = $('<div>', {
      'class': this.classes.join(' ')
    });

    this.$wordcontainer = $wordcontainer;

    const $dropcontainer = $('<div>', {
      'class': 'flh5p-letters__dropzone'
    });

    // Add image if available
    if (image && image.path) {
      const $imagewrapper = $('<div>', { 'class': 'flh5p-word__image' });
      $imagewrapper.append($('<img>', { 'class': '', 'src': H5P.getPath(image.path, H5PData.id) }));
      $wordcontainer.append($imagewrapper);
    }
    // Add text clue if available
    if (text) {
      $wordcontainer.append('<p class="flh5p-word__textclue">' + text + '</p>');
    }

    // Split word into individual letters
    word.split('').map((letter: string) => {
      this.dropZones.push(new Letter(letter, $dropcontainer, { droppable: true }));
    });

    // Randomise order
    const randomised = shuffleArray([...word.split('')]);

    const $draggablecontainer = $('<div>', {
      'class': 'flh5p-letters__dragzone'
    });

    randomised.map((letter: string) => {
      if (letter !== ' ') {
        new Letter(letter, $draggablecontainer, { draggable: true });
      }
    })

    $wordcontainer.append($dropcontainer);
    $wordcontainer.append($draggablecontainer);
    this.$wrapper.append($wordcontainer);
  }

  calculateScore() {
    const providedSpelling = this.dropZones.map((drop: Letter) => drop.getText());
    let score = 0;
    this.correctSpelling.map((letter: string, index: number) => {
      if (letter === providedSpelling[index] && letter !== ' ') {
        score = score + 1;
      }
    });
    this.points = score;
    return score;
  }

  reset() {
    this.isComplete = false;
    this.points = 0;
  }

  show() {
    if (!this.$wordcontainer.hasClass(this._visibleClass)) {
      this.$wordcontainer.addClass(this._visibleClass);
    }
  }

  hide() {
    this.$wordcontainer.removeClass(this._visibleClass);
  }
}
