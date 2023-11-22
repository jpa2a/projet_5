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
let image = document.querySelector(".banner-img")
let textImage = document.querySelector("#banner p")

let rightArrowBtn = document.querySelector("#banner .arrow_right")
let leftArrowBtn = document.querySelector("#banner .arrow_left")

let i = 0

leftArrowBtn.addEventListener("mousedown", (e) => {
	if (e.button === 0 && i > 0){
		i--
		image.src = "./assets/images/slideshow/" + slides[i].image
		textImage.innerHTML = slides[i].tagLine
	}
	else{
		
		if (e.button === 0){
			i = slides.length - 1
			image.src = "./assets/images/slideshow/" + slides[i].image
			textImage.innerHTML = slides[i].tagLine
		}
	}
})

rightArrowBtn.addEventListener("mousedown", (e) => {
	if (e.button === 0 && i < (slides.length - 1)){
		i++
		image.src = "./assets/images/slideshow/" + slides[i].image
		textImage.innerHTML = slides[i].tagLine
	}
	else{
		if (e.button === 0){
			i = 0
			image.src = "./assets/images/slideshow/" + slides[i].image
			textImage.innerHTML = slides[i].tagLine
		}
	 }
   })