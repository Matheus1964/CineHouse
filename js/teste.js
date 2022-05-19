const img = 'https://image.tmdb.org/t/p/w500'
const movieSearchBox = document.getElementById('movie-search-box')
const searchList = document.getElementById('search-list')
const resultGrid = document.getElementById('result-grid')
//https://api.themoviedb.org/3/movie/popular?api_key=187c100c6f5361dbac24684c0cbb448b&language=pt-BR&page=1'
// load movies from API
async function loadMovies(searchTerm) {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=187c100c6f5361dbac24684c0cbb448b&language=pt-BR&query=${searchTerm}&page=thor&include_adult=false`
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
    let movieListItem = document.createElement('a')
    //movieListItem.setAttribute('href', `${movies[idx].imdbID}.html`)
    movieListItem.dataset.id = movies[idx].id
    movieListItem.classList.add('seach-list-item')
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
    console.log(movie)
  })
}
