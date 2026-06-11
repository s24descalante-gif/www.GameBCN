const projectTrack = document.querySelector('[data-slider="projects"]');
const projectSlides = projectTrack ? [...projectTrack.children] : [];
let projectIndex = 0;

const updateProjects = () => {
  if (!projectTrack) return;
  projectTrack.style.transform = `translateX(-${projectIndex * 100}%)`;
};

const projectPrev = document.querySelector('.featured-slider .prev');
const projectNext = document.querySelector('.featured-slider .next');

if (projectPrev && projectNext && projectSlides.length) {
  projectPrev.addEventListener('click', () => {
    projectIndex = (projectIndex - 1 + projectSlides.length) % projectSlides.length;
    updateProjects();
  });

  projectNext.addEventListener('click', () => {
    projectIndex = (projectIndex + 1) % projectSlides.length;
    updateProjects();
  });
}

const commentTrack = document.querySelector('.comment-slides');
const commentSlides = commentTrack ? [...commentTrack.children] : [];
const dots = [...document.querySelectorAll('[data-dots="comments"] .dot')];
let commentIndex = 0;
let commentInterval;

const updateComments = () => {
  if (!commentTrack || !commentSlides.length) return;

  commentTrack.style.transform = `translateX(-${commentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === commentIndex);
  });
};

if (commentTrack && commentSlides.length && dots.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (index >= commentSlides.length) return;
      commentIndex = index;
      updateComments();
    });
  });

  if (commentSlides.length > 1) {
    commentInterval = setInterval(() => {
      commentIndex = (commentIndex + 1) % commentSlides.length;
      updateComments();
    }, 5000);
  }

  updateComments();
}

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



