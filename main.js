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

//const series80 = ["tt0090390","tt0096697","tt0094582","tt0096694","tt0083437","tt0092359","tt0096708","tt0096569","tt0086730","tt0092455"];
//const series90= ["tt0106179","tt0108778","tt0098800","tt0118276","tt0106004","tt0112230","tt0098749","tt0106080","tt0101188","tt0121955","tt0149460","tt0165598","tt0118298"];
//const series2000 = ["tt0413573","tt0212671","tt0411008","tt0238784","tt0363328","tt0460681","tt0460649","tt0369179","tt0247082","tt0248654"];

const moviesSeries= [
    "tt0088763",
    "tt0086250",
    "tt0083658",
    "tt0083866",
    "tt0087332",
    "tt0094721",
    "tt0091064",
    "tt0093773",
    "tt0097576",
    "tt0081505", 
    "tt0110912",
    "tt0106062",
    "tt0105236",
    "tt0099487",
    "tt0120338",
    "tt0117951",
    "tt0107290",
    "tt0120586",
    "tt0137523",
    "tt0114369",
    "tt0110357",
    "tt0180093",
    "tt0120903",
    "tt0249462",
    "tt0289879",
    "tt0209144",
    "tt0245712",
    "tt0160127",
    "tt0204946",
    "tt0175142",
    "tt0198781",
    "tt0454921",
    "tt0090390",
    "tt0096697",
    "tt0094582",
    "tt0096694",
    "tt0083437",
    "tt0092359",
    "tt0096708",
    "tt0096569",
    "tt0086730",
    "tt0092455",
    "tt0106179",
    "tt0108778",
    "tt0098800",
    "tt0118276",
    "tt0106004",
    "tt0112230",
    "tt0098749",
    "tt0106080",
    "tt0101188",
    "tt0121955",
    "tt0149460",
    "tt0165598",
    "tt0118298",
    "tt0413573",
    "tt0212671",
    "tt0411008",
    "tt0238784",
    "tt0363328",
    "tt0460681",
    "tt0460649",
    "tt0369179",
    "tt0247082",
    "tt0248654"
    ];

    

const allArr = [];

for(let i = 0; i < moviesSeries.length; i++){
    fetch('http://www.omdbapi.com/?i=' + moviesSeries[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    moviesSeries[i] = dataAsJSON;
    });
}
console.log(moviesSeries);


const arr80 = [];

moviesSeries.forEach(property => {

    console.log(property.Year);
    return property.Year;
});