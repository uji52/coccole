;(function () {
  'use strict'

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf('iPad') != -1
  }

  var isiPhone = function () {
    return (
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    )
  }

  var fullHeight = function () {
    if (!isiPad() && !isiPhone()) {
      $('.js-fullheight').css('height', $(window).height())
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height())
      })
    }
  }

  var sliderMain = function () {
    $('#fh5co-home .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 5000,
    })

    $('#fh5co-home .flexslider .slides > li').css('height', $(window).height())
    $(window).resize(function () {
      $('#fh5co-home .flexslider .slides > li').css(
        'height',
        $(window).height()
      )
    })
  }

  var sliderSayings = function () {
    $('#fh5co-sayings .flexslider').flexslider({
      animation: 'slide',
      slideshowSpeed: 5000,
      directionNav: false,
      controlNav: true,
      smoothHeight: true,
      reverse: true,
    })
  }

  var offcanvasMenu = function () {
    try {
      const offcanvasDiv = document.createElement('div')
      offcanvasDiv.id = 'fh5co-offcanvas'

      const link = document.createElement('a')
      link.href = '#'
      link.className = 'js-fh5co-nav-toggle fh5co-nav-toggle'
      link.innerHTML = '<i></i>'

      document.body.prepend(link)
      document.body.prepend(offcanvasDiv)

      document
        .querySelectorAll(
          '.fh5co-main-nav .fh5co-menu-1 a, .fh5co-main-nav .fh5co-menu-2 a'
        )
        .forEach((element) => {
          offcanvasDiv.appendChild(element.cloneNode(true))
        })
    } catch (error) {
      console.error('Failed to initialize offcanvas menu:', error)
    }
  }

  var mainMenuSticky = function () {
    var sticky = $('.js-sticky')

    sticky.css('height', sticky.height())
    $(window).resize(function () {
      sticky.css('height', sticky.height())
    })

    var $section = $('.fh5co-main-nav')

    $section.waypoint(
      function (direction) {
        if (direction === 'down') {
          $section
            .css({
              position: 'fixed',
              top: 0,
              width: '100%',
              'z-index': 99999,
            })
            .addClass('fh5co-shadow')
        }
      },
      {
        offset: '0px',
      }
    )

    $('.js-sticky').waypoint(
      function (direction) {
        if (direction === 'up') {
          $section.attr('style', '').removeClass('fh5co-shadow')
        }
      },
      {
        offset: function () {
          return -$(this.element).height() + 69
        },
      }
    )
  }

  // Parallax
  var parallax = function () {
    try {
      if (typeof $.fn.stellar === 'function') {
        $(window).stellar()
      }
    } catch (error) {
      // Ignore legacy parallax initialization issues in this environment.
    }
  }

  // Burger Menu
  var burgerMenu = function () {
    const toggleButton = document.querySelector('.js-fh5co-nav-toggle')
    if (!toggleButton) {
      console.error('Failed to initialize burger menu: toggle button not found')
      return
    }

    toggleButton.addEventListener('click', function (event) {
      event.preventDefault()
      document.body.classList.toggle('fh5co-overflow')
      document.body.classList.toggle('offcanvas-visible')
      this.classList.toggle('active')
    })
  }

  var scrolledWindow = function () {
    $(window).scroll(function () {
      var scrollPos = $(this).scrollTop()

      $('#fh5co-home .fh5co-text').css({
        opacity: 1 - scrollPos / 300,
        'margin-top': -212 + scrollPos / 1,
      })

      $('#fh5co-home .flexslider .fh5co-overlay').css({
        opacity: 0.5 + scrollPos / 2000,
      })

      if (scrollPos > 300) {
        $('#fh5co-home .fh5co-text').css('display', 'none')
      } else {
        $('#fh5co-home .fh5co-text').css('display', 'block')
      }
    })

    $(window).resize(function () {
      if ($('body').hasClass('offcanvas-visible')) {
        try {
          document.body.classList.remove('offcanvas-visible')
          const toggleButton = document.querySelector('.js-fh5co-nav-toggle')
          if (toggleButton) {
            toggleButton.classList.remove('active')
          }
        } catch (error) {
          console.error('Failed to handle window resize:', error)
        }
      }
    })
  }

  var goToTop = function () {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $('html').offset().top,
        },
        500
      )

      return false
    })
  }

  // Page Nav
  var clickMenu = function () {
    var topVal = $(window).width() < 769 ? 0 : 58

    $(window).resize(function () {
      topVal = $(window).width() < 769 ? 0 : 58
    })
    $(
      '.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])'
    ).click(function (event) {
      var section = $(this).data('nav-section')

      if ($('div[data-section="' + section + '"]').length) {
        $('html, body').animate(
          {
            scrollTop:
              $('div[data-section="' + section + '"]').offset().top - topVal,
          },
          500
        )
      }

      event.preventDefault()

      // return false;
    })
  }

  // Reflect scrolling in navigation
  var navActive = function (section) {
    $(
      '.fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]'
    ).removeClass('active')
    $('.fh5co-main-nav, #fh5co-offcanvas')
      .find('a[data-nav-section="' + section + '"]')
      .addClass('active')
  }

  var navigationSection = function () {
    var $section = $('div[data-section]')

    $section.waypoint(
      function (direction) {
        if (direction === 'down') {
          navActive($(this.element).data('section'))
        }
      },
      {
        offset: '150px',
      }
    )

    $section.waypoint(
      function (direction) {
        if (direction === 'up') {
          navActive($(this.element).data('section'))
        }
      },
      {
        offset: function () {
          return -$(this.element).height() + 155
        },
      }
    )
  }

  // Animations
  var staggerAnimate = function ($scope, selector, className, startDelay) {
    setTimeout(function () {
      $scope.find(selector).each(function (k) {
        var el = $(this)
        setTimeout(function () {
          el.addClass(className)
        }, k * 200)
      })
    }, startDelay)
  }

  var sectionAnimate = function (sectionSelector, primaryClass, secondary) {
    var $section = $(sectionSelector)
    if ($section.length === 0) {
      return
    }

    $section.waypoint(
      function (direction) {
        if (direction !== 'down' || $(this.element).hasClass('animated')) {
          return
        }

        staggerAnimate($section, '.to-animate', primaryClass, 200)
        if (secondary) {
          staggerAnimate(
            $section,
            '.to-animate-2',
            secondary.className,
            secondary.delay
          )
        }

        $(this.element).addClass('animated')
      },
      { offset: '80%' }
    )
  }

  // Document on load.
  $(function () {
    fullHeight()
    sliderMain()
    sliderSayings()
    offcanvasMenu()
    mainMenuSticky()
    parallax()
    burgerMenu()
    scrolledWindow()
    clickMenu()
    navigationSection()
    goToTop()

    // Animations
    sectionAnimate('#fh5co-home', 'fadeInUp animated', null)
    sectionAnimate('#fh5co-about', 'fadeInUp animated', {
      className: 'fadeIn animated',
      delay: 200,
    })
    sectionAnimate('#fh5co-sayings', 'fadeInUp animated', null)
    sectionAnimate('#fh5co-featured', 'fadeInUp animated', {
      className: 'bounceIn animated',
      delay: 500,
    })
    sectionAnimate('#fh5co-type', 'fadeInUp animated', null)
    sectionAnimate('#fh5co-menus', 'fadeInUp animated', {
      className: 'fadeIn animated',
      delay: 500,
    })
    sectionAnimate('#fh5co-events', 'fadeIn animated', {
      className: 'fadeInUp animated',
      delay: 500,
    })
    sectionAnimate('#fh5co-contact', 'fadeIn animated', {
      className: 'fadeInUp animated',
      delay: 500,
    })
    sectionAnimate('#fh5co-footer', 'fadeIn animated', {
      className: 'fadeInUp animated',
      delay: 500,
    })
  })
})()
