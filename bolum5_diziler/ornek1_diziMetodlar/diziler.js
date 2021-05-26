const dogum = 1980;

const yaslar = [30, 25, 44, 77];

const isimler = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayse",
  20,
  40,
  true,
  23.4,
  2021 - dogum, // * degisken atanabilir
  yaslar, // * dizi icine dizi atanabilir (nested)
]; // ? ayni diye farkli veri tiplerinden veri atanabilir.

console.log(isimler);

console.log(isimler[0]);
console.log((isimler[3] = "canan")); // * 3. indexteki elemani degistirdik.

// * sondan 2. elemani degistirelim
isimler[isimler.length - 2] = false;
console.log(isimler);

console.log(isimler[10][0]); // * isimler dizisininin 10. elemanin 0. ci indeksine ulastik.. --- bu sekilde cok kullanilmiyor.  --- bunun yerine obje yapisini kullaniyoruz.
// ! non-primitivlerde const kullansakta deger dedisir. obje ve arraylerde de degisir. dizilerde objeler adres gostergesi kullandigi icin degisebilir. heap bellek kullanirlar. yani referanslar baska yerdedir.

isimler[11] = "ipek";
console.log(isimler);

// ========= DİZİYİ DEĞİŞTİREN METOTLAR ==============
const h1 = document.getElementById("meyveler"); // * html de olusturdugumuz h1 etiketine meyveleri atayip eristik
let meyveler = ["Elma", "Armut", "Muz", "Kivi"]; // dizileri olusturduk

// pop() son elemani siler..
meyveler.pop(); // ["Elma", "Armut", "Muz"]

// push() dizinin sonuna eleman ekledi.
// dizinin son eleman sayisini dondurur.
const boyut = meyveler.push("Cilek", "Karpuz");
console.log(boyut);

// unshift() dizinin onune yani 0. indexine eleman ekler ve dizinin son eleman sayisini dondurur
const boyut1 = meyveler.unshift("Ayva");
console.log(boyut1);

// shift() dizinin 0. indeksini siler ve silininen elemani dondurur.
const silinen = meyveler.shift();
console.log(silinen);

// // * reverse() dizinin tamamini terse cevirir.
// meyveler.reverse();

// sona kavun ekle
meyveler.push("Kavun");

// sort() diziyi alfabetik olarak siralar.
meyveler.sort();

// dizinin indeksi 1 (baslangic noktasi) ile 2 arasina eleman ekler
// dizinin icerisinde var olan elemani silip yerine yazmak icin kullanilir
meyveler.splice(1, 0, "Erik");
// karpuzu silip uzerine mango yazalim
meyveler.splice(4, 1, "Mango");

console.log(meyveler);
h1.innerHTML = meyveler; // h1 etiketini yazdirdik

// ========= DİZİYE ERISIM METOTLARI ==============
const sayilar = [3, 5, 2, "2", "uc", 2, "bes", 5];

console.log(sayilar.includes("5")); // false
console.log(sayilar.includes(5)); // true

// ilk eslesen indeksi dondurur
const ikiIndeks = sayilar.indexOf(2);
console.log("2'nin son indeksi:" + sayilar.lastIndexOf(2)); // 2'nin son indeksi:5
console.log("Olmayan indeks:" + sayilar.lastIndexOf(10)); // Olmayan indeks:-1

// Eger aranilan elemanlari bulunamaz ise -1 dondurur.
const ucIndeks = sayilar.indexOf("uc"); // * ilk buldugu elamnin indeksini dondurur
ucIndeks < 0 // ? eger 0 dan kucukse bulunamadi yazdir.
  ? alert("aranan nesne bulunamadi")
  : alert("aranilan nesnenin indeksi:" + ucIndeks);

console.log(ikiIndeks); // 2

// join() dizinin elamanlarini birlestirir string hale cevirir.
const s1 = sayilar.join(" "); // elemanlarin arasina bosluk koyar
console.log(s1); // 3 5 2 2 uc 2 bes 5

// toString fonksiyonu sadece dizinin lemanlarinin aralarina , (virgul) koyarak birlestirir ve string yapar.
const s2 = sayilar.toString();
console.log(s2);
h1.innerHTML = s2;

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];

// slice() verilen index ve sonrasindaki elemanlari verir
// Audi ve sonrasini alir
// ! Tek rakam baslangic indeksini gosterir.
const arabalar1 = arabalar.slice(2);
arabalar1.push("fiat"); // arabalarin sonuna Fiat ekler
console.log(arabalar1);

// Mercedes audiyi alir.
// ! Start indeksi dahil, end indeksi dahil degildir.
const arabalar2 = arabalar.slice(1, 3); // ["mercedes", "audi"]
console.log(arabalar2);

// ========== CONCAT ==============
// tek bir dizi haline getirmek icin kullanabiliriz.
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];

const birlesik = yazilar.concat(rakamlar, true, true, false, [4, 7, 9]); //  ["a", "b", "ad", "soyad", "yas", 3, 5, 1, 4, 7, true, true, false, 4, 7, 9]

console.log(birlesik);
console.log(typeof birlesik[7]); // number
h1.innerHTML = birlesik;
