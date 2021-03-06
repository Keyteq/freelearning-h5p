import './word.scss';
import { H5PData } from '../main';
import { shuffleArray } from '../helpers';
// import Letter from '../letter/letter';
import Draggable from '../draggable/draggable';
import Droppable from '../droppable/droppable';
declare var H5P: any;
const $ = H5P.jQuery;

// Class that manages and creates the markup for one word in the game
export default class Word extends H5P.EventDispatcher {
  $wrapper: JQuery;
  $wordcontainer: JQuery;
  $scorebarWrapper: JQuery;
  $scoreBar: any;
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
  dropZones: Droppable[] = [];
  draggableLetters: Draggable[] = [];
  providedSpelling: string[] = [];

  $scorebutton: JQuery;
  $resetbutton: JQuery;

  constructor(
    config: {
      word: string,
      image?: { path: string, height: number, width: number, mime: string },
      text?: string
    },
    $wrapper: JQuery
  ) {
    super();
    this.config = config;
    this.$wrapper = $wrapper;
    if (this.config && this.config.word) {
      this.correctSpelling = [...this.config.word.split('')];
    }
    this.render();
  }

  render() {
    const { word, image, text } = this.config;
    const self = this;
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
    word.split('').map((letter: string, index: number) => {
      // Add an empty space in the providedSpelling array
      this.providedSpelling.push('');
      const droppable = new Droppable(letter, $dropcontainer);
      droppable.on('dropped', (event: any) => {
        this.providedSpelling[index] = event.data.value;
      });
      this.dropZones.push(droppable);
      // this.dropZones.push(new Letter(letter, $dropcontainer, { droppable: true }));
    });

    // Randomise order
    const randomised = shuffleArray([...word.split('')]);

    const $draggablecontainer = $('<div>', {
      'class': 'flh5p-letters__dragzone'
    });

    randomised.map((letter: string) => {
      if (letter !== ' ') {
        const draggable = new Draggable(letter, $draggablecontainer);
        draggable.on('doubleclicked', (event: any) => {
          self.addLetterViaDblClick(event.data);
        });
        this.draggableLetters.push(draggable);
      }
    });

    // Create scorebar
    const $scorebar_wrapper = $('<div>', {
      'class': 'flh5p-scorebar flh5p-scorebar--hidden'
    });

    const maxPoints = 1;
    // const maxPoints = this.config && this.config.word ? this.config.word.split('').filter((letter) => letter !== ' ').length : 0;
    this.$scorebarWrapper = $scorebar_wrapper;
    this.$scoreBar = H5P.JoubelUI.createScoreBar(maxPoints, 'Letters right', 'helpText', 'scoreExplanationButtonLabel');
    this.$scoreBar.appendTo($scorebar_wrapper);

    const $buttonwrapper = $('<div>', { class: 'flh5p-buttons' });
    const $scorebtn = H5P.JoubelUI.createButton({
      title: 'Get score',
      html: 'Score',
      class: 'flh5p-button--score',
      click: function () {
        self.calculateScore();
      }
    });

    const $resetbtn = H5P.JoubelUI.createButton({
      title: 'Reset task',
      html: 'Reset',
      class: 'flh5p-button--reset',
      click: function () {
        self.reset();
        self.show();
      }
    });

    $resetbtn.hide();
    this.$buttonwrapper = $buttonwrapper;
    this.$scorebutton = $scorebtn;
    this.$resetbutton = $resetbtn;
    $scorebtn.appendTo($buttonwrapper);
    $resetbtn.appendTo($scorebar_wrapper);
    $wordcontainer.append($dropcontainer);
    $wordcontainer.append($draggablecontainer);
    $wordcontainer.append($buttonwrapper);
    $wordcontainer.append($scorebar_wrapper);
    this.$wrapper.append($wordcontainer);
  }

  addLetterViaDblClick(data: any) {
    let firstFreeDropzone = null;
    for (let i = 0; i < this.dropZones.length; i = i + 1) {
      const zone = this.dropZones[i];
      if (!zone.getText()) {
        firstFreeDropzone = zone;
        break;
      }
    }
    if (firstFreeDropzone) {
      firstFreeDropzone.$element.append(data.event.toElement);
      if (!firstFreeDropzone.$element.hasClass('contains-draggable')) {
        firstFreeDropzone.$element.addClass('contains-draggable');
      }
    }
  }

  calculateScore() {
    const providedSpelling = this.dropZones.map((drop: Droppable) => drop.getText());
    // Disable all drag
    this.draggableLetters.forEach((draggable: Draggable) => draggable.disable());
    let score = 0;
    this.correctSpelling.map((letter: string, index: number) => {
      if (letter === providedSpelling[index] && letter !== ' ') {
        score = score + 1;
        this.dropZones[index].isCorrect();
      } else {
        if (letter !== ' ') {
          this.dropZones[index].isWrong();
        }
      }
    });
    score = Math.floor(score / providedSpelling.length);
    this.points = score;
    this.$scoreBar.setScore(score);
    this.isComplete = true;
    this.$resetbutton.show();
    this.$scorebutton.hide();
    this.trigger('scored', { points: score  });
    this.toggleScorebar();

    return score;
  }

  reset() {
    this.$resetbutton.hide();
    this.$scorebutton.show();
    this.$wordcontainer.remove();
    this.dropZones = [];
    this.draggableLetters = [];
    this.providedSpelling = [];
    this.isComplete = false;
    this.points = 0;
    this.$scoreBar.setScore(0);
    this.toggleScorebar();
    this.render();
  }

  toggleScorebar() {
    if (this.isComplete) {
      this.$scorebarWrapper.removeClass('flh5p-scorebar--hidden');
    } else {
      this.$scorebarWrapper.addClass('flh5p-scorebar--hidden');
    }
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
