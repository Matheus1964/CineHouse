const baseUrl = "https://api.themoviedb.org/3/movie/"
const posterUrl = "https://image.tmdb.org/t/p/w500"        //falta unir essa url com o poster_path(1)
const apiKey = "edfbb1bf9aa04e445813cf9929bd514a"          // ocultar a apiKey
let idFilme = "603"                                      // let idFilme = `${}` 
///////     !!!criar uma variavel para armazenar o id do filme


const fetchFilme = () => {
    const urlFilme = "".concat(baseUrl, idFilme, '?api_key=', apiKey, '&language=pt-BR')
    fetch(urlFilme)
        .then(response => {
            if(!response.ok) {
                throw new Error("Erro HTTP: " + response.status)
            }
            return response.json()})
            
        .then(data => {

            document.querySelector(".titulo").innerText = data.title
            document.querySelector(".titulo-original").innerHTML = `Título original: ${data.original_title}`
            
            let img = document.querySelector(".poster-image")               
            img.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`  /* .innerHTML = posterUrl+`${data.poster_path}(1)  */

            document.querySelector(".sinopse").innerHTML = data.overview
            document.querySelector(".avaliacao").innerHTML = 
            `<div id="critica-tmdb">
                <span class="critica-nome">TMDB</span><br>
                <span class="nota-bloco">${data.vote_average}</span>
            </div>`
        })
        .catch(function () {
            this.dataError = true
        })
}        
fetchFilme()

const fetchCredits = () => {
    const urlCredits = "".concat(baseUrl, idFilme,'/credits', '?api_key=', apiKey, '&language=pt-BR')
    fetch(urlCredits)
        .then(response => response.json())
        .then(data => {
            let diretor = Object.values(data.crew)
            let diretorNome
            for(var i = 0; i < diretor.length; i++) {
                if(diretor[i].job =='Director') {
                    diretorNome = diretor[i]
                }
            }
            


            //ELENCO
            let elenco = document.querySelector(".elenco-principal").innerHTML = "Elenco principal: "
            console.log(elenco)

            //console.log(diretor.find(x => x.job === 'Director'))
            //console.log(data.crew[12.].name)                   //posicao do ldiretor
            // document.querySelector(".direcao").innerHTML = data.crew[12].name
            //console.log(Object.values(data.crew[]))
        })
}
fetchCredits()



/*
let original_img_url = "https://image.tmdb.org/t/p/original"
let genres_list_http = "https://api.themoviedb.org/3/genre/movie/List?"
let movie_genres_http = "https://api.themoviedb.org/3/discover/movie?"
let movie_detail_http = "https://api.themoviedb.org/3/movie"


function fetchApiData() {
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#lista')
        
        let template = 
        data.forEach((item) => {
            const li = document.createElement('li')
            li.setAttribute('id', item)
            li.innerHTML = `item.title`
            list.appendChild(li);

        })
        
    })

    .catch(err => {
        console.log(err)
    })     
}

fetchApiData()                                           */
