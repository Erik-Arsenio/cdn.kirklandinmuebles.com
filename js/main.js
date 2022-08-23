(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    // new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     margin: 24,
    //     dots: false,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         992:{
    //             items:2
    //         }
    //     }
    // });

    //Set some values on load add/edit modal
	$(".add-edit-modal").on('show.bs.modal', function (event) {
		//Globals
		let modal = $(this);
		let button = $(event.relatedTarget);
		let uriLoadForm = button.data('uri-load-form');
		let elementId = button.data('element-id') != undefined ? button.data('element-id') : null;
		let modalTitle = button.data('modal-title') != undefined ? button.data('modal-title') : null;
		modal.find(".form-content").empty();
		modal.find('.modal-title').empty().html(modalTitle);

		//Load corresponding form
		$.ajax({
			url: uriLoadForm + '/' + elementId,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			}
		})
			.done(function (html) {
				modal.find(".form-content").append(html);
			});
	});
    
})(jQuery);