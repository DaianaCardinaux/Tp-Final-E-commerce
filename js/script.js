$(document).ready(function() {
    $(".btn-seccion1").click(function(){
        if($(".seccion1").is(":visible")){
            $(".seccion1").slideUp();
        } else {
            $(".seccion1").slideDown();
            $(".seccion2, .seccion3").slideUp();
        }
    });
    
    $(".btn-seccion2").click(function(){
        if($(".seccion2").is(":visible")){
            $(".seccion2").slideUp();
        } else {
            $(".seccion2").slideDown();
            $(".seccion1, .seccion3").slideUp();
        }
    });
    
    $(".btn-seccion3").click(function(){
        if($(".seccion3").is(":visible")){
            $(".seccion3").slideUp();
        } else {
            $(".seccion3").slideDown();
            $(".seccion1, .seccion2").slideUp();
        }
    });
});

//Sacado de google