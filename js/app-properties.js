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
    let static_url = $('#static_url').val();
    let promoModalsisal = {
        title : "Playa Sisal",
        images : `
        <div class="carousel-item active">
            <img src="${static_url}img/anthia/promo/14.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/15.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/16.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/17.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div> 
        `,
        content : `
            <p class="fw-bold text-center">A solo 25 minutos del desarrollo.</p>
            <p class="text-start">Sisal es un lugar muy tranquilo, que tiene una hermosa playa que te invita a la relajación.</p>
            <p class="text-start">Esta ciudad colonial es especialmente conocida por sus hermosas construcciones históricas, como el Palacio de Gobernador, el Faro de Sisal, el Centro Histórico y la Iglesia de San Miguel.</p>
            <p class="text-start">Además puedes: Visitar la famosa casa de la Emperatriz Carlota, el Fuerte de Santiago, la Laguna Cocodrilos y Reserva El Palmar,
                disfrutar del atardecer en el Mirador Charcas, pasear por su muelle que recientemente fue remozado.</p>
            <p class="text-start">Además de las atracciones históricas, Sisal ofrece una variedad de oportunidades de ocio. Los visitantes disfrutan de una amplia variedad de actividades, desde paseos en bote por el lago hasta paradas para visitar los mercados locales. 
            También hay muchas oportunidades para descansar y relajarse en el lado caribeño de la ciudad, con hermosas playas y una amplia selección de spas y centros de bienestar.</p>
            <p class="text-start">En los alrededores del lugar podrás encontrar variedad de restaurantes con comida típica o mariscos, también de puestos donde venden el tradicional pescado frito y otras delicias del mar.</p>
            <p class="text-start">Los habitantes también disfrutan de la extensa selección de bares y discotecas que hay en la ciudad.</p>
        `
    }
    let promoModalhunucma = {
        title : "Hunucmá",
        images : `
        <div class="carousel-item active">
            <img src="${static_url}img/anthia/promo/01.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/02.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/03.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>

        `,
        content : `
            <p class="fw-bold text-center">A solo 5 minutos del desarrollo.</p>
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
            Por $20 pesos puedes refrescarte y cambiarte en la casa de Sergio, quien amablemente te ofrece todas las facilidades que requieras.</p>
        `
    }
    let promoModalprogreso = {
        title : "Puerto Progreso",
        images : `
        <div class="carousel-item active">
            <img src="${static_url}img/anthia/promo/04.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/05.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/06.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/07.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>

        `,
        content : `
            <p class="fw-bold text-center">A solo 45 minutos del desarrollo.</p>
            <p class="text-start">Puerto Progreso es una ciudad costera hermosa y con mucho encanto. La ciudad ha estado creciendo constantemente en los últimos años por su ubicación privilegiada frente al Caribe, alojamiento y atracciones turísticas.</p>
            <p class="text-start">Las atracciones de Puerto Progreso incluyen el faro de la ciudad, que ofrece una vista impresionante y hermosas puestas de sol todas las noches. Allí también se encuentra el parque marino Aguazul, que ofrece la mejor experiencia submarina en la región.</p>
            <p class="text-start">La Playa Norte es un lugar popular para los visitantes debido a sus tranquilas aguas turquesas y hermosas arenas blancas. También hay varias tiendas de alquiler de equipos de snorkel y buceo, donde pueden disfrutar de hermosas vistas submarinas.</p>
            <p class="text-start">Otra de las principales atracciones turísticas de Puerto Progreso es la Plaza Comercial Xcanatún, un complejo comercial moderno con una gran variedad de tiendas, restaurantes y áreas de entretenimiento. La plaza también cuenta con una zona deportiva.</p>
        `
    }
    let promoModalcelestun = {
        title : "Celestún",
        images : `
        <div class="carousel-item active">
            <img src="${static_url}img/anthia/promo/Playa_Celestún_Yucatán.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/Playa_Norte_Celestún.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/Playa_Sur_Celestún.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="${static_url}img/anthia/promo/Reserva_de_la_Biósfera_Los_Petenes.jpg" class="card-img-top img-fluid w-75 " alt="...">
        </div>
        `,
        content : `
            <p class="fw-bold text-center">A solo 50 minutos del desarrollo.</p>
            <p class="text-start">Celestún se ha convertido en un destino turístico y comercial único en la región. Esta ciudad encantadora ofrece una variedad de atracciones y plazas comerciales que no se encuentran en ningún otro lugar.</p>
            <p class="text-start">Su principal punto de interés turístico es el Faro de San Carlos, que se remonta a mediados del siglo XIX. El diseño único de este antiguo faro atrae a miles de visitantes cada año. El faro es conocido por estar rodeado de hermosas playas de arena blanca y aguas cristalinas.</p>
            <p class="text-start">También se encuentran cafeterías, restaurantes y bares que ofrecen comida local e internacional, así como una amplia variedad de entretenimiento. La plaza comercial más grande de Celestún es el Centro Comercial El Faro, con más de 100 tiendas, restaurantes y negocios. Esta plaza comercial es el lugar ideal para realizar compras y disfrutar de toda la cultura de Celestún.</p>
            <p class="text-start">Además de las numerosas atracciones turísticas y comerciales, aquí se ofrece una amplia gama de actividades recreativas. Estas actividades van desde el buceo en el Gran Cenote hasta la observación de aves en el Parque Nacional de Las Coloradas. Los amantes de la naturaleza también disfrutan de los senderos para caminar por la montaña, las hayas y los límites de la selva. </p>
            <p class="text-start">Celestún es un destino único para todas las edades. Ofrece una variedad de experiencias, desde la exploración de ruinas antiguas hasta el disfrute de la cultura local. Se puede disfrutar la hermosa arquitectura, la cultura vibrante y las actividades al aire libre. </p>
            <p class="text-start">Esto significa que los visitantes pueden explorar el Faro de San Carlos durante el día y pasar la noche en la plaza comercial El Faro.</p>
        `
    }
 

    $("#sisal, #hunucma, #progreso, #celestun ").on("click", function(e) {
        e.stopImmediatePropagation();
        let btnId = $(this).attr('id');
        // let btnClass = $(this).attr('class');
        // $(this).closest("a").prop("data-bs-target");
        let promoModal = [];
        if (btnId == 'sisal') {
            promoModal = promoModalsisal;
        } else if (btnId == 'hunucma') {
            promoModal = promoModalhunucma;
        } else if (btnId == 'progreso') {
            promoModal = promoModalprogreso;
        } else if (btnId == 'celestun') {
            promoModal = promoModalcelestun;
        } else if (btnId == 'merida') {
            promoModal = promoModalmerida;
        }
        console.log('Click en mapa de  ' + btnId );
        $('#promoModalContent, #promoModalImages, #promoModalLabel').empty();
        $('#promoModalLabel').append(promoModal.title);
        $('#promoModalImages').append(promoModal.images);
        $('#promoModalContent').append(promoModal.content);
        $("#promoModal").modal("show");

    });



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
