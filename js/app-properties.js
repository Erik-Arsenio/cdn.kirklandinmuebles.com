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
 
    $("#promo_lakuun").empty().html(promo_lakuun[0]);
    let count = 1;

    changeTextPromo = function(){
        if(count == promo_lakuun.length){
            count = 0;
        }
        $("#promo_lakuun").empty().html(promo_lakuun[count]);
        // console.log(count);
        count++;
        // console.log(bootstrap.Carousel.getInstance(carouselHome));
        // setTimeout(changeTextPromo, 11000);
    }
    // const myCarousel = document.getElementById('carouselHome, carouselmodal');
    const myCarousel = document.getElementById('carouselHome', 'carouselmodal');

    myCarousel.addEventListener('slid.bs.carousel', event => {
        changeTextPromo();
    })
    $(".carousel-control-prev").on("click", function (e) {
        e.stopImmediatePropagation();

        let selectTarget = $(this).attr('data-bs-target');
        console.log(count);
        if (count <= 1) {
            count = promo.length - 1;
        } else {
            count = count - 2;
        }
        $("#promo_lakuun").empty().html(promo[count]);
        // console.log(selectTarget);

    });





    $(".accordion-header").on("click", function() {
        // Globals
        
        let btnId = $(this).attr('id');
        let btnClass = $(this).attr('class');
        let tradeDetailsContainer = $("#trade-details-container");
        // console.log("hola- " + btnId);

    });

    // console.time('Load');

    let data = []

    if ($('#image_site').hasClass('lots')) {
        $(".loader-container").removeClass('d-none');
        if (($('#image_site').contents()[0].baseURI).search("beach") >= 1) {
            $(document).prop('title', 'Marela Beach');
            data = JSON.parse(`
                {
                "numbers_stage": 1,
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "category_name": "Tipo",
                    "status_name": "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"stage": 1, "name": "L-1",  "area":"678.8",   "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-2",  "area":"280",     "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-3",  "area":"280",     "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-4",  "area":"280",     "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-5",  "area":"280",     "status_id": 2  ,"status_name":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-6",  "area":"280",     "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-7",  "area":"280",     "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-8",  "area":"280",     "status_id": 1  ,"status_name":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-9",  "area":"280",     "status_id": 1  ,"status_name":"Disponible" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-10",  "area":"280",    "status_id": 1  ,"status_name":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-11",  "area":"280",    "status_id": 1  ,"status_name":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-12",  "area":"280",    "status_id": 1  ,"status_name":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-13",  "area":"280",    "status_id": 2  ,"status_name":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-14",  "area":"280",    "status_id": 1  ,"status_name":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-15",  "area":"280",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "category_id": 4 ,"category_name": "Frente al mar", "description": ""},
                {"stage": 1, "name": "L-16",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-17",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-18",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-19",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-20",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-21",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-22",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-23",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-24",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-25",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-26",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-27",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-28",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-29",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-30",  "area":"117.81", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-31",  "area":"218.89", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-32",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" , "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-33",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-34",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-35",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-36",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-37",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-38",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-39",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-40",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,"price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-41",  "area":"172",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-42",  "area":"219.82", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-43",  "area":"153.10", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 5 ,"category_name": "Segunda fila plus", "description": ""},
                {"stage": 1, "name": "L-44",  "area":"166.34", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-45",  "area":"179.59", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-46",  "area":"192.83", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-47",  "area":"174.07", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-48",  "area":"187.31", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-49",  "area":"200.55", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-50",  "area":"213.79", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-51",  "area":"225.70", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-52",  "area":"181.69", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-53",  "area":"182.65", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-54",  "area":"183.61", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-55",  "area":"184.56", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-56",  "area":"199.06", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-57",  "area":"192",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-58",  "area":"192",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-59",  "area":"192",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-60",  "area":"192",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-61",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-62",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-63",  "area":"160",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-64",  "area":"188.39", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-65",  "area":"204.39", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-66",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-67",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-68",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-69",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-70",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-71",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-72",  "area":"176",    "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-73",  "area":"187.79", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-74",  "area":"188.75", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-75",  "area":"178.52", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-76",  "area":"179.37", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""},
                {"stage": 1, "name": "L-77",  "area":"180.22", "status_id": 2  ,"status_name":"Vendido" ,   "price": 5065,  "financ": "Hasta 48 MSI", "enganche": "10%", "category_id": 6 ,"category_name": "Segunda fila", "description": ""}
            ]}
            `);
        } else if (($('#image_site').contents()[0].baseURI).search("celestun") >= 1){
            $(document).prop('title', 'Marela Celestún');
            data = JSON.parse(`
            {
                "numbers_stage": 1,
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "category_name": "Tipo",
                    "status_name":  "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"stage": 1, "name": "M-1",  "area":"260.22", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-2",  "area":"222.09", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-3",  "area":"239.48", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-4",  "area":"349.24", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-5",  "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-6",  "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-7",  "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-8",  "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-9",  "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-10",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-11",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-12",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-13",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-14",  "area":"247",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-15",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-16",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-17",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-18",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-19",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-20",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-21",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-22",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-23",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-24",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-25",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-26",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-27",  "area":"247",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-28",  "area":"312",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-29",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-30",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-31",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-32",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-33",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-34",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-35",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-36",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-37",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-38",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-39",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-40",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-41",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-42",  "area":"312",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-43",  "area":"312",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-44",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-45",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-46",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-47",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-48",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-49",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-50",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-51",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-52",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-53",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-54",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-55",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-56",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-57",  "area":"312",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-58",  "area":"247",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-59",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-60",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-61",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-62",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-63",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-64",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-65",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-66",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-67",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-68",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-69",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-70",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-71",  "area":"247",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-72",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-73",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-74",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-75",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-76",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-77",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-78",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-79",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-80",  "area":"257.61","status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-81",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-82",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-83",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-84",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-85",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-86",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-87",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-88",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-89",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-90",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-91",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-92",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-93",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-94",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-95",  "area":"208",   "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-96",  "area":"361.14", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-97",  "area":"288.59", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-98",  "area":"223.82", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-99",  "area":"223.82", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-100", "area":"242.01", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-101", "area":"250.68", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-102", "area":"259.36", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-103", "area":"268.03", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-104", "area":"276.7",  "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",  "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-105", "area":"285.38", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-106", "area":"294.05", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-107", "area":"379.77", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-108", "area":"320",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-109", "area":"256",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-110", "area":"256",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-111", "area":"256",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-112", "area":"256",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-113", "area":"256",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-114", "area":"256",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-115", "area":"256",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-116", "area":"256",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-117", "area":"256",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-118", "area":"395.75", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-119", "area":"349.91", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-120", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-121", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-122", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-123", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-124", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-125", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-126", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-127", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-128", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-129", "area":"260",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-130", "area":"260",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-131", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-132", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-133", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-134", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-135", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-136", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-137", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-138", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-139", "area":"204.08", "status_id": 2  ,"status_name":"Vendido" ,"price":  3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-140", "area":"295.33", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",  "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-141", "area":"235.43", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",  "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-142", "area":"204.34", "status_id": 1  ,"status_name":"Disponible" ,"price":  3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-143", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-144", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-145", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-146", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-147", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-148", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-149", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",          "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-150", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-151", "area":"260",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-152", "area":"260",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-153", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id":3   ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-154", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-155", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-156", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-157", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-158", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-159", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-160", "area":"280",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-161", "area":"206.52", "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-162", "area":"245.8",  "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-163", "area":"291.37", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-164", "area":"205.77", "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3   ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-165", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-166", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-167", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-168", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-169", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-170", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",          "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-171", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",          "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-172", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-173", "area":"286",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-174", "area":"286",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-175", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-176", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-177", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-178", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-179", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-180", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-181", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-182", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-183", "area":"205.53", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-184", "area":"289.74", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-185", "area":"246.96", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-186", "area":"207.2",  "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-187", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-188", "area":"208",    "status_id": 1  ,"status_name":"Disponible" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-189", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-190", "area":"244",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-191", "area":"244",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-192", "area":"244",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-193", "area":"244",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-194", "area":"244",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-195", "area":"305",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-196", "area":"346.51", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-197", "area":"263.39", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-198", "area":"251.11", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-199", "area":"238.83", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-200", "area":"226.55", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-201", "area":"214.27", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-202", "area":"237.99", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-203", "area":"225.71", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-204", "area":"213.43", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-205", "area":"195.51", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-206", "area":"201.13", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-207", "area":"301.2",  "status_id":  2 ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-208", "area":"207.61", "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-209", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%",       "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-210", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-211", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-212", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-213", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-214", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-215", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-216", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-217", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-218", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-219", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-220", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-221", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-222", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-223", "area":"208",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 1, "name": "M-224", "area":"312",    "status_id": 2  ,"status_name":"Vendido" ,"price": 3400, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""}
            ]}
            `);
        } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1){
            $(document).prop('title', 'Anthia');
            data = JSON.parse(`
            {
                "numbers_stage": 2,
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "category_name": "Tipo",
                    "status_name":  "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [

                    {"stage": 1, "name": "A-1",  "area":"354.46", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-2",  "area":"351.29", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-3",  "area":"344.18", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-4",  "area":"333.12", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-5",  "area":"1010.2", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-6",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-7",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-8",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-9",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-10",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-11",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-12",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-13",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-14",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-15",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-16",  "area":"300",   "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-17",  "area":"300",   "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-18",  "area":"446.26", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-19",  "area":"512.21", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-20",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-21",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-22",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-23",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-24",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-25",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-26",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-27",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-28",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-29",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-30",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-31",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-32",  "area":"1114.53","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-33",  "area":"395.62", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-34",  "area":"337.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-35",  "area":"337.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-36",  "area":"337.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-37",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-38",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-39",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-40",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-41",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-42",  "area":"643.24", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-43",  "area":"339.54", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-44",  "area":"294",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-45",  "area":"294",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-46",  "area":"294",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-47",  "area":"294",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-48",  "area":"294",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-49",  "area":"294",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-50",  "area":"421.6",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-51",  "area":"458.54", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-52",  "area":"384.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-53",  "area":"349.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-54",  "area":"324.06", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-55",  "area":"308.9",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-56",  "area":"303.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-57",  "area":"307.71", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-58",  "area":"371.43", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-59",  "area":"465.43", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-60",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-61",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-62",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-63",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-64",  "area":"324",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-65",  "area":"337.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-66",  "area":"337.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-67",  "area":"652.82", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-68",  "area":"573.93", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-69",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-70",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-71",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-72",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-73",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-74",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-75",  "area":"567.86", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-76",  "area":"460.12", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-77",  "area":"285.66", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-78",  "area":"305.59", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-79",  "area":"317.93", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-80",  "area":"322.78", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-81",  "area":"320.16", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-82",  "area":"310.05", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-83",  "area":"292.39", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-84",  "area":"583.92", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-85",  "area":"584.22", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-86",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-87",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-88",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-89",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-90",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-91",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-92",  "area":"312.5",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-93",  "area":"418.13", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-94",  "area":"525.77", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-95",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-96",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-97",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-98",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-99",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-100",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-101",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-102",  "area":"452.45","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-103",  "area":"346.4", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-104",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-105",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-106",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-107",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-108",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-109",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-110",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-111",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-112",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-113",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-114",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-115",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-116",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-117",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-118",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-119",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-120",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-121",  "area":"650.75","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-122",  "area":"465.58","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-123",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-124",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-125",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-126",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-127",  "area":"459.02","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-128",  "area":"346.21","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-129",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-130",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-131",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-132",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-133",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-134",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-135",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-136",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-137",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-138",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-139",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-140",  "area":"412.39","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-141",  "area":"379.66","status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-142",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-143",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-144",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-145",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-146",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-147",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-148",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-149",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-150",  "area":"300",   "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-151",  "area":"332.56", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-152",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-153",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-154",  "area":"300",    "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-155",  "area":"917.85", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-156",  "area":"349.18", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-157",  "area":"349.18", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-158",  "area":"337.93", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-159",  "area":"343.38", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-160",  "area":"341.23", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-161",  "area":"334.45", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-162",  "area":"324.3",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-163",  "area":"316.22", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-164",  "area":"311.39", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-165",  "area":"309.81", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-166",  "area":"311.51", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-167",  "area":"315.82", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-168",  "area":"321.55", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-169",  "area":"384.21", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-170",  "area":"394.76", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-171",  "area":"310.94", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},

                
                {"stage": 2, "name": "L-1",  "area":"354.46",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-2",  "area":"351.29",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-3",  "area":"344.18",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-4",  "area":"333.12",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-5",  "area":"1010.2",  "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-6",  "area":"300",  "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-7",  "area":"300",  "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-8",  "area":"300",  "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-9",  "area":"300",  "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-10",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-11",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-12",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-13",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-14",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-15",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-16",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-17",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-18",  "area":"446.26", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-19",  "area":"512.21", "status_id": 1,"status_name":"Disponible","price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-20",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-21",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-22",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-23",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-24",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-25",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-26",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-27",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-28",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-29",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-30",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-31",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-32",  "area":"1114.53", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-33",  "area":"395.62", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-34",  "area":"337.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-35",  "area":"337.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-36",  "area":"337.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-37",  "area":"324", "status_id": 1 ,  "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-38",  "area":"324", "status_id": 1 ,  "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-39",  "area":"324", "status_id": 1 ,  "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-40",  "area":"324", "status_id": 1 ,  "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-41",  "area":"324", "status_id": 2 ,    "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-42",  "area":"643.24", "status_id": 2 , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-43",  "area":"339.54", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-44",  "area":"294", "status_id": 2  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-45",  "area":"294", "status_id": 2  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-46",  "area":"294", "status_id": 2  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-47",  "area":"294", "status_id": 2  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-48",  "area":"294", "status_id": 2  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-49",  "area":"294", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-50",  "area":"421.6", "status_id": 2  , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-51",  "area":"458.54", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-52",  "area":"384.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-53",  "area":"349.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-54",  "area":"324.06", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-55",  "area":"308.9", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-56",  "area":"303.47", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-57",  "area":"307.71", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-58",  "area":"371.43", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-59",  "area":"465.43", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-60",  "area":"324", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-61",  "area":"324", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-62",  "area":"324", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-63",  "area":"324", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3 ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-64",  "area":"324", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-65",  "area":"337.5", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-66",  "area":"337.5", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-67",  "area":"652.82", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-68",  "area":"573.93", "status_id": 2 ,  "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-69",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-70",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-71",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-72",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-73",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-74",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-75",  "area":"567.86", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-76",  "area":"460.12", "status_id": 2  , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-77",  "area":"285.66", "status_id": 2  , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-78",  "area":"305.59", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-79",  "area":"317.93", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-80",  "area":"322.78", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-81",  "area":"320.16", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-82",  "area":"310.05", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-83",  "area":"292.39", "status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-84",  "area":"583.92", "status_id": 2,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-85",  "area":"584.22", "status_id": 2,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-86",  "area":"312.5", "status_id": 2  ,  "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-87",  "area":"312.5", "status_id": 2  ,  "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-88",  "area":"312.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-89",  "area":"312.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-90",  "area":"312.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-91",  "area":"312.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-92",  "area":"312.5", "status_id": 1 ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-93",  "area":"418.13", "status_id": 2  , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-94",  "area":"525.77", "status_id": 1  , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-95",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-96",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-97",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-98",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-99",  "area":"300", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-100",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-101",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-102",  "area":"452.45", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-103",  "area":"346.4", "status_id": 2  , "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-104",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-105",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-106",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-107",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-108",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-109",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-110",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-111",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-112",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-113",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-114",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-115",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-116",  "area":"300", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-117",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-118",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-119",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-120",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-121",  "area":"650.75", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-122",  "area":"465.58", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-123",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-124",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-125",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-126",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-127",  "area":"459.02", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-128",  "area":"346.21", "status_id": 1,"status_name":"Disponible","price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-129",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-130",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-131",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-132",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-133",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-134",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-135",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-136",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-137",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-138",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-139",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-140",  "area":"412.39","status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-141",  "area":"379.66","status_id": 1,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-142",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-143",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-144",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-145",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-146",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-147",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-148",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-149",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-150",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-151",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-152",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-153",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-154",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-155",  "area":"917.85", "status_id": 2  ,"status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-156",  "area":"349.18", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-157",  "area":"349.18", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-158",  "area":"337.93", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-159",  "area":"343.38", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-160",  "area":"341.23", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-161",  "area":"334.45", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-162",  "area":"324.3", "status_id": 1  , "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-163",  "area":"316.22", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-164",  "area":"311.39", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-165",  "area":"309.81", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-166",  "area":"311.51", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-167",  "area":"315.82", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-168",  "area":"321.55", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-169",  "area":"384.21", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-170",  "area":"394.76", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-171",  "area":"310.94", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-172",  "area":"304.64", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-173",  "area":"303.55", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-174",  "area":"307.32", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-175",  "area":"315.97", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-176",  "area":"433.09", "status_id": 2  ,   "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-177",  "area":"1182.26", "status_id": 2  ,  "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-178",  "area":"300", "status_id": 2  ,      "status_name":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-179",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-180",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "L-181",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-182",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-183",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-184",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-185",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-186",  "area":"300", "status_id": 1  ,   "status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "L-187",  "area":"360.96", "status_id": 1  ,"status_name":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""}
            ]}
            `)
            // "type_id": 1, 
            // "type_name":
        } else if (($('#image_site').contents()[0].baseURI).search("lakuun") >= 1){
            $(document).prop('title', 'Lakuun');
            data = JSON.parse(`
            {
                "numbers_stage": 2,
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "category_name": "Tipo",
                    "status_name":  "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [

                    {"stage": 1, "name": "A-01",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-02",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-03",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-04",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-05",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-06",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-07",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-08",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-09",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-10",  "area":"314.09", "status_id": 1 ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-11",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-12",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-13",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-14",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-15",  "area":"303.52", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-16",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1 ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-17",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-18",  "area":"314.08", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-19",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-20",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-21",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-22",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-23",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-24",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-25",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-26",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-27",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-28",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-29",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-30",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-31",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-32",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-33",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-34",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-35",  "area":"303.52", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-36",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-37",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-38",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-39",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-40",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-41",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-42",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-43",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-44",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-45",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-46",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-47",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-48",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-49",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-50",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-51",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-52",  "area":"303.52", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-53",  "area":"630.49", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-54",  "area":"630.22", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-55",  "area":"630.76", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-56",  "area":"314.08", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-57",  "area":"508.93", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-58",  "area":"314.08", "status_id": 2  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-59",  "area":"508.96", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-60",  "area":"508.98", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-61",  "area":"508.99", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-62",  "area":"509.01", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-63",  "area":"528.79", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-64",  "area":"311.57", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-65",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-66",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-67",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-68",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-69",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-70",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-71",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-72",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-73",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id":  1 ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-74",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-75",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-76",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-77",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-78",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-79",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-80",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-81",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-82",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-83",  "area":"295.6", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-84",  "area":"295.99", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-85",  "area":"299.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-86",  "area":"299.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-87",  "area":"299.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-88",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-89",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-90",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-91",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-92",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-93",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-94",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-95",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-96",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-97",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-98",  "area":"293.28", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-99",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-100",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-101",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-102",  "area":"313.9", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-103",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-104",  "area":"313.9", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-105",  "area":"313.9", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-106",  "area":"313.9", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-107",  "area":"313.9", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-108",  "area":"313.9", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-109",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-110",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-111",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-112",  "area":"295.99", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-113",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-114",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-115",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-116",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-117",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-118",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-119",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-120",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-121",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-122",  "area":"293.28", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-123",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-124",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-125",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-126",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-127",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-128",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-129",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-130",  "area":"299.79", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-131",  "area":"295.99", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-132",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-133",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-134",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-135",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-136",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-137",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-138",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-139",  "area":"297.85", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-140",  "area":"299.46", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-141",  "area":"299.41", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-142",  "area":"299.36", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-143",  "area":"299.31", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-144",  "area":"299.27", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-145",  "area":"299.22", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-146",  "area":"299.17", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-147",  "area":"299.13", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-148",  "area":"299.08", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-149",  "area":"299.03", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-150",  "area":"298.98", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-151",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-152",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-153",  "area":"298.84", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-154",  "area":"298.80", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-155",  "area":"298.75", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-156",  "area":"298.70", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-157",  "area":"298.65", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-158",  "area":"298.61", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-159",  "area":"298.56", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-160",  "area":"298.51", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-161",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-162",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-163",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-164",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-165",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-166",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-167",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-168",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-169",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-170",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-171",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-172",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-173",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-174",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-175",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-176",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-177",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-178",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-179",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-180",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-181",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-182",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-183",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-184",  "area":"298.32", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-185",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-186",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-187",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-188",  "area":"298.47", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-189",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-190",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-191",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-192",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-193",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-194",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-195",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-196",  "area":"295.6", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-197",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-198",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-199",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-200",  "area":"298.47", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-201",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-202",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-203",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-204",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-205",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-206",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-207",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-208",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-209",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-210",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-211",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-212",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-213",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-214",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-215",  "area":"303.52", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-216",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                    {"stage": 1, "name": "A-217",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2 ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-218",  "area":"354.65", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-219",  "area":"349.95", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-220",  "area":"350.02", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-221",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-222",  "area":"349.89", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-223",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-224",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-225",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-226",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-227",  "area":"300.13", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-228",  "area":"300.08", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-229",  "area":"300.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-230",  "area":"299.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-231",  "area":"299.94", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-232",  "area":"299.90", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-233",  "area":"299.35", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-234",  "area":"299.80", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-235",  "area":"299.75", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-236",  "area":"299.71", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-237",  "area":"299.66", "status_id": 1  ,"status_name":"Disponible" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                    {"stage": 1, "name": "A-238",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-239",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-240",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-241",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-242",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                    {"stage": 1, "name": "A-243",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2450, "financ": "Hasta 60 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},


                {"stage": 2, "name": "B-01",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-02",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-03",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-04",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-05",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-06",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-07",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-08",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-09",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-10",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-11",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-12",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-13",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-14",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-15",  "area":"303.52", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-16",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-17",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-18",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-19",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-20",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-21",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-22",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-23",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-24",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-25",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-26",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-27",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-28",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-29",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-30",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-31",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-32",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-33",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-34",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-35",  "area":"303.52", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-36",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-37",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-38",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-39",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-40",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-41",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-42",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-43",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-44",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-45",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-46",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-47",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-48",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-49",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-50",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-51",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-52",  "area":"303.52", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-53",  "area":"630.49", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-54",  "area":"630.22", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-55",  "area":"630.76", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-56",  "area":"508.46", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-57",  "area":"508.93", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-58",  "area":"508.95", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-59",  "area":"508.96", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-60",  "area":"508.98", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-61",  "area":"508.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-62",  "area":"509.01", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-63",  "area":"528.79", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-64",  "area":"311.57", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-65",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-66",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-67",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-68",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-69",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-70",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-71",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-72",  "area":"314.04", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-73",  "area":"314.04", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-74",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-75",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-76",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-77",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-78",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-79",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-80",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-81",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-82",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-83",  "area":"295.6", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-84",  "area":"295.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-85",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-86",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-87",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-88",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-89",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-90",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-91",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-92",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-93",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-94",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-95",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-96",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-97",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-98",  "area":"293.28", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-99",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-100",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-101",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-102",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-103",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-104",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-105",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-106",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-107",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-108",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-109",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-110",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-111",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-112",  "area":"295.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-113",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-114",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-115",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-116",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-117",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-118",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-119",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-120",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-121",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-122",  "area":"293.28", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-123",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-124",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-125",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-126",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-127",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-128",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-129",  "area":"300", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-130",  "area":"299.79", "status_id": 2  ,"status_name":"Vendido" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-131",  "area":"295.99", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-132",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-133",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-134",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-135",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-136",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-137",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-138",  "area":"300", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 3  ,"category_name": "estandar", "description": ""},
                {"stage": 2, "name": "B-139",  "area":"297.85", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 1  ,"category_name": "premium", "description": ""},
                {"stage": 2, "name": "B-140",  "area":"299.46", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-141",  "area":"299.41", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-142",  "area":"299.36", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-143",  "area":"299.31", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-144",  "area":"299.27", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-145",  "area":"299.22", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-146",  "area":"299.17", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-147",  "area":"299.13", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-148",  "area":"299.08", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-149",  "area":"299.03", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-150",  "area":"298.98", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-151",  "area":"298.94", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-152",  "area":"298.89", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-153",  "area":"298.84", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-154",  "area":"298.80", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-155",  "area":"298.75", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-156",  "area":"298.70", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-157",  "area":"298.65", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-158",  "area":"298.61", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-159",  "area":"298.56", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-160",  "area":"298.51", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""},
                {"stage": 2, "name": "B-161",  "area":"298.47", "status_id": 1  ,"status_name":"Disponible" ,"price": 2850, "financ": "Hasta 80 MSI", "enganche": "10%", "category_id": 2  ,"category_name": "plus", "description": ""}
            ]}
            `)
        }
 
        // let data_propertie = JSON.parse($('#data_propertie').val());
    //    ($('#data_propertie').val(data_propertie));
        console.log(data);

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