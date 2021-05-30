// const koordinatlar = [120, 100, -100, 220, 330];
// let negatif = 0;
// let pozitif = 0;

// // for (let i = 0; i < koordinatlar.length; i++) {
// //   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// // }

// // FOR IN DONGUSU
// for (let i in koordinatlar) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

// console.log(
//   `Negatif Koordinat Sayisi: ${negatif} Pozitig Koordinat Sayisi ${pozitif}`
// );

// // const koordinatlar = [120, 100, -100, 220, 330];
// // let negatif = 0;
// // let pozitif = 0;
// // for (let i = 0; i < koordinatlar.length; i++) {
// //   if (koordinatlar[i] > 0) {
// //     negatif++;
// //   } else pozitif++;
// // }
// // console.log(pozitif);
// // console.log(negatif);

// // ? 28 mayıs 2021

// //---------------------------------------------------------------
// // SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// // saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// // ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// // yazınız. Eğer o türden bir hayvan yok ise bulunamdığını yazdırsın.
// //----------------------------------------------------------------

// const hayvanlar = ["fil", "deve", "kus", "deve", "fare", "kedi", "deve"];
// const ara = prompt(
//   "Aramak istenilen hayvan turunu giriniz"
// ).toLocaleLowerCase();

// const bulDondur = function () {
//   let hayvanSayisi = 0;

//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };

// const sayi = bulDondur(ara);
// sayi == 0
//   ? console.log("Aradiginiz hayvan bulunamadi")
//   : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir `);

// // --------- FOR OF DONGUSU ----------
// //for of dongusu for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icerisinde veriye erisirken indisleme kullanmaya gerek yoktur.
// let arabalar = ["BMW", "Volvo", "Mini"];
// let yazi = "";
// for (let i of arabalar) {
//   console.log(i);
//   yazi += i + " "; // i: dizinin i. elemani demektir.
// }
// console.log(yazi);

// --------- FOR EACH METODU ----------
let ogrenciler = ["John", "Ali", "Can"];
function yazdir(a) {
  // a yerine yazilan hersey olabilir. parantez ici parametre foreach ten gelen bir ozellik.
  console.log(a);
}
ogrenciler.forEach(yazdir);

ogrenciler.forEach((x) => console.log(x)); // ogrenciler dizisine git her bir elemani al gel.

// Toplam ornegi
const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f)); // f suanki deger. 2. sırada indis 3. sırada dizi olur.
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`; // template literals

// Toplam ornegi 2
toplam = 0;
fiyatlar.forEach((a, i) => {
  console.log(`${i} . iterasyon: ${toplam}`);
  toplam += a;
});

console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`; // template literals

// ? fiyatlar dizisine her bir fiyata %10 zam yapalim.
const yenifiyat = [];
fiyatlar.forEach(
  (deger, indis) => (yenifiyat[indis] = (deger * 1.1).toFixed(2))
);

console.log(yenifiyat);

// orjinal diziyi degistirmek icin;
fiyatlar.forEach(
  (deger, indis, dizi) => (dizi[indis] = (deger * 1.1).toFixed(2))
);
console.log(fiyatlar);

// ÖRNEK: fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplamFiyat = 0;
let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
  toplamFiyat += Number(zamliFiyatlar[indis]);
});
console.log(zamliFiyatlar);
console.log(toplamFiyat);

// --------- MAP METODU ----------
// elimizde diziler var bunlarin katini almak istiyoruz veya birsey yapmak istiyoruzmap kullaniriz.

// Ornek: Dizinin her bir elemaninin iki katini aliniz.
const rakamlar = [3, 5, 3, 2, 6, 7, 9];

const ikiKat = rakamlar.map((x) => x * 2);
console.log(ikiKat, rakamlar);

// Örnek : isimler dizisin içerisindeki her ismi büyük harf olarak yeni bir diziye saklayalım.
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// map() metodu normal şartlarda bir dizi döndürür.
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));

