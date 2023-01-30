let deviceMovil= false;

function detectmob() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
        // $('.className').popover('disable'); 
        deviceMovil= true;
        $('.mobile').removeClass('d-none');
        console.log("En Moviles");
        $('.about-img, .about-img-right').removeClass('p-5').removeClass('pe-0');
        $('.mouse-touche').empty().text('toque ');
        // $('.about-img').removeClass('p-5').removeClass('pe-0');

    } else {
        $('.not_mobile').removeClass('d-none');
    }
}
detectmob();

$(document).ready(function(){

    // $('[data-bs-toggle="popover"]').popover();
    // Funtion Promo
    let promo = [];
    let promo_lakuun = [
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Reconéctate con la naturaleza, entre la diversidad de nuestro desarrollo, nuestras amenidades únicas y la seguridad que el estado más seguro del país puede ofrecerte."</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Experimenta un nuevo estilo de vida en TIERRA DORADA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"El equilibrio prefecto entre la naturaleza y la elegencia."</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Entrega de la PRIMERA ETAPA Diciembre 2024"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Atrévete a experimentar UN NUEVO COMIENZO"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Haz nuevos amigos en nuestro ecléctico CLUBHOUSE"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Contará con numerosas amenidades en áreas RECREATIVA, FAMILIAR y DEPORTIVA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Disfruta de la compañía de amigos y una parrillada en nuestra ÁREA GRILL"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Pase momentos memorables con sus hijos en nuestro AREA INFANTIL"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Pasa momentos increibles con tus mascotas en nuestro PET PARK"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Disfruta de un paseo en familia y pasa las tardes inolvidables recorriendo nuestra CICLOVÍA"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Practica tu deporte favorito EN PAREJA"</p>`
    ];
    // `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"A 10 minutos de las plazas comerciales de la ciudad de Mérida"</p>`,
    // `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"A 20 minutos de las playas de Puerto Progreso"</p>`,
    // `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Imagina relajarte y entrenar en nuestro CANAL DE NADO"</p>`
    let promo_anthia = [
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Es un desarrollo de terrenos de inversión semiurbanizados, que te ofrece lotes patrimoniales de inversión."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Por un tiempo limitado, aprovecha el enganche desde solamente $2,000 mxn."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Hunucmá zona de alto potencial de crecimiento, rodeado de desarrollos de inversión."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Accede al desarrollo desde la calle 30 de Hunucmá en sólo 5 minutos."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Es un desarrollo de terrenos de inversión semiurbanizados, que te ofrece lotes patrimoniales de inversión"</p>`,
        `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Ubicado en Hunucmá. Zona de alto potencial de crecimiento, rodeado de desarrollos de inversión.<br> Empresas NACIONALES Y INTERNACIONALES apuestan en la zona."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"A 5 minutos de Hunucmá, 20 minutos de Mérida, 25 minutos de las playas de Sisal, pueblo mágico y playas Platinum y a 45 minutos de Puerto Progreso."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Cuenta con 5 Etapas con ESTELA DISTINTIVA en la entrada de cada una. Cada etapa tiene sus propias áreas verdes."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Con precios por m<small><sup>2</sup></small> desde $418 mxn, Enganche de 10% y 60 meses sin intereses. <br>Puedes tenerlo en Diciembre de 2025."</p>`,
        `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Si en vez de comprar un Espreso Americano diariamente en $69 mxn. <br> Inviertes diariamente sólo $56 mxn en un Lote de Anthia. <br> Tendrás un lote que te durará toda una vida"</p>`,
        `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Con 33% de Plusvalía. <br>Atrévete a experimentar<br> UN NUEVO COMIENZO"</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
    ];
    `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Empresas NACIONALES E INTERNACIONALES apuestan en la zona" <br> <span class="text-success-emphasis"> Atrévete a experimentar<br> UN NUEVO COMIENZO</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
    // let promo_anthia = [
    //     `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Es un desarrollo de terrenos de inversión semiurbanizados, que te ofrece lotes patrimoniales de inversión."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Ubicado en Hunucmá. Zona de alto potencial de crecimiento, rodeado de desarrollos de inversión."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"A 5 minutos de Hunucmá, 20 minutos de Mérida, 25 minutos  de las playas de Sisal, pueblo mágico y playas Platinum y a 45 minutos de la Ciudad Progreso."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Accede al desarrollo desde la calle 30 de Hunucmá."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Cuenta con 5 Etapas, 47 hectáreas, 927 lotes, calles blancas y más de 28 mil metros cuadrados de áreas verdes."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"El desarrollo cuenta con ENEGÍA ELÉCTRICA en la entrada de cada etapa."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"El acceso principal se realiza por avenida con banquetas incluídas."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Cuenta con ESTELA DISTINTIVA en la entrada de cada etapa de desarrollo."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Incluye una amplia avenida interna, la cual es el acceso principal al desarrollo."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Para comodidad de todos nuestros inversionistas, se implementó una segunda vía de acceso que divide todas las etapas, ayudando desde la primera etapa hasta la última pueda llegar lo más rápido posible a su lote."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Hemos diseñado y distribuido nuestras áreas verdes de manera equitativa en cada etapa, para asegurar que todos los inversionistas sin importar su ubicación de su lote puedan disfrutar enel futuro de un parque o espacio recreativo cercano a su terreno."</p>`,
    //     `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Empresas NACIONALES E INTERNACIONALES apuestan en la zona" <br> <span class="text-success-emphasis"> Atrévete a experimentar<br> UN NUEVO COMIENZO</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
    // ];
    let promo_beach = [
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Desarrollo de terrenos residenciales semi-urbanizados en la hermosa playa de Celestún"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún es considerado un paraíso eco-turístico del estado de Yucatán, nombrado Patrimonio Mundial de la reserva especial de la biosfera."</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún, la única costa donde las olas te susurran y el sol te acaricia."</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Cuenta con un Club de playa dentro del desarrollo y a sólo 5 minutos del centro de Celestún."</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"La playa de arena fina, el agua tranquila y poco profunda, rodeada de cocoteros, perfecta para toda la familia."</p>`,
        `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Haz nuevos amigos en nuestro Club de Playa"</p>`,
        `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Atrévete a experimentar<br> UN NUEVO COMIENZO"</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
    ];
    if (($('#image_site').contents()[0].baseURI).search("beach") >= 1) {
        promo = promo_beach;

    } else if (($('#image_site').contents()[0].baseURI).search("celestun") >= 1){
        promo = 'celestun';

    } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1){
        promo = promo_anthia;

    } else if (($('#image_site').contents()[0].baseURI).search("lakuun") >= 1){
        promo = promo_lakuun;
    }
    // console.log(promo)
    $(".promo").empty().html(promo[0]);
    let count = 1;

    changeTextPromo = function(){
        if(count == promo.length){
            count = 0;
        }
        $(".promo").empty().html(promo[count]);
        // console.log(count);
        count++;
    }
    const myCarousel = document.getElementById('carouselHome', 'carouselmodal');

    myCarousel.addEventListener('slid.bs.carousel', event => {
        changeTextPromo();
    })
    $(".carousel-control-prev").on("click", function (e) {
        e.stopImmediatePropagation();
        let btnId = $(this).attr('data-bs-target');
        console.log(btnId);
        if (btnId == "#carouselHome") {

            if (count <= 1) {
                count = promo.length - 1;
            } else {
                count = count - 2;
            }
            $(".promo").empty().html(promo[count]);
        }
    });

    // $("svg").on("click", function() {
    //     let btnId = $(this).attr('id');
    //     let btnClass = $(this).attr('class');
    //     console.log('Click en SVG Id-  ' + btnId );
    //     if(deviceMovil && btnId == "stage-01") {
    //         let panZoom = svgPanZoom('#' + btnId, {
    //             viewportSelector: '.svg-pan-zoom_viewport',
    //             panEnabled: true,
    //             zoomEnabled: true,
    //             controlIconsEnabled: true,
    //             fit: true,
    //             center: true,
    //             dblClickZoomEnabled: false,
    //             preventMouseEventsDefault: false,
    //         });
    //     }
    // });


    // $(".carousel-control-prev ,  carousel-control-prev").on("click", function() {
    //     // Globals
    //     let btnId = $(this).closest("div").prop("id");
    //     let btnClass = $(this).attr('data-bs-target');
    //     console.log('Click en carousel  ' + btnId + ' | ' + btnClass);


    // });
    $(".accordion-header").on("click", function() {
        // Globals
        let btnId = $(this).attr('id');
        let btnClass = $(this).attr('class');
        console.log('Click en accordion  ' + btnId + ' | ' + btnClass);

        // let panZoom = svgPanZoom('#stage-01', {
        //     viewportSelector: '.svg-pan-zoom_viewport',
        //     panEnabled: true,
        //     zoomEnabled: true,
        //     controlIconsEnabled: true,
        //     fit: true,
        //     center: true,
        //     dblClickZoomEnabled: false,
        //     preventMouseEventsDefault: false,

    
        // });
    
        
        // document.getElementById('zoom-in').addEventListener('click', function(ev){
        //     ev.preventDefault()
    
        // panZoom.zoomIn()
        // });
    
        // document.getElementById('zoom-out').addEventListener('click', function(ev){
        // ev.preventDefault()
    
        // panZoom.zoomOut()
        // });
    
        // document.getElementById('reset').addEventListener('click', function(ev){
        // ev.preventDefault()
    
        // panZoom.resetZoom()
        // });
    });

    // console.time('Load');
  

    let data = []

    if ($('#image_site').hasClass('lots')) {
        $(".loader-container").removeClass('d-none');

        //Get discount according to quantity entered
        // $.ajax({
        //     url: "assets/json/list_topup_discount.json",
        //     dataType: "json",
        //     cache: false
        // }).done(function(data) {


        // });

        //Globals
        let project_name = "";
        let uri = $('#data_url').val();
        $.ajax({
            url: uri ,
            type : 'GET',
            dataType: "json"
        }).done(function (datas) {
            if (data !== null) {
                //Globals
                data = datas; 
            }



            // data = JSON.parse($('#data_propertie').val());
            // let dataUpdate = JSON.parse($('#data_update_propertie').val());
            // dataUpdate = dataUpdate.sort((x,y) => x.status - y.status);
            // dataUpdate = dataUpdate.sort((x,y) => x.id.localeCompare(y.id));
            
            // let properties = data.properties;
            // console.log(data);
            // console.log(dataUpdate);
            // console.log(properties);
            // console.log(properties[0].name);
            // let coincidencia = 0;
            // for (key in properties) {

            //     coincidencia = dataUpdate.find( dataUpdate => dataUpdate.id == properties[key].name);
            //     if (coincidencia != undefined) {
            //         // coincidencia.status = properties[key].status_id;
            //         // coincidencia.status_text = properties[key].status_name
            //         if (properties[key].status_id != coincidencia.status) {
            //             console.log(properties[key].name + " : " + properties[key].status_id + " => " + coincidencia.status); 
            //             // properties[key].status_id = Number(coincidencia.status);
            //             // properties[key].status_name = coincidencia.status_text;
            //         }
            //     }
            //     // console.log(dataUpdate[key].id + ' ' + dataUpdate[key].status_text);

            // }
            // console.log(properties);
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
                    let stageId = Number($(this).closest("g").prop("id").substr(-1, 1));
                    
                    // let id = Number($(this).attr('id').substr(2));
                    // let title = $(this).attr("title");
                    let key = searchIndexId(data, name_svg, stageId);
                    // console.log('Stages- ' + stages + '  -->  StageId- ' + stageId + ' Idsvg- ' + name_svg + ' Key- ' + key);
                    // let popoverContent = ``;
                    // if ($(this).attr('d') != undefined) {
                    //     console.log('Id- ' + name_svg + '  d- ' + $(this).attr('d'));     
                    // } 
                    // else {
                    //     console.log('Id- ' + name_svg + '  x- ' + $(this).attr('x') + '  y- ' + $(this).attr('y'));     
                        
                    // }
                    if (stages == stageId && data.properties[key]['name'] == name_svg) {

                        // lots.push({id: id, area: Number(title.replace(" m2", "")), price: parseInt((Number(title.replace(" m2", ""))) * 2850).toLocaleString('en-EN') });
                        if (data.properties[key].status_id == 0) {
                            $(this).attr('style', colorNotAvailable);
                            // $('[data-modal-id="' + name_svg + '"]').addClass('d-none');
                            // $(this).addClass(' mapsvg-disabled');
                            // $(this).attr('data-bs-content', " ").attr('data-bs-content', `<b>${data.labels.status}</b>: ${data.properties[key].status}`);
                        } else if (data.properties[key].status_id == 1 || data.properties[key].status_id == 2) {

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
                            if (data.properties[key].status_id == 2){
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
                            // $('[data-id="' + name_svg + '"]').attr('data-bs-toggle', "popover");
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-toggle', "popover");
                            if(!deviceMovil) {
                                $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-trigger', "hover");
                            } else {
                                $('[data-id="' + name_svg + '"]').attr('data-bs-trigger', "focus");
                            }
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-placement', "auto");
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('title', " ").attr('title', "<b>Lote</b> - " + name_svg);
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-html', " ").attr('data-bs-html', "true" );
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
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-content', " ").attr('data-bs-content', selectionContainer);

                            // let lot = $( '[data-id="' + name_svg + '"]' ).get(0).outerHTML;
                            // let lot = document.querySelector(`*[data-id=${name_svg}] `).innerHTML;
                            // console.log($( '[data-id="' + name_svg + '"]' ).get(0).outerHTML);
                            // lot = lot.replace("data-id", "data-ids");
                            // console.log(lot);
                            // $( `<a href="javascript:void(0);" class="input-button input-button-clear" data-modal-id="${name_svg}" data-toggle="modal" data-target="#modal-img">${lot}</a>`).insertAfter( '[data-id="' + name_svg + '"]' );
                            // $('[data-id="' + name_svg + '"]').remove();
                            // $( "</a>" ).insertAfter( $( '[data-id="' + name_svg + '"]'  ) );
                        } 
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
    
            function searchIndexId(data, name_svg, stageId) {
                for (key in data.properties) {
                    if (data.properties[key]['name'] === name_svg && data.properties[key]['stage'] === stageId) {
                        return Number(key);
                        
                    }
                }
            }
        });
    }
    // let carouselHomeElement = document.querySelector("#carouselHome");
    // new bootstrap.Carousel(carouselHomeElement, {
    //     ride: "carousel",
    //     interval: 12000
    // });
    // let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
    // new bootstrap.Carousel(carouselAmenitiesElement, {
    //     ride: "carousel",
    //     interval: 12000
    // });
    // let carouselElement = "";
 

    $(".carousel-inner img, about-img img").on("click", function(e) {
        e.stopImmediatePropagation();
        let id_img = $(this).closest('.carousel').attr('id');
        // if (id_img == "carouselHome") {
        //     carouselElement = carouselHomeElement;
        // } else {
        //     carouselElement = carouselAmenitiesElement;
        // }
        // let myCarouselElement = document.querySelector('#' +  id_img);
        // let carousel = new bootstrap.Carousel(myCarouselElement, {
        //     ride: false,
        //     interval: 1800000
        // });
        // console.log(id_img);
        // console.log(carousel);
        // console.log(myCarouselElement);
        if (!deviceMovil ) {
            // Globals
            let id_html = $('#' +  id_img).html().trim();
            let src = $(this).attr('src');
            let modalCarouselContainer = '';
            let arr_img = $('#' + id_img + ' img').map(function(){
                return this.src;
            }).get();
            $('#modal-imgLabel').empty();
            $(id_html).prependTo('#modal-carousel-container');
            // if (id_img == 'carouselAmenities') {
            //     arr_img.shift();
            // }
            for (let i in arr_img){
                modalCarouselContainer = modalCarouselContainer.concat(`<div class="carousel-item`);
                if (id_img == 'carouselAmenities' && i == 0) {
                    modalCarouselContainer = modalCarouselContainer.concat(` active`);
                } else if (arr_img[i] == src) {
                    modalCarouselContainer = modalCarouselContainer.concat(` active`);
                }
                modalCarouselContainer = modalCarouselContainer.concat(`"><img src="${arr_img[i]}" class=""  style="width: 55vw;" alt="..."></div>`);
            }
            console.log("Cantidad de Img- " + arr_img.length)
            $('#modal-carousel-container').empty();
            $('#modal-carousel-container').append(modalCarouselContainer);
            if ( arr_img.length === 1) {
                $('#carouselmodal').children('[data-bs-target="#carouselmodal"]').addClass('d-none')
            } else {
                $('#carouselmodal').children('[data-bs-target="#carouselmodal"]').removeClass('d-none')
            }
            $("#modal-img").modal("show");
        }
        //  else {
        //     let carousel = new bootstrap.Carousel(document.querySelector('#' +  id_img), {
        //         ride: false,
        //     });
        //     console.log("carousel detenido por click");
        // }
    });

            // window.panZoomTiger = svgPanZoom('#demo-tiger', {
            //     zoomEnabled: true,
            //     controlIconsEnabled: true,
            //     dblClickZoomEnabled: false, // enable or disable zooming by double clicking (default enabled)
            //     mouseWheelZoomEnabled: true, // enable or disable zooming by mouse wheel (default enabled)
            //     preventMouseEventsDefault: false, // enable or disable preventDefault for mouse events
            //     fit: true,
            //     center: true
            // });
            // var panZoom = svgPanZoom('#demo-tiger', {
            //     zoomEnabled: true,
            //     controlIconsEnabled: false,
            //     fit: true,
            //     center: true,
            //     dblClickZoomEnabled: false
            // });
            // document.getElementById('zoom-in').addEventListener('click', function(ev){
            //     ev.preventDefault()
      
            //     panZoom.zoomIn()
            // });
    
            // document.getElementById('zoom-out').addEventListener('click', function(ev){
            // ev.preventDefault()
    
            // panZoom.zoomOut()
            // });
    
            // document.getElementById('reset').addEventListener('click', function(ev){
            // ev.preventDefault()
    
            // panZoom.resetZoom()
            // });

            // $('[data-bs-toggle="popover"]').popover();


            if (deviceMovil ) {
                let carouselHomeElement = document.querySelector("#carouselHome");
                new bootstrap.Carousel(carouselHomeElement, {
                    ride: false,
                });
                let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
                new bootstrap.Carousel(carouselAmenitiesElement, {
                    ride: false,
                });
                if (($('#image_site').contents()[0].baseURI).search("lakuun") >= 1){
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: false,
                    });
                    let carouselLocationElement = document.querySelector("#carouselLocation");
                    new bootstrap.Carousel(carouselLocationElement, {
                        ride: false
                    });
                }
                console.log("carousel detenido");
                
            } else {
                let intervalCarousel = 9000;
                let carouselHomeElement = document.querySelector("#carouselHome");
                new bootstrap.Carousel(carouselHomeElement, {
                    interval: intervalCarousel,
                    ride: "carousel"
                });
                let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
                new bootstrap.Carousel(carouselAmenitiesElement, {
                    interval: intervalCarousel,
                    ride: "carousel"
                });
                if (($('#image_site').contents()[0].baseURI).search("lakuun") >= 1){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        interval: intervalCarousel,
                        ride: "carousel"
                    });
                    let carouselLocationElement = document.querySelector("#carouselLocation");
                    new bootstrap.Carousel(carouselLocationElement, {
                        interval: intervalCarousel,
                        ride: "carousel"
                    });
                }
                console.log("carousel intervalo definido");
            }

            // var url = $(location).attr('href');
            // console.log(url);
            // const arr = url.split('/');
            // let urlNow = window.location;
            // console.log(urlNow);
            // // https://developer.mozilla.org/
            // var element = document.getElementById("headingStage-" + arr[arr.length-1]);
            // element.scrollIntoView({block: "start", behavior: "smooth"});
            // let positionY = window.pageYOffset;
            // console.log("PosicionY actual- " + positionY + 'px');
            // window.scrollTo(0, positionY - 80);

            $(".loader-container-img").addClass('d-none');
            $(".load-image").removeClass('d-none');

});
