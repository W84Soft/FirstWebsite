$("#about").on("click",function(){
    $("#h2 ").addClass("show");
});
$("#about").on("click",function(){
    $(" #graphic").addClass("show");
});

$("#contact").on("click",function(){
    $("#con").addClass("show");
});

$("#ourwork").on("click",function(){
    $(".work").addClass("show");
});

if($(".work").hasClass("active")==false){
    $(".h1").removeClass("active");
};





// $(".dropdown-list a ").on("click",function(){
//     $(".dropdown-list").removeClass("active");
//     $(".kalku").removeClass("show")