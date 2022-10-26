// const frm = document.querySelector("#form_contact");

// frm.addEventListener("submit", event => {
//     event.preventDefault();
//     const frm = event.target;
//     const formData = {
//         name: frm.name.value,
//         last_name: frm.last_name.value,
//         phone: frm.phone.value,
//         email: frm.email.value,
 
//     };

//     // const URL = `https://api.whatsapp.com/send?phone=5353454974&amp; &text=Hola, Mi%20nombre%20es:%20${formData.name}%20${formData.last_name}%0A%20Cell:%20${formData.phone}&source=&data=&app_absent=`;
//     const URL = `https://api.whatsapp.com/send?phone=5352126049&amp; &text=Hola, Mi%20nombre%20es:%20${formData.name}%20${formData.last_name}%0A%20Cell:%20${formData.phone}&source=&data=&app_absent=`;
//     // const URL = `https://api.whatsapp.com/send?phone=5352126049&amp; &text=Hola, Mi%20nombre%20es:%20${formData.name}%20${formData.last_name}%20with%20the%20following%20instructions%20&source=&data=`;
//     // const URL = `"whatsapp://send?text=Hola Mundo&phone=+5353454974"`;

//     window.open(URL, "_blank");
// });


function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const frm = document.querySelector('#form_contact');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://api.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '14168024041';
let projects = [];

frm.addEventListener('submit', (event) => {

    $('input[type=checkbox]:checked').each(function() {
        // console.log("Checkbox " + $(this).prop("name") +  " (" + $(this).val() + ") Seleccionado");
        projects.push($(this).prop("name"));
    });
    event.preventDefault()
    buttonSubmit.innerHTML = 'Enviando mensaje a WhatsApp <span class="mdi mdi-vanish mdi-spin mdi-24px text-success"></span>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        // let nombre = document.querySelector('#nombre').value
        // let apellidos = document.querySelector('#apellidos').value
        // let email = document.querySelector('#email').value
        const formData = {
            name: frm.name.value,
            last_name: frm.last_name.value,
            phone: frm.phone.value,
            email: frm.email.value,
            dudas: frm.dudasTextarea.value
        };
        let mesage = 'send?phone=' + telefono + '&text=Hola%0AMi%20nombre%20es:%20' + formData.name + '%20' + formData.last_name + '%0A' + 'Correo electrónico:%20 ' + formData.email + '%0A' + 'Número de WhatsApp:%20 ' + formData.phone + '%0A'
        formData.dudas = encodeURIComponent(formData.dudas)
        if(formData.dudas != '') {

            mesage = mesage + '%0AMis dudas e inquietudes son: %0A%0A' + formData.dudas + '%0A'
        }
        // console.log(encodeURIComponent(formData.dudas));
        if (projects.length >= 1){
            mesage = mesage + '%0AQuiero recibir información sobre: %0A'
            for (let i in projects) {
                mesage = mesage + projects[i] + ',%20'
            }
        }
        
        mesage =  mesage + '%0A %0AGracias'

        if(isMobile()) {
            window.open(urlMobile + mesage, '_blank')
        }else{
            window.open(urlDesktop +mesage, '_blank')
        }
        buttonSubmit.innerHTML = "Enviar por  WhatsaApp"
        buttonSubmit.disabled = false
        $("#contactModal").modal("hide");
    }, 4000);
});
