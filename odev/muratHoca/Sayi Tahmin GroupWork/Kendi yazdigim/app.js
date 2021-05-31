// Tekrar et butonu tiklandiginda baslangic degerleri kurulsun
let enYuksekSkor = 0;
let skor = 10;
let rastgeleSayi = Math.floor(Math.random() * 20 + 1);

document.querySelector(".tekrar").onclick = function () {
  skor = 10;
  enYuksekSkor = 0;
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);
};

// Her kontrol et butonu tiklandiginda baslangic degerleri
document.querySelector(".kontrol").onclick = function () {
  const tahmin = document.querySelector(".tahmin").value;

  let mesaj = document.querySelector(".mesaj"); // mesaj olan satira ulastik
  if(tahmin==rasgeleSayi && skor>1){
    // girilen sayi tahmin edilmezse skor 1 dan asagiya inmesin.
    mesaj.innerHTML = "Tebrikler Bildiiniz"; // tahmine baslaniyor clasina ulastik. yaziyi degistirmek icin innerHTML kullandik.
    document.querySelector(".sayı").innerHTML = rastgeleSayi;
    document.querySelector("body").style.backgroundColor = "green";
    if (skor > enYuksekSkor) {
      enYuksekSkor = skor; // en yuksek skoru yazmak icin
      document.querySelector("en-skor").innerHTML = skor;
    }
  } else {
    if (skor > 1) {
      skor--;
      tahmin < rastgeleSayi
        ? (mesaj.innerHTML = "Arttır")
        : (mesaj.innerHTML = "Azalt");
      document.querySelector(".skor").innerHTML = skor; // skoru ekranda gosterdik
    } else {
      mesaj.innerHTML = "Oyunu Kaybettiniz  🤔";
      document.querySelector(".skor").innerHTML = 0;
    }
  }
};

if(tahmin==rasgeleSayi && skor>1){
 mesaj.innerHTML="tebrikler bildiniz";
 document.querySelector(".sayı").innerHTML=rasgeleSayi;
 document.querySelector("body").style.backgroundColor="green";
 if(skor>enYüksekSkor){
  enYüksekSkor=skor;
  document.querySelector(".en-skor").innerHTML=skor;
 }
}else {
if(skor>1){
 skor--;
 tahmin < rasgeleSayi ? (mesaj.innerHTML="Arttır"):(mesaj.innerHTML="Azalt");
document.querySelector(".skor").innerHTML=skor;
}else{
 mesaj.innerHTML="oyunu kaybettiniz"
 document.querySelector(".skor").innerHTML=0;
}
}
}
