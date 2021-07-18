; (function () {

  const section = $("section");
  const maincontent = $(".maincontent");
  let counterSection = 0;
  const counterSectionMin = 0;
  const counterSectionMax = section.length - 1;

  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const isMobile = mobileDetect.mobile();

  let inScroll = true;



  const scroll = numSection => {


    const fixedMenu = $(".fixed-menu");
    const hamburger = $(".hamburger");


    // fixedMenu.find(".fixed-menu__link").eq(numSection).closest(".fixed-menu__item").addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

    if (inScroll) {
      inScroll = false;
      const position = numSection * -100;

      maincontent.css({
        transform: `translateY(${position}%)`
      });

      setTimeout(() => {
        inScroll = true;


        const currentSection = section.eq(numSection);
        const menuTheme = currentSection.attr("data-menu-theme");


        if (menuTheme === "gray") {

          fixedMenu.addClass("fixed-menu--theme-gray");

        } else {

          fixedMenu.removeClass("fixed-menu--theme-gray");
        }

        if (menuTheme === "gray") {

          hamburger.addClass("hamburger--theme-gray");

        } else {

          hamburger.removeClass("hamburger--theme-gray");

        }

        fixedMenu.find(".fixed-menu__link").eq(numSection).closest(".fixed-menu__item").addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

      }, 1300);
    };
  }

  $(window).on('wheel', e => {
    const delta = e.originalEvent.deltaY;
    // next
    if (delta > 0 && counterSection !== counterSectionMax && inScroll === true) {
      counterSection++;

      scroll(counterSection);
    }
    //back
    if (delta < 0 && counterSection !== counterSectionMin && inScroll === true) {
      counterSection--;

      scroll(counterSection);
    }
  });

  $(window).on('keydown', e => {

    const tagName = e.target.tagName.toLowerCase();
    const key = e.keyCode;

    if (tagName !== "input" && tagName !== "textarea") {
      // next
      if (key == 40 && counterSection !== counterSectionMax && inScroll === true) {
        counterSection++;

        scroll(counterSection);
      }
      //back
      if (key === 38 && counterSection !== counterSectionMin && inScroll === true) {
        counterSection--;

        scroll(counterSection);
      };
    };
  });



  $("[data-scroll]").on("click", e => {
    e.preventDefault();


    const link = $(e.currentTarget);
    const target = $(link).attr("data-scroll");
    const section = $(`[data-section = ${target}]`);

    counterSection = section.index();
    scroll(counterSection);


  });

  console.log(isMobile);

  if (isMobile) {

    $(".wrapper").on('touchmove', e => {
      e.preventDefault();
    })

    console.log(isMobile);

    $("body").swipe({
      swipe: function (event, direction) {

        console.log(direction);

        let scrollDirection = "";

        if (direction === "up" && counterSection !== counterSectionMax && inScroll === true) {
          counterSection++;
          scroll(counterSection);
        }
        if (direction === "down" && counterSection !== counterSectionMin && inScroll === true) {
          counterSection--;
          scroll(counterSection);
        }
      }
    });
  };
})()