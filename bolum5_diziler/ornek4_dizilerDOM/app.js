const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];
const liste = document.createElement("ul");
liste.className = "liste";
document.querySelector(".liste-div").appendChild(liste);
const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};
const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};
const aciklamaGuncelle = function (dizi) {
  const aciklama = document.querySelector(".aciklama");
  const yeniMaaslar = dizi.join(" ");
  aciklama.innerHTML = `Maaşlar: ${yeniMaaslar} <br> 
  Toplam Maaş: ${dizi.reduce((x, y) => x + y, 0)}`;
};
diziyiListeyeEkle();
aciklamaGuncelle(maaslar);
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Lutfen veri girisi yapiniz.");
  } else {
    //input'tan gelen veriyi diziye kaydet
    maaslar.push(Number(satir.value));
    //input'tan gelen veriyi listeye yazdir
    listeyeEkle(satir.value);
    //işlemler bittikten sonra input'da kalan veriyi sil.
    satir.value = "";
    aciklamaGuncelle(maaslar);
  }
};
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};
document.querySelector(".ara").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Aranacak maaş limiti giriniz.");
  } else {
    const flitreli = maaslar.filter((m) => m <= satir.value);
    if (flitreli.length == 0) {
      alert("Aradaginiz kriterlerde maas bulunamadi.");
    } else {
      aciklamaGuncelle(flitreli);
    }
  }
  satir.value = "";
};

document.querySelector(".input-liste").onkeydown = function (e) {
  if (e.keyCode === 13) {
    // enter tusuna basildiysa // enter'in ascii code karsiligi 13 dur.
    document.querySelector(".ekle").onclick(); // ekle elemaninin onclick fonksiyonunu calistir.
  }

  if (e.keyCode === 46) {
    document.querySelector(".sil").onclick();
  }
};

// const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

// const liste = document.createElement("ul");
// liste.className = "liste";
// document.querySelector(".liste-div").appendChild(liste);

// const listeyeEkle = function (satir) {
//   // bu fonksiyon sayesinde inputtan gelen degeri eklemis olduk.
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(satir));
//   liste.appendChild(li);
// };

// const diziyiListeyeEkle = function () {
//   for (let i in maaslar) {
//     listeyeEkle(maaslar[i]);
//   }
// };

// const aciklamaGuncelle = function (dizi) {
//   // bu fonksiyonla butonlarin altina aciklama yazdik.
//   const aciklama = document.querySelector(".aciklama");
//   const yeniMaaslar = dizi.join(" ");
//   aciklama.innerHTML = `Maaşlar: ${yeniMaaslar} <br>
//   Toplam Maaş: ${dizi.reduce((x, y) => x + y, 0)}`;
// };

// diziyiListeyeEkle();
// aciklamaGuncelle(maaslar);

// document.querySelector(".ekle").onclick = function () {
//   const satir = document.querySelector(".input-liste");
//   if (!satir.value) {
//     alert("Lutfen veri girisi yapiniz..!");
//   } else {
//     // veri girisi yapmadan butona basarsa uyari versin diye if yazdik.
//     // inputtan gelen veriyi diziye kaydet
//     maaslar.push(Number(satir.value));
//     // inputtan gelen veriyi listeye yazdir
//     listeyeEkle(satir.value);
//     // islemler bittikten sonra inputta kalan veriyi sil.
//     satir.value = "";
//     aciklamaGuncelle(maaslar);
//   }
// };

// document.querySelector(".sil").onclick = function () {
//   if (maaslar.length == 0) {
//     alert("Silinecek oge kalmadi..!");
//   } else {
//     maaslar.pop(); // maaslar dizisinden cikar
//     const liste = document.querySelector(".liste");
//     liste.removeChild(liste.lastElementChild);
//     aciklamaGuncelle(maaslar);
//   }
// };

// document.querySelector(".ara").onclick = function () {
//   const satir = document.querySelector(".input-liste");
//   if (!satir.value) {
//     alert("Aranacak maaş limitini giriniz..!");
//   } else {
//     const filtreli = maaslar.filter((m) => m <= satir.value);
//     if (filitreli.length == 0) {
//       alert("Aradiginiz kriterlerde maas bulunamadi..!");
//     } else {
//       aciklamaGuncelle(filitreli);
//     }
//   }
//   satir.value = "";
// };
