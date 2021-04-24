//Nav appear on scroll up
var lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    var scrollTop = window.pageYOffset;

    if(scrollTop > lastScrollTop){
        header.style.top = "-20%";
    } else{
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
})


//Parallax BG
$(window).scroll(function() {
    parallax();
})

function parallax(){

    var wScroll = $(window).scrollTop();

    $(".parallax-bg").css("background-position", "center "+(wScroll*0.5)+"px")

}