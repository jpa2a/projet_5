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
const image = document.querySelector(".banner-img")
const textImage = document.querySelector("#banner p")

const rightArrowBtn = document.querySelector("#banner .arrow_right")
const leftArrowBtn = document.querySelector("#banner .arrow_left")

const dotsContainer = document.querySelector(".dots")


function bullets (){
	for (j = 0; j < slides.length; j++) {
		const dotsDiv = document.createElement("div")
		dotsDiv.classList.add("dot")
		dotsContainer.appendChild(dotsDiv)
		if (i === j){
			dotsDiv.classList.add("dot_selected")
		}
	}
}

let i = 0
let j = 0

bullets ()


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
	dotsContainer.innerHTML= ''
	bullets ()
	
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
	dotsContainer.innerHTML= ''
	bullets ()

})