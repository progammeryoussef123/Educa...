let navbar = document.querySelector(".header .flex .navbar");
let menuBtn = document.getElementById("ment-btn");
menuBtn.onclick = ()=>{
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.control-prev');
const nextButton = document.querySelector('.control-next');

let index = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
});

nextButton.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
});



let title = document.getElementById("title");
let home = document.getElementById("home");
let  count = document.querySelector(".count");
let about = document.getElementById("about");
let courses = document.getElementById("courses");
let teachers = document.getElementById("teachers");
let reviews =  document.getElementById("reviews");
let contact = document.getElementById("contact");
let footer = document.querySelector(".footer");
let header = document.getElementById("header");
let countSEc = document.getElementById("count");
let wifi =  document.querySelector(".wifi");

window.onload = () => {
    if(window.navigator.onLine){
        onlion();
    }
    else {
        offonlion();
    }
}
window.addEventListener("online",function() {
    onlion();
});
window.addEventListener("offline",function() {
    offonlion();
})

function onlion() {
    title.style.display = "none";
    wifi.classList.add("hide");
    home.style.display = "block";
    contact.style.display = "block";
    count.style.display = "block";
    about.style.display = "block";
    reviews.style.display = "block";
    footer.style.display = "block";
    teachers.style.display = "block";
    courses.style.display = "block";
    header.style.display = "block";
    countSEc.style.display = "block";
}

function offonlion() {
    wifi.classList.remove("hide");
    title.style.display = "block";
    home.style.display = "none";
    contact.style.display = "none";
    count.style.display = "none";
    about.style.display = "none";
    reviews.style.display = "none";
    footer.style.display = "none";
    teachers.style.display = "none";
    courses.style.display = "none";
    header.style.display = "none";
    countSEc.style.display = "none";
}
