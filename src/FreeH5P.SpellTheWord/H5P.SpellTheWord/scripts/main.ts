import Letter from './letter/letter';
import { shuffleArray } from './helpers';
declare var H5P: any;
// declare var H5PIntegration: any;
const $ = H5P.jQuery;

export default class SpellTheWord extends H5P.EventDispatcher {
  letters: Letter[] = [];
  randomised: Letter[] = [];
  correctSpelling: string[] = [];
  id: string;
  config: any;
  // For H5P integration
  isCompleted = false;

  scoreBar: any;
  $wordsWrapper: any;
  // @constructor extends (H5P.EventDispatcher as { new(): any; })
  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
    // super();
    this.config = $.extend(true, {}, {
      greeting: 'Hello world!',
      image: null
    }, config);
    this.id = contentId;
    console.log(this.config);
  }

  attach = ($wrapper: JQuery) => {
    // Create basic markup
    $wrapper.addClass('flh5p-app');
    // Letters wrapper
    console.log(this.config.words);
    this.$wordsWrapper = $('<div>', {
      'class': 'flh5p-words'
    });
    this.$headerElement = $('<div>', { 'class': 'flh5p-header' });
    this.$bottomBar = $('<div>', { 'class': 'flh5p-footer' });
    this.setupWords(this.config.words);
    this.createBottomBar();
    // Add the header for the game
    $wrapper.append(this.$headerElement);
    // Add wrapper for words
    $wrapper.append(this.$wordsWrapper);
    // Add bottom bar
    $wrapper.append(this.$bottomBar);
  }

  createBottomBar = () => {
    console.log('Yo');
    const self = this;
    const $scorebar = $('<div>', {
      'class': 'flh5p-scorebar'
    });

    const $scorebtn = H5P.JoubelUI.createButton({
      title: 'Get score',
      click: function () {
        self.getScore();
        self.isCompleted = true;
      }
    });
    $scorebtn.html('Score');

    const $resetbtn = H5P.JoubelUI.createButton({
      title: 'Reset game',
      click: function() {
        self.resetTask();
      }
    });
    $resetbtn.html('Reset');

    this.scoreBar = H5P.JoubelUI.createScoreBar(this.config.words.length, 'Letters right', 'helpText', 'scoreExplanationButtonLabel');
    this.scoreBar.appendTo($scorebar);
    this.$bottomBar.append($scorebar);

    this.$bottomBar.append($scorebtn);
    this.$bottomBar.append($resetbtn);
  }

  // Generate basic markup for main containers
  setupWords = (words: []) => {
    // Container for all the words
    const $wrapper = this.$wordsWrapper;
    words.map((word: any) => {
      this.generateWord($wrapper, word);
    });
  }

  // Generate markup for one word in our game
  generateWord = ($wrapper: JQuery, word: {
    word: string,
    image?: { path: string, height: number, width: number, mime: string },
    text?: string
  }) => {
    const $wordcontainer = $('<div>', {
      'class': 'flh5p-word'
    });

    const $dropcontainer = $('<div>', {
      'class': 'flh5p-letters__dropzone'
    });

    // Add image if available
    if (word.image && word.image.path) {
      const $imagewrapper = $('<div>', { 'class': 'flh5p-word__image' });
      $imagewrapper.append($('<img>', { 'class': '', 'src': H5P.getPath(word.image.path, this.id) }));
      $wordcontainer.append($imagewrapper);
    }
    // Add text clue if available
    if (word.text) {
      $wordcontainer.append('<p class="flh5p-word__textclue">' + word.text + '</p>');
    }

    // Split word into individual letters
    word.word.split('').map((letter: string) => {
      new Letter(letter, $dropcontainer, { droppable: true });
    });

    // Randomise order
    const randomised = shuffleArray([...word.word.split('')]);

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
    $wrapper.append($wordcontainer);
  }

  resetAll = () => {
    this.scoreBar.setScore(0);
    this.$lettersWrapper.html('');
    console.log(this.$lettersWrapper);
    const letters = this.config.word.split('');
    this.generateBlocks(this.$lettersWrapper, letters, shuffleArray(letters));
  }

  // Methods to meet contract for implenting with H5P
  getAnswerGiven = () => {
    return this.isCompleted;
  }

  getScore = () => {
    const dropped = $('.flh5p-letter--drop');
    // console.log(dropped);
    let totalScore = 0;
    let maxScore = this.correctSpelling.length;
    $.each(dropped, (i: any, val: any) => {
      const indexLetter = $(val).text();
      if (indexLetter) {
        // console.log(indexLetter);
        // console.log(this.correctSpelling[i]);
        if (indexLetter === this.correctSpelling[i]) {
          totalScore = totalScore + 1;
        }
      }
    })
    this.scoreBar.setScore(totalScore);
    return totalScore;
  }

  getMaxScore = () => {
    return 9;
  }

  showSolutions = () => {
    console.log('show showSolutions');
  }

  resetTask = () => {
    console.log('Reset los el taskos');
    this.resetAll();
  }

  getXAPIData() {
    console.log('getXAPIData');
  }

  /*
  setTimeout(() => {
    this.isCompleted = true;
    console.log(H5P);
    var $scorebar = $('<div>', {
      'class': ''
    });

    let  scoreBar = H5P.JoubelUI.createScoreBar(4, 'scoreBarLabel', 'helpText', 'scoreExplanationButtonLabel');

    scoreBar.appendTo($scorebar);
    $wrapper.append($scorebar);
  }, 2000);
  */
}
