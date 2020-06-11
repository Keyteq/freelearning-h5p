// import * as $ from 'jquery';
import utils from 'utils';
import Letter from './letter';
declare var H5P: any;
// declare var H5PIntegration: any;

const $ = H5P.jQuery;

export default class SpellTheWord extends (H5P.EventDispatcher as { new(): any; }) {
  letters: Letter[] = [];
  randomised: Letter[] = [];
  /* @constructor */
  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
    this.config = $.extend(true, {}, {
      greeting: 'Hello world!',
      image: null
    }, config);
    this.id = contentId;
  }

  attach = function($wrapper: JQuery) {
    $wrapper.get(0).classList.add('flh5p-app');
    $wrapper.get(0).appendChild(document.createElement('div'));
    // Get letters from type config
    const letters = this.config.word.split('');
    for (let i = 0; i < letters.length; i = i + 1) {
      this.letters.push(new Letter(letters[i], i));
    }
    console.log(utils);
    // this.randomised = shuffleArray(this.letters);
    console.log(this.letters);
    // console.log(this.randomised);
  }
}
