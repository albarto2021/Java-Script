function hesapla() {
  const r = document.getElementById("r").value;
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  const h = document.querySelector(".h").value;
  const hacim = document.querySelector(".hacim");

  const sonuc = (Math.PI * r * r * h).toFixed(2);

  console.log(sonuc, r, h);
  document.querySelector(".hacim").innerHTML = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "white";
buton.style.backgroundColor = "darkblue";

// * document.getElementById(id) ile ulasilir  bu tek elaman dondururken diger ikisi dizi yani array dondurur. array sirasi html de ki siraya gore
