const baseUrl = "https://api.themoviedb.org/3/movie/"
const posterUrl = "https://image.tmdb.org/t/p/w200"
const listMovie = document.querySelector('.wrapper')
/*apiKey = "edfbb1bf9aa04e445813cf9929bd514a"*/ 
/*Datas*/
let data = new Date()
let dia = String(data.getDate()).padStart(2, '0')
let mes = String(data.getMonth() + 1).padStart(2, '0')
let anoAtual = data.getFullYear()

let dataAtual = anoAtual + '-' + mes + '-' + dia
let dataFinal = anoAtual + "-12-31"

const listaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=edfbb1bf9aa04e445813cf9929bd514a&language=pt-BR&region=BR&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=${anoAtual}&primary_release_date.gte=${dataAtual}&primary_release_date.lte=${dataFinal}&release_date.gte=${dataAtual}&release_date.lte=${dataFinal}&year=${anoAtual}`

function fetchEmbreve() {
	fetch(listaUrl)
	.then(response => response.json())
	.then(dados => {
		let posterImage = document.querySelectorAll('.poster-img')
		let lancamentoCl = document.querySelectorAll('.lanc')
		let filmeTitulo = document.querySelectorAll('.poster-titulo') 

		for(i=0; i<10; i++){
			let movieItem = document.querySelectorAll('.poster-hover')
			
			movieItem[i].dataset.id = `${dados.results[i].id}`    
			lancamentoCl[i].textContent = `${dados.results[i].release_date}`
			posterImage[i].setAttribute('src', posterUrl + `${dados.results[i].poster_path}`)
			filmeTitulo[i].textContent = `${dados.results[i].title}`
		}
	
})

loadMovie()
}
fetchEmbreve()


function loadMovie() {
	const movieDados = listMovie.querySelectorAll('.poster-hover')

	movieDados.forEach(movie => {
	  movie.addEventListener('click', async () => {
		const result = await fetch(
		  `https://api.themoviedb.org/3/movie/${movie.dataset.id}?api_key=187c100c6f5361dbac24684c0cbb448b&language=pt-BR`
		)
		const movieDetails = await result.json()
  
		//console.log(movieDetails)
		displayMovieDetails(movieDetails)
		//displayMovieDetails(movieDetails) está no arquivo api.js

		scrollToTop()
	  })
	})
  }

function scrollToTop() {
	$(window).scrollTop(0, 0)
}