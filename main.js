//let video = document.getElementById("bckg-vid");
//const videoPlay = () => {
//  if (video.paused) {
//    video.play();
//}}

const hide1Show2 = () => {
    document.getElementById("screen-1").style.display = "none";
	document.getElementById("bckg-vid").style.display = "none";
	document.getElementById("screen-2").style.display = "block";
}

const btn80 = () => {
	hide1Show2();
    let all80Content = mov80Arr.concat(series80Arr);
    showData(all80Content);
}
document.getElementById("80-btn").addEventListener ("click", btn80 );

const btn90 = () => {
	hide1Show2();
    let all90Content = mov90Arr.concat(series90Arr);
    showData(all90Content);
}
document.getElementById("90-btn").addEventListener ("click", btn90 );

const btn00 = () => {
    hide1Show2();
    let all00Content = mov00Arr.concat(series00Arr);
    showData(all00Content);
}
document.getElementById("00-btn").addEventListener ("click", btn00 );





const showData = (selection) => {
    let allData = '';
    selection.forEach(element => { 
      return allData += 
      `<div>
        <div class="row">
            <img class="miniature-poster" src=${element.Poster}>
            <div class="background-poster" style="background-image: url(${element.Poster}); background-size: cover; background-position: center center; background-repeat: no-repeat; background-attachment: fixed; height:300px; width: 100%;"></div>
        </div>
        <p class="title">Title: ${element.Title}</p>
        <p class="info">Runtime: ${element.Runtime}</p>
        <p class="info">Year: ${element.Year}</p>
        <p class="info"> Genre: ${element.Genre}</p>  
        <p class="info"> Plot: ${element.Plot}</p>
        <p class="info"> Tipo: ${element.Type}</p>
        </div>
        </div>
        </div>
        </div>`
    });
      document.getElementById('info').innerHTML = allData;
  };


