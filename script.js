//Global variables
var element;


//Custom cursor
const menu = document.getElementById("menu")
const navContainer=document.getElementById("nav_content2")
navContainer.addEventListener("click",()=>{
    menu.style.right = "-3000px"
})

const ham = document.querySelector(".ham")

ham.addEventListener("click",()=>{
    menu.style.right = "0px"
})


const closebtn = document.querySelector(".close")
closebtn.addEventListener("click",()=>{
    console.log("click de btn close")
    menu.style.right = "-3000px"
})





//Detect onclick event
// if (window.matchMedia("(max-width: 920px)").matches === false) {
//     $(".ham").on("click", function(){
//         $("menu").css("right", "0px");
//         $(".overlay").css("opacity","1");
//         $(".overlay").css("z-index","99");
//     });

//     $(".close").on("click", function(){
//         $("menu").css("right", "-400px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
//     $(".nav-ham-link").on("click", function(){
//         $("menu").css("right", "-400px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });

//     $(".overlay").on("click", function(){
//         $("menu").css("right", "-4000px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
// } else {
//     $(".ham").on("click", function(){
//         $(".nav_content").css("right", "0px");
//         $(".overlay").css("opacity","1");
//         $(".overlay").css("z-index","1");
//     });
    
//     $(".close").on("click", function(){
//         $(".nav_content").css("right", "-4000px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
    
//     $(".overlay").on("click", function(){
//         $(".nav_content").css("right", "-200px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
// }

// if (window.matchMedia("(min-width: 320px)").matches === false) {
//     $(".ham").on("click", function(){
//         $("menu").css("right", "0px");
//         $(".overlay").css("opacity","1");
//         $(".overlay").css("z-index","99");
//     });

//     $(".close").on("click", function(){
//         $("menu").css("right", "-400px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
//     $(".nav-ham-link").on("click", function(){
//         $("menu").css("right", "-400px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });

//     $(".overlay").on("click", function(){
//         $("menu").css("right", "-4000px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
// } else {
//     $(".ham").on("click", function(){
//         $(".nav_content").css("right", "0px");
//         $(".overlay").css("opacity","1");
//         $(".overlay").css("z-index","1");
//     });
    
//     $(".close").on("click", function(){
//         $(".nav_content").css("right", "-4000px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
    
//     $(".overlay").on("click", function(){
//         $(".nav_content").css("right", "-200px");
//         $(".overlay").css("opacity","0");
//         $(".overlay").css("z-index","-1");
//     });
// }


//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--black)") ;
    } else {
        $("nav").css("background-color","transparent") ;
    }
}


//Fomr contact

