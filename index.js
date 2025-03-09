
$("#over").on("click",function(){
    scroll(".Overview");
    $(this).blur();
})

$("#proj").on("click",function(){
    scroll(".Projects");
    $(this).blur();
})
$("#cont").on("click",function(){
    scroll(".Social");
    $(this).blur();
})

function scroll(position){
    $("html,body").animate({
        scrollTop:$(position).offset().top
    },100);
    
}