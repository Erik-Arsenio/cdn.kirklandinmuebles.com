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


// document.getElementById("btnPause").addEventListener("click", function () {
//   carousel.pause();
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
        if (!urlNow.pathname.search('investments') ) {
            selectLinked();
            selectPicker();
        }
    
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

let deviceMovil= false;
let lang = $('#language').val();
// console.log('Lenguaje- ' + lang);
function detectmob() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
        // $('.className').popover('disable'); 
        deviceMovil= true;
        $('.mobile').removeClass('d-none');
        console.log("En Moviles");
        $('.about-img, .about-img-right').removeClass('p-3').removeClass('pe-0');
        $('.about-img, .about-img-right').removeClass('about-img').removeClass('about-img-right');
        $('.mouse-touche').empty().text('click ');
        // $('.about-img').removeClass('p-5').removeClass('pe-0');
        // ! Guardar deviceMovil en Input hide
    } else {
        $('.not_mobile').removeClass('d-none');
    }
}
detectmob();

$(document).ready(function(){
    // let urlNow = window.location;
    // if (!urlNow.pathname.search('investments') ) {

    //     let myCarouselElement = document.querySelector(".carousel");
    //     let carousel = new bootstrap.Carousel(myCarouselElement, {
    //     interval: 15000,
    //     });
    
    
    //     // $(".carousel-item img").on("click", function() {
    //     $(".carousel-control-prev , .carousel-control-next").on("click", function() {
    //         // Globals
    //         console.log($(this).closest('.carousel').attr('id'))
    //         // let btnId = $(this).parent().parent().parent().prop("id");
    //         // let btnId = $(this).closest("div").prop("id");
    //         let btnId = $(this).closest('.carousel').attr('id');
    //         myCarouselElement = document.querySelector("#" + btnId);
    //         carousel = new bootstrap.Carousel(myCarouselElement, {
    //             ride: false,
    //             // interval: 120000,
    //         });
    //         console.log(btnId);
    //     }); 
    // }
    // document.getElementById('btnSwitch').addEventListener('click',()=>{
    //     if ($("html").attr('data-bs-theme') == 'light') {
    //         $("html").attr('data-bs-theme',  "dark")
    //     }
    //     else {
    //         $("html").attr('data-bs-theme',  "light")
    //     }
    //     $("html").attr('lang');
    //     // .attr('data-bs-content', selectionContainer);
    //     console.log("Ïdioma- " + $("html").attr('lang'))
    //     console.log("Cambio de modo -" + $("html").attr('data-bs-theme'));
    // })


    
    let url = $('#image_site').contents()[0].baseURI;
    let array= url.split(/[//,/,?]/);
    // console.log(array);
    let investment = '';
    if (array[3] != '') {
        investment = array[4];
        // console.log('Desarrollo- ' + investment);
        $('#investment').val(investment)
        
    }
    let available_projects = [];

    function esNumerico(dato) {
        return !isNaN(parseFloat(dato)) && isFinite(dato);
    }
    
    function sumarContenidoArreglo(contenido) {
        if (!Array.isArray(contenido)) {
            return null;
        }
    
        let suma = 0;
    
        for (let i = 0; i < contenido.length; i++) {
            const elemento = contenido[i];
            
            if (esNumerico(elemento)) {
                suma += parseFloat(elemento);
            }
        }
    
        return suma;
    }

    if (investment == '' || investment == 'all'){
        //! Para saber cantidad disponible por desarrollo.
        let projects = ['all', 'lakuun', 'anthia', 'marela_life', 'marela_beach', 'marela_celestun', 'wayuum', 'mahal', 'sorenna', 'gran_telchac'];
        // console.log(projects);
        // let available_project = [];
   
        let uri = $('#data_url').val();
        let data = [];
        let uris = uri + '/available_lots.json';
            // console.log(uris);
            $.ajax({
                url: uris ,
                type : 'GET',
                dataType: "json"
            }).done(function (datas) {
                if (data !== null) {
                    //Globals
                    data = datas;
                    // console.log("Desarrollo- " + project);
                    // console.log(data.numbers_stage);
                    // console.log(data);
                    // console.log(data['anthia']);
                    
                    projects.forEach(project => {
                        // available_projects = available_projects.concat([data[project]]);

                        // console.log(available_projects);
                        // console.log(sumarContenidoArreglo(data.available));

                        if (sumarContenidoArreglo(data[project]) == 0) {
                            $('img[src*=' + project + ']').next().removeClass("d-none");
                        }
                    });
                }
            });
            
        $(".loader-container-img").addClass('d-none');
        $(".load-image").removeClass('d-none');

        
    }
    $(".btn-investments").on("click", function(e) {
        // Globals
        e.stopImmediatePropagation();
        if (investment == '' || investment == 'all'){
            let url_page = '';
            let url_card = $(this).attr('data-href');
            let url_img = $(this).closest('.carousel').attr('data-href');
            if (url_card !== undefined) {
                url_page = url_card;
            } else {
                url_page = url_img;
            }
            window.open(url_page, '_blank');
        }
        
    });

    let static_url = $('#static_url').val();
    let promo_Modal = {
        sisal : {
                images : `<div class="carousel-item active">
                            <img src="${static_url}img/promo/14.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${static_url}img/promo/15.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${static_url}img/promo/16.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${static_url}img/promo/17.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div> 
                        `,
                title : { es: "Playa Sisal", en: 'Sisal beach' },
                distance:  {
                    anthia: {
                        es: `<p class="fw-bold text-center">A solo 25 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 25 minutes from the development.</p>`
                    },
                    lakuun: {
                        es: `<p class="fw-bold text-center">A solo 66 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 66 minutes from the development.</p>`
                    },
                    wayuuum: {
                        es: `<p class="fw-bold text-center">A solo 66 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 66 minutes from the development.</p>`
                    },
                    mahal: {
                        es: `<p class="fw-bold text-center">A minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only minutes from the development.</p>`
                    },
                    gran_telchac: {
                        es: `<p class="fw-bold text-center">A solo 66 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 66 minutes from the development.</p>`
                    },
                    costa_flamingo: {
                        es: `<p class="fw-bold text-center">A solo 66 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 66 minutes from the development.</p>`
                    },
                    sorenna: {
                        es: `<p class="fw-bold text-center">A solo 66 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 66 minutes from the development.</p>`
                    },
                    galiana: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    nodo: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    marela_beach: {
                        es: `<p class="fw-bold text-center">A solo 77 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 77 minutes from the development.</p>`
                    },
                    marela_life: {
                        es: `<p class="fw-bold text-center">A solo 77 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 77 minutes from the development.</p>`
                    },
                    marela_celestun: {
                        es: `<p class="fw-bold text-center">A solo 77 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 77 minutes from the development.</p>`
                    },
                },
                content : {
                    es: `<p class="text-start">Sisal es un lugar muy tranquilo, que tiene una hermosa playa que te invita a la relajación.</p>
                        <p class="text-start">Esta ciudad colonial es especialmente conocida por sus hermosas construcciones históricas, como el Palacio de Gobernador, el Faro de Sisal, el Centro Histórico y la Iglesia de San Miguel.</p>
                        <p class="text-start">Además puedes: Visitar la famosa casa de la Emperatriz Carlota, el Fuerte de Santiago, la Laguna Cocodrilos y Reserva El Palmar,
                            disfrutar del atardecer en el Mirador Charcas, pasear por su muelle que recientemente fue remozado.</p>
                        <p class="text-start">Además de las atracciones históricas, Sisal ofrece una variedad de oportunidades de ocio. Los visitantes disfrutan de una amplia variedad de actividades, desde paseos en bote por el lago hasta paradas para visitar los mercados locales. 
                        También hay muchas oportunidades para descansar y relajarse en el lado caribeño de la ciudad, con hermosas playas y una amplia selección de spas y centros de bienestar.</p>
                        <p class="text-start">En los alrededores del lugar podrás encontrar variedad de restaurantes con comida típica o mariscos, también de puestos donde venden el tradicional pescado frito y otras delicias del mar.</p>
                        <p class="text-start">Los habitantes también disfrutan de la extensa selección de bares y discotecas que hay en la ciudad.</p>
                        `,
                    en: `
                        <p class="text-start">Sisal is a very peaceful place with a beautiful, wide beach that invites relaxation.</p>
                        <p class="text-start">This colonial city is especially known for its beautiful historical buildings, such as the Governor's Palace, the Sisal Lighthouse, the Historic Center, and the Church of San Miguel. </p>
                        <p class="text-start">In addition to the historical attractions, Sisal offers a variety of leisure opportunities, including boat rides on the lake, visits to local markets, and a wide selection of spas and wellness centers.</p>
                        <p class="text-start">Visitors can also enjoy the local cuisine, with a variety of restaurants offering typical food including fresh seafood, as well as street vendors selling traditional fried fish and other seafood delicacies.</p>
                        `,
                }
            },
        hunucma :  {
                images : `<div class="carousel-item active">
                        <img src="${static_url}img/promo/01.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/02.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/03.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>`,
                title : { es: "Hunucmá", en: 'Hunucma' },
                distance:  {
                    anthia: {
                        es: `<p class="fw-bold text-center">A solo 5 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 5 minutes from the development.</p>`
                    },
                    lakuun: {
                        es: `<p class="fw-bold text-center">A solo 38 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 38 minutes from the development.</p>`
                    },
                    wayuum: {
                        es: `<p class="fw-bold text-center">A solo 38 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 38 minutes from the development.</p>`
                    },
                    mahal: {
                        es: `<p class="fw-bold text-center">A solo 38 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 38 minutes from the development.</p>`
                    },
                    gran_telchac: {
                        es: `<p class="fw-bold text-center">A solo 38 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 38 minutes from the development.</p>`
                    },
                    costa_flamingo: {
                        es: `<p class="fw-bold text-center">A solo 60 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 60 minutes from the development.</p>`
                    },
                    sorenna: {
                        es: `<p class="fw-bold text-center">A solo 38 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 38 minutes from the development.</p>`
                    },
                    galiana: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    nodo: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    marela_beach: {
                        es: `<p class="fw-bold text-center">A solo 52 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 52 minutes from the development.</p>`
                    },
                    marela_life: {
                        es: `<p class="fw-bold text-center">A solo 52 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 52 minutes from the development.</p>`
                    },
                    marela_celestun: {
                        es: `<p class="fw-bold text-center">A solo 52 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 52 minutes from the development.</p>`
                    },
                },
                content : {
                    es: `
                        <p class="text-start">Esta ciudad ofrece muchas atracciones atractivas para todo tipo de visitantes. Desde los espectáculos culturales hasta las actividades físicas, aquí hay algo para todos.</p>
                        <p class="text-start">La ciudad de Hunucmá es conocida especialmente por sus hermosos paisajes. La arquitectura es una mezcla de estilos, como el colonial y neoclásico. Las calles están adornadas con plazas, fuentes y parques preciosos. Los edificios antiguos, la arquitectura y el colorido ambiente dan un ambiente único a la ciudad.</p>
                        <p class="text-start">Uno de los atractivos arquitectónicos es la entrada al mercado de artesanías “Eulogio Rosado”. En fachada color amarillo e interior rojo, destaca su piso en mosaicos bicolores que te transporta a épocas pasadas. 
                        Unas cuadras más adelante puedes recorrer el colorido mercado municipal “Nuestra Sra. de Guadalupe” que se ha extendido con puestos en las calles, ahí puedes encontrar comida, verduras, y más.</p>
                        <p class="text-start">Hunucmá es el lugar perfecto para explorar la cultura Maya. El Centro de Interpretación Mayab es un lugar ideal para conocer más sobre su cultura. Esta instalación educativa es el lugar perfecto para descubrir el arte, la cultura y la historia de esta región.</p>
                        <p class="text-start">Al visitarla también puedes disfrutar de los deportes acuáticos en el lago de Hunucmá. El lago es el hogar de numerosas especies, lo que lo convierte en un lugar ideal para la pesca y el buceo. Los deportes acuáticos son una excelente manera de pasar el tiempo en el lago.</p>
                        <p class="text-start">Las plazas y centros comerciales también son populares entre los visitantes de Hunucmá. El Centro Comercial de Hunucmá, el Centro Comercial de El Centro de Las Américas y el Centro Comercial de La Plazuela son algunos de los principales de la ciudad. 
                        Estos centros ofrecen todo, desde ropa y zapatos hasta productos electrónicos y alimentos. Hay numerosas tiendas independientes y restaurantes que ofrecen comida rica y deliciosa.</p>
                        <p class="text-start">Se puede disfrutar de una gran variedad de entretenimiento y actividades que ofrecen los principales parques temáticos de la ciudad. El Parque Tuxtla, el Parque Xel-Ha y el Parque Xcaret son algunos de los parques de atracciones más populares de la ciudad. 
                        Estos parques ofrecen emocionantes montañas rusas, atracciones acuáticas, parques temáticos y más.</p>
                        <p class="text-start">El cenote “El Pocito” o el «de Sergio» (dueño de la casa donde se encuentra) es de tipo cerrado, se accede bajando por una escalera unos metros. Por dentro el agua es baja y tan transparente que puedes ver los peces que ahí crecen. 
                        `,
                    en: `
                        <p class="text-start">This city offers many attractive attractions for all types of visitors. From cultural shows to physical activities, there is something for everyone here.</p>
                        <p class="text-start">The city of Hunucmá is especially known for its beautiful landscapes. The architecture is a mix of styles, such as colonial and neoclassical. The streets are adorned with beautiful squares, fountains, and parks. The old buildings, architecture, and colorful atmosphere give a unique ambiance to the city.</p>
                        <p class="text-start">One of the architectural attractions is the entrance to the "Eulogio Rosado" handicraft market. Its yellow façade and red interior, with its two-color mosaic floor, transport you to past times. A few blocks away, you can walk through the colorful "Nuestra Sra. de Guadalupe" municipal market, 
                            which has expanded with stalls on the streets, where you can find food, vegetables, and more.</p>
                        <p class="text-start">Hunucmá is the perfect place to explore Mayan culture. The Mayab Interpretation Center is an ideal place to learn more about their culture. This educational facility is the perfect place to discover the art, culture, and history of this region.</p>
                        <p class="text-start">When visiting Hunucmá, you can also enjoy water sports on the lake. The lake is home to numerous species, making it an ideal place for fishing and diving. Water sports are an excellent way to spend time on the lake.</p>
                        <p class="text-start">Plazas and shopping centers are also popular among visitors to Hunucmá. The Hunucmá Shopping Center, the El Centro de Las Américas Shopping Center, and the La Plazuela Shopping Center are some of the city's main shopping destinations. These centers offer everything from clothing and shoes to electronic products and food. 
                            There are numerous independent shops and restaurants that offer delicious food.</p>
                        <p class="text-start">You can enjoy a variety of entertainment and activities offered by the city's main theme parks. Tuxtla Park, Xel-Ha Park, and Xcaret Park are some of the most popular amusement parks in the city. 
                            These parks offer exciting roller coasters, water attractions, theme parks, and more.</p>
                        <p class="text-start">The "El Pocito" cenote or "Sergio's" cenote (named after the owner of the house where it is located) is a closed-type cenote, accessed by going down a staircase a few meters. 
                            Inside, the water is shallow and so transparent that you can see the fish that inhabit it. For $20 pesos, you can refresh yourself and change in Sergio's house, where he kindly offers you all the facilities you require. 
                    `,
                }
            },
        progreso :  {
                images : `<div class="carousel-item active">
                        <img src="${static_url}img/promo/04.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/05.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/06.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/07.jpg" class="img-promo img-fluid w-100 " alt="...">
                    </div>`,
                title : { es: "Puerto Progreso", en: 'Puerto Progreso' },
                distance:  {
                    anthia: {
                        es: `<p class="fw-bold text-center">A solo 45 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 45 minutes away from the development.</p>`
                    },
                    lakuun: {
                        es: `<p class="fw-bold text-center">A solo 26 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 26 minutes away from the development.</p>`
                    },
                    wayuum: {
                        es: `<p class="fw-bold text-center">A solo 15 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 15 minutes away from the development.</p>`
                    },
                    mahal: {
                        es: `<p class="fw-bold text-center">A solo 15 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 15 minutes away from the development.</p>`
                    },
                    gran_telchac: {
                        es: `<p class="fw-bold text-center">A solo 15 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 15 minutes away from the development.</p>`
                    },
                    costa_flamingo: {
                        es: `<p class="fw-bold text-center">A solo 60 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 60 minutes from the development.</p>`
                    },
                    sorenna: {
                        es: `<p class="fw-bold text-center">A solo 15 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 15 minutes away from the development.</p>`
                    },
                    galiana: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    nodo: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    marela_beach: {
                        es: `<p class="fw-bold text-center">A solo 87 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 87 minutes away from the development.</p>`
                    },
                    marela_life: {
                        es: `<p class="fw-bold text-center">A solo 87 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 87 minutes away from the development.</p>`
                    },
                    marela_celestun: {
                        es: `<p class="fw-bold text-center">A solo 87 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 87 minutes away from the development.</p>`
                    },
                },
                content : {
                    es: `
                        <p class="text-start">Puerto Progreso es una ciudad costera hermosa y con mucho encanto. La ciudad ha estado creciendo constantemente en los últimos años por su ubicación privilegiada frente al Caribe, alojamiento y atracciones turísticas.</p>
                        <p class="text-start">Las atracciones de Puerto Progreso incluyen el faro de la ciudad, que ofrece una vista impresionante y hermosas puestas de sol todas las noches. Allí también se encuentra el parque marino Aguazul, que ofrece la mejor experiencia submarina en la región.</p>
                        <p class="text-start">La Playa Norte es un lugar popular para los visitantes debido a sus tranquilas aguas turquesas y hermosas arenas blancas. También hay varias tiendas de alquiler de equipos de snorkel y buceo, donde pueden disfrutar de hermosas vistas submarinas.</p>
                        <p class="text-start">Otra de las principales atracciones turísticas de Puerto Progreso es la Plaza Comercial Xcanatún, un complejo comercial moderno con una gran variedad de tiendas, restaurantes y áreas de entretenimiento. La plaza también cuenta con una zona deportiva.</p>`,
                    en: `
                        <p class="text-start">Puerto Progreso is a beautiful and charming coastal town. The city has been steadily growing in recent years due to its prime location facing the Caribbean with ample accommodation options, and tourist attractions.</p>
                        <p class="text-start">Attractions in Puerto Progreso include the city's lighthouse, which offers an impressive view and beautiful sunsets every night. There is also the Aguazul Marine Park, which offers the best underwater experience in the region.</p>
                        <p class="text-start">Playa Norte is a popular spot for visitors due to its calm turquoise waters and beautiful white sands. There are also several snorkeling and diving equipment rental shops, where visitors can enjoy beautiful underwater views.</p>
                        <p class="text-start">Another major tourist attraction in Puerto Progreso is the Xcanatún Commercial Plaza, a modern shopping complex with a wide variety of shops, restaurants, and entertainment areas. The plaza also features a sports area.</p>`,
                }
            },
        celestun :  {
                images : `<div class="carousel-item active">
                            <img src="${static_url}img/promo/Playa_Celestún_Yucatán.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${static_url}img/promo/Playa_Norte_Celestún.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${static_url}img/promo/Playa_Sur_Celestún.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${static_url}img/promo/Reserva_de_la_Biósfera_Los_Petenes.jpg" class="img-promo img-fluid w-100 " alt="...">
                        </div>`,
                title : { es: "Celestún", en: 'Celestun' },
                distance:  {
                    anthia: {
                        es: `<p class="fw-bold text-center">A solo 50 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 50 minutes away from the development.</p>`
                    },
                    lakuun: {
                        es: `<p class="fw-bold text-center">A solo 83 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 83 minutes away from the development.</p>`
                    },
                    wayuum: {
                        es: `<p class="fw-bold text-center">A solo 83 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 83 minutes away from the development.</p>`
                    },
                    mahal: {
                        es: `<p class="fw-bold text-center">A solo 83 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 83 minutes away from the development.</p>`
                    },
                    gran_telchac: {
                        es: `<p class="fw-bold text-center">A solo 83 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 83 minutes away from the development.</p>`
                    },
                    costa_flamingo: {
                        es: `<p class="fw-bold text-center">A solo 60 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 60 minutes from the development.</p>`
                    },
                    sorenna: {
                        es: `<p class="fw-bold text-center">A solo 83 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 83 minutes away from the development.</p>`
                    },
                    galiana: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    nodo: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    marela_beach: {
                        es: `<p class="fw-bold text-center">A solo 5 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 5 minutes away from the development.</p>`
                    },
                    marela_life: {
                        es: `<p class="fw-bold text-center">A solo 5 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 5 minutes away from the development.</p>`
                    },
                    marela_celestun: {
                        es: `<p class="fw-bold text-center">A solo 5 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 5 minutes away from the development.</p>`
                    },
                },
                content : {
                    es: `
                        <p class="text-start">Celestún se ha convertido en un destino turístico y comercial único en la región. Esta ciudad encantadora ofrece una variedad de atracciones y plazas comerciales que no se encuentran en ningún otro lugar.</p>
                        <p class="text-start">Su principal punto de interés turístico es el Faro de San Carlos, que se remonta a mediados del siglo XIX. El diseño único de este antiguo faro atrae a miles de visitantes cada año. El faro es conocido por estar rodeado de hermosas playas de arena blanca y aguas cristalinas.</p>
                        <p class="text-start">También se encuentran cafeterías, restaurantes y bares que ofrecen comida local e internacional, así como una amplia variedad de entretenimiento. La plaza comercial más grande de Celestún es el Centro Comercial El Faro, con más de 100 tiendas, restaurantes y negocios. Esta plaza comercial es el lugar ideal para realizar compras y disfrutar de toda la cultura de Celestún.</p>
                        <p class="text-start">Además de las numerosas atracciones turísticas y comerciales, aquí se ofrece una amplia gama de actividades recreativas. Estas actividades van desde el buceo en el Gran Cenote hasta la observación de aves en el Parque Nacional de Las Coloradas. Los amantes de la naturaleza también disfrutan de los senderos para caminar por la montaña, las hayas y los límites de la selva. </p>
                        <p class="text-start">Celestún es un destino único para todas las edades. Ofrece una variedad de experiencias, desde la exploración de ruinas antiguas hasta el disfrute de la cultura local. Se puede disfrutar la hermosa arquitectura, la cultura vibrante y las actividades al aire libre. </p>
                        <p class="text-start">Esto significa que los visitantes pueden explorar el Faro de San Carlos durante el día y pasar la noche en la plaza comercial El Faro.</p>`,
                    en: `
                        <p class="text-start">Celestun has become a unique tourist and commercial destination in the region. This charming city offers a variety of attractions and shopping plazas that are not found anywhere else.</p>
                        <p class="text-start">Its main tourist attraction is the San Carlos Lighthouse, which dates back to the mid-19th century. The unique design of this old lighthouse attracts thousands of visitors each year. The lighthouse is known for being surrounded by beautiful white sand beaches and crystal-clear waters.</p>
                        <p class="text-start">There are also cafes, restaurants, and bars that offer local and international food, as well as a wide variety of entertainment. Celestun's largest shopping plaza is the El Faro Shopping Center, with over 100 shops, restaurants, and businesses. This shopping plaza is the ideal place for shopping and enjoying all of Celestun's culture.</p>
                        <p class="text-start">In addition to the numerous tourist and commercial attractions, a wide range of recreational activities are offered here. These activities range from diving in the Gran Cenote to bird watching in the Las Coloradas National Park. Nature lovers also enjoy walking trails through the mountains, beeches, and jungle boundaries.</p>
                        <p class="text-start">Celestun is a unique destination for all ages. It offers a variety of experiences, from exploring ancient ruins to enjoying local culture. Visitors can enjoy the beautiful architecture, vibrant culture, and outdoor activities.</p>
                        <p class="text-start">This means that visitors can explore the San Carlos Lighthouse during the day and spend the night at the El Faro shopping plaza.</p>`,
                }
            },
        merida :  {
                images : `
                    <div class="carousel-item active">
                        <img src="${static_url}img/promo/Palacio_de_Gobierno_de_Mérida_años_90.jpg" class="img-promo img-fluid w-100 " alt="Palacio_de_Gobierno_de_Mérida_años_90">
                        <div class="carousel-caption bottom-0 p-0 mx-0 mx-lg-5">
                            <p class="fs-5 text-black bg-dark-subtle subtle mb-0">Palacio de Gobierno de Mérida (años 90)</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/Merida_Palacio_de_Gobierno.jpg" class="img-promo img-fluid w-100 " alt="Merida_Palacio_de_Gobierno">
                        <div class="carousel-caption bottom-0 py-0">
                            <p class="fs-5 text-black bg-dark-subtle subtle mb-0">Sala Interior del Palacio de Gobierno de Mérida</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/Catedral_de_San_Ildefonso.jpg" class="img-promo img-fluid w-100 " alt="Catedral_de_San_Ildefonso">
                        <div class="carousel-caption bottom-0 py-0">
                            <p class="fs-5 text-black bg-dark-subtle subtle mb-0">Vista nocturna de la Catedral de San Ildefonso</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/Museo_de_Arte_Contemporáneo_Ateneo_de_Yucatán_Mérida.jpg" class="img-promo img-fluid w-100 " alt="Museo_de_Arte_Contemporáneo_Ateneo_de_Yucatán_Mérida">
                        <div class="carousel-caption bottom-0 py-0">
                            <p class="fs-5 text-black bg-dark-subtle subtle mb-0">Museo de Arte Contemporáneo Ateneo de Yucatán, Mérida</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="${static_url}img/promo/Museo_Maya_de_noche_Mérida.jpg" class="img-promo img-fluid w-100 " alt="Museo_Maya_de_noche_Mérida">
                        <div class="carousel-caption bottom-0 py-0">
                            <p class="fs-5 text-black bg-dark-subtle subtle mb-0">Museo Maya de noche Mérida</p>
                        </div>
                    </div>
                `,
                title : { es: "Mérida", en: 'Merida' },
                distance:  {
                    anthia: {
                        es: `<p class="fw-bold text-center">A solo 25 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 25 minutes away from the development.</p>`
                    },
                    lakuun: {
                        es: `<p class="fw-bold text-center">A solo 10 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 10 minutes away from the development.</p>`
                    },
                    wayuum: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    mahal: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    gran_telchac: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    costa_flamingo: {
                        es: `<p class="fw-bold text-center">A solo 60 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Only 60 minutes from the development.</p>`
                    },
                    sorenna: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    galiana: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    nodo: {
                        es: `<p class="fw-bold text-center">A solo 20 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 20 minutes away from the development.</p>`
                    },
                    marela_beach: {
                        es: `<p class="fw-bold text-center">A solo 45 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 45 minutes away from the development.</p>`
                    },
                    marela_life: {
                        es: `<p class="fw-bold text-center">A solo 45 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 45 minutes away from the development.</p>`
                    },
                    marela_celestun: {
                        es: `<p class="fw-bold text-center">A solo 45 minutos del desarrollo.</p>`,
                        en: `<p class="fw-bold text-center">Just 45 minutes away from the development.</p>`
                    },
                },
                content : {
                    es: `
                    <p class="text-start">Mérida es una ciudad vibrante y rica en cultura ubicada en la península de Yucatán, México. Como capital del estado de Yucatán, Merida tiene una población de más de un millón de personas y es conocida por su arquitectura colonial, su deliciosa gastronomía y su animada escena artística y musical.</p>
                    <p class="text-start">Una de las principales atracciones de Merida es su centro histórico, donde los visitantes pueden admirar edificios coloniales bellamente conservados, como el Palacio de Gobierno y la Catedral de San Ildefonso. La ciudad también alberga numerosos museos, como el Gran Museo del Mundo Maya y el Museo de Arte Contemporáneo.</p>
                    <p class="text-start">Los amantes de la gastronomía quedarán encantados con la rica escena culinaria de Merida, que se caracteriza por una fusión de influencias mayas y españolas. Entre los platos locales más populares se encuentran la cochinita pibil, un plato de cerdo cocido lentamente marinado en jugo de cítricos y especias, y los panuchos, tortillas rellenas de frijoles y cubiertas con pollo desmenuzado, cebolla encurtida y aguacate.</p>
                    <p class="text-start">Merida también ofrece muchas actividades al aire libre, como visitar las cercanas ruinas mayas de Chichén Itzá y Uxmal, o explorar los cenotes naturales de la región (pozos de natación subterráneos).</p>
                    <p class="text-start">En cuanto al clima, Merida tiene un clima tropical de sabana con veranos calurosos y húmedos e inviernos suaves. La temporada de lluvias suele ser de mayo a octubre, siendo los meses más secos de enero a abril.</p>
                    <p class="text-start">En cuanto a vivir en o cerca de Mérida, la ciudad tiene un costo de vida relativamente bajo en comparación con otras ciudades mexicanas. La ciudad también tiene un buen sistema de transporte, con autobuses y taxis disponibles fácilmente.</p>
                    <p class="text-start">En general, Merida es una ciudad vibrante y acogedora con mucho que ofrecer tanto a visitantes como a residentes.</p>
                    `,
                    en: `
                    <p class="text-start">Merida is a vibrant and culturally-rich city located in the Yucatan Peninsula, Mexico. As the capital of the state of Yucatan, Merida has a population of over one million people and is known for its colonial architecture, delicious cuisine, and lively arts and music scene.</p>
                    <p class="text-start">One of the main attractions of Merida is its historic city center, where visitors can admire beautifully preserved colonial buildings, such as the Palacio de Gobierno and the Catedral de San Ildefonso. The city is also home to numerous museums, including the Gran Museo del Mundo Maya and the Museum of Contemporary Art.</p>
                    <p class="text-start">Food lovers will be delighted by Merida's rich culinary scene, which is characterized by a fusion of Mayan and Spanish influences. Popular local dishes include cochinita pibil, a slow-cooked pork dish marinated in citrus juice and spices, and panuchos, tortillas filled with beans and topped with shredded chicken, pickled onions, and avocado.</p>
                    <p class="text-start">Merida also offers plenty of outdoor activities, such as visiting the nearby Mayan ruins of Chichen Itza and Uxmal, or exploring the region's natural cenotes (underground swimming holes)</p>
                    <p class="text-start">In terms of climate, Merida has a tropical savanna climate with hot and humid summers and mild winters. The rainy season typically runs from May to October, with the driest months being January to April.</p>
                    <p class="text-start">As for living in or near Merida, the city has a relatively low cost of living compared to other Mexican cities. The city also has a good transportation system, with buses and taxis readily available.</p>
                    <p class="text-start">Overall, Merida is a vibrant and welcoming city with plenty to offer both visitors and residents alike.</p>
                    `,
                }
            },
        


    }
 
    function loadModal(investment, promo_Modal, locationId) {
        $('#promoModalContent, #promoModalImages, #promoModalLabel, #promoModalDistance').empty();
        $('#promoModalLabel').append(promo_Modal[locationId].title[lang] );
        $('#promoModalImages').append(promo_Modal[locationId].images );
        if(investment != '' || investment == 'all' ) { $('#promoModalDistance').append(promo_Modal[locationId].distance[investment][lang]);}
        $('#promoModalContent').append(promo_Modal[locationId].content[lang]);
        if (deviceMovil) { 
            $('.subtle').removeClass('fs-5').addClass('small');
            $('.img-promo').removeClass('w-100').addClass('w-100');
        }
        $("#promoModal").modal("show");
        
    }
    // console.log(JSON.stringify(promo_Modal));
    $("#sisal, #hunucma, #progreso, #celestun, #merida").on("click", function(e) {
        e.stopImmediatePropagation();
        // console.log(Object.entries(promo_Modal).length);
        let locationId = $(this).attr('id');
            loadModal(investment, promo_Modal, locationId);
        
    });




});
