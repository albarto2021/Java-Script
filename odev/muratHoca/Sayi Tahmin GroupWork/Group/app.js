//tekrar et butonu tıklandığında başlangıç değerleri kurulsun
let enYüksekSkor = 0;
let skor = 10;
let rasgeleSayi = Math.floor(Math.random() * 20 + 1);
document.querySelector(".tekrar").onclick = function () {
  skor = 10;
  enYüksekSkor = 0;
  rasgeleSayi = Math.floor(Math.random() * 20 + 1);
};
//her kontrol et butonu tıklandığında
document.querySelector(".kontrol").onclick = function () {
  const tahmin = document.querySelector(".tahmin").value;
  let mesaj = document.querySelector(".mesaj");
  if (tahmin == rasgeleSayi && skor > 1) {
    mesaj.innerHTML = "tebrikler bildiniz";
    document.querySelector(".sayı").innerHTML = rasgeleSayi;
    document.querySelector("body").style.backgroundColor = "green";
    if (skor > enYüksekSkor) {
      enYüksekSkor = skor;
      document.querySelector(".en-skor").innerHTML = skor;
    }
  } else {
    if (skor > 1) {
      skor--;
      tahmin < rasgeleSayi
        ? (mesaj.innerHTML = "Arttır")
        : (mesaj.innerHTML = "Azalt");
      document.querySelector(".skor").innerHTML = skor;
    } else {
      mesaj.innerHTML = "oyunu kaybettiniz";
      document.querySelector(".skor").innerHTML = 0;
    }
  }
};
