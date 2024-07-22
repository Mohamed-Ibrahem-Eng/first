
let listArray = document.querySelectorAll(".project-area button")




listArray.forEach((ele)=>{
    ele.addEventListener("click",removeAll)
})

function removeAll(){
    listArray.forEach((ele)=>{
        ele.classList.remove("active")
       
    })
    this.classList.add("active")
}

//  ===================== isotope js ========================

$(document).ready(function(){
    var $galleryContainer = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    $('.button-group button').on('click', function(){
        var filterValue = $(this).attr('data-filter');
        $galleryContainer.isotope({ filter: filterValue });
    });
});



// ================ btn scroll up ======================
let btn = document.querySelector(".btn-up button");
let header = document.querySelector(".header-aria");

window.onscroll = function () {
    if (this.scrollY >= 597) {
        btn.classList.add("up");
    } else {
        btn.classList.remove("up");
    }

    if (this.scrollY > 0) {
        header.classList.add("pin");
    } else {
        header.classList.remove("pin");
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// ================ header ======================
document.querySelector("header .container-fluid .icon").onclick = function () {
    document.querySelector("header .navbar-nav").classList.toggle("nav-show");
};