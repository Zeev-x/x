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
function pass(){
  var x = document.getElementById("pass").value;
  if(x == "nsfw"){
    window.onload = nsfw();
  } else if(x == "agirls"){
    window.onload = agirls()
  } else if(x == "cosplay"){
    window.onload = cosplay()
  } else if(x == "neko"){
    window.onload = neko();
  } else if(x == "ecchi"){
    window.onload = ecchi();
  } else if(x == "zero"){
    window.onload = zero();
  } else if(x == "nino"){
    window.onload = nino();
  } else if(x == "miku"){
    window.onload = miku();
  } else {
    document.getElementById("image").innerHTML = "Parameter tidak terdaftar";
  }
}
window.onload = function(){
  var x = `<h3>Parameter :</h3>
  <p>
  agirls<br>
  cosplay<br>
  zero<br>
  neko<br>
  ecchi<br>
  nino<br>
  miku<br>
  nsfw<br>
  </p>`;
  document.getElementById("xx").innerHTML = x;
}