//------------------------------------
//      GETELEMENTBYID()
//------------------------------------

const paragraf = document.getElementById("par"); // index te bulunan par id'sine ulasiyor.
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";
const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.innerHTML = "ARA"; // ara ya donusur

// ----------------------------------------
//       GETELEMENTSBYTAGNAME()
// ----------------------------------------
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = " 3px solid red";

// ----------------------------------------
//       GETELEMENTSBYCLASSNAME()
// ----------------------------------------

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

// ----------------------------------------
//       QUERYSELECTOR()
// ----------------------------------------

const baslik = document.querySelector(".title"); // id ile ulastik
baslik.innerHTML = "DOM Selector 😎";

const body = document.querySelector("#body"); // queryselectorda # kullanilir.
body.style.backgroundImage = "linear-gradient(lightgreen,orange";

// ----------------------------------------
//       EVENTS(OLAYLAR)
// ----------------------------------------

/*
DOM OLAYLARI (EVENTS) 
• DOM sayesinde l@YğŞçript, HTML olayları ile etkileşimi halinde olabilir. 
• Örneğin, kullanıcı bir HTML elemanına tıkladığında (bir olay meydana geldiğinde) bir 
Javascript kodu çalıştırılabilir. 
• Bir olay meydana geldiğinde bir JS kodu çalıştırmak için ilgili elemanın olay özelliği 
kullanılır. 
• HTML olayları için bir çok örnek verilebilir. 
• Kullanıcı Fareyi tıkladığında (onclick) 
• Bir web sayfası yüklendiğinde (onload) 
• Fare bir elemanın üzerine geldiğinde (onmousover) 
Fare bir elemanın üzerinden ayrıldığında (onmousout) 
• Bir elemanın içeriği değiştiğinde (onchange) 
• Bir HTML formu gönderildiğinde (onsubmit) 
• Klavyeden bir tuşa basıldığında (onkeyup) */

// * ORNEK-1 (Mouse Over, Mouse Out)

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "blue";
  h1.style.backgroundColor = "white";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "orange";
};

// addEvenetListener()

document.querySelector("#btn").addEventListener("mouseover", function () {
  document.querySelector("#btn").style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  document.querySelector("#btn").style.width = "100px";
});
