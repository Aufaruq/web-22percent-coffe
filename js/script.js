let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

//variable
var nama = "22Percent Coffe";
var developer = "Aufaruq";
var alamat = "Kalimantan tengah, Pangkalan Bun";

console.log("Nama: " + nama);
console.log("Nama Dev: " + developer);
console.log("Lokasi: " + alamat);

//kondisional
var name = "User";
if ( name == "User")
{
    console.log("User memasuki website")
}

//fungsi dari sebuah testimoni
const form = document.querySelector('#book form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('#book input[type="text"]').value;
  const email = document.querySelector('#book input[type="email"]').value;
  const number = document.querySelector('#book input[type="number"]').value;
  const message = document.querySelector('#book textarea').value;
  console.log('Nama:', name);
  console.log('Email:', email);
  console.log('Nomor Wa:', number);
  console.log('saran/kritik:', message);
});

//jquery event
function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Display an alert
    alert("Saran Dan Kritik Anda Telah Dikirim,terimakasih sudah memberikan saran ya!");

    // Reset the form
    document.getElementById("contact-form").reset();
}


  