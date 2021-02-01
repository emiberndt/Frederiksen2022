// Background music
let bgMusic = document.getElementById("bgMusic");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if(bgMusic.paused){
        bgMusic.play();
        icon.src = "assets/media/music/pause.png";
    }else{
        bgMusic.pause();
        icon.src = "assets/media/music/play.png";
    }
}

// Sidebar navigation menu 
document.querySelector(".burger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// API MAP
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: -28.024, lng: 140.887 },
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
 
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: -16.475381, lng: -151.775679 },
  { lat: -16.490108, lng: -151.715297 },
  { lat: -16.531825, lng: -151.762541 },
  { lat:   0.270436, lng:   73.426306 },
  { lat:   0.507135, lng:   73.545055 },
  { lat:   0.848579, lng:   73.242462 },
];
