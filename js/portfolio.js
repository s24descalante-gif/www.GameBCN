const slides = document.querySelectorAll('.alumni-slide-card');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let alumniInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  if (slides[index]) {
    slides[index].classList.add('active');
  }

  if (dots[index]) {
    dots[index].classList.add('active');
  }
}

if (slides.length && dots.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  showSlide(0);

  if (slides.length > 1) {
    alumniInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }
}

/* FILTRO EDICIONES 2024–2022 */

const filterButtons = document.querySelectorAll('.filter-button');
const gamePanels = document.querySelectorAll('.games-panel');

function showYearPanel(year) {
  // Botones
  filterButtons.forEach((button) => {
    button.classList.remove('active');
    if (button.dataset.year === year) {
      button.classList.add('active');
    }
  });

  // Paneles
  gamePanels.forEach((panel) => {
    panel.classList.remove('active');
    if (panel.dataset.panel === year) {
      panel.classList.add('active');
    }
  });
}

// Listeners solo para botones con data-year hasta 2022
filterButtons.forEach((button) => {
  const year = Number(button.dataset.year);
  if (year >= 2022 && year <= 2024) {
    button.addEventListener('click', () => {
      showYearPanel(button.dataset.year);
    });
  }
});

// Estado inicial: 2024
showYearPanel('2024');

/* MENU HAMBURGUESA */

var botonMenu = document.querySelector('.boton-menu');
var menuPrincipal = document.getElementById('menu-principal');
var enlacesMenu = menuPrincipal ? menuPrincipal.querySelectorAll('a') : [];
var anchoMenuHamburguesa = 1024;
var i = 0;

function mostrarMenu() {
  if (!menuPrincipal || !botonMenu) return;

  if (window.innerWidth <= anchoMenuHamburguesa) {
    menuPrincipal.classList.add('show');
    document.body.classList.add('menu-abierto');
    botonMenu.setAttribute('aria-label', 'Cerrar menú');
  }
}

function cerrarMenu() {
  if (!menuPrincipal) return;

  menuPrincipal.classList.remove('show');
  document.body.classList.remove('menu-abierto');

  if (botonMenu) {
    botonMenu.setAttribute('aria-label', 'Abrir menú');
  }
}

function alternarMenu() {
  if (!menuPrincipal) return;

  if (window.innerWidth > anchoMenuHamburguesa) {
    cerrarMenu();
    return;
  }

  if (menuPrincipal.classList.contains('show')) {
    cerrarMenu();
  } else {
    mostrarMenu();
  }
}

function cerrarMenuEnMovil() {
  if (window.innerWidth <= anchoMenuHamburguesa) {
    cerrarMenu();
  }
}

function cerrarMenuEnResize() {
  if (window.innerWidth > anchoMenuHamburguesa) {
    cerrarMenu();
  }
}

function activarMenu() {
  if (!botonMenu || !menuPrincipal) return;

  botonMenu.addEventListener('click', alternarMenu);

  for (i = 0; i < enlacesMenu.length; i++) {
    enlacesMenu[i].addEventListener('click', cerrarMenuEnMovil);
  }

  window.addEventListener('resize', cerrarMenuEnResize);

  cerrarMenu();
}

activarMenu();