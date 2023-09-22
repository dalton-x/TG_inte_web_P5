const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.getElementsByClassName("dots")[0];
function creationPoints() {
	// Création du nombre de points en fonction de la longueur de la liste d'images
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");

		// SUPPLEMENT //
		dot.style = 'cursor: pointer';
		dot.addEventListener("click", function() {
			// Changer l'image active en fonction du point selectioné
			imageSelectionne(i);
		});
		// SUPPLEMENT //

		dots.appendChild(dot);

  }

	// Ajout de la class dot_selected au premier point par defaut
	document.querySelector(".dots .dot").classList.add("dot_selected");
}
creationPoints();

document.getElementsByClassName("arrow_left")[0].addEventListener("click", activeFlecheGauche);
document.getElementsByClassName("arrow_right")[0].addEventListener("click", activeFlecheDroite);

let index = 0;
function activeFlecheGauche() {
  if (index > 0) {
		// Image précedente
    index--;
    generationImage(index);
  } else if (index === 0) {
		// revenir a la derniere image de la liste
    index = slides.length - 1;
    generationImage(index);
  }
  changePointActif(index);
}

function activeFlecheDroite() {
  if (index < slides.length - 1) {
		// Image suivante
    index++;
    generationImage(index);
  } else if (index === slides.length - 1) {
		// Revenir a la premiere image de la liste
    index = 0;
    generationImage(index);
  }
  changePointActif(index);
}

// Permet de changer la class en fonction de l image affichée
function changePointActif(index) {
	let pointActif = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      pointActif[i].classList.add("dot_selected");
    } else {
      pointActif[i].classList.remove("dot_selected");
    }
  }
}

const tagLine = document.getElementsByClassName("tagLine")[0];
const image = document.getElementsByClassName("image")[0];

// Permet de générer le code pour affiché la bonne image, le bon texte et les metas données
function generationImage(i) {
	image.src = './assets/images/slideshow/'+slides[i].image;
	image.alt = slides[i].tagLine.replace("<span>", "").replace("</span>", "")
	tagLine.innerHTML = slides[i].tagLine;
}


// SUPPLEMENT //
// Permet d'aller directement a l'image en fonction du point selectionné
function imageSelectionne(i){
	index = i
	image.src = './assets/images/slideshow/'+slides[i].image;
	image.alt = slides[i].tagLine.replace("<span>", "").replace("</span>", "")
	tagLine.innerHTML = slides[i].tagLine;
	changePointActif(i)
}
// SUPPLEMENT //