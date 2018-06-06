

// hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-icon')
    const przelaczHamburger = function() {
      hamburger.classList.toggle('hamburger-open');
    }
    hamburger.addEventListener('click', przelaczHamburger)
  })

  // menu z hamburgera
  document.addEventListener('DOMContentLoaded',function() {
    const hamburgerMenu = document.querySelector('.hamburger-icon');
    const label = document.querySelector('.topbar_menu-lista');

    const Message = function(){
      label.classList.toggle('open');
      // tu przyjmuje klase open okreslona w css
    }
    hamburgerMenu.addEventListener('click', Message)
  })


  // // zmiana rozmiaru menu przy scrollu
  // const menu = function() {
  //    if(window.pageYOffset > 650) {
  //      document.querySelector('.topbar').classList.add('topbar-scroll');
  //    } else {
  //      document.querySelector('.topbar').classList.remove('topbar-scroll')
  //     }
  //  }
  //  document.addEventListener('scroll', () => menu())


   // sticky navbar
   window.onscroll = function() {myFunction()};

    var topbar = document.querySelector('.topbar');
    var sticky = topbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        topbar.classList.add('sticky')
      } else {
        topbar.classList.remove('sticky');
      }
    }

     //gładkie przewijanie

     $(document).ready(function() {
      $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      });
    });
    //koniec gładkiego przewijania

  // wjezdzajacy cytat

  const ekran1 = document.querySelector('.portfolio-quote')

  const showH1 = function() {
    if (window.scrollY > ekran1.offsetTop + ekran1.offsetHeight * 1.5 - window.innerHeight) {
      ekran1.classList.add('hide');
    } else if (window.scrollY > ekran1.offsetTop + ekran1.offsetHeight / 2 - window.innerHeight) {
      ekran1.classList.remove('hide');

    } else if (window.scrollY < 100) {
      ekran1.classList.add('hide');
    };
  }
  window.addEventListener('scroll', showH1)

// koniec wjezdzajacy cytat
