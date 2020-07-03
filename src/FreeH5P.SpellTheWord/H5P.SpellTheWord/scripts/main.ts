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
  $scorebarWrapper: JQuery;
  scoreBar: any;
  points = 0;
  $wrapper: JQuery;
  $wordsWrapper: JQuery;
  $prevButton: JQuery;
  $nextButton: JQuery;
  $processbar: any;
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
    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
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
    const $scorebarwrapper = $('<div>', {
      'class': 'flh5p-scorebar flh5p-scorebar--hidden'
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
      class: 'flh5p-button--reset',
      click: function() {
        self.resetTask();
      }
    });

    const words = [...this.config.words];
    const maxScore = words.length;
    this.maxScore = maxScore;
    this.scoreBar = H5P.JoubelUI.createScoreBar(maxScore, 'Letters right', 'helpText', 'scoreExplanationButtonLabel');
    this.scoreBar.appendTo($scorebarwrapper);
    this.$bottomBar.append($scorebarwrapper);
    $resetbtn.appendTo($scorebarwrapper);
    this.$scorebarWrapper = $scorebarwrapper;

    // this.$bottomBar.append($scorebtn);
    // this.$bottomBar.append($resetbtn);
  }

  createNavigation = () => {
    const self = this;
    const $wrapper = this.$wrapper;
    const $navWrapper = $('<div>', {
      class: 'flh5p-navigation',
    });

    const $prevButton = H5P.JoubelUI.createButton({
      html: 'Previous word',
      title: 'Previous word',
      class: 'flh5p-nav-button flh5p-nav-button--prev',
      click: () => self.goToPrevious(self),
    });

    const $nextButton = H5P.JoubelUI.createButton({
      html: self.renderedWords.length > 1 ? 'Next word' : 'Score',
      title: 'Next word',
      class: 'flh5p-nav-button flh5p-nav-button--next',
      click: () => self.goToNext(self),
    });

    const $processbar = H5P.JoubelUI.createProgressbar(this.config.words.length, {});

    this.$prevButton = $prevButton;
    this.$nextButton = $nextButton;
    this.$processbar = $processbar;

    this.$processbar.setProgress(1);

    $navWrapper.append($prevButton);
    $processbar.appendTo($navWrapper);
    $navWrapper.append($nextButton);
    $wrapper.append($navWrapper);
  }

  goToPrevious = (self: any) => {
    const index = self.activeWordIndex;
    const words = self.renderedWords;
    if (index - 1 > -1) {
      words[index].hide();
      words[index - 1].show();
      self.activeWordIndex = index - 1;
      self.$processbar.setProgress(index);

      if (self.activeWordIndex < self.renderedWords.length - 1) {
        self.$nextButton.html('Next');
        self.$nextButton.removeClass('flh5p-button--score');
      }
    }
  }

  goToNext = (self: any) => {
    const index = self.activeWordIndex;
    const words = self.renderedWords;
    if (words.length === 1 || index === words.length - 1) {
      self.calculateScore();
    } else if (words[index + 1]) {
      words[index].hide();
      words[index + 1].show();
      self.activeWordIndex = index + 1;
      self.$processbar.next();
      // Update some state on the buttons
      if (!words[index + 2]) {
        self.$nextButton.html('Score');
        self.$nextButton.addClass('flh5p-button--score');
      }
    }
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
    this.renderedWords[this.activeWordIndex].hide();
    this.renderedWords[0].show();
    this.isCompleted = false;
    this.scoreBar.setScore(0);
    this.activeWordIndex = 0;
    this.$processbar.setProgress(1);
    if (this.renderedWords.length !== 1) {
      this.$nextButton.html('Next');
      this.$nextButton.removeClass('flh5p-button--score');
    }
    this.toggleScorebar();
  }

  // Method for calculating score of current game instance
  calculateScore = () => {
    // console.log('calculateScore for all!');
    const points = this.renderedWords.map((word: Word) => {
      return word.calculateScore();
    });

    // console.log(points);
    // Calculate score for all words
    // const totalScore = scores.reduce((a, b) => a + b, 0);
    this.points = points.reduce((a, b) => a + b);
    this.scoreBar.setScore(this.points);
    this.isCompleted = true;
    this.trigger('scored', { points: this.points, maxPoints: this.maxScore });
    // Trigger XPI to save score
    // this.trigger('XAPIScored', 3, 4, 'completed');
    this.toggleScorebar();
  }

  toggleScorebar = () => {
    if (this.isCompleted) {
      this.$scorebarWrapper.removeClass('flh5p-scorebar--hidden');
    } else {
      this.$scorebarWrapper.addClass('flh5p-scorebar--hidden');
    }
  }

  // Methods to meet contract for implenting with H5P
  getAnswerGiven = () => {
    return this.isCompleted;
  }

  getScore = () => {
    return this.points;
  }

  getMaxScore = () => {
    return this.maxScore;
  }

  showSolutions = () => {
    console.log('show showSolutions');
  }

  resetTask = () => {
    this.resetAll();
  }

  getXAPIData = () => {
    console.log('getXAPIData');
  }
}