// map() metodudundan sonra eğer bir terminal işlemi (forEach gibi) kullanılırsa map() metodu bir dizi döndürmez.
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));

// ----------------------------------
// * ORNEK: Dolar, Euro parite hesap
// ----------------------------------
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const dolarKur = document.querySelector(".dolar");
const euroKur = document.querySelector(".euro");
const dolar = document.querySelector(".dolar-fiyat");
const euro = document.querySelector(".euro-fiyat");

dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Kur 0'dan kucuk olamaz")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};

euroKur.onchange = function () {
  euroKur.value < 0
    ? alert("Kur 0'dan kucuk olamaz")
    : (euro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / euroKur.value)));
};

// toFixed(): double bir degerde virgulden sonra kac rakam oldugunu belirler. x.toFixed(2) gibit

// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL

// ! tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const zamliTlFiyatlar = tlFiyatlar.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br>`;
  } else {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br>`;
  }
});
const stringZamliTlFiyatlar = zamliTlFiyatlar.join(""); // virgullerden kurtulmak icin join kullandik.
document.querySelector(".zamli-fiyat").innerHTML = stringZamliTlFiyatlar;
console.log(zamliTlFiyatlar);

// ----------------------------------
// --------- FILTER METODU ----------
// ----------------------------------
// ? tlFiyatlar listesinde fiyati 250 Tl den az olanlari ayri bir diziye saklayalim.
const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250); // ? 250 den kucuk olanlari kucuk250 dizisine aktarir.

// fiyati 350 den kucuk olanlari yazdiriniz.
const y = tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));

// * SORT() Küçükten büyüğe sıralama
console.log(tlFiyatlar.sort((a, b) => a - b));

// * SORT() Büyükten küçüğe  sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));

// ----------------------------------
// --------- PIPLINE ----------------
// ----------------------------------

// Maasi 4000 $'den dusuk olanlara %50 zam yapmak istiyoruz. ve bunu ayri bir dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);
console.log(zamliMaaslar);

// Maasi 4000 $'den buyuk olanlara %25 zam yapmarak sonuclari yazdiralim
maaslar
  .filter((d) => d > 4000) // 4000 buyuk olanlar secildi
  .map((d) => d * 1.25) // 1.25 zam yapildi
  .forEach((d) => console.log(d)); // yazdirildi

// ------------- ORNEK ------------

const adlar = [
  "Samed",
  "Hakki",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Serdar",
  "Defne",
];

// const harfBul = function () { // function expression yontemi

// }
// arrow function yontemi
const isimBul = (harf) => {
  const buyukHarf = harf.toUpperCase();
  adlar.filter((x) => x.startsWith(buyukHarf)).forEach((x) => console.log(x));
};

isimBul("A");
isimBul("a");
isimBul("s");
isimBul("S");

// ----------------------------------
// --------- REDUCE METHODU ---------
// ----------------------------------

// ! const maaslar = [3000, 5000, 4000, 6000, 6500];
// Maaslarin toplamini bulunuz.
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

const toplamMaas1 = maaslar.reduce((x, y, i) => {
  console.log(`${i} iterasyon : ${x}`);
  return x + y; // arrow function da suslu parantez kullanılınca return yapmak lazim
});
console.log(toplamMaas1);

// 4000 den buyuk olan maaslarini hesaplayalim.

const buyukDortBin = maaslar
  .filter((x) => x >= 4000)
  .reduce((x, y) => x + y, 0);

console.log(buyukDortBin);

// ------------- PIPELINE ORNEK ------------
// Maasi ortalamnin altinda olanlara %20 zam ustunde olanlara ise %10 zam yapilmak isteniyor.
// ! const maaslar = [3000, 5000, 4000, 6000, 6500];

const ortalamaMaas = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;
const yeniMaaslar = maaslar
  .filter((m) => m >= ortalamaMaas)
  .map((m) => m * 1.1);
console.log(yeniMaaslar);
