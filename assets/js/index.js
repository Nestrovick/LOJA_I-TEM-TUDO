/************* NAVIGATION BAR **************/
window.addEventListener("scroll", function () {

  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 0)
})

// CARROSSEL PRODUTOS EM DESTAQUES
$('.carrossel').slick({
  prevArrow: '.slick-prev-one',
  nextArrow: '.slick-next-one',
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 947,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 424,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


$('button').on('click', function () {
  $('#divId').show(); 

});

const chageThemeBtn = document.querySelector("#chenge-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark")
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme()

chageThemeBtn.addEventListener("change", function () {
  toggleDarkMode()

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }

});

function Mudarestado(el) {
  let display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';
}
feather.replace();

function scrollCart() {

  let cartItem = document.querySelector('.cardCarrinho-container');
  document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');

  }
  window.onscroll = () => {
    cartItem.classList.remove('active');
  }
}
scrollCart()

function loggedinuser() {
  window.addEventListener('load', () => {
    let email = localStorage.getItem('userLogado')

    document.getElementById('user-email').innerHTML = email === null
      ? '<div class="configs-menu"><a href="login-page.html"><i class="fa-solid fa-user fas"></i></a> </div>'
      : `'<a><i class="fa-solid fa-user fas"></i></a>'
      
      `
  })


}
loggedinuser()
const sair = () => {
  localStorage.removeItem('userLogado')
  window.location.href = ''
}

$(document).ready(() => {
  let texto = localStorage.getItem('userLogado') ? "<li onclick='sair()'><p> sair </p></li>" : ''
  $('#li-sair').css({
    width: '100%',
    marginLeft: '10%'
  })
  $('#li-sair').html(texto)

})

