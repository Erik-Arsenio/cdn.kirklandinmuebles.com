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

    // Set some values on load delete modal
	$(".delete-modal").on('show.bs.modal', function (event) {
		//Globals
		let modal = $(this);
		let button = $(event.relatedTarget);
		let elementName = button.data('element-name') != undefined ? button.data('element-name') : null;
		let elementId = button.data('element-id') != undefined ? button.data('element-id') : null;
		let statusId = button.data('status-id') != undefined ? button.data('status-id') : null;
		let modalTitle = button.data('modal-title') != undefined ? button.data('modal-title') : null;
        let actionName = button.data('menu-action');
        $('#buttom_name').empty().html(actionName);
        $('#action_name').empty().html(actionName);
		modal.find(".form-content").empty();
		modal.find('.modal-title').empty().html(modalTitle);
        if (statusId == 1) {
            $('.action-unable').addClass('visible');
        } else {
            $('#buttom_name').removeClass('btn-danger').addClass('btn-success');
            $('.action-unable').addClass('invisible');
        }
        $('#project_name').text(elementName);
        $("#status_id").val(statusId);
        $("#project_id").val(elementId);
	});

    //
	$(".form-delete").submit(function (event) {
		//Globals
		event.preventDefault();
        let elementId = $("#project_id").val();
        let statusId = $("#status_id").val();
        let $formPost ={
            project_id :  elementId,
            status_id : statusId
        };
		let uriSubmit = $(this).attr('action');
        let modal = $(this).closest('.modal');
        
		$.post(uriSubmit, $formPost)
            .done(function (data) {
                // $('.modal').modal('hide');
				if (data == 0) {
                    $('.modal').modal('hide');
					location.reload();
				}
				else {
					modal.find('.content').append(data);
				}
			});
	});



    // Activate use selectPicker
    function selectPicker() {
        $('.selectpicker').selectpicker();
        $(".bootstrap-select").on('click', function (event) {
            console.log('Click');
            $('.selectpicker').selectpicker('render');
        });
    };

    let urlNow = window.location;
    if (!urlNow.pathname.search('investments') ) {
        selectPicker();        
    }

    //Run events after ajax finishes
	$(document).ajaxComplete(function () {
		selectLinked();
        selectPicker();
	});

    //Populated a target select based on a select controller
    function selectLinked() {
        $("select.select-linked").on("change", function (e) {
            //Globals
            e.stopImmediatePropagation();
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
                        $(selectTarget).empty().append(data).prop('disabled', false).selectpicker('refresh');
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
