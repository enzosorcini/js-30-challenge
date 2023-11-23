window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    
    if(!audio) return;

    audio.currentTime = 0; //rewinds the audio element
    audio.play();
})

