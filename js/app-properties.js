$(document).ready(function(){
    if ($('#image_site').hasClass('lots')) {
        $(".loader-container").removeClass('d-none');
        let data = []
        if (($('#image_site').contents()[0].baseURI).search("beach") >= 1) {
            $(document).prop('title', 'Marela Beach');
            data = JSON.parse(`
                {
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "type": "Tipo",
                    "status": "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"id": 1,  "area":"678.8", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24  MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 2,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 3,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 4,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 5,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 6,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 7,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 8,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 9,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 10,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 11,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 12,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 13,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 14,  "area":"280", "status":"Disponible" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 15,  "area":"280", "status":"Vendido" ,"price": 13580, "financ": "Hasta 24 MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 16,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 17,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 18,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 19,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 20,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 21,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 22,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 23,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 24,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 25,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 26,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 27,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 28,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 29,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 30,  "area":"117.81", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 31,  "area":"218.89", "status":"Vendido" ,"price": "1.230.161,80 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 32,  "area":"172", "status":"Reservado" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 33,  "area":"172", "status":"Vendido" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 34,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 35,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 36,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 37,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 38,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 39,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 40,  "area":"172", "status":"Disponible" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 41,  "area":"172", "status":"Vendido" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 42,  "area":"219.82", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 43,  "area":"153.10", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila plus", "description": ""},
                {"id": 44,  "area":"166.34", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 45,  "area":"179.59", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 46,  "area":"192.83", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 47,  "area":"174.07", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 48,  "area":"187.31", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 49,  "area":"200.55", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 50,  "area":"213.79", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 51,  "area":"225.70", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 52,  "area":"181.69", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 53,  "area":"182.65", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 54,  "area":"183.61", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 55,  "area":"184.56", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 56,  "area":"199.06", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 57,  "area":"192", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 58,  "area":"192", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 59,  "area":"192", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 60,  "area":"192", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 61,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 62,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 63,  "area":"160", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 64,  "area":"188.39", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 65,  "area":"204.39", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 66,  "area":"176", "status":"Vendido" ,"price": 5065, "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 67,  "area":"176", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 68,  "area":"176", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 69,  "area":"176", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 70,  "area":"176", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 71,  "area":"176", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 72,  "area":"176", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 73,  "area":"187.79", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 74,  "area":"188.75", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 75,  "area":"178.52", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 76,  "area":"179.37", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""},
                {"id": 77,  "area":"180.22", "status":"Vendido" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48 MSI", "enganche": "10%", "type": "Segunda fila", "description": ""}
            ]}
            `);
        } else if (($('#image_site').contents()[0].baseURI).search("celestun") >= 1){
            $(document).prop('title', 'Marela Celestún');
            data = JSON.parse(`
            {
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "type": "Tipo",
                    "status":  "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"id": 1,  "area":"260.22", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 2,  "area":"222.09", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 3,  "area":"239.48", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 4,  "area":"349.24", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 5,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 6,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 7,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 8,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 9,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 10,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 11,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 12,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 13,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 14,  "area":"247", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 15,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 16,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 17,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 18,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 19,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 20,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 21,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 22,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 23,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 24,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 25,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 26,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 27,  "area":"247", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 28,  "area":"312", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 29,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 30,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 31,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 32,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 33,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 34,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 35,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 36,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 37,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 38,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 39,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 40,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 41,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 42,  "area":"312", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 43,  "area":"312", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 44,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 45,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 46,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 47,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 48,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 49,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 50,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 51,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 52,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 53,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 54,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 55,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 56,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 57,  "area":"312", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 58,  "area":"247", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 59,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 60,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 61,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 62,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 63,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 64,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 65,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 66,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 67,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 68,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 69,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 70,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 71,  "area":"247", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 72,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 73,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 74,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 75,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 76,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 77,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 78,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 79,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 80,  "area":"257.61", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 81,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 82,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 83,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 84,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 85,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 86,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 87,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 88,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 89,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 90,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 91,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 92,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 93,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 94,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 95,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 96,  "area":"361.14", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 97,  "area":"288.59", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 98,  "area":"223.82", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 99,  "area":"223.82", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 100,  "area":"242.01", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 101,  "area":"250.68", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 102,  "area":"259.36", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 103,  "area":"268.03", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 104,  "area":"276.7", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 105,  "area":"285.38", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 106,  "area":"294.05", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 107,  "area":"379.77", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 108,  "area":"320", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 109,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 110,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 111,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 112,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 113,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 114,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 115,  "area":"256", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 116,  "area":"256", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 117,  "area":"256", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 118,  "area":"395.75", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 119,  "area":"349.91", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 120,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 121,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 122,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 123,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 124,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 125,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 126,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 127,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 128,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 129,  "area":"260", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 130,  "area":"260", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 131,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 132,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 133,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 134,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 135,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 136,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 137,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 138,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 139,  "area":"204.08", "status":"Disponible" ,"price": "565,302 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 140,  "area":"295.33", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 141,  "area":"235.43", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 142,  "area":"204.34", "status":"Disponible" ,"price": "566,022 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 143,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 144,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 145,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 146,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 147,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 148,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 149,  "area":"208", "status":"Vendido" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 150,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 151,  "area":"260", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 152,  "area":"260", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 153,  "area":"208", "status":"Disponible" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 154,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 155,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 156,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 157,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 158,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 159,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 160,  "area":"280", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 161,  "area":"206.52", "status":"Disponible" ,"price": "807,095 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 162,  "area":"245.8", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 163,  "area":"291.37", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 164,  "area":"205.77", "status":"Disponible" ,"price": "569,983 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 165,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 166,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 167,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 168,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 169,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 170,  "area":"208", "status":"Vendido" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 171,  "area":"208", "status":"Vendido" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 172,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 173,  "area":"286", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 174,  "area":"286", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 175,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 176,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 177,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 178,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 179,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 180,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 181,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 182,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 183,  "area":"205.53", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 184,  "area":"289.74", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 185,  "area":"246.96", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 186,  "area":"207.2", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 187,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 188,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 189,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 190,  "area":"244", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 191,  "area":"244", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 192,  "area":"244", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 193,  "area":"244", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 194,  "area":"244", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 195,  "area":"305", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 196,  "area":"346.51", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 197,  "area":"263.39", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 198,  "area":"251.11", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 199,  "area":"238.83", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 200,  "area":"226.55", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 201,  "area":"214.27", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 202,  "area":"237.99", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 203,  "area":"225.71", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 204,  "area":"213.43", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 205,  "area":"195.51", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 206,  "area":"201.13", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 207,  "area":"301.2", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 208,  "area":"207.61", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 209,  "area":"208", "status":"Disponible" ,"price": 2770, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 210,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 211,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 212,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 213,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 214,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 215,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 216,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 217,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 218,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 219,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 220,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 221,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 222,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 223,  "area":"208", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 224,  "area":"312", "status":"Vendido" ,"price": "775.600 MXN", "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""}
            ]}
            `);
        } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1){
            $(document).prop('title', 'Anthia');
            data = JSON.parse(`
            {
                "labels": {
                    "available": "Disponible",
                    "not_available": "Vendido",
                    "reserved": "Reservado",
                    "type": "Tipo",
                    "status":  "Estatus",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"id": 1,  "area":"354.46", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 2,  "area":"351.29", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 3,  "area":"344.18", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 4,  "area":"333.12", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 5,  "area":"1010.2", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 6,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 7,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 8,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 9,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 10,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 11,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 12,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 13,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 14,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 15,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 16,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 17,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 18,  "area":"446.26", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 19,  "area":"512.21", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 20,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 21,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 22,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 23,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 24,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 25,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 26,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 27,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 28,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 29,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 30,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 31,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 32,  "area":"1114.53", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 33,  "area":"395.62", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 34,  "area":"337.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 35,  "area":"337.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 36,  "area":"337.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 37,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 38,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 39,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 40,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 41,  "area":"324", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 42,  "area":"643.24", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 43,  "area":"339.54", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 44,  "area":"294", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 45,  "area":"294", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 46,  "area":"294", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 47,  "area":"294", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 48,  "area":"294", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 49,  "area":"294", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 50,  "area":"421.6", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 51,  "area":"458.54", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 52,  "area":"384.04", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 53,  "area":"349.04", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 54,  "area":"324.06", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 55,  "area":"308.9", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 56,  "area":"303.47", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 57,  "area":"307.71", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 58,  "area":"371.43", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 59,  "area":"465.43", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 60,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 61,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 62,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 63,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 64,  "area":"324", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 65,  "area":"337.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 66,  "area":"337.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 67,  "area":"652.82", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 68,  "area":"573.93", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 69,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 70,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 71,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 72,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 73,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 74,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 75,  "area":"567.86", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 76,  "area":"460.12", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 77,  "area":"285.66", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 78,  "area":"305.59", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 79,  "area":"317.93", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 80,  "area":"322.78", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 81,  "area":"320.16", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 82,  "area":"310.05", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 83,  "area":"292.39", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 84,  "area":"583.92", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 85,  "area":"584.22", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 86,  "area":"312.5", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 87,  "area":"312.5", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 88,  "area":"312.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 89,  "area":"312.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 90,  "area":"312.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 91,  "area":"312.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 92,  "area":"312.5", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 93,  "area":"418.13", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 94,  "area":"525.77", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 95,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 96,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 97,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 98,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 99,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 100,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 101,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 102,  "area":"452.45", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 103,  "area":"346.4", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 104,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 105,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 106,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 107,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 108,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 109,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 110,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 111,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 112,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 113,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 114,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 115,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 116,  "area":"300", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 117,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 118,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 119,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 120,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 121,  "area":"650.75", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 122,  "area":"465.58", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 123,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 124,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 125,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 126,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 127,  "area":"459.02", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 128,  "area":"346.21", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 129,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 130,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 131,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 132,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 133,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 134,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 135,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 136,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 137,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 138,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 139,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 140,  "area":"412.39", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 141,  "area":"379.66", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 142,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 143,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 144,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 145,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 146,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 147,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 148,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 149,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 150,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 151,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 152,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 153,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 154,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 155,  "area":"917.85", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 156,  "area":"349.18", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 157,  "area":"349.18", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 158,  "area":"337.93", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 159,  "area":"343.38", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 160,  "area":"341.23", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 161,  "area":"334.45", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 162,  "area":"324.3", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 163,  "area":"316.22", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 164,  "area":"311.39", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 165,  "area":"309.81", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 166,  "area":"311.51", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 167,  "area":"315.82", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 168,  "area":"321.55", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 169,  "area":"384.21", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 170,  "area":"394.76", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 171,  "area":"310.94", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 172,  "area":"304.64", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 173,  "area":"303.55", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 174,  "area":"307.32", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 175,  "area":"315.97", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 176,  "area":"433.09", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 177,  "area":"1182.26", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 178,  "area":"300", "status":"Vendido" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 179,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 180,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 181,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 182,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 183,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 184,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 185,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 186,  "area":"300", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 187,  "area":"360.96", "status":"Disponible" ,"price": 418, "financ": "Hasta 60 MSI", "enganche": "10%", "type": "premium", "description": ""}
            ]}
            `)
        }
        let colorNotAvailable = "";
        let colorAvailable = "";
        let colorReserved = "";
        let colorAvailablePremium = "";
        let colorAvailablePlus = "";

        if (($('#image_site').contents()[0].baseURI).search("beach") >= 1 || ($('#image_site').contents()[0].baseURI).search("marela") >= 1) {
            colorNotAvailable = "fill: rgba(228, 22, 66, 0.52); stroke: rgba(255, 255, 255, 0.80); stroke-width: 1.41935px;";
            colorAvailable= "fill: rgba(60, 219, 34, 0.16); stroke: rgba(255, 255, 255, 0.48); stroke-width: 1.41935px;"
            colorReserved = "fill: rgba(57, 249, 230, 0.6); stroke: rgba(255, 255, 255, 0.8); stroke-width: 1.41935px;"
        } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1 || ($('#image_site').contents()[0].baseURI).search("lakuun") >= 1) {
            colorNotAvailable = "fill: rgba(228, 22, 66); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
            colorAvailablePremium = "fill: rgba(5, 110, 57); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
            colorAvailablePlus = "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
            colorAvailable = "fill: rgba(135, 198, 116); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
        }

        let lots = [];

        $('.mapsvg-region').each(function(){
            let ids = $(this).attr('id');
            let id = Number($(this).attr('id').substr(2));
            let title = $(this).attr("title");
            let key = searchIndexId(data, id);
            let popoverContent = ``;
            lots.push({id: id, area: Number(title.replace(" M2", "")), price: parseInt((Number(title.replace(" M2", ""))) * 2770).toLocaleString('en-EN') });
            if (data.properties[key].status === data.labels.not_available) {
                $(this).attr('style', colorNotAvailable);
                $(this).addClass(' mapsvg-disabled');
                // $(this).attr('data-bs-content', " ").attr('data-bs-content', `<b>${data.labels.status}</b>: ${data.properties[key].status}`);
            } else if (data.properties[key].status === data.labels.available || data.properties[key].status === data.labels.reserved){
                $(this).attr('data-bs-toggle', "popover");
                $(this).attr('data-bs-trigger', "hover");
                $(this).attr('data-bs-placement', "auto");
                $(this).attr('title', " ").attr('title', "<b>Lote</b> - " + ids);
                $(this).attr('data-bs-html', " ").attr('data-bs-html', "true" );
                if (data.properties[key].type === "premium") {
                    $(this).attr('style', colorAvailablePremium);
                } else {
                    $(this).attr('style', colorAvailable);
                }
                if (data.properties[key].status === data.labels.reserved){
                    $(this).attr('style', colorReserved);
                    $(this).addClass(' mapsvg-disabled');
                } else {
                    $(this).removeClass(' mapsvg-disabled');
                }
                popoverContent = ``;
                if (data.properties[key].type !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.type}</b>: Lote ${data.properties[key].type}<br>`);
                }
                if (data.properties[key].status !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.status}</b>: ${data.properties[key].status}<br>`);
                }
                if (data.properties[key].area !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.area}</b>: ${data.properties[key].area} m<sup>2</sup><br>`);
                }
                if (data.properties[key].price !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.price}</b>: ${(parseInt((Number(data.properties[key].area) * data.properties[key].price))).toLocaleString('en-EN')} MXN<br>`);
                }
                if (data.properties[key].financing !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.financing}</b>: ${data.properties[key].financ}<br>`);
                }
                if (data.properties[key].enganche !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.hitch}</b>: ${data.properties[key].enganche}<br>`);
                }
                if (data.properties[key].description !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.description}</b>: ${data.properties[key].description}<br>`);
                }

                $(this).attr('data-bs-content', " ").attr('data-bs-content', popoverContent);
                
            } 
        });
        let lots_orde = lots.sort(((a, b) => a.id - b.id));
        console.table(lots_orde);
        $('[data-bs-toggle="popover"]').popover();
        $(".loader-container").addClass('d-none');
        $("#image_site").removeClass('d-none');
    
        function searchIndexId(data, id, index) {
            for (key in data.properties) {
                if (data.properties[key]['id'] === id) {
                    return Number(key);
                    
                }
            }
        }
    }
        
    $(".carousel-inner img").on("click", function(e) {
        e.stopImmediatePropagation();
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
        for (let i in arr_img){
            modalCarouselContainer = modalCarouselContainer.concat(`<div class="carousel-item`);
            if (arr_img[i] == src) {
                modalCarouselContainer = modalCarouselContainer.concat(` active`);
            }
            modalCarouselContainer = modalCarouselContainer.concat(`"><img src="${arr_img[i]}" class="card-img-top img-fluid" alt="..."></div>`);
        }
        $('#modal-carousel-container').empty();
        $('#modal-carousel-container').append(modalCarouselContainer);
        $("#modal-img").modal("show");
    });
});