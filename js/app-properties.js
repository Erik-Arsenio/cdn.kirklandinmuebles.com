
    var url = $('#image_site').contents()[0].baseURI;
    var array= url.split(/[//,/,?]/);
    // Funtion Promo
    lang = array[array.length - 1].slice(5);
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
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun, the only coastline where the waves whisper to you and the sun caresses you."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"It has a beach club within the development and is only 5 minutes away from the center of Celestun."</p>`,
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
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun, the only coastline where the waves whisper to you and the sun caresses you."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"It has a beach club within the development and is only 5 minutes away from the center of Celestun."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"The fine sand beach, calm and shallow water, surrounded by coconut trees, perfect for the whole family."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Make new friends at our Beach Club."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Dare to experience<br> A NEW BEGINNING"</span>  <br><span class="fs-3 fw-bold text-danger">INVEST</span></p>`
                ]
        },
        marela_life : {
            es : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Desarrollo de terrenos residenciales 100% urbanizados en la hermosa playa de Celestún"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún es considerado un paraíso eco-turístico del estado de Yucatán, nombrado Patrimonio Mundial de la reserva especial de la biosfera."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más.<br>Es como vivir dentro de un Resort en la Rivera Yucateca."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestún, la única costa donde las olas te susurran y el sol te acaricia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Cuenta con una Casa Club dentro del desarrollo y un Club de Playa. A sólo 5 minutos del centro de Celestún."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"La playa de arena fina, el agua tranquila y poco profunda, rodeada de cocoteros, perfecta para toda la familia."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Haz nuevos amigos en la Casa Club y Club de Playa. A 150 metro de la playa con camino exclusivo y directo a ella"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Atrévete a experimentar<br> UN NUEVO COMIENZO"</span>  <br><span class="fs-3 fw-bold text-danger">INVIERTE</span></p>`
                ],

            en : [
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Development of 100% urbanized residential land on the beautiful beach of Celestún"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun is considered an eco-tourism paradise in the state of Yucatan, named a World Heritage Site of the special biosphere reserve."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"An exclusive and secure residential development with all the amenities and more.<br>Is like living inside a Resort on the Yucatecan Riviera."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Celestun, the only coastline where the waves whisper to you and the sun caresses you."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"It has a Club House within the development and Beach Club. Is only 5 minutes away from the center of Celestun."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"The fine sand beach, calm and shallow water, surrounded by coconut trees, perfect for the whole family."</p>`,
                `<p class="fs-3 fst-italic fw-bold text-success-emphasis">"Make new friends at our Club House and Beach Club. 150 meters from the beach with an exclusive and direct path to it"</p>`,
                `<p class="fs-3 fst-italic fw-bold text-primary-emphasis">"Dare to experience<br> A NEW BEGINNING"</span>  <br><span class="fs-3 fw-bold text-danger">INVEST</span></p>`
                ]
        },
        wayuum : {
            es :[
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"<b>LA PRIMERA COMUNIDAD</b> planeada en Chicxulub, Yucatán. <b>EQUILIBRIO PERFECTO</b> entre la infraestructura de la ciudad."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"<b>7 Privadas residenciales</b> que hacen alusión a la fauna endémica: Balam (Jaguar), Toh (Pájaro momoto), Kaab (Abeja), Maax (Mono), Haleb (Tepezcuintle), Weech (Armadillo) y Turix (Libélula) "</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Un desarrollo residencial exclusivo y seguro con todas las comodidades y más"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"El equilibrio prefecto entre la naturaleza y la elegancia."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Grandes áreas comerciales con espacios interactivos entre <b>COMERCIO Y VEGETACIÓN"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Inspirada en el escalonamiento y trazo de las ciudades Mayas, <b>PARA HACERTE SENTIR TODO UN NATIVO DE LA REGIÓN.</b>"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Contará con numerosas amenidades en áreas RECREATIVA, FAMILIAR y DEPORTIVA"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"GRANDES ISLAS DESTINADAS PARA CENTROS COMERCIALES, SUPERMERCADOS, BANCOS, HOSPITALES Y ESCUELAS."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Cada una contará con un <b>GRAN PARQUE DE COMTEMPLACION Y LAGO"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Pasa momentos increibles con tus mascotas en nuestro parque Peek"</p>`
            ],
            
            en : [
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"<b>THE FIRST COMMUNITY</b> planned in Chicxulub, Yucatán. <b>PERFECT BALANCE</b> between it and the infrastructure of a city."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"<b>7 private residential areas</b> that allude to the endemic fauna: Balam (Jaguar), Toh (Momoto Bird), Kaab (Bee), Maax (Monkey), Haleb (Tepezcuintle), Weech (Armadillo) and Turix (Dragon-fly)"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"An exclusive and secure residential development with all the amenities and more"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"The perfect balance between nature and elegance."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Large commercial areas with interactive spaces separated by VEGETATION."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Inspired by the layout of Mayan cities, <b>TO MAKE YOU FEEL LIKE A NATIVE OF THE REGION.</b>"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"It will have numerous amenities in RECREATIONAL, FAMILY and SPORTS areas."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"LARGE AREAS DESTINED FOR SHOPPING CENTERS, SUPERMARKETS, BANKS, HOSPITALS AND SCHOOLS."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Each one will have a LARGE COMTEMPLATION PARK AND LAKE"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Even your pets will have fun in our Peek Park"</p>`
                ]
        },
        sorenna : {
            es :[
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"<b>LA PRIMERA COMUNIDAD</b> planeada en Chicxulub, Yucatán. <b>EQUILIBRIO PERFECTO</b> entre la infraestructura de la ciudad."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Cerca de la playa y cerca de la ciudad, Sorenna se encuentra en una de las zonas de mayor crecimiento en Yucatán"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Un desarrollo abierto con lotes de uso de suelo mixto, donde se puede construir desde una residencia hasta un local comercial"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Avenida principal pavimentada de 15m de ancho, alumbrado público, energía eléctrica subterránea"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Cuatro Glorietas distribuidas en el desarrollo"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Alta Plusvalía compuesta por su cercanía con Wayúum"</p>`
            ],
            
            en : [
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"<b>THE FIRST COMMUNITY</b> planned in Chicxulub, Yucatán. <b>PERFECT BALANCE</b> between it and the infrastructure of a city."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Close to the beach and close to the city, Sorenna is located in one of the fastest growing areas in Yucatán"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"An open development with mixed land use lots, where you can build anything from a residence to a commercial premises."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Paved main avenue 15m wide, public lighting, underground electricity"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Four roundabouts distributed in the development"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"High potential capital gains compounded by its proximity to Wayúum"</p>`
            ]
        },
        mahal : {
            es :[
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"La arquitectura contemporánea creará el entorno ideal para vivir el momento y disfrutar sin complicaciones"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Dividido en 4 etapas. Contará con Casa Club y 9 amenidades, en régimen de condominio."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Área comercial en el exterior de la privada, facilitando la comodidad y accesibilidad a todos los residentes."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Situada en una zona de alta demanda y creciente plusvalía"</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Mahal Residencial Contemporánea, revoluciona todo lo que hay en la zona, ya que contará con <b>Plaza Agra</b>, un área comercial ubicada a las afueras de la privada, pensando en la comodidad de sus habitantes."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Motivo de acceso y salida con vigilancia 24/7, control de acceso para tu tranquilidad y la de tus cercanos."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Existen dos parques botánicos con: Espejos de agua, Andador, Mobiliario urbano, Paisajismo y Cajones de estacionamiento"</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"El Parque de usos multiples tendrá: Mobiliario de juegos infantiles, Equipamiento urbano, Área para actividades al aire libre, Sanitarios, Elementos verticales distintivos que armonizan con el motivo de acceso y parques temáticos"</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Al momento de planear Mahal se pensó en todos, por ello será full pet friendly, contando con equipamiento para tu mascota en toda la privada, ya que sabemos que es parte de la familia."</p>`,
                `<p class="fs-5 fst-italic fw-bold text-success-emphasis">"Existirán 2 Social Park que tendrán: Áreas sociales techadas, Cajones de estacionamiento, Paisajismo, Pista de tartán, Mobiliario y equipamiento urbano (bancas y mesas), Sanitarios y Andador"</p>`
            ],
            
            en : [
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Contemporary architecture will create the ideal environment to live in the moment and enjoy without complications"</p>`,
                `<p class="fs-5 fst-italic fw-bold text-primary-emphasis">"Divided into 4 stages. It will have a Club House and 9 amenities, in a condominium regime."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Commercial area outside the private area, facilitating comfort and accessibility for all residents."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"Located in an area of high demand and growing capital gains"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Mahal Residencial Contemporánea revolutionizes everything in the area, since it will have <b>Plaza Agra</b>, a commercial area located on the outskirts of the private area, thinking about the comfort of its inhabitants."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"Reason for access and exit with 24/7 surveillance, access control for your peace of mind and that of those close to you."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"There are two botanical parks with: Water mirrors, Walker, Urban furniture, Landscaping and Parking spaces"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"The multi-use Park will have: Children's play furniture, Urban equipment, Area for outdoor activities, Restrooms, Distinctive vertical elements that harmonize with the reason for access and theme parks"</p>`,
                `<p class="fs-4 fst-italic fw-bold text-primary-emphasis">"When planning Mahal, everyone was thought of, which is why it will be full pet friendly, with equipment for your pet throughout the private area, since we know that it is part of the family."</p>`,
                `<p class="fs-4 fst-italic fw-bold text-success-emphasis">"There will be 2 Social Parks that will have: Covered social areas, Parking spaces, Landscaping, Tartan track, Urban furniture and equipment (benches and tables), Toilets and Walker"</p>`
                ]
        },
    }

    let investment = array[4];


    $(".promo").empty().html(promoHome[investment][lang][0]);
    let count = 1;

    function changeTextPromo(){
        if(count == promoHome[investment][lang].length){
            count = 0;
        }
        $(".promo").empty().html(promoHome[investment][lang][count]);
        count++;
    }
    const myCarousel = document.getElementById('carouselHome');

    myCarousel.addEventListener('slid.bs.carousel', event => {
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

    let stageUriShow = Number(array[5]);

    let uri = $('#data_url').val();
    let uriArray = uri.split(/[//,/,?]/);
    let dataAvailable = [];


    let uris = uriArray[0]+ "/" + uriArray[1] + "/" + uriArray[2] + "/" + uriArray[3] + "/" + uriArray[4]+ "/" + 'available_lots.json';
        $.ajax({
            url: uris ,
            type : 'GET',
            dataType: "json"
        }).done(function (datas) {
            if (datas !== null) {
                //Globals
                dataAvailable = datas;
                console.log(dataAvailable[investment]);
                
                $(document).ready(function(){
        
            
                    if (isNaN(stageUriShow) || dataAvailable[investment].length == 1) {
                        // console.log("La variable en NaN")
                        // stageUriShow = 1;
                    } else {
                        // stageUriShow = dataAvailable[investment].length;
                    } 
                    for (let lotAvailable = 0; lotAvailable < dataAvailable[investment].length; lotAvailable++) {
                        $("#available-" + (lotAvailable + 1)).text(dataAvailable[investment][lotAvailable]);
                    }

                    let options = {
                        rootMargin: '0px',
                        threshold: 0.75
                    }
                    
                    
                    function isShow(entries) {
                        let entry = entries[0]
                        if (entry.isIntersecting) {
                            if (!isNaN(stageUriShow) ) {
                                if (stageUriShow > dataAvailable[investment].length) {
                                    stageUriShow = dataAvailable[investment].length;
                                }
                                if ((entry.target.id).substr(-1) == stageUriShow && !$("#stage-" + stageUriShow).hasClass('map-painted')) {
                                    loadLotsMaps(stageUriShow);
                                } else {
                                }
                            }
                        }
                    };
                    const cody = document.querySelectorAll('.map_area');
                    const observer = new IntersectionObserver(isShow,options);
                    cody.forEach(element => observer.observe(element))
                    // observer.observe(cody);
                });
            }
        }).fail((jqXHR, errorMsg) => {
            alert(jqXHR.responseText.code, errorMsg)
        });      





    $(".accordion-header").on("click", function() {
        // Globals
        let btnId = $(this).attr('id');
        let btnClass = $(this).attr('class');
        let stageShow = ($(this)[0].id).substr(-1);

        if (!$("#stage-" + ($(this)[0].id).substr(-1)).hasClass('map-painted')) {
            loadLotsMaps(stageShow);
        } 

    });

    let test = false;
    function testing(data, dataUpdate) {
        // console.log(dataUpdate.regions);
        const lotsInfo = dataUpdate.regions
        lotsInfo.sort((x,y) => x.id.split("-")[1] - y.id.split("-")[1])
        console.log(lotsInfo)
    
    }
    // let lotsInfo = [];
    if (test == true) {
        $.getJSON( "http://kirklandinmobiliaria.com/assets/json/anthia-4_update.json", function( data_lots ) {
            // let lotsInfo = new Map(data_lots.data_regions)
            let lotsInfo = data_lots.data_regions
            lotsInfo.length != 0 ? testing(data, lotsInfo) : console.warn('Los datos son incorrectos');
            // console.info('Los datos son correctos')
        });        
    }

    $(".category-type").on("click", function(e) {
        e.stopImmediatePropagation();
        let stage = $(this).closest('.category-type').attr('data-stage');
        let category = $(this).closest('.category-type').attr('data-category');
        console.log('Seleccion de stage= ' + stage);
        console.log('Seleccion de category= ' + category);
        const newCategory = data.properties.filter(function (categ){
            if (categ.category_id == Number(category) && categ.stage == Number(stage)) {
                return categ
            }
        });
        for (let lot = 0; lot < (newCategory.length - 1); lot++) {
            $('text[data-text="' + newCategory[lot].name + '"]').toggleClass("st21");
            $('polygon[data-id="' + newCategory[lot].name + '"]').toggleClass("st1");
        }
    });


    $(".carousel-inner img, about-img img").on("click", function(e) {
        e.stopImmediatePropagation();
        let id_img = $(this).closest('.carousel').attr('id');

        if (!deviceMovil ) {
            // Globals
            let id_html = $('#' +  id_img).html().trim();
            let modalCarouselContainer = '';
            if (id_html.search('carousel-caption') >= 1) {
                let cabeza = '<div class="carousel-inner">'
                let id_html_new = id_html.replace(cabeza,'');
                id_html_new = id_html_new.slice(0, id_html_new.search('<button class="carousel-control-prev"'));
                id_html_new = id_html_new.replaceAll('height="1240 px"', "");
                id_html_new = id_html_new.replaceAll('width="1754 px"', 'style="width: 55vw;"');
                id_html_new = id_html_new.replaceAll('class="h6 text-dark"', 'class="h5 text-dark"');

                modalCarouselContainer = id_html_new;
            } else {
                let src = $(this).attr('src');
                let arr_img = $('#' + id_img + ' img').map(function(){
                    return this.src;
                }).get();
                $('#modal-imgLabel').empty();
                $(id_html).prependTo('#modal-carousel-container');

                for (let i in arr_img){
                    modalCarouselContainer = modalCarouselContainer.concat(`<div class="carousel-item`);
                    if (id_img == 'carouselAmenities' && i == 0) {
                        modalCarouselContainer = modalCarouselContainer.concat(` active`);
                    } else if (arr_img[i] == src) {
                        modalCarouselContainer = modalCarouselContainer.concat(` active`);
                    }
                    modalCarouselContainer = modalCarouselContainer.concat(`"><img src="${arr_img[i]}" class=""  style="width: 55vw;" alt="..."></div>`);
                }
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
    });


            if (deviceMovil ) {
                let carouselHomeElement = document.querySelector("#carouselHome");
                new bootstrap.Carousel(carouselHomeElement, {
                    interval: 15000,
                    ride: "carousel"
                });
                if ( investment != "marela_celestun") {
                    let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
                    new bootstrap.Carousel(carouselAmenitiesElement, {
                        ride: false,
                    });
                }
                if (investment == "lakuun"){
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: false,
                    });
                }
                if (investment == "marela_life"){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: "false"
                    });
                    let carouselImagesCasaClubElement = document.querySelector("#carouselImagesCasaClub");
                    new bootstrap.Carousel(carouselImagesCasaClubElement, {
                        ride: "false"
                    });
                    let carouselMasterPlanElement = document.querySelector("#carouselMasterPlan");
                    new bootstrap.Carousel(carouselMasterPlanElement, {
                        ride: "false"
                    });
                }
                console.log("carousel detenido");
                
            } else {
                let intervalCarousel = 15000;
                let carouselHomeElement = document.querySelector("#carouselHome");
                new bootstrap.Carousel(carouselHomeElement, {
                    interval: intervalCarousel,
                    ride: "carousel"
                });

                if ( investment != "marela_celestun") {
                    let carouselAmenitiesElement = document.querySelector("#carouselAmenities");
                    new bootstrap.Carousel(carouselAmenitiesElement, {
                        ride: "carousel"
                    });
                }

                if (investment == "lakuun" || investment == "marela_life"){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        ride: "carousel",
                        pause: "hover",
                        interval: 10000,
                    });

                }
                if (investment == "marela_life"){
            
                    let carouselAmenitiesCasaClubElement = document.querySelector("#carouselAmenitiesCasaClub");
                    new bootstrap.Carousel(carouselAmenitiesCasaClubElement, {
                        interval: 15000,
                        ride: "carousel"
                    });
                    let carouselImagesCasaClubElement = document.querySelector("#carouselImagesCasaClub");
                    new bootstrap.Carousel(carouselImagesCasaClubElement, {
                        interval: 10000,
                        ride: "carousel"
                    });
                    let carouselMasterPlanElement = document.querySelector("#carouselMasterPlan");
                    new bootstrap.Carousel(carouselMasterPlanElement, {
                        // interval: intervalCarousel,
                        ride: "carousel"
                    });
                }
            }

            $(".loader-container-img").addClass('d-none');
            $(".load-image").removeClass('d-none');

