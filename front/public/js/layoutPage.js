
// Function to toggle "active" class on a given element
function toggleActive(label, ACTIVE_CLASS) {
label.classList.toggle(ACTIVE_CLASS);
}

// Function to toggle class on a given element
function toggleActiveAll(elements, ACTIVE_CLASS) {
  elements.forEach(el => el?.classList.toggle(ACTIVE_CLASS));
}



export function activeNavAllPages () {

  const ACTIVE_CLASS = "active";
  const btnAllPages = document.querySelector(".btn-all-pages");
  const navAllPages = document.querySelector(".nav-all-pages");

  if (btnAllPages !== null && navAllPages !== null){
    
    btnAllPages.addEventListener("click", (e) => {
      e.preventDefault(); // opcional, evita salto de enlace
      toggleActive(btnAllPages, ACTIVE_CLASS);
      toggleActive(navAllPages, ACTIVE_CLASS);
    });
  }
}

/*----------------------------------------------------------------------------- Side Navigation --------------------------------------------------------------------*/
export function handleNavbarSide ()  {

const hamburguer = document.querySelector('.hamburguer');
const navbarSide = document.querySelector('.navbar-side');


	if (hamburguer && navbarSide) {
		hamburguer.addEventListener('click', () => {
		toggleActive(navbarSide, "active");
		});
	}
}



