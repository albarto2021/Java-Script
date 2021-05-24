// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// // ! 1. YONTEM : FUNCTION DECLARATION
// function yazdir() {
//   console.log("Ahmet");
// }
// yazdir(); // Fonks. çagrilmasi / fonks. calling

// // * Ornek: Parametreli Fonksiyon
// function yazdirAd(ad, yas) {
//   console.log(`Adiniz ${ad} Yasiniz ${yas}`);
// }
// yazdirAd("Mustafa", 23); // Call | invoke
// yazdirAd("John", 21); // Call | invoke

// //* Ornek: Parametreli, donus degerli Fonksiyon -----------------------------
// function yasHesapla(dogum) {
//   return 2021 - dogum;
// }

// console.log(`Yasiniz: ${yasHesapla(1995)}`); // 1. yontem

// alert(`Yasiniz: ${yasHesapla(1917)}`); // alert yontemi

// const yas = yasHesapla(1977);
// console.log(`Yasiniz: ${yas}`); // 2. yontem

// // * Ornek: Klavyeden girilen bir sayinin tek vey cift oldugunu donduren bir fonksiyon yaziniz. -------------------------------------------------

// const sayiniz = prompt("Sayinizi giriniz: ");

// // ? Function declaration yontemi ile fonksiyonun tanimlanmasi cagrilmasindan once veya sonra olabilir.
// console.log(tekCift(sayiniz));

// function tekCift(sayiniz) {
//   // sayiniz%2 ? "Tek":"Çift"; // kisa yazim
//   const sonuc = sayiniz % 2 == 0 ? `${sayiniz} Çifttir` : `${sayiniz} Tektir `;
//   return sonuc;
// }

// // ! 2. YONTEM : FUNCTION EXPRESSION   (daha cok kullanilan yontem)
// // fonksiyonla degisken ismi ayni olmus olur.

// // * ORNEK:
// const tekCift1 = function (sayiniz) {
//   return sayiniz % 2 == 0 ? "CIFT" : "TEK";
// };

// console.log(tekCift1(5)); // invoke

// // * ORNEK: Iki sayidan buyugunu bulma.

// let buyukBul = function (x, y, z) {
//   let enBuyuk;
//   if (x > y && x > z) {
//     enBuyuk = x;
//   } else if ((y > x) & (y > z)) {
//     enBuyuk = y;
//   } else if ((z > x) & (z > y)) {
//     enBuyuk = z;
//   }
//   return enBuyuk;
// };

// console.log("En buyuk: " + buyukBul(5, 3, 8));

// // ! 3. YONTEM : ARROW (OK) FONKSIYONLARI // Arrow function tanimlamasi

// // * ORNEK: sayi Topla
// const topla = (num1, num2) => num1 + num2;

// console.log(topla(5, 2)); // invoke
// console.log(topla(3, 12)); // invoke

// // * ORNEK: tek mi cift mi
// const ciftMi = (num) => (num % 2 == 0 ? "cift" : "tek");

// console.log(ciftMi(5));
// console.log(ciftMi(2));

// * ORNEK: Us alma

// const taban = prompt("Taban giriniz");
// const us = prompt("Us giriniz");

// const usAl = (t, u) => t ** u;
// console.log(usAl(taban, us));

// * ORNEK: Menu
// ! Ok fonksiyonlarinda birden fazla ifade varsa fonksiyonu bir suslu parantez kullanmamiz lazim.
const menu = () => {
  console.log("-------------------------");
  console.log("    JAVASCRIPT DERSI     ");
  console.log("-------------------------");
};
menu();

// * ORNEK: Ad, soyad ve yas dondursun.
// ? 1. Yontem
// const bilgiVer = (ad, soyad, dogum) => {
//   const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
//   return bilgi;
// };

// ? 2. Yontem
const bilgiVer = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
console.log(bilgiVer("Mehmet", "Cakmak", 1989));

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
const r = prompt("Yaricapi giriniz:");
const h = prompt("Yukseklik giriniz:");
const hacimHesapla = (r, h) => Math.PI * r * r * h;
// * En yakın sayiya yuvarlar.
console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));
// * Virgulden sonra 2 basamak alir.
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));
