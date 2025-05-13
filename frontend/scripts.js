window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const header = document.getElementById("header");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}