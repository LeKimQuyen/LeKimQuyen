const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let bgi = $('header .bgi');
let brandField = $('.list');
let brandElements = $$('.list a');
let imgArr = [
    "url(img/BMW/BMW-background.webp)",
    "url(img/Honda/Honda-background.jpg)",
    "url(img/Kawasaki/Kawasaki-background.jpg)",
    "url(img/Yamaha/Yamaha-background.jpg)",
    "url(img/Ducati/Ducati-background.jpg)"
];
// event
// hover logo
brandElements.forEach((logo, index) => {
    logo.onmouseover = () => {
        let currLogo = Array.from(brandElements).find(logo => {
            return logo.classList.contains('active');
        });

        currLogo.classList.remove('active');
        logo.classList.add('active');
        bgi.style.backgroundImage=imgArr[index];
    }          
});


// function
// automatically
setInterval(function () {
    let currIndex;
    let currLogo = Array.from(brandElements).find((logo, index) => {
        currIndex = index;
        return logo.classList.contains('active');
    });

    currLogo.classList.remove('active');
    if (currIndex < brandElements.length - 1) {
        brandElements[currIndex + 1].classList.add('active');
        bgi.style.backgroundImage=imgArr[currIndex + 1];
    } else {
        brandElements[0].classList.add('active');
        bgi.style.backgroundImage=imgArr[0];
    };
}, 3000);