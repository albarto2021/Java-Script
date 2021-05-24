// * IF ELSE
// const s1 = Number(prompt("Birinci Sayı:"));
// const islem = prompt("İslemi giriniz");
// const s2 = Number(prompt("İkinci Sayı:"));
// let sonuc = 0;
// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc = s1 / s2;
// } else {
//   alert("yanlış işlem yaptınız.");
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
// const age = prompt("yasinizi giriniz:");
// const healt = prompt("Saglikli misiniz e/h");
// const result = age > 18 && healt == "e" ? "Askere Gidebilir" : "Askere Gidemez";
// console.log(result);
// alert(result);

// * SWITCH CASE
// const gunNo = Number(prompt("Gun numarasini giriniz:"));
// switch (gunNo) {
//   case 1:
//     gunAdi = "Pazartesi";
//     break;
//   case 2:
//     gunAdi = "Salı";
//     break;
//   case 3:
//     gunAdi = "Çarşamba";
//     break;
//   case 4:
//     gunAdi = "Perşembe";
//     break;
//   case 5:
//     gunAdi = "Cuma";
//     break;
//   case 6:
//     gunAdi = "Cumartesi";
//     break;
//   case 7:
//     gunAdi = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gunAdi);

// * TERNARY
// const hiz = 90;
// const mesaj = hiz >= 120 ? "Hızlı" : hiz >= 90 ? "Normal" : "Yavas";
// console.log(mesaj);

// const maas = prompt("Maasinizi giriniz:");
// const calismaSuresi = prompt("Calisma suresini giriniz");

// const zamliMaas =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;

// console.log(zamliMaas);

// const borc = 0;
// const maas = 3000;
// console.log(!borc && maas > 2825.9 "Kredi Alabilir 😊" : "Kredi Alamaz 😒");

// * DONGULER

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}-Mehmet`);
// }

// const sayi = prompt("Dongu miktarini giriniz");
// for (let i = 1; i <= sayi; i++) {
//   console.log(`${i}-Mehmet`);
// }

// // ! Asal Sayi tespiti
// const number = Number(prompt("Sayi giriniz:"));

// let asal = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     asal = false;
//     break;
//   }
// }
// const asalMi = asal ? "ASAL" : "ASAL DEGIL";
// console.log(asalMi);

// * ORENEK: DO - WHILE dongusu
// let not;
// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Giridiğiniz not 0-100 arasındadır");

// * ORENEK: DO - WHILE dongusu
// let not;
// not = prompt("0-100 arasında bir not giriniz:");
// while (not < 0 || not > 100) {
//   console.error("Girilen not 0-100 arasinda olmalidir..🤞");
//   not = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Giridiğiniz not 0-100 arasındadır");

// * ORNEK: Klavyeden Q karakteri girilene kadar not girisi yapan bir programi dongu kullanrak yapiniz.

let note,
  i = 1;
while (true) {
  // ? true yerine 1=1 de yazilabilir.
  // * 0 yazilirsa bu donguye hic girmez
  // ! icerisi true olan while dongusu true girilene kadar sonsuz dongu olur.

  note = prompt(i + ".kisinin notunu giriniz:");
  note = note.toLowerCase();
  if (note == "q") {
    break;
  }
  i++;
  console.log(Number(note));
}
