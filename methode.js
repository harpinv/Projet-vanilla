//On stoke les éléments html dans des variables
let bloc = document.getElementById('bloc');
let precedent = document.getElementById('precedent');
let suivant = document.getElementById('suivant');

//On stoke les url dans des variable et on les met dans un tableau
let photo1 = "url(https://i0.wp.com/www.homenaturalcures.com/wp-content/uploads/accef4b6-f28e-489e-9c06-98525d8c299b.jpg?fit=5616%2C3744&ssl=1)";
let photo2 = "url(https://www.medcentertmj.com/wp-content/uploads/2017/01/bigstock-Vanilla-Pods-and-Flower-over-W-149826200.jpg)";
let photo3 = "url(https://plant.daleysfruit.com.au/l/growing-vanilla-9569.jpeg)";
let photo4 = "url(https://img1.mashed.com/img/gallery/why-is-vanilla-so-expensive/intro-1581436991.jpg)";
let photo5 = "url(https://flavourstogo.ca/wp-content/uploads/2018/01/French-Vanilla-Food-Flavour-by-Capella-fb.jpg)";
let photo6 = "url(https://nutritionyoucanuse.com/wp-content/uploads/2018/04/canstockphoto49220183.jpg)";
let photo7 = "url(https://th.bing.com/th/id/R.7d92440006b87e0bfedb336317e270e5?rik=HMEJ1Fi%2fSk0dKA&pid=ImgRaw&r=0)";
let photo8 = "url(https://plant.daleysfruit.com.au/l/growing-vanilla-9569.jpeg)";
let photo9 = "url(https://experimentalperfumeclub.com/wp-content/uploads/2020/11/vanilla-scent-corner.jpg)";
let photo10 = "url(https://img1.mashed.com/img/gallery/things-you-should-know-before-using-another-drop-of-vanilla-extract/intro-1601055040.jpg)";

let image = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

//On défini le style du bloc image
bloc.style.height = "600px";
bloc.style.backgroundImage = image[0];
bloc.style.backgroundSize = "900px";
bloc.style.transition = "background-image";
bloc.style.transitionDuration = "2s";
bloc.style.transitionTimingFunction = "linear";
let puce = 1;

//Oncréer des fonction dans les boutons
suivant.addEventListener('click', function () {
    if(puce < image.length) {
        bloc.style.backgroundImage = image[puce];
        puce++;
    }
})

precedent.addEventListener('click', function () {
    if(puce >= 0) {
        puce--;
        bloc.style.backgroundImage = image[puce];
    }
})