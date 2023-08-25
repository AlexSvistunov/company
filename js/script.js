const btnPlay = document.querySelector('.projects__video-btn');
const video = document.querySelector('.projects__video video');
const burgerBtn = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header__nav')
const body = document.querySelector('body');

btnPlay.addEventListener('click', function(){
    video.play();
    video.setAttribute('controls', 'controls');
    btnPlay.style.display = "none";
    btnPlay.classList.add('.projects__video-btn--hidden');
});

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');

});