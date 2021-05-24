// alert("Dikkat");  /* Kullaniciya bilgi veren bir javascript kodudur. Uyariya cevap vermeden alt satirlara gecilmez */

// console.log("Hello Javascript");

// * console bizim icin hersey. ne urettigimizi gormek icin console u kullaniriz.

// console.log("Java Script javadan kolay bir dildir..");
// console.error("Bu bir hatadir.");
// console.warn("Bu bir uyaridir.");

// ** -------------------DEGISKEN TANIMLAMA -------------------------------
//  var keyword ile degisken tanimlanabilir ancak, modern JS var keyword'unun kullanimi azaldi. Cunku, var global degisken gibi dusunulmektedir.
var pi = 3.14;
console.log(pi);
console.log(typeof pi); // typeof : degiskenin turunu belirtir

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

var isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

// TODO: const ve let yeni degisken tanimlama keyword'leridir.
// ! const sadece baslangicta deger atanabilir (none-primitive'ler haric). sonradan degeri degistirilemez.

// const piSayisi = 3.14;

// console.log(piSayisi);

// piSayisi = 3;
// console.log(piSayisi); // Uncaught TypeError: Assignment to constant variable. hata verir. const a baslangicta deger verilir sonra degistirilemez.

//**  -----  LET -----
// ? Eğerki değişkenimzin değerinin değişmesi gerekiyor ise const kullanamayız. Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir
// Block scope : sadece tanimli oldugu alanda gecerlidir.
let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; // Çift tırnak
let isim2 = "Ahmet"; // Tek tırnak
let isim3 = `Alican`; // Backthick : daha esnek, flexible

console.log(isim3);

const dil = null;

console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola; // toplam fiyat icin let kullandik. const ta kullanilabilir fakat ++ olarak kullanilamaz.
toplamFiyat++;
toplamFiyat += 50;

// Birden fazla degiskenin degerini yazdirmak icin , kullanilir
console.log(toplamFiyat, kola); // ? 98 5
console.log("toplam", toplamFiyat); // ? toplam 98
// sabit ifadeler "" , '' , `` ile yazdirilabilir.

// + operatoru string birlestirme islemi de gerceklestirir.
const ad = "Can";
const soyAd = "Canan";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

const s1 = 7,
  s2 = "7"; // bu sekilde birden fazla degisken tanimlanabilir.

console.log(s1 + s2); // 77 olur int string concatication yapar.

const ad1 = "Mesut";
const yas = 55;
console.log("Benim adim " + ad1 + " " + "yasim " + yas + " dir"); // Benim adim Mesut yasim 55 dir

console.log(`Benim adim ${yas} yasim ${yas} dir`); // Benim adim 55 yasim 55 dir

const yıl = 2021;
const dogumTarihi = 1980;
const sene = yıl - dogumTarihi;
console.log("YAS:" + sene);
console.log("YAS:" + yıl - dogumTarihi); // NaN : Not a Number (sayi degil)
console.log("YAS:" + (yıl - dogumTarihi));
console.log(`YAS:${yıl - dogumTarihi}`);

const taban = 2;
const us = 8;

const sonuc = taban ** us; // ** us alma operatoru
console.log(sonuc);

// Mod alma %
const sayi = 4123;

const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100) % 10;
const binler = Math.floor(sayi / 1000);
console.log("Birler:" + birler); // Birler:3
console.log("Onlar:" + onlar); // Onlar:2
console.log("Yuzler:" + yuzler); // Yuzler:1
console.log("Binler:" + binler); // Binler:1

// KARSILASTIRMA OPERATORLERI
// ! 3'lu karsilastirma operatorlari kullanildiginda hem veri tipi hem de icerik kontrol yapilir.

const sayi1 = 100;
const sayi2 = "100";

console.log(typeof sayi1, typeof sayi2);

console.log(sayi1 == sayi2); //true
console.log(sayi1 === sayi2); //false

const x = true;
const y = true;
const z = undefined;

console.log(x && y && z); // undefined
// && operatorunda ilk gordugu false degeri dondurur false yoksa true dondurur.

// ** -------------TERNARY -----------

// const age = +prompt("yasinizi giriniz:"); // ekrana yasiniz sorar yasi girince yasi console yazdirir fakat string olarak verir. +prompt yaparsak number a cevirir
const name1 = prompt("Adinizi giriniz: ");
const age = Number(prompt("Yasinizi giriniz"));

age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);
// yasiniz 18 den buyukse ehliyet alabilirsiniz

const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

console.log(result);

const sayi4 = 41;

console.log(String(sayi4), sayi4);

const s1 = prompt("Birinci Sayi:");
const islem = prompt("islem giriniz");
const s2 = prompt("Ikinci Sayi:");

if (islem == "+") {
  sonuc = s1 + s2;
}
if (islem == "-") {
  sonuc = s1 - s2;
}
if (islem == "*") {
  sonuc = s1 * s2;
}
if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("Yanlis islem yaptiniz.");
}

console.log(sonuc);
