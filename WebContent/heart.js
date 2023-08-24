function toggleHeart(heartId) {
  var heartSpan = document.getElementById(heartId);
  if (heartSpan.innerHTML === "♡") {
    heartSpan.innerHTML = "♥";
  } else {
    heartSpan.innerHTML = "♡";
  }
}