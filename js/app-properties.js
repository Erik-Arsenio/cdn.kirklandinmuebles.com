$(document).ready(function(){
    if ($('#image_site').hasClass('lots')) {
        $(".loader-container").removeClass('d-none');
        let data = []
        if (($('#image_site').contents()[0].baseURI).search("beach") >= 1) {
            data = JSON.parse(`
                {
                "labels": {
                    "available": "Disponible",
                    "not_available": "No Disponible",
                    "reserved": "Reservado",
                    "type": "Tipo",
                    "status": "Status",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"id": 1, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 2, "status":"No Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 3, "status":"No Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 4, "status":"Reservado" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 5, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 6, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 7, "status":"No Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 8, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 9, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 10, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 11, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 12, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 13, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 14, "status":"Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 15, "status":"No Disponible" ,"price": "Desde $3.5 MDP", "financ": "Hasta 24MSI", "enganche": "20%", "type": "Frente al mar", "description": ""},
                {"id": 16, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 17, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 18, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 19, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 20, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 21, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 22, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 23, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 24, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 25, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 26, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 27, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 28, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 29, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 30, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 31, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 32, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 33, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 34, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 35, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 36, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 37, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 38, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 39, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 40, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 41, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 42, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 43, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 44, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 45, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 46, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 47, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 48, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 49, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 50, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 51, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 52, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 53, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 54, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 55, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 56, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 57, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 58, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 59, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 60, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 61, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 62, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 63, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 64, "status":"Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 65, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 66, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 67, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 68, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 69, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 70, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 71, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 72, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 73, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 74, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 75, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 76, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 77, "status":"No Disponible" ,"price": "Por M2 Desde $5,065 MXN", "financ": "Hasta 48MSI", "enganche": "10%", "type": "estandar", "description": ""}
            ]}
            `);
        } else if (($('#image_site').contents()[0].baseURI).search("celestun") >= 1){
            data = JSON.parse(`
            {
                "labels": {
                    "available": "Disponible",
                    "not_available": "No Disponible",
                    "reserved": "Reservado",
                    "type": "Tipo",
                    "status": "Status",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"id": 1, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 2, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 3, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 4, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 5, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 6, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 7, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 8, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 9, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 10, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 11, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 12, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 13, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 14, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 15, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 16, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 17, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 18, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 19, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 20, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 21, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 22, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 23, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 24, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 25, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 26, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 27, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 28, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 29, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 30, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 31, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 32, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 33, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 34, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 35, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 36, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 37, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 38, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 39, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 40, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 41, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 42, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 43, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 44, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 45, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 46, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 47, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 48, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 49, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 50, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 51, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 52, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 53, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 54, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 55, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 56, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 57, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 58, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 59, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 60, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 61, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 62, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 63, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 64, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 65, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 66, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 67, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 68, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 69, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 70, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 71, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 72, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 73, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 74, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 75, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 76, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 77, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 78, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 79, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 80, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 81, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 82, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 83, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 84, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 85, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 86, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 87, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 88, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 89, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 90, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 91, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 92, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 93, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 94, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 95, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 96, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 97, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 98, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 99, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 100, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 101, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 102, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 103, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 104, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 105, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 106, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 107, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 108, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 109, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 110, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 111, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 112, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 113, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 114, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 115, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 116, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 117, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 118, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 119, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 120, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 121, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 122, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 123, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 124, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 125, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 126, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 127, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 128, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 129, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 130, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 131, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 132, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 133, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 134, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 135, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 136, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 137, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 138, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 139, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 140, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 141, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 142, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 143, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 144, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 145, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 146, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 147, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 148, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 149, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 150, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 151, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 152, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 153, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 154, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 155, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 156, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 157, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 158, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 159, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 160, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 161, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 162, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 163, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 164, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 165, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 166, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 167, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 168, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 169, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 170, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 171, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 172, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 173, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 174, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 175, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 176, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 177, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 178, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 179, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 180, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 181, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 182, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 183, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 184, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 185, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 186, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 187, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 188, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 189, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 190, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 191, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 192, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 193, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 194, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 195, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 196, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 197, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 198, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 199, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 200, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 200, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 201, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 202, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 203, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 204, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 205, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 206, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 207, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 208, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 209, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 210, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 211, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 212, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 213, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 214, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 215, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 216, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 217, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 218, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 219, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 220, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 221, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 222, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 223, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 224, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""}
            ]}
            `);
        } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1){
            data = JSON.parse(`
            {
                "labels": {
                    "available": "Disponible",
                    "not_available": "No Disponible",
                    "reserved": "Reservado",
                    "type": "Tipo",
                    "status": "Status",
                    "area": "Área",
                    "price": "Precio",
                    "financing": "Financiamiento",
                    "hitch": "Enganche",
                    "description": "Descripción"
                },
                "properties": [
                {"id": 1, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 2, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 3, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 4, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 5, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 6, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 7, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 8, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 9, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 10, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 11, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 12, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 13, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 14, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 15, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 16, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 17, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 18, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 19, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 20, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 21, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 22, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 23, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 24, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 25, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 26, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 27, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 28, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 29, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 30, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 31, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 32, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 33, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 34, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 35, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 36, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 37, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 38, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 39, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 40, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 41, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 42, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 43, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 44, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 45, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 46, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 47, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 48, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 49, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 50, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 51, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 52, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 53, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 54, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 55, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 56, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 57, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 58, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 59, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 60, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 61, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 62, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 63, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 64, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 65, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 66, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 67, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 68, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 69, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 70, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 71, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 72, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 73, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 74, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 75, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 76, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 77, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 78, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 79, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 80, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 81, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 82, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 83, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 84, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 85, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 86, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 87, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 88, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 89, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 90, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 91, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 92, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 93, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 94, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 95, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 96, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 97, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 98, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 99, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 100, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 101, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 102, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 103, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 104, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 105, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 106, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 107, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 108, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 109, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 110, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 111, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 112, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 113, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 114, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 115, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 116, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 117, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 118, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 119, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 120, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 121, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 122, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 123, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 124, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 125, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 126, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 127, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 128, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 129, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 130, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 131, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 132, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 133, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 134, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 135, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 136, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 137, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 138, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 139, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 140, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 141, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 142, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 143, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 144, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 145, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 146, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 147, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 148, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 149, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 150, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 151, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 152, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 153, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 154, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 155, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 156, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 157, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 158, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 159, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 160, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 161, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 162, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 163, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 164, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 165, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 166, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 167, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 168, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 169, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 170, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 171, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 172, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 173, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 174, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 175, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 176, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 177, "status":"No Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 178, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 179, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 180, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""},
                {"id": 181, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 182, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 183, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 184, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 185, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 186, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "estandar", "description": ""},
                {"id": 187, "status":"Disponible" ,"price": "Por M2 Desde $418 MXN", "financ": "Hasta 60MSI", "enganche": "10%", "type": "premium", "description": ""}
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
            colorReserved = "fill: rgba(159, 129, 5, 0.6); stroke: rgba(255, 255, 255, 0.8); stroke-width: 1.41935px;"
        } else if (($('#image_site').contents()[0].baseURI).search("anthia") >= 1 || ($('#image_site').contents()[0].baseURI).search("lakuun") >= 1) {
            colorNotAvailable = "fill: rgba(255, 0, 0); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
            colorAvailablePremium = "fill: rgba(5, 110, 57); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
            colorAvailablePlus = "fill: rgba(136, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
            colorAvailable = "fill: rgba(137, 194, 117); stroke: rgba(255, 255, 255); stroke-width: 3.6883px;";
        }
    
        $('.mapsvg-region').each(function(){
            let ids = $(this).attr('id');
            let id = Number($(this).attr('id').substr(2));
            let title = $(this).attr("title");
            let key = searchIndexId(data, id);
            $(this).attr('data-bs-toggle', "popover");
            $(this).attr('data-bs-trigger', "hover");
            $(this).attr('data-bs-placement', "auto");
            $(this).attr('title', " ").attr('title', "<b>Lote</b> - " + ids);
            $(this).attr('data-bs-html', " ").attr('data-bs-html', "true" );

            if (data.properties[key].status === data.labels.not_available) {
                $(this).attr('style', colorNotAvailable);
                $(this).addClass(' mapsvg-disabled');
                $(this).attr('data-bs-content', " ").attr('data-bs-content', `<b>${data.labels.status}</b>: ${data.properties[key].status}`);
            } else if (data.properties[key].status === data.labels.available){
                if (data.properties[key].type === "premium") {
                    $(this).attr('style', colorAvailablePremium);
                } else {
                    $(this).attr('style', colorAvailable);
                }
                $(this).removeClass(' mapsvg-disabled');
                let popoverContent = ``;
                if (data.properties[key].type !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.type}</b>: Lote ${data.properties[key].type}<br>`);
                }
                if (data.properties[key].status !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.status}</b>: ${data.properties[key].status}<br>`);
                }
                if (data.properties[key].area !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.area}</b>: ${title.replace("m2", "m<sup>2</sup>")}<br>`);
                }
                if (data.properties[key].price !== '') {
                    popoverContent = popoverContent.concat(`<b>${data.labels.price}</b>: ${data.properties[key].price}<br>`);
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

            } else if (data.properties[key].status === data.labels.reserved) {
                $(this).attr('style', colorReserved);
                $(this).addClass(' mapsvg-disabled');
                $(this).attr('data-bs-content', " ").attr('data-bs-content', `<b>${data.labels.status}</b>: ${data.properties[key].status}`);
            }
        });
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