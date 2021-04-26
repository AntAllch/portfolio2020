//Nav appear on scroll up - Vanilla JavaScript
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


//Parallax BG - jQuery
$(window).scroll(function() {
    parallax();
})

function parallax(){

    var wScroll = $(window).scrollTop();

    $(".parallax-bg").css("background-position", "center "+(wScroll*0.5)+"px")

}


//Intersection Observers

//About Variables
const about = document.querySelector(".about");
const aboutMeGroup = document.querySelector(".aboutme-group");
const skillsGroup = document.querySelector(".skills-group");

//Intersectional Observers Options
const aboutOptions = {threshold: 0.5};

//Home Nav Observer
const aboutObserver = new IntersectionObserver(function(entries, aboutObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            aboutMeGroup.classList.add("fade-in-left");
            setTimeout(function(){
                skillsGroup.classList.add("fade-in-left");
            }, 400);
            aboutObserver.unobserve(entry.target);
        } else {
            return;
        }
        console.log(entry.target);
    });
}, aboutOptions);

aboutObserver.observe(about);