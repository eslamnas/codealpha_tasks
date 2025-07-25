const songs = [
  {
    title: "سورة الفاتحة",
    src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
    cover: "https://i.imgur.com/I4n8vUq.jpg",
  },
  {
    title: "آية الكرسي",
    src: "https://server8.mp3quran.net/afs/002255.mp3",
    cover: "https://i.imgur.com/MPfbZcf.jpg",
  },
  {
    title: "خواتيم البقرة",
    src: "https://server8.mp3quran.net/afs/002285.mp3",
    cover: "https://i.imgur.com/7GVnrfr.jpg",
  },
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const playPauseBtn = document.getElementById("playPauseBtn");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");

function loadSong(index) {
  title.innerText = songs[index].title;
  audio.src = songs[index].src;
  cover.src = songs[index].cover;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function updateProgress() {
  if (!isFinite(audio.duration)) return;
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
}

function setProgress(e) {
  if (!isFinite(audio.duration)) return;
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);

// تحميل أول سورة
loadSong(currentSong);
