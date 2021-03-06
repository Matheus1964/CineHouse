const img = 'https://image.tmdb.org/t/p/w500'
const youtube = 'https://www.youtube.com/watch?v='
const movieSearchBox = document.getElementById('movie-search-box')
const searchList = document.getElementById('search-list')
const resultGrid = document.getElementById('result-grid')
//https://api.themoviedb.org/3/movie/popular?api_key=187c100c6f5361dbac24684c0cbb448b&language=pt-BR&page=1'
// load movies from API
async function loadMovies(searchTerm) {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=187c100c6f5361dbac24684c0cbb448b&language=pt-BR&query=${searchTerm}&page=thor&include_adult=true`
  const res = await fetch(`${URL}`)
  const data = await res.json()
  //console.log(data.results)
  displayMovieList(data.results)
}

function findMovies() {
  let searchTerm = movieSearchBox.value.trim()
  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list')
    loadMovies(searchTerm)
  } else {
    searchList.classList.add('hide-search-list')
  }
}

function displayMovieList(movies) {
  searchList.innerHTML = ''
  for (let idx = 0; idx < movies.length; idx++) {
    let movieListItem = document.createElement('div')
    movieListItem.dataset.id = movies[idx].id
    movieListItem.classList.add('search-list-item')
    if (movies[idx].poster_path != 'Null') moviePoster = movies[idx].poster_path
    else moviePoster = 'image_not_found.png'
    movieListItem.innerHTML = `
    
    <div class = "search-item-thumbnail">
     <img src = "${img}${moviePoster}">
    </div>
       <div class = "search-item-info">
       <h3>${movies[idx].title}</h3>
       <p>${movies[idx].release_date}</p>
      </div>`
    searchList.appendChild(movieListItem)
  }
  loadMovieDetails()
}

function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll('.search-list-item')
  searchListMovies.forEach(movie => {
    movie.addEventListener('click', async () => {
      //console.log(movie.dataset.id)
      searchList.classList.add('hide-search-list')
      movieSearchBox.value = ''
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.dataset.id}?api_key=187c100c6f5361dbac24684c0cbb448b&language=pt-BR&append_to_response=videos`
      )
      const movieDetails = await result.json()

      //console.log(movieDetails.videos.results[0].key)
      displayMovieDetails(movieDetails)
    })
  })
}

function displayMovieDetails(details) {
  resultGrid.innerHTML = `
  <style>
  .result-container {
    position: absolute;
    top: 8.5rem;
    width: 100%;
    height: 240%;
    background-color: rgba(0, 27, 40, 1);
    z-index: 2;
  }
  @media (max-width: 1680px) {
    .result-container {
      background-color: rgba(0, 27, 40, 1);
      height: 240%;
      width: 100%;
      z-index: 5;
    }
    .movie-poster img{
      margin-left: 400px
    }
    .movie-info {
      margin-left: 100px
      
    }
  }
  @media (max-width: 1440px) {
    .result-container {
      background-color: rgba(0, 27, 40, 1);
      height: 280%;
      width: 100%;
      z-index: 5;
    }
    .movie-poster img{
      margin-left: 300px
    }
    .movie-info {
      margin-left: 100px
      
    }
  }</style>
  <div class = "movie-poster">
  <img src = "${img}${details.poster_path}" alt = "movie poster">
</div>
<div class = "movie-info">
  <h3 class = "movie-title">${details.title}</h3>
  <ul class = "movie-misc-info">
      <li class = "rated">Receita: ${details.revenue}</li>
      <li class = "released">Dura????o: ${details.runtime}Minutos</li>
  </ul>
  <p class = "genre"><b>G??nero</b> ${details.genres[0].name}</p>
  <p class = "writer"><b>Pa??s:</b>${details.production_countries[0].name}.</p>
  <p class = "actors"><b>Lan??amento: </b>${details.release_date}</p>
  <p class = "plot"><b>Sinopse:</b> ${details.overview}</p>
  <p class = "language"><b>L??ngua:</b> ${details.spoken_languages[0].name}</p>
</div>`

  scrollToTop()
}

window.addEventListener('click', event => {
  if (event.target.className != 'form-control') {
    searchList.classList.add('hide-search-list')
  }
})
/*const tela = document.getElementById('teste')
tela.addEventListener('click', function () {
  console.log('deu certo')
  resultGrid.innerHTML = `
  <style>
  .result-container {
    position: absolute;
    top: 8.5rem;
    width: 100%;
    height: 262%;
    background-color: blue;
    z-index: 2;
  }</style>`
})
*/

function scrollToTop() {
  $(window).scrollTop(0, 0)
}
