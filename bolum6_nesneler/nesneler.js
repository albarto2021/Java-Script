// ======================================================
//            NESNELER (OBJECTS)
//======================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.

// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.
// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT

// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.

// Object literal Yontemi
const insan = {
  // JSON (Javascript Object Notation) Formati budur.
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};
console.log(insan);

// insan nesnesinden bilgiye ulasmak icin mesela ad'a ulasacagiz.
// ! 1. yontem: .dot notasyonu ile verilere ulasilabilir.
console.log(insan.ad);

// ! 2. yontem: Koseli parantez erisimi (koseli parantez icerisine bir expression yazmak mümkündür.)
console.log(insan["diller"]);

const yazi = "Adim";

console.log(`${yazi} ${insan.ad} ve Yasim ${insan["yas"]}`);

const bilgiSecimi = prompt(
  "Insan nesnesi hakkinda ne bilmek istersin? Seciminizi giriniz, ad, soyad, yas, meslek, ve diller"
);

// ? Bir kelime bile yanlis girilse buyuk kucuk harf dahil veri istenmez.

if (insan[bilgiSecimi]) {
  // * eger insan icinde olan bilgiler girilirse bilgilere karsilik gelen veri cevap olarak gelir. eger farkli bilgi istenirse else bady sine girerez.
  console.log(insan[bilgiSecimi]); // * bilgiSecimi [] icinde yazilinca bilgiSeciminin degisken oldugunu anlar.
} else {
  console.log(
    "Yanlis secim.. Lutfen ad, soyad, yas, meslek, ve diller sekline giriniz"
  );
}

// insan nesnesine yeni bilgi ekleme
insan.konum = "Turkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990;

console.log(insan);

// ======================================================
//            Nesne Metodlari
//======================================================

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    console.log(this);
    return new Date().getFullYear() - this.dogumTarihi;
  },

  // ? interview sorusu function yerine => yontemi kullanilamaz sebebi, arrow functionlarda this keyword'u kullanilamaz.
  // this ile icinde bulundugumuz kisi objesine ulastik. Obje icerisinde this keyword u kullanmak cok daha kullanisli

  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla} yasindadir.
   Meslegi ${this.meslek} likdir.`;
  },
};

// Tarih yazdirmak

const tarih = new Date();
console.log(tarih.getMonth());
console.log(tarih.getDay());
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

// ======================================================
//                  Nesne Iterasyon Ornekleri
// ======================================================
const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 35,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },
  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 24,
  },
];
console.log(kisiler);
// ÖRNEK1: kisiler dizisindeki kisilerin mesleklerini konsola yazdiralim.
kisiler.forEach((x) => console.log(x.meslek));
//ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yeni bir diziye saklayiniz.
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);
// ÖRNEK3: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak alan ve yaşlarini da 5 artıran yeni bir nesne oluşturan kodu yaziniz.
const buyukHarf = kisiler.map((x) => {
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
    soyad: x.soyad,
  };
});
console.log(buyukHarf);
// ÖRNEK4: Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.
kisiler.filter((x) => x.yas <= 25).forEach((a) => console.log(a.ad));
// ÖRNEK5: Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.
const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });
console.log(developer);
//ÖRNEK6: kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas =
  kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length;
console.log(ortalamaYas);
