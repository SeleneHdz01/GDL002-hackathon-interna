let video = document.getElementById("bckg-vid");
let btn = document.getElementById("myBtn");

const videoPlay = () => {
  if (video.paused) {
    video.play();
}}

const s80 = () => {
	document.getElementById("screen-1").style.display = "none";
	document.getElementById("bckg-vid").style.display = "none";
	document.getElementById("screen-2").style.display = "block";
	// location.replace('screen2.html')
}

// const btn80 = document.getElementById("80-btn");
// btn80.addEventListener

document.getElementById("80-btn").addEventListener ("click", s80 );