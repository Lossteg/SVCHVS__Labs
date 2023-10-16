const audio = document.querySelector(".audio");
const playButton = document.querySelector(".play__btn"); 
const imgSrc = document.querySelector(".image"); 
const imgMain = document.querySelector(".header-image");

function toggleAudio() {
    if (audio.paused) {
        audio.play(); 
        audio.volume = 0.15;
        imgSrc.src = "/images/img/pause-button.png"; 
        imgMain.src = "/images/gif/maxwell.gif"
    } else {
        audio.pause(); 
        imgSrc.src = "/images/img/play-button.png"; 
        imgMain.src = "/images/jpg/header-image.jpg"
    }
}

playButton.addEventListener("click", toggleAudio);