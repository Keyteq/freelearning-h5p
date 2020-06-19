declare var H5P: any;
const $ = H5P.jQuery;

export function createAppHeader(
  $appwrapper: JQuery,
  content: {
    icon?: any,
    title?: string,
  }
) {
  const $wrapper = $('<div>', {
    class: 'flh5p-app__header',
  });

  const $appTitle = $('<h2>', {
    html: content.title || 'App Title',
  });

  const $exitBtn = $('<button>', {
    class: 'fl-h5p-button fl-h5p-button--transparent',
    html: 'Exit',
    title: 'Exit'
  });
  console.log(content);
  // Append all elements to wrapper
  $wrapper.append($appTitle);
  $wrapper.append($exitBtn);

  $appwrapper.append($wrapper);
}

export function createAppNavigation($appwrapper: JQuery, steps: []) {
  console.log(steps);

  const $wrapper = $('<div>', {
    class: 'flh5p-navigation',
  });

  $appwrapper.append($wrapper);
}

export function createContentWrapper($appwrapper: JQuery) {

}
