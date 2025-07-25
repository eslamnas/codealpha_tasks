const imageTrack = document.getElementById("imageTrack");

function scrollToLeft() {
  imageTrack.scrollBy({
    left: -400,
    behavior: 'smooth'
  });
}

function scrollToRight() {
  imageTrack.scrollBy({
    left: 400,
    behavior: 'smooth'
  });
}
