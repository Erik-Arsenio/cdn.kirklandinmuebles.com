// \\@ts-check

// let deviceMovil= false;

// function detectmob() {
//     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
//         // $('.className').popover('disable'); 
//         deviceMovil= true;
//         $('.mobile').removeClass('d-none');
//         // console.log("En Moviles");
//         $('.about-img, .about-img-right').removeClass('p-5').removeClass('pe-0');
//         $('.mouse-touche').empty().text('click ');
//         // $('.about-img').removeClass('p-5').removeClass('pe-0');

//     } else {
//         $('.not_mobile').removeClass('d-none');
//     }
// }
// detectmob();

$(document).ready(function(){

    // $('[data-bs-toggle="popover"]').popover();
    // Funtion Promo
    let lang = $('#language').val();
    // console.log("Idioma- " + lang);
    let promoHome = {
        lakuun : {
            es :[
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
                ],

            en : [
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Reconnect with nature, enjoy the diversity of our development, our unique amenities and the security of the safest state in Mexico"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Experience a new lifestyle in the GOLDEN LAND"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"An exclusive and safe residential development with all the comforts and more"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"The perfect balance between nature and elegance"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Delivery of the FIRST STAGE December 2024"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Dare to experience A NEW BEGINNING"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Make new friends in our eclectic CLUBHOUSE"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Numerous exceptional amenities in the RECREATIONAL, FAMILY and SPORTS areas"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Enjoy the company of friends with a barbecue in our GRILL AREA"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Spend memorable moments with your children in our CHILDREN'S AREA"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Even your pets will have fun in our PET PARK"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Enjoy a family outing and spend pleasant afternoons touring our BIKEWAY"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Practice your favorite sports with your partner"</p>`
                ]
        },
        anthia : {
            es : [
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
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Con 33% de Plusvalía. <br>Atrévete a experimentar<br> UN NUEVO COMIENZO"  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
                ],

            en : [
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"A semi-urbanized land development that offers investment lots."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"For a limited time, take advantage of the deposit starting at only $2,000 MXN."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Hunucma is an area of high growth potential surrounded by investment developments."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Access the development from Hunucmá's 30th street."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"It is a semi-urbanized land development that offers investment lots."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Located in Hunucmá, an area with high growth potential and surrounded by investment developments. National and international companies are investing in the area."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"5 minutes from Hunucma, 20 minutes from Mérida, 25 minutes from Sisal beaches, a magic town and platinum beaches, and 45 minutes from Port Progreso."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Has 5 Stages with a DISTINCTIVE ENTRANCEWAY at the entrance of each one. Each stage has its own green areas."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"With prices per sqm starting at $418 MXN, 10% down payment, and 60 interest-free monthly payments, you can have it by December 2025."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"If instead of buying a daily Americano Espresso for $69 MXN. <br> You invest only $56 MXN daily in an Anthia lot. <br> You will have a lot that will last you a lifetime"</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"With a 33% appreciation. <br>dare to experience a new beginning<br> <span class="fs-3 fw-bold text-danger">INVEST IN A NEW BEGINNING</span>"</p>`
                ]
        },
        marela_beach : {
            es : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Desarrollo de terrenos residenciales semi-urbanizados en la hermosa playa de Celestún"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún es considerado un paraíso eco-turístico del estado de Yucatán, nombrado Patrimonio Mundial de la reserva especial de la biosfera."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún, la única costa donde las olas te susurran y el sol te acaricia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Cuenta con un Club de playa dentro del desarrollo y a sólo 5 minutos del centro de Celestún."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"La playa de arena fina, el agua tranquila y poco profunda, rodeada de cocoteros, perfecta para toda la familia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Haz nuevos amigos en nuestro Club de Playa"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Atrévete a experimentar<br> UN NUEVO COMIENZO"</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
                ],

            en : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"A development of semi-urbanized lots on the beautiful beach of Celestun"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun is considered an eco-tourism paradise in the state of Yucatan, named a World Heritage Site of the special biosphere reserve."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"An exclusive and secure residential development with all the amenities and more."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun, the only coastline where the waves whisper to you and the sun caresses you.""</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"It has a beach club within the development and is only 5 minutes away from the center of Celestun.""</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"The fine sand beach, calm and shallow water, surrounded by coconut trees, perfect for the whole family."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Make new friends at our Beach Club."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Dare to experience<br> A NEW BEGINNING"</span>  <br><span class="fs-3 fw-bold text-danger">INVEST</span></p>`
                ]
        },
        marela_celestun : {
            es : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Desarrollo de terrenos residenciales semi-urbanizados en la hermosa playa de Celestún"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún es considerado un paraíso eco-turístico del estado de Yucatán, nombrado Patrimonio Mundial de la reserva especial de la biosfera."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún, la única costa donde las olas te susurran y el sol te acaricia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Cuenta con un Club de playa dentro del desarrollo y a sólo 5 minutos del centro de Celestún."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"La playa de arena fina, el agua tranquila y poco profunda, rodeada de cocoteros, perfecta para toda la familia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Haz nuevos amigos en nuestro Club de Playa"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Atrévete a experimentar<br> UN NUEVO COMIENZO"</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
                ],

            en : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"A development of semi-urbanized lots on the beautiful beach of Celestun"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun is considered an eco-tourism paradise in the state of Yucatan, named a World Heritage Site of the special biosphere reserve."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"An exclusive and secure residential development with all the amenities and more."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun, the only coastline where the waves whisper to you and the sun caresses you.""</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"It has a beach club within the development and is only 5 minutes away from the center of Celestun.""</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"The fine sand beach, calm and shallow water, surrounded by coconut trees, perfect for the whole family."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Make new friends at our Beach Club."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Dare to experience<br> A NEW BEGINNING"</span>  <br><span class="fs-3 fw-bold text-danger">INVEST</span></p>`
                ]
        },
        marela_life : {
            es : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Desarrollo de terrenos residenciales 100% urbanizados en la hermosa playa de Celestún"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún es considerado un paraíso eco-turístico del estado de Yucatán, nombrado Patrimonio Mundial de la reserva especial de la biosfera."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún, la única costa donde las olas te susurran y el sol te acaricia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Cuenta con una Casa Club dentro del desarrollo y puede comprar la membresía del Club de Playa."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"La playa de arena fina, el agua tranquila y poco profunda, rodeada de cocoteros, perfecta para toda la familia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Haz nuevos amigos en la Casa Club y Club de Playa"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Atrévete a experimentar<br> UN NUEVO COMIENZO"</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
                ],

            en : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"A development of 100% urbanized lots on the beautiful beach of Celestun"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun is considered an eco-tourism paradise in the state of Yucatan, named a World Heritage Site of the special biosphere reserve."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"An exclusive and secure residential development with all the amenities and more."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun, the only coastline where the waves whisper to you and the sun caresses you.""</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"It has a beach club within the development and is only 5 minutes away from the center of Celestun.""</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"The fine sand beach, calm and shallow water, surrounded by coconut trees, perfect for the whole family."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Make new friends at our Beach Club."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Dare to experience<br> A NEW BEGINNING"</span>  <br><span class="fs-3 fw-bold text-danger">INVEST</span></p>`
                ]
        },
    }

    // var url = $('#image_site').contents()[0].baseURI;
    // var array= url.split(/[//,/,?]/);
    // console.log(array);
    let investment = $('#investment').val();
    // console.log('Desarrollo- ' + investment);
    // console.log(promoHome[investment][lang][0])

    $(".promo").empty().html(promoHome[investment][lang][0]);
    // $(".promo").empty().html(promo[0]);
    let count = 1;

    function changeTextPromo(){
        if(count == promoHome[investment][lang].length){
            count = 0;
        }
        $(".promo").empty().html(promoHome[investment][lang][count]);
        // console.log(count);
        count++;
    }
    const myCarousel = document.getElementById('carouselHome');

    myCarousel.addEventListener('slid.bs.carousel', event => {
        console.log("En Home- " + event.target.id);
        // let btnTarget = event.target.id; 
        event.target.id == 'carouselHome' ? changeTextPromo() : '';
    })
    $(".carousel-control-prev").on("click", function (e) {
        e.stopImmediatePropagation();
        let btnId = $(this).attr('data-bs-target');
        if (btnId == "#carouselHome") {
            if (count <= 1) {
                count = promoHome[investment][lang].length - 1;
            } else {
                count = count - 2;
            }
            $(".promo").empty().html(promoHome[investment][lang][count]);
        }
    });

    if($("#carouselAmenitiesCasaClub").length > 0){
        const carouselAmenitiesCasaClubMov = document.getElementById('carouselAmenitiesCasaClub')
        carouselAmenitiesCasaClubMov.addEventListener('slid.bs.carousel', event => {
            console.log("En Club- " + event.target.id);
            event.stopImmediatePropagation();
            let hijos = $('#carouselAmenitiesCasaClub').children().children();
            let el = 0
            for (el = 0; el <= hijos.length -1 ; el++) {
                if(hijos[el].className == 'carousel-item active') break
            }
            $('.area-text').removeClass('text-success');
            $('.amenities-club-text-' + el).addClass('text-success');
        })
    } 
    // else  {
    //     console.log("Np existe el carousel de Casa Club");
    // }

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



    let data = []
    if ($('#image_site').hasClass('lots')) {
        $(".loader-container").removeClass('d-none');

        //Globals
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
            let lot = '';
            if (lang == 'es') {
                lot = 'Lote';
            } else if (lang == 'en'){
                lot = 'Lot';
                data.labels.available = 'Available';
                data.labels.not_available = 'Sold';
                data.labels.reserved = 'Reserved';
                data.labels.category_name = 'Type';
                data.labels.status_name = 'Status';
                data.labels.area = 'Area';
                data.labels.price = 'Price';
                data.labels.financing = 'Financing';
                data.labels.hitch = 'Down payment';
            }

            for (let stages = 1; stages <= data.numbers_stage; stages++) {

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

                            // if (data.properties[key].status_id == 1) {
                            //     available[stages] = available[stages] + 1;
                            // }
                            data.properties[key].status_id == 1 ? available[stages] = available[stages] + 1 : available[stages] = available[stages];
                            

                            $(this).attr('style', colorStatus[data.properties[key].category_id] || colorStatusDefault);
                            
                            // if (data.properties[key].category_id === 1) {
                            //     $(this).attr('style', colorAvailablePremium);
                            // } else if (data.properties[key].category_id === 2) {
                            //     $(this).attr('style', colorAvailablePlus);
                            // } else {
                            //     $(this).attr('style', colorAvailable);
                            // }
                            data.properties[key].status_id == 2 ? $(this).attr('style', colorReserved) : '';
                            // if (data.properties[key].status_id == 2){
                            //     $(this).attr('style', colorReserved);
                            // } 
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
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('title', " ").attr('title', `<b>${lot}</b> - ` + name_svg);
                            $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-html', " ").attr('data-bs-html', "true" );
                            selectionContainer = ``;
                            if (data.properties[key].category_id !== '') {
                                if (lang == 'es') {
                                    // lot = 'Lote';
                                } else if (lang == 'en'){
                                    data.properties[key].category_id == 3 ? data.properties[key].category_name = 'Standard' 
                                    : data.properties[key].category_id == 4 ? data.properties[key].category_name = 'Beachfront' : "";
                                }
                                selectionContainer = selectionContainer.concat(`<b>${data.labels.category_name}</b>: ${(data.properties[key].category_name)}<br>`);
                            }
                            if (data.properties[key].status_id !== '') {
                                if (lang == 'es') {
                                    // lot = 'Lote';
                                } else if (lang == 'en'){
                                    if (data.properties[key].status_id == 0) {
                                        data.properties[key].status_name = 'Sold';
                                    } else if (data.properties[key].status_id == 1) {
                                        data.properties[key].status_name = 'Available';
                                    } else if (data.properties[key].status_id == 0) {
                                        data.properties[key].status_name = 'Reserved';
                                    }

                                }
                                selectionContainer = selectionContainer.concat(`<b>${data.labels.status_name}</b>: ${data.properties[key].status_name}<br>`);
                            }
                            if (data.properties[key].area !== '') {
                                selectionContainer = selectionContainer.concat(`<b>${data.labels.area}</b>: ${data.properties[key].area} m<sup>2</sup><br>`);
                            }
                            if (data.properties[key].price !== '') {
                                selectionContainer = selectionContainer.concat(`<b>${data.labels.price}</b>: ${(parseInt((Number(data.properties[key].area) * data.properties[key].price))).toLocaleString('en-EN')} MXN<br>`);
                            }
                            if (data.properties[key].financing !== '') {
                                let upto = '';
                                let upto_type = '';
                                if (lang == 'es') {
                                    upto = 'Hasta';
                                    upto_type = 'MSI';
                                } else if (lang == 'en'){
                                    upto = 'Up to';
                                    upto_type = 'months';
                                }
                                selectionContainer = selectionContainer.concat(`<b>${data.labels.financing}</b>: ${upto} ${data.properties[key].financ} ${upto_type}<br>`);
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
        // console.log('deviceMovil- ' + deviceMovil);
        if (!deviceMovil ) {
            // Globals
            let id_html = $('#' +  id_img).html().trim();
            // console.log(`Leng total-  ${id_html.length}`);
            // console.log(id_html.search('carousel-caption'));
            let modalCarouselContainer = '';
            if (id_html.search('carousel-caption') >= 1) {
                // console.log("Cabeza- " + id_html.search('<div class="carousel-inner">'));
                let cabeza = '<div class="carousel-inner">'
                // console.log("Cabeza length- " + cabeza.length);
                let id_html_new = id_html.replace(cabeza,'');
                // console.log(`Leng sin encabezado-  ${id_html_new.length}`);
                // console.log(id_html_new.search('<button class="carousel-control-prev"'));
                id_html_new = id_html_new.slice(0, id_html_new.search('<button class="carousel-control-prev"'));
                id_html_new = id_html_new.replaceAll('height="1240 px"', "");
                id_html_new = id_html_new.replaceAll('width="1754 px"', 'style="width: 55vw;"');
                id_html_new = id_html_new.replaceAll('class="h6 text-dark"', 'class="h5 text-dark"');

                console.log(id_html_new);
                // console.log(id_html);
                modalCarouselContainer = id_html_new;
            } else {
                let src = $(this).attr('src');
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
            // console.log("Cantidad de Img- " + arr_img.length)
                if ( arr_img.length === 1) {
                    $('#carouselmodal').children('[data-bs-target="#carouselmodal"]').addClass('d-none')
                } else {
                    $('#carouselmodal').children('[data-bs-target="#carouselmodal"]').removeClass('d-none')
                }
            }
            $('#modal-carousel-container').empty();
            $('#modal-carousel-container').append(modalCarouselContainer);
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
                if ( investment != "marela_celestun") {
                    let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
                    new bootstrap.Carousel(carouselAmenitiesElement, {
                        ride: false,
                    });
                }
                if (investment == "lakuun" || investment == "marela_life"){
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: false,
                    });
                    // let carouselLocationElement = document.querySelector("#carouselLocation");
                    // new bootstrap.Carousel(carouselLocationElement, {
                    //     ride: false
                    // });
                }
                if (investment == "marela_life"){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: "carousel"
                    });
                    let carouselImagesCasaClubElement = document.querySelector("#carouselImagesCasaClub");
                    new bootstrap.Carousel(carouselImagesCasaClubElement, {
                        ride: "carousel"
                    });
                    let carouselMasterPlanElement = document.querySelector("#carouselMasterPlan");
                    new bootstrap.Carousel(carouselMasterPlanElement, {
                        ride: "carousel"
                    });
                }
                console.log("carousel detenido");
                
            } else {
                let intervalCarousel = 10000;
                let carouselHomeElement = document.querySelector("#carouselHome");
                new bootstrap.Carousel(carouselHomeElement, {
                    // interval: intervalCarousel,
                    ride: "carousel"
                });
                // console.log('Desarrollo- ' + investment);
                // if (($('#image_site').contents()[0].baseURI).search("marela_celestun") >= 1 || ($('#image_site').contents()[0].baseURI).search("marela_life") >= 1) {
                if ( investment != "marela_celestun") {
                    let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
                    new bootstrap.Carousel(carouselAmenitiesElement, {
                        interval: intervalCarousel,
                        ride: "carousel"
                    });
                }
                // if (($('#image_site').contents()[0].baseURI).search("lakuun") >= 1){
                if (investment == "lakuun" || investment == "marela_life"){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: "carousel",
                        pause: "hover",
                        // interval: intervalCarousel,
                    });
                  
                    // console.log("New Interval" + intervalCarousel);
                    // let carouselLocationElement = document.querySelector("#carouselLocation");
                    // new bootstrap.Carousel(carouselLocationElement, {
                    //     interval: intervalCarousel,
                    //     ride: "carousel"
                    // });
                }
                if (investment == "marela_life"){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        // interval: intervalCarousel,
                        ride: "carousel"
                    });
                    let carouselImagesCasaClubElement = document.querySelector("#carouselImagesCasaClub");
                    new bootstrap.Carousel(carouselImagesCasaClubElement, {
                        // interval: intervalCarousel,
                        ride: "carousel"
                    });
                    let carouselMasterPlanElement = document.querySelector("#carouselMasterPlan");
                    new bootstrap.Carousel(carouselMasterPlanElement, {
                        // interval: intervalCarousel,
                        ride: "carousel"
                    });
                }
                $('.carousel').carousel({
                    interval: 30000
                });
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
