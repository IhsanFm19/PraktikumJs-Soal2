//soal A1
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
    //tadi harusmya "click" bukan 'klik'
  link.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('Navigasi ke: ' + e.target.innerText);
  });
});

// soal A2
// jika tidak ada h1 dia tidak bisa membaca apa yang akan di select
// contact text diganti jadi inner text
const judul = document.querySelector('h1');

judul.innerText = 'AI dan Masa Depan Teknologi Indonesia';

//soal A3
const paragraphs = document.querySelectorAll('.main-article p');
let totalKata = 0;


paragraphs.forEach(function(p) {
  const kata = p.innerText.split(' ');
  totalKata = kata.length;
});

console.log('Total kata: ' + totalKata);

//soal B1
const navActive = document.querySelectorAll('nav a');

navActive.forEach(function(active) {
  active.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });

});

//soal B2
const estimation = document.querySelectorAll('.main-article p');
let estimasi

estimation.forEach(function(p) {
  const kata = p.innerText.split(' ');
  totalKata = kata.length;
  estimasi = Math.ceil(totalKata/200) 
});

const metaBaru = document.querySelector('.meta-info');
metaBaru.innerText += " | Estimasi: " + estimasi + " menit baca";

//soal B3
const filterKategori = document.getElementById('filter-kategori');

filterKategori.addEventListener("input", function() {
    var input = document.getElementById("filter-kategori");
    var filter = input.value.toLowerCase();
    var li = document.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
