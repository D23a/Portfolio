jQuery(document).ready(function( $ ) {

	// Menu settings
  var initgnMenu = new gnMenu(document.getElementById('gn-menu'));

  // Carousel
  $('.carousel').carousel({
    interval: 5500
  })

	// Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 30
        }, 1500, 'easeInOutExpo');
        initgnMenu._closeMenu();
      }
    }
  });

  // Navbar background on scroll
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $('.gn-menu-main').css('background', 'rgba(6,9,15,0.95)');
    } else {
      $('.gn-menu-main').css('background', 'rgba(6,9,15,0.85)');
    }
  });

  // Scroll reveal animation
  function revealOnScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    $('.animate-in').each(function() {
      var elementTop = $(this).offset().top;
      if (scrollTop + windowHeight - 80 > elementTop) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll', revealOnScroll);
  revealOnScroll();

  // Charts
  if($('#canvas').length) {

		var doughnutData = [{
        value: 70,
        color: "#38bdf8"
      },
      {
        value: 30,
        color: "rgba(255,255,255,0.06)"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas1').length) {
		var doughnutData = [{
				value: 90,
				color: "#818cf8"
			},
			{
				value: 10,
				color: "rgba(255,255,255,0.06)"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas2').length) {
		var doughnutData = [{
				value: 55,
				color: "#a78bfa"
			},
			{
				value: 45,
				color: "rgba(255,255,255,0.06)"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas3').length) {
		var doughnutData = [{
				value: 80,
				color: "#34d399"
			},
			{
				value: 20,
				color: "rgba(255,255,255,0.06)"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
	}

});
