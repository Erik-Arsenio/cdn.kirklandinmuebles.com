let deviceMovil= false;

function detectmob() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
        // $('.className').popover('disable'); 
        deviceMovil= true;
        $('.mobile').removeClass('d-none');
        console.log("En Moviles");
    } else {
        $('.not_mobile').removeClass('d-none');
    }
}
detectmob();

$(document).ready(function(){

 
    // Funtion Promo
    let promo = [];
    let promo_lakuun = [
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Atrévete a experimentar UN NUEVO COMIENZO"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Experimenta un nuevo estilo de vida en TIERRA DORADA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"A 10 minutos de la ciudad de Mérida y a 15 minutos de las playas YUCATECAS"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Entrega de la PRIMERA ETAPA Diciembre 2024"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Contará con numerosas amenidades en áreas RECREATIVA, FAMILIAR y DEPORTIVA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Disfruta de la compañía de amigos y una parrillada en nuestra ÁREA GRILL"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Disfruta de un paseo en familia y pasa las tardes inolvidables recorriendo nuestra CICLOVÍA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Pasa momentos increibles con tus mascotas en nuestro PET PARK"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Practica tu deporte favorito EN PAREJA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-promo text-success">"Imagina relajarte y entrenar en nuestro CANAL DE NADO"</p>`
    ];
    if (($('#image_site').contents()[0].baseURI).search("beach") >= 1) {
        promo = 'beach';

    } else if (($('#image_site').contents()[0].baseURI).search("celestun") >= 1){
        promo = 'celestun';

    } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1){
        promo = 'anthia';

    } else if (($('#image_site').contents()[0].baseURI).search("lakuun") >= 1){
        promo = promo_lakuun;
    }
    console.log(promo)
    $("#promo").empty().html(promo[0]);
    let count = 1;

    changeTextPromo = function(){
        if(count == promo.length){
            count = 0;
        }
        $("#promo").empty().html(promo[count]);
        // console.log(count);
        count++;
    }
    const myCarousel = document.getElementById('carouselHome', 'carouselmodal');

    myCarousel.addEventListener('slid.bs.carousel', event => {
        changeTextPromo();
    })
    $(".carousel-control-prev").on("click", function (e) {
        e.stopImmediatePropagation();
        // console.log(count);
        if (count <= 1) {
            count = promo.length - 1;
        } else {
            count = count - 2;
        }
        $("#promo").empty().html(promo[count]);
    });


    $(".accordion-header").on("click", function() {
        // Globals
        let btnId = $(this).attr('id');
        let btnClass = $(this).attr('class');
    });

    // console.time('Load');

    let data = []

    if ($('#image_site').hasClass('lots')) {
        $(".loader-container").removeClass('d-none');

        data = JSON.parse($('#data_propertie').val());

        let selectionContainer = "";
        const colorNotAvailable = "fill: rgba(228, 22, 66); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
        // let colorAvailablePremium = "fill: rgba(5, 110, 57); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
        // let colorAvailablePlus = "fill: rgba(47, 172, 102); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
        // let colorAvailable = "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
        const colorReserved = "fill: rgba(57, 249, 230); stroke: rgba(255, 255, 255); stroke-width: 1.2px;"
        const colorStatus = {
            1: "fill: rgba(5, 110, 57); stroke: rgba(255, 255, 255); stroke-width: 1.2px;", // colorAvailablePremium
            2: "fill: rgba(47, 172, 102); stroke: rgba(255, 255, 255); stroke-width: 1.2px;",  // colorAvailablePlus
        };
        const colorStatusDefault = "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
        let available = [0,0,0,0,0];

        for (stages = 1; stages <= data.numbers_stage; stages++) {

            $('g[id="stage_' + stages + '"] >[class*="mapsvg-region"]').each(function(){
            // debugger;
                let name_svg = $(this).attr('id');
                // console.log('Stage- ' + stages + ' Id svg- ' + name_svg );
                // let id = Number($(this).attr('id').substr(2));
                // let title = $(this).attr("title");
                let key = searchIndexId(data, name_svg, stages);
                // let popoverContent = ``;
                // if ($(this).attr('d') != undefined) {
                //     console.log('Id- ' + name_svg + '  d- ' + $(this).attr('d'));     
                // } 
                // else {
                //     console.log('Id- ' + name_svg + '  x- ' + $(this).attr('x') + '  y- ' + $(this).attr('y'));     
                    
                // }

                // lots.push({id: id, area: Number(title.replace(" m2", "")), price: parseInt((Number(title.replace(" m2", ""))) * 2850).toLocaleString('en-EN') });
                if (data.properties[key].status_id === 2) {
                    $(this).attr('style', colorNotAvailable);
                    // $('[data-modal-id="' + name_svg + '"]').addClass('d-none');
                    // $(this).addClass(' mapsvg-disabled');
                    // $(this).attr('data-bs-content', " ").attr('data-bs-content', `<b>${data.labels.status}</b>: ${data.properties[key].status}`);
                } else if (data.properties[key].status_id == 1 || data.properties[key].status_id === 3) {

                    if (data.properties[key].status_id == 1) {
                        available[stages] = available[stages] + 1;
                    }

                    $(this).attr('style', colorStatus[data.properties[key].category_id] || colorStatusDefault);
                    
                    // if (data.properties[key].category_id === 1) {
                    //     $(this).attr('style', colorAvailablePremium);
                    // } else if (data.properties[key].category_id === 2) {
                    //     $(this).attr('style', colorAvailablePlus);
                    // } else {
                    //     $(this).attr('style', colorAvailable);
                    // }
                    if (data.properties[key].status_id === 3){
                        $(this).attr('style', colorReserved);
                        // $('[data-modal-id="' + name_svg + '"]').addClass('d-none');
                    } 
                    // else {
                    //     $(this).removeClass(' mapsvg-disabled');
                    // }
                    // selectionContainer = ``;
                    // if ($(this).attr('d') != undefined) {
                    //     console.log('Id- ' + name_svg + '  d- ' + $(this).attr('d'));    
                    // } else {
                    //     console.log('Id- ' + name_svg + '  x- ' + $(this).attr('x') + '  y- ' + $(this).attr('y'));     
                    // }

                        // selectionContainer = selectionContainer.concat(``);    
                    $('[data-id="' + name_svg + '"]').attr('data-bs-toggle', "popover");
                    $('[data-id="' + name_svg + '"]').attr('data-bs-trigger', "hover");
                    $('[data-id="' + name_svg + '"]').attr('data-bs-placement', "auto");
                    $('[data-id="' + name_svg + '"]').attr('title', " ").attr('title', "<b>Lote</b> - " + name_svg);
                    $('[data-id="' + name_svg + '"]').attr('data-bs-html', " ").attr('data-bs-html', "true" );
                    selectionContainer = ``;
                    if (data.properties[key].category_id !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.category_name}</b>: Lote ${data.properties[key].category_name}<br>`);
                    }
                    if (data.properties[key].status_id !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.status_name}</b>: ${data.properties[key].status_name}<br>`);
                    }
                    if (data.properties[key].area !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.area}</b>: ${data.properties[key].area} m<sup>2</sup><br>`);
                    }
                    if (data.properties[key].price !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.price}</b>: ${(parseInt((Number(data.properties[key].area) * data.properties[key].price))).toLocaleString('en-EN')} MXN<br>`);
                    }
                    if (data.properties[key].financing !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.financing}</b>: ${data.properties[key].financ}<br>`);
                    }
                    if (data.properties[key].enganche !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.hitch}</b>: ${data.properties[key].enganche}<br>`);
                    }
                    if (data.properties[key].description !== '') {
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.description}</b>: ${data.properties[key].description}<br>`);
                    }

                    // selectionContainer = selectionContainer.concat(`"></path>`);
                    $('[data-id="' + name_svg + '"]').attr('data-bs-content', " ").attr('data-bs-content', selectionContainer);

                    // let lot = $( '[data-id="' + name_svg + '"]' ).get(0).outerHTML;
                    // let lot = document.querySelector(`*[data-id=${name_svg}] `).innerHTML;
                    // console.log($( '[data-id="' + name_svg + '"]' ).get(0).outerHTML);
                    // lot = lot.replace("data-id", "data-ids");
                    // console.log(lot);
                    // $( `<a href="javascript:void(0);" class="input-button input-button-clear" data-modal-id="${name_svg}" data-toggle="modal" data-target="#modal-img">${lot}</a>`).insertAfter( '[data-id="' + name_svg + '"]' );
                    // $('[data-id="' + name_svg + '"]').remove();
                    // $( "</a>" ).insertAfter( $( '[data-id="' + name_svg + '"]'  ) );
                } 
                // debugger;
            });
            // console.table(available[stages]);
            $("#available-" + stages).text(available[stages]);
        }
        // let lots_orde = lots.sort(((a, b) => a.id - b.id));
        // $('#area_selection_1').append(selectionContainer);
        // console.log($("#svg-1").html());
        // $('#view-svg-1').append($("#svg-1").html());
        $('[data-bs-toggle="popover"]').popover();
        $(".loader-container").addClass('d-none');
        $("#image_site").removeClass('d-none');
        // console.timeEnd('Load');
    
        function searchIndexId(data, name_svg, stages) {
            for (key in data.properties) {
                if (data.properties[key]['name'] === name_svg && data.properties[key]['stage'] === stages) {
                    return Number(key);
                    
                }
            }
        }
    }
        
    $(".carousel-inner img").on("click", function(e) {
        e.stopImmediatePropagation();
        if (!deviceMovil ) {
            
    
            // Globals
            let id_img = $(this).closest('.carousel').attr('id');
            let id_html = $('#' +  id_img).html().trim();
            let src = $(this).attr('src');
            let modalCarouselContainer = '';
            let arr_img = $('#' + id_img + ' img').map(function(){
                return this.src;
            }).get();
            $('#modal-imgLabel').empty();
            $(id_html).prependTo('#modal-carousel-container');
            if (id_img == 'carouselAmenities') {
                arr_img.shift();
            }
            for (let i in arr_img){
                modalCarouselContainer = modalCarouselContainer.concat(`<div class="carousel-item`);
                if (id_img == 'carouselAmenities' && i == 0) {
                    modalCarouselContainer = modalCarouselContainer.concat(` active`);
                } else if (arr_img[i] == src) {
                    modalCarouselContainer = modalCarouselContainer.concat(` active`);
                }
                modalCarouselContainer = modalCarouselContainer.concat(`"><img src="${arr_img[i]}" class="card-img-top img-fluid" alt="..."></div>`);
            }
            $('#modal-carousel-container').empty();
            $('#modal-carousel-container').append(modalCarouselContainer);
            $("#modal-img").modal("show");
        }
    });
});