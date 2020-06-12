// import * as $ from 'jquery';
import Letter from './letter/letter';
import { shuffleArray } from './helpers';
// import { } from './blocks';
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
  $lettersWrapper: any;
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
    this.$lettersWrapper = $('<div>', {
      'class': 'flh5p-app__letter-list'
    });
    // Get letters from type config
    const letters = this.config.word.split('');
    this.correctSpelling = [...letters];
    if (this.config.image && this.config.image.path) {
      $wrapper.append('<img class="flh5p-image" src="' + H5P.getPath(this.config.image.path, this.id) + '">');
    }
    // Add greeting text.
    $wrapper.append('<div class="greeting-text">' + this.config.greeting + '</div>');
    // for (let i = 0; i < letters.length; i = i + 1) {
      // this.letters.push(new Letter(letters[i]));
    // }
    this.randomised = shuffleArray(letters);
    this.generateBlocks(this.$lettersWrapper, letters, this.randomised);

    $wrapper.append(this.$lettersWrapper);
    const self = this;
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

    $wrapper.append($scorebtn);
    $wrapper.append($resetbtn);

    var $scorebar = $('<div>', {
      'class': ''
    });

    this.scoreBar = H5P.JoubelUI.createScoreBar(self.correctSpelling.length, 'Letters right', 'helpText', 'scoreExplanationButtonLabel');

    this.scoreBar.appendTo($scorebar);
    $wrapper.append($scorebar);
  }


  generateBlocks = ($wrapper: JQuery, word: string[], randomised: any[]) => {
    const $dropcontainer = $('<div>', {
      'class': 'flh5p-letters__dropzone'
    });

    word.map((letter: string) => {
      new Letter(letter, $dropcontainer, { droppable: true });
    });

    const $draggablecontainer = $('<div>', {
      'class': 'flh5p-letters__dragzone'
    });

    randomised.map((letter: string) => {
      if (letter !== ' ') {
        new Letter(letter, $draggablecontainer, { draggable: true });
      }
    })

    $wrapper.append($dropcontainer);
    $wrapper.append($draggablecontainer);
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
