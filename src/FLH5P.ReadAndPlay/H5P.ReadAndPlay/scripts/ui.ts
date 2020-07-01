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
    class: 'flh5p-button flh5p-button--home',
    title: 'Go back to home',
    click: () => {
      if (H5P.isFullscreen) {
        H5P.exitFullScreen();
      } else {
        console.log(window);
      }
    }
  });
  // Append all elements to wrapper
  $wrapper.append($exitBtn);
  $wrapper.append($appTitle);

  $appwrapper.append($wrapper);
}

export function createAppNavigation($appwrapper: JQuery, steps: []) {
  // console.log(steps);

  const $wrapper = $('<div>', {
    class: 'flh5p-navigation',
  });

  $appwrapper.append($wrapper);
}

export function createContentWrapper($appwrapper: JQuery) {

}
