# Contoh

### salin file html di bawah ini

```

  <skrip>

    const zeev = new XMLHttpRequest();

    metode const = "DAPATKAN";

    url const = "https://zeev-x.github.io/x/parent.json";

    zeev.open(metode, url, benar);

    zeev.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){

      var data = JSON.parse(zeev.responseText);

      var y = Math.floor(Math.random()*data.panjang);

      var res = data[y].img;

      var web = `<img src="${res}" width="500px">`;

      document.getElementById("result").innerHTML = web;

    }

    };

    zeev.kirim();

  </skrip>

    

  <div id="hasil"></div>

```

## Catatan

* Basis data ini tidak mendukung penggunaan ``` forEach ``` !!!

##Database

* [Klik here!](https://zeev-x.github.io/x/parent.json)
