(function ($) {
    "use strict";
    selectLinked();

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

    //Capture add/edit form submit event and replace it by an AJAX call
	$(".form-add-edit").submit(function (event) {
		//Globals
		event.preventDefault();
		let uriSubmit = $(this).attr('action');
		let modal = $(this).closest('.modal');

		$.post(uriSubmit, $(this).serialize())
			.done(function (data) {
				if (data == 0) {
					location.reload();
				}
				else {
					modal.find('.form-content').empty().append(data);
				}
			});
	});

    //Run events after ajax finishes
	$(document).ajaxComplete(function () {
		selectLinked();
	});

    //Populated a target select based on a select controller
    function selectLinked() {
        $("select.select-linked").on("change", function () {
            //Globals
            let selectVal = $(this).val();
            let selectTarget = $(this).attr('data-target');
            let selectUri = $(this).attr('data-uri');

            //Load the content and display it
            if (selectTarget && selectUri) {
                $.ajax({
                    url: selectUri + "/" + selectVal,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    dataType: "html"
                }).done(function (data) {
                    if (data !== '') {
                        $(selectTarget).empty().append(data).prop('disabled', false);
                    }
                    else {
                        $(selectTarget).empty().prop('disabled', true);
                    }
                });
            }
        });
    }
})(jQuery);

//Show toast message window if proceed
var toastMsg = document.getElementById('msg-toast');
if (toastMsg != null) {
	var toast = new bootstrap.Toast(toastMsg);
	toast.show();
}