$(document).ready(function(){

    function validaCheckbox() {
        $('#spanish').prop("checked", false);
        $('#english').prop("checked", false);
    }

    var checkbox = document.getElementById('either');
    $("#spanish, #english").on("click", function(e) {
        // let id_lang = $(this).attr('id');
        if( $(this).is(':checked')) {
            $('#either').prop("checked", false);
            // console.log(id_lang + '- Seleccionado');
        }
        
    });

    checkbox.addEventListener("change", validaCheckbox, false);

});
