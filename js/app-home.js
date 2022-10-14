$(document).ready(function(){
    // $("a img, .btn-lots").on("click", function(e) {
    //     console.log("Click");
    //     // Globals
    //     e.stopImmediatePropagation();
    //     let lots = Number($(this).attr('data-lot'));
    //     let src = $(this).attr('src');
    //     console.log(src);
    //     $('.num-lot').text(lots);
    //     $('#img-lot').attr("src", src);
    
    //     console.log("lote No: " + lots);
    //     $("#modal-lots").modal("show");
    
    // });
    
    $(".btn-investments").on("click", function(e) {
        // Globals
        e.stopImmediatePropagation();
        let url_page = '';
        let url_card = $(this).attr('data-href');
        let url_img = $(this).closest('.carousel').attr('data-href');
        if (url_card !== undefined) {
            url_page = url_card;
        } else {
            url_page = url_img;
        }
        window.open(url_page, '_blank');
    
    });
});
