let arrowLeft = document.querySelector('.arrow__left');
let arrowRight = document.querySelector('.arrow__right');

let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');

let photo1 = document.querySelector('#photo1');
let photo2 = document.querySelector('#photo2');
let photo3 = document.querySelector('#photo3');

photo1.classList.add('active');

let hideActiveElement = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showPhoto = (pNumber) => {
    hideActiveElement();
    document.querySelector('#photo'+ pNumber).classList.add('active');
};

let activePhoto = 1;

let showNextPhoto = () => {
    if(activePhoto === 3){
        activePhoto = 1;
    }else{
        activePhoto = activePhoto + 1;
    };
    showPhoto(activePhoto);
};
let showPreviousPhoto = () => {
    if(activePhoto === 1){
        activePhoto = 3;
    }else{
        activePhoto = activePhoto - 1;
    };
    showPhoto(activePhoto);
};

let showPhoto1 = () => {
    showPhoto(1);
    activePhoto = 1 ;
};
let showPhoto2 = () => {
    showPhoto(2);
    activePhoto = 2 ;
};
let showPhoto3 = () => {
    showPhoto(3);
    activePhoto = 3 ;
};

// for(let i = 1; i <= 3; i++){
//     let showPhotoI =() => {
//         showPhoto(i);
//         activePhoto = i ;
//     };
// };

// for(let i=1; i<=3; i++ ) {
//     let showPhotoI = () => {
//         activePhoto = i ;
//         showPhoto(i);
//     };
//     document.querySelector('#dot'+ i).addEventListener('click',showPhotoI);
// };

dot1.addEventListener('click', showPhoto1);
dot2.addEventListener('click', showPhoto2);
dot3.addEventListener('click', showPhoto3);

arrowRight.addEventListener('click',showNextPhoto );
arrowLeft.addEventListener('click',showPreviousPhoto);

let mDot = document.querySelector('#main__dot');
let body = document.querySelector('body');
let timer = 1;
let altBackground = () =>{
    if(timer === 1){
        body.classList.replace('background','alt__background');
        timer = 2;
    }else{
        body.classList.replace('alt__background','background');
        timer = 1;
    };
};
mDot.addEventListener('click',altBackground);

