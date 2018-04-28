/*
        Spectral by HTML5 UP
        html5up.net | @n33co
        Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  skel
    .breakpoints({
      xlarge: '(max-width: 1680px)',
      large:  '(max-width: 1280px)',
      medium: '(max-width: 980px)',
      small:  '(max-width: 736px)',
      xsmall: '(max-width: 480px)'
    });

  $(function() {

    var $window = $(window),
      $body = $('body'),
      $wrapper = $('#page-wrapper'),
      $banner = $('#banner'),
      $header = $('#header');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Mobile?
    if (skel.vars.mobile)
      $body.addClass('is-mobile');
    else
      skel
        .on('-medium !medium', function() {
          $body.removeClass('is-mobile');
        })
        .on('+medium', function() {
          $body.addClass('is-mobile');
        });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function() {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });

    // Scrolly.
    $('.scrolly')
      .scrolly({
        speed: 1500,
        offset: $header.outerHeight()
      });

    // Menu.
    $('#menu')
      .append('<a href="#menu" class="close"></a>')
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: $body,
        visibleClass: 'is-menu-visible'
      });

    // Header.
    if (skel.vars.IEVersion < 9)
      $header.removeClass('alt');

    if ($banner.length > 0
      &&      $header.hasClass('alt')) {

      $window.on('resize', function() { $window.trigger('scroll'); });

      $banner.scrollex({
        bottom:         $header.outerHeight() + 1,
        terminate:      function() { $header.removeClass('alt'); },
        enter:          function() { $header.addClass('alt'); },
        leave:          function() { $header.removeClass('alt'); }
      });

    }

  });

  // Newsletter subscription
  if ($(document).find("title").text() !== 'Portfolio' && $(document).find('title').text() !== 'My Everyday Articles') {
    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).outerHeight() + elementTop;
      var viewportTop = $(window).scrollTop();
      var viewportBottom = $(window).height() + viewportTop;
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    let alreadyDone = false;
    $(window).on('scroll', function() {
      const input = $('#mc_embed_signup_scroll');
      if (input.isInViewport() && !alreadyDone) {
        alreadyDone = true;
        input.css('transition', 'all .3s').delay(500).queue((next) => {
          input.addClass('boxPopup');
          next();
        })
      }
    })
  }

})(jQuery);

(function($){
  const works = document.querySelectorAll('.project');
  const body = document.body;
  const cross = document.getElementById('crossButton');
  const header = document.getElementById('header');

  cross.addEventListener('click', () => {
    let work = document.querySelector('.project.visible');
    work.classList.remove('visible');
    cross.classList.remove('visible');
    window.setTimeout(() => {
      work.classList.add('unvisible');
      body.classList.remove('stop');
    }, 850);
  });

  for (let work of works) {
    work.addEventListener('click', (e) => {
      if (work.classList.contains('visible')) {
        return;
      }
      for (let _work of works) {
        $('html, body').animate({
          scrollTop: work.getBoundingClientRect().top - body.getBoundingClientRect().top - 60 + 'px',
        },
        400,
          () => {
            console.log("animate");
          });
        if (_work.id !== work.id) {
          _work.classList.add('unvisible');
        }
        else {
          _work.classList.remove('unvisible');
        }
      }

      window.setTimeout(() => {
        work.classList.add('visible');
        body.classList.add('stop');
        cross.classList.add('visible');
        console.log("timeout");
      }, 400);
    });
  }
})(jQuery);
