//const allContent= ["tt0088763","tt0086250","tt0083658","tt0083866","tt0087332","tt0094721","tt0091064","tt0093773","tt0097576","tt0081505", "tt0110912","tt0106062","tt0105236","tt0099487","tt0120338","tt0117951","tt0107290","tt0120586","tt0137523","tt0114369","tt0110357","tt0180093","tt0120903","tt0249462","tt0289879","tt0209144","tt0245712","tt0160127","tt0204946","tt0175142","tt0198781","tt0454921","tt0090390","tt0096697","tt0094582","tt0096694","tt0083437","tt0092359","tt0096708","tt0096569","tt0086730","tt0092455","tt0106179","tt0108778","tt0098800","tt0118276","tt0106004","tt0112230","tt0098749","tt0106080","tt0101188","tt0121955","tt0149460","tt0165598","tt0118298","tt0413573","tt0212671","tt0411008","tt0238784","tt0363328","tt0460681","tt0460649","tt0369179","tt0247082","tt0248654"];

const series80 = ["tt0090390","tt0096697","tt0094582","tt0096694","tt0083437","tt0092359","tt0096708","tt0096569","tt0086730","tt0092455"];
const series90 = ["tt0106179","tt0108778","tt0098800","tt0118276","tt0106004","tt0112230","tt0098749","tt0106080","tt0101188","tt0121955","tt0149460","tt0165598","tt0118298"];
const series00 = ["tt0413573","tt0212671","tt0411008","tt0238784","tt0363328","tt0460681","tt0460649","tt0369179","tt0247082","tt0248654"];
const mov80 =  ["tt0088763","tt0086250","tt0083658","tt0083866","tt0087332","tt0094721","tt0091064","tt0093773","tt0097576","tt0081505"];
const mov90 = ["tt0110912","tt0106062","tt0105236","tt0099487","tt0120338","tt0117951","tt0107290","tt0120586","tt0137523","tt0114369","tt0110357"];
const mov00 = ["tt0180093","tt0120903","tt0249462","tt0289879","tt0209144","tt0245712","tt0160127","tt0204946","tt0175142","tt0198781","tt0454921"];

const mov80Arr = [];

for(let i = 0; i < mov80.length; i++){
    fetch('http://www.omdbapi.com/?i=' + mov80[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    mov80Arr[i] = dataAsJSON;
    });
};

const mov90Arr = [];

for(let i = 0; i < mov90.length; i++){
    fetch('http://www.omdbapi.com/?i=' + mov90[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    mov90Arr[i] = dataAsJSON;
    });
};

const mov00Arr = [];

for(let i = 0; i < mov00.length; i++){
    fetch('http://www.omdbapi.com/?i=' + mov00[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    mov00Arr[i] = dataAsJSON;
    });
};


const series80Arr = [];

for(let i = 0; i < series80.length; i++){
    fetch('http://www.omdbapi.com/?i=' + series80[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    series80Arr[i] = dataAsJSON;
    });
};

const series90Arr = [];

for(let i = 0; i < series90.length; i++){
    fetch('http://www.omdbapi.com/?i=' + series90[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    series90Arr[i] = dataAsJSON;
    });
};

const series00Arr = [];

for(let i = 0; i < series00.length; i++){
    fetch('http://www.omdbapi.com/?i=' + series00[i] + '&apikey=c46a7038').then( (data) => {
    return data.json();
    }).then((dataAsJSON) => {
    series00Arr[i] = dataAsJSON;
    });
};


