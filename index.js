const z = new XMLHttpRequest();
const method = "GET";
const url = "https://zeev-x.github.io/x/parent.json";

z.open(method,url,true);
z.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(z.responseText);
    var y = Math.floor(Math.random()*data.length);
    var result = data[y].img;
    var web = `<img src="${result}" height="500px">`;
    document.getElementById("zeev-x").innerHTML = web;
  }
};
z.send();