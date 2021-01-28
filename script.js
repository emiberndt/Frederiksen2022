// Background music
let bgMusic = document.getElementById("bgMusic");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if(bgMusic.paused){
        bgMusic.play();
        icon.src = "media/music/pause.png";
    }else{
        bgMusic.pause();
        icon.src = "media/music/play.png";
    }
}

// Sidebar navigation menu 
document.querySelector(".burger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

