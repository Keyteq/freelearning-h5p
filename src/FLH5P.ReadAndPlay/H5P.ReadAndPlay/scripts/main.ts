declare var H5P: any;
declare var H5PIntegration: any;
const $ = H5P.jQuery;

import { createAppHeader, createAppNavigation } from './ui';

export default class ReadAndPlay extends H5P.EventDispatcher {
  $wrapper: JQuery;
  config: any;

  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
    this.config = $.extend(true, {}, {}, config);
    this.id = contentId;
    this.contentData = contentData;
    // console.log(H5PIntegration);
    // console.log(contentData);
  }

  attach = ($wrapper: JQuery) => {
    console.log(this.config);
    $wrapper.addClass('flh5p-app');
    this.$wrapper = $wrapper;
    createAppHeader($wrapper, { title: this.contentData.metadata.title });
    createAppNavigation($wrapper, []);
  }

  loadFirstStep = () => {
    console.log('load first step');
    const step = this.config.steps[0];
  }
}
