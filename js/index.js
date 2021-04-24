var lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        header.style.top = "-10%";
    } else{
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
})