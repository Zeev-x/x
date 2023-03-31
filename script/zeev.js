const x = new XMLHttpRequest();
const m = "GET";
const u = "https://lucyane12.github.io/myDatabase/data.json";

function miku(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.miku.length);
      var res = data.miku[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function nino(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.nino.length);
      var res = data.nino[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function zero(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.zero.length);
      var res = data.zero[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function ecchi(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.ecchi.length);
      var res = data.ecchi[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function neko(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.neko.length);
      var res = data.neko[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function cosplay(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.cosplay.length);
      var res = data.cosplay[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function agirls(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.agirls.length);
      var res = data.agirls[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}

function nsfw(){
  x.open(m,u,true);
  x.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.nsfw.length);
      var res = data.nsfw[rand];
      var web = `<img src="${res}" height="300px">`;
      document.getElementById("image").innerHTML = web;
    }
  };
  x.send();
}