function updateLotsMap(data, stageUriShow) {
    console.log('Desarrollo- ' + investment)
    let selectionContainer = "";
    const colorNotAvailable = "fill: rgba(228, 22, 66); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
    const colorReserved = "fill: rgba(57, 249, 230); stroke: rgba(255, 255, 255); stroke-width: 1.2px;"
    let colorStatus = {};
    let colorStatusDefault = "";
    let categoryName =  {
        es: { 
            1: "Premium",
            2: "Plus",
            3: "Estandar",
            4: "Frente al mar", 
            5: "Regular",
            6: "Avenida Esquina",
            7: "Avenida",
            8: "Esquina",
            9: "Casa Club",
            10: "Área verde/esquina"
            },
        en: {  
            1: "Premium",
            2: "Plus",
            3: "Standard",
            4: "Beachfront",
            5: "Regular",
            6: "Corner Avenue ",
            7: "Avenue",
            8: "Corner",
            9: "Club House",
            10: "Green area/corner"
            }, 
    };

    if (investment == 'sorenna' || investment == 'wayuum' || investment == 'mahal') {
        colorStatus = {

            1: "fill: rgba(47, 172, 102); stroke: rgba(255, 255, 255); stroke-width: 1.2px;", // colorAvailableAvenueCorner
            6: "fill: rgba(0, 102, 51); stroke: rgba(255, 255, 255); stroke-width: 1.2px;", // colorAvailableAvenueCorner
            7: "fill: rgba(47, 172, 102); stroke: rgba(255, 255, 255); stroke-width: 1.2px;",  // colorAvailableAvenue
            8: "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 1.2px;",  // colorAvailableCorner
            9: "fill: rgba(0, 102, 51); stroke: rgba(255, 255, 255); stroke-width: 1.2px;",
            10: "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 1.2px;",
        };
        colorStatusDefault = "fill: rgba(183 245 162); stroke: rgba(255, 255, 255); stroke-width: 1.2px;"; // colorAvailableRegular
        
    } else {

        colorStatus = {
            1: "fill: rgba(5, 110, 57); stroke: rgba(255, 255, 255); stroke-width: 1.2px;", // colorAvailablePremium
            2: "fill: rgba(47, 172, 102); stroke: rgba(255, 255, 255); stroke-width: 1.2px;",  // colorAvailablePlus
        };
        colorStatusDefault = "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 1.2px;";
        
    }

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

    for (let stages = stageUriShow; stages <= stageUriShow; stages++) {

        $('g[id="stage_' + stages + '"] >[class*="mapsvg-region"]').each(function(){

            let name_svg = $(this).attr('id');
            let stageId = Number($(this).closest("g").prop("id").substr(-1, 1));
            let key = searchIndexId(data, name_svg, stageId);

            if (stages == stageId && data.properties[key]['name'] == name_svg) {

                if (data.properties[key].status_id == 0) {
                    $(this).attr('style', colorNotAvailable);
                } else if (data.properties[key].status_id == 1 || data.properties[key].status_id == 2) {

                    data.properties[key].status_id == 1 ? available[stages] = available[stages] + 1 : available[stages] = available[stages];
                    
                    $(this).attr('style', colorStatus[data.properties[key].category_id] || colorStatusDefault);
                    
                    data.properties[key].status_id == 2 ? $(this).attr('style', colorReserved) : '';

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
                        data.properties[key].category_name = categoryName[lang][data.properties[key].category_id]
                        selectionContainer = selectionContainer.concat(`<b>${data.labels.category_name}</b>: ${(data.properties[key].category_name)}<br>`);
                    }
                    if (data.properties[key].status_id !== '') {
                        if (lang == 'es') {
                            if (data.properties[key].status_id == 0) {
                                data.properties[key].status_name = 'Vendido';
                            } else if (data.properties[key].status_id == 1) {
                                data.properties[key].status_name = 'Disponible';
                            } else if (data.properties[key].status_id == 2) {
                                data.properties[key].status_name = 'Reservado';
                            }
                        } else if (lang == 'en'){
                            if (data.properties[key].status_id == 0) {
                                data.properties[key].status_name = 'Sold';
                            } else if (data.properties[key].status_id == 1) {
                                data.properties[key].status_name = 'Available';
                            } else if (data.properties[key].status_id == 2) {
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
                    $('g[data-id="stage_' + stages + '"]').children('[data-id="' + name_svg + '"]').attr('data-bs-content', " ").attr('data-bs-content', selectionContainer);
                } 
            }
        });
    }

    if (lang == 'en') {
        $(".lot-standard").text('Standard');
        $(".casa_club").attr('data-bs-original-title', 'Club House');
        $(".visitor_parking").attr('data-bs-original-title', 'Visitor parking');
        $(".distintive_entranceway").attr('data-bs-original-title', 'Distintive entranceway');
        $(".amenities").attr('data-bs-original-title', 'Amenities');
        $(".green_area").attr('data-bs-original-title', 'Green area');
        $(".leyend_casa_club").text('CLUB HOUSE');
        $(".leyend_pet_park").text('FULL PET FIENDLY PARK');
        $(".leyend_botanic").text('BOTANIC PARK');
        $(".leyend_social").text('SOCIAL PARK');
        $(".leyend_multiple").text('MULTI-USE PARK');
        $(".leyend_yoga").text('YOGA PARK');
        $(".leyend_access").text('REASON FOR ACCESS');
    }
    $('[data-bs-toggle="popover"]').popover();
    $(".loader-container").addClass('d-none');
    $("#image_site").removeClass('d-none');

    function searchIndexId(data, name_svg, stageId) {
        for (let key_search in data.properties) {
            if (data.properties[key_search]['name'] === name_svg && data.properties[key_search]['stage'] === stageId) {
                return Number(key_search);
                
            }
        }
    }
}

let data = []
function loadLotsMaps(stageUriShow) {
    
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
                console.log(data);
            }
            // console.log('Desarrollo- ' + investment)
            // if (investment == 'marela_life' || investment == 'lakuun' || investment == 'anthia' || investment == 'marela_beach') {
                
                let dataMap = "";
                let urlInvestment = $('#data_url').val().slice(0, -5) + '_map-' + stageUriShow + '.txt';
                console.log(urlInvestment)
                $.ajax({
                    url : urlInvestment,
                    dataType: "text",
                    success : function (data_map) {
                        dataMap = data_map;
                        // console.log(lang);
                        $("#stage-" + stageUriShow).html(dataMap);
                        // console.log(dataMap)
                        if (document.getElementById("stage-" + stageUriShow) !== null) {
                            // alert("The element exists");
                            updateLotsMap(data, stageUriShow);
                            $("#collapseStage-" + stageUriShow).addClass(' show');
                            $("#stage-" + stageUriShow).addClass(' map-painted');
                            $("#stage-" + stageUriShow).removeClass('d-none');
    
                        }
                        else {
                            alert("The element does not exist");
                        }
                        // $( "div[class*='map-svg']" ).change(function() {
                        //     let btnId = $(this).attr('id');
                        //     console.log('Change map- ' + btnId)
                        // });
                    }
                });
            // } else {
            //     updateLotsMap(data, stageUriShow);
            // }
    
        });
    }
}

