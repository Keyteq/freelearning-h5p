declare var H5P: any;
// declare var H5PIntegration: any;
const $ = H5P.jQuery;

export default class ReadAndPlay extends H5P.EventDispatcher {
  $wrapper: JQuery;

  constructor(config: any, contentId: string, contentData: any = {}) {
    super();
  }

  attach = ($wrapper: JQuery) => {
    console.log('Derp');
    this.$wrapper = $wrapper;
  }
}
