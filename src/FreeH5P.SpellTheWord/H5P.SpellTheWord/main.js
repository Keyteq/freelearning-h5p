var H5P = H5P || {};

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

H5P.SpellTheWord = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      greeting: 'Hello world!',
      image: null
    }, options);
    // Keep provided id.
    this.id = id;
    if (this.options.task) {
      console.log('initialize task');
      // Initialize task
      this.task = H5P.newRunnable(this.options.task, this.id);
      // Trigger resize events on the task:
      this.on('resize', function (event) {
        this.task.trigger('resize', event);
      });
    }

    console.log(this);
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    console.log($.fn.jquery);
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("freeh5p-spelltheword");
    // Add image if provided.
    if (this.options.image && this.options.image.path) {
      $container.append('<img class="greeting-image" src="' + H5P.getPath(this.options.image.path, this.id) + '">');
    }
    // Add greeting text.
    $container.append('<div class="greeting-text">' + this.options.greeting + '</div>');
    var lettersHTML = '<div class="letter-boxes">'
    var letters = this.options.word.split('');
    for (var i = 0; i < letters.length; i = i + 1) {
      var boxClass = 'letter-box';
      // console.log(letters[i]);
      if (letters[i] == ' ') {
        boxClass += ' letter-box--blank';
        // console.log(boxClass);
      }
      lettersHTML += '<div class="' + boxClass + '"></div>';
    }
    // console.log(letters);
    lettersHTML += '</div>';
    $container.append(lettersHTML);
    // Generate the draggable letters
    var dragLettersHTML = '<div class="letter-boxes">';
    var randomisedOrder = shuffleArray(letters);
    for (var i = 0; i < randomisedOrder.length; i = i + 1) {
      var letter = randomisedOrder[i];
      console.log(letter);
      dragLettersHTML += '<div class="letter-box letter-box--drag">' + letter + '</div>';
    }
    dragLettersHTML += '</div>';
    $container.append(dragLettersHTML);

    H5P.jQuery('.letter-box--drag').draggable();
    console.log(H5P.jQuery);
  };

  return C;
})(H5P.jQuery);
