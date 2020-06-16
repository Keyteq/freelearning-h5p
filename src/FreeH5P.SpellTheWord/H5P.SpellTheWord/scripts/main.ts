import Word from './word/word';
import Letter from './letter/letter';
declare var H5P: any;
// declare var H5PIntegration: any;
const $ = H5P.jQuery;

export const H5PData = { id: '' };

export default class SpellTheWord extends H5P.EventDispatcher {
  letters: Letter[] = [];
  randomised: Letter[] = [];
  correctSpelling: string[] = [];
  id: string;
  config: any;
  renderedWords: Word[] = [];
  activeWordIndex: number;
  // For H5P integration
  isCompleted = false;

  scoreBar: any;
  $wrapper: JQuery;
  $wordsWrapper: JQuery;
  $prevButton: JQuery;
  $nextButton: JQuery;
  // @constructor extends (H5P.EventDispatcher as { new(): any; })
  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
    // super();
    this.config = $.extend(true, {}, {
      greeting: 'Hello world!',
      image: null
    }, config);
    this.id = contentId;
    H5PData.id = contentId;
  }

  attach = ($wrapper: JQuery) => {
    this.$wrapper = $wrapper;
    // Create basic markup
    $wrapper.addClass('flh5p-app');
    // Letters wrapper
    this.$wordsWrapper = $('<div>', {
      'class': 'flh5p-words'
    });
    this.$headerElement = $('<div>', { 'class': 'flh5p-header' });
    this.$bottomBar = $('<div>', { 'class': 'flh5p-footer' });
    this.setupWords(this.config.words);
    this.createBottomBar();
    this.createNavigation();
    // Add the header for the game
    $wrapper.append(this.$headerElement);
    // Add wrapper for words
    $wrapper.append(this.$wordsWrapper);
    // Add bottom bar
    $wrapper.append(this.$bottomBar);
  }

  createBottomBar = () => {
    const self = this;
    const $scorebar = $('<div>', {
      'class': 'flh5p-scorebar'
    });

    const $scorebtn = H5P.JoubelUI.createButton({
      title: 'Get score',
      html: 'Score',
      click: function () {
        self.calculateScore();
      }
    });

    const $resetbtn = H5P.JoubelUI.createButton({
      title: 'Reset game',
      html: 'Reset',
      click: function() {
        self.resetTask();
      }
    });

    const words = [...this.config.words];
    const maxScore = words.map((data: any) => data.word.split('').filter((letter: string) => letter !== ' ').length);
    this.scoreBar = H5P.JoubelUI.createScoreBar(maxScore.reduce((a: number, b: number) => a + b, 0), 'Letters right', 'helpText', 'scoreExplanationButtonLabel');
    this.scoreBar.appendTo($scorebar);
    this.$bottomBar.append($scorebar);

    this.$bottomBar.append($scorebtn);
    this.$bottomBar.append($resetbtn);
  }

  createNavigation = () => {
    const self = this;
    const $wrapper = this.$wrapper;
    /* const $prevButton = $('<button>', {
      html: 'Previous word',
      title: 'Previous word',
      class: 'flh5p-nav-button flh5p-nav-button--prev',
      click: () => {
        console.log('Previous');
        const index = self.activeWordIndex;
        const words = self.renderedWords;
        if (index - 1 > -1) {
          words[index].hide();
          words[index - 1].show();
          self.activeWordIndex = index - 1;
        }
      }
    }); */
    const $prevButton = H5P.JoubelUI.createButton({
      html: 'Previous word',
      title: 'Previous word',
      click: () => {
        const index = self.activeWordIndex;
        const words = self.renderedWords;
        if (index - 1 > -1) {
          words[index].hide();
          words[index - 1].show();
          self.activeWordIndex = index - 1;
        }
      }
    });

    const $nextButton = H5P.JoubelUI.createButton({
      html: 'Next word',
      title: 'Next word',
      click: () => {
        const index = self.activeWordIndex;
        const words = self.renderedWords;
        if (words[index + 1]) {
          words[index].hide();
          words[index + 1].show();
          self.activeWordIndex = index + 1;
          // Update some state on the buttons
          if (!words[index + 2]) {
            console.log('Disable ', this);
          }
        }
      }
    });
    /* const $nextButton = $('<button>', {
      html: 'Next word',
      title: 'Next word',
      class: 'flh5p-nav-button flh5p-nav-button--next',
      click: () => {
        console.log('Next');
        const index = self.activeWordIndex;
        const words = self.renderedWords;
        if (words[index + 1]) {
          words[index].hide();
          words[index + 1].show();
          self.activeWordIndex = index + 1;
          // Update some state on the buttons
          if (!words[index + 2]) {
            console.log('Disable ', this);
          }
        }
      }
    }); */

    $wrapper.append($prevButton);
    $wrapper.append($nextButton);
  }

  // Generate basic markup for main containers
  setupWords = (words: []) => {
    // Container for all the words
    const $wrapper = this.$wordsWrapper;
    words.map((word: any) => {
      this.renderedWords.push(new Word(word, $wrapper));
    });
    // Show first word
    this.renderedWords[0].show();
    this.activeWordIndex = 0;
  }

  resetAll = () => {
    // Reset all rendered words
    this.renderedWords.map((word: Word) => word.reset());
    this.scoreBar.setScore(0);
    this.activeWordIndex = 0;
  }

  // Method for calculating score of current game instance
  calculateScore = () => {
    // Calculate score for all words
    const scores = this.renderedWords.map((word: Word) => word.calculateScore());
    const totalScore = scores.reduce((a, b) => a + b, 0);
    this.points = totalScore;
    this.scoreBar.setScore(totalScore);
  }

  // Methods to meet contract for implenting with H5P
  getAnswerGiven = () => {
    return this.isCompleted;
  }

  getScore = () => {
    return this.points;
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
