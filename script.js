// Player
var music = document.querySelector(".music");
var playBtn = document.querySelector(".play");
var seekbar = document.querySelector(".seekbar");
var currentTime = document.querySelector(".current-time");
var duration = document.querySelector(".duration");

function handlePlay() {
  if (music.paused) {
    music.play();
    playBtn.className = "pause";
    playBtn.innerHTML = "<i class='material-icons'>pause</i>";
  } else {
    music.pause();
    playBtn.className = "play";
    playBtn.innerHTML = '<i class="material-icons">play_circle</i>';
  }
  music.addEventListener("ended", function () {
    playBtn.className = "play";
    playBtn.innerHTML = "<i class='material-icons'>play_circle</i>";
    music.currentTime = 0;
  });
}

music.onloadeddata = function () {
  seekbar.max = music.duration;
  var ds = parseInt(music.duration % 60);
  var dm = parseInt(music.duration / 60) % 60;
  duration.innerHTML = dm + ":" + ds;
};

music.ontimeupdate = function () {
  seekbar.value = music.currentTime;
};

handleSeekbar = function () {
  music.currentTime = seekbar.value;
};

music.addEventListener(
  "timeupdate",
  function () {
    var cs = parseInt(music.currentTime % 60);
    var cm = parseInt((music.currentTime / 60) % 60);
    currentTime.innerHTML = cm + ":" + cs;
  },
  false
);
