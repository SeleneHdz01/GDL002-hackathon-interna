//let video = document.getElementById("bckg-vid");
//const videoPlay = () => {
//  if (video.paused) {
//    video.play();
//}}
//const allContent= ["tt0088763","tt0086250","tt0083658","tt0083866","tt0087332","tt0094721","tt0091064","tt0093773","tt0097576","tt0081505", "tt0110912","tt0106062","tt0105236","tt0099487","tt0120338","tt0117951","tt0107290","tt0120586","tt0137523","tt0114369","tt0110357","tt0180093","tt0120903","tt0249462","tt0289879","tt0209144","tt0245712","tt0160127","tt0204946","tt0175142","tt0198781","tt0454921","tt0090390","tt0096697","tt0094582","tt0096694","tt0083437","tt0092359","tt0096708","tt0096569","tt0086730","tt0092455","tt0106179","tt0108778","tt0098800","tt0118276","tt0106004","tt0112230","tt0098749","tt0106080","tt0101188","tt0121955","tt0149460","tt0165598","tt0118298","tt0413573","tt0212671","tt0411008","tt0238784","tt0363328","tt0460681","tt0460649","tt0369179","tt0247082","tt0248654"];
const hide1Show2 = () => {
    document.getElementById("screen-1").style.display = "none";
    document.getElementById("bckg-vid").style.display = "none";
    document.getElementById("screen-2").style.display = "block";
}

const btn80 = () => {
    hide1Show2();
    let all80Content = mov80Arr.concat(series80Arr);
    showData(all80Content);
    document.getElementById('decade').innerHTML = `Your Oldies: 80's`;
}
document.getElementById("80-btn").addEventListener ("click", btn80 );

const btn90 = () => {
    hide1Show2();
    let all90Content = mov90Arr.concat(series90Arr);
    showData(all90Content);
    document.getElementById('decade').innerHTML = `Your Oldies: 90's`;

}
document.getElementById("90-btn").addEventListener ("click", btn90 );

const btn00 = () => {
    hide1Show2();
    let all00Content = mov00Arr.concat(series00Arr);
    showData(all00Content);
    document.getElementById('decade').innerHTML = `Your Oldies: 2000's`;
}
document.getElementById("00-btn").addEventListener ("click", btn00 );

randomBtn();
document.getElementById("info").innerHTML=' ';

const btnRandom = () => {
   randomBtn();
   hide1Show2();

   let allRandom = random;
   showData(allRandom);
   document.getElementById('decade').innerHTML =  `Your Oldies: Random`;
}
document.getElementById("random-btn").addEventListener ("click", btnRandom );


const showData = (selection) => {
    let allData = '';
    selection.forEach(element => { 
      return allData += 
      `<div class="dinamic">
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="img-responsive" src=${element.Poster} alt="">
        <div class="overlay">
            <h2>Title: ${element.Title}</h2>
            <div class="info">
                <p class="info">Runtime: ${element.Runtime}</p>
                <p class="info">Year: ${element.Year}</p>
                <p class="info"> Genre: ${element.Genre}</p>  
                <p class="info"> Plot: ${element.Plot}</p>
                <p class="info"> Tipo: ${element.Type}</p>
            </div>
        </div>
    </div>
</div>
</div>`
    });
      document.getElementById('info').innerHTML = allData;

  };


