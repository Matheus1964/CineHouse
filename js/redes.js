const tela = document.getElementById('redes')
const fundo = document.getElementById('predes')
tela.addEventListener('click', function () {
  /*console.log('deu certo')*/
  fundo.innerHTML = `
  <style>
  #predes {
    position: absolute;
    top: 8.5rem;
    width: 100%;
    height: 230%;
    background-color: rgba(0, 27, 40, 1);
    z-index: 2;
  }
  @media (max-width: 1440px) {
    #predes {
      background-color: rgba(0, 27, 40, 1);
      height: 270%;
      width: 100%;
      z-index: 5;
    }
  }</style>
  <h1 id="redes1">Redes Sociais CineHouse</h1>
  <div class="linha">
  <div class="card" style="width: 18rem;">
  <img style=" height: 10rem;"src="../../img/facebook.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Facebook</h5>
    <p class="card-text">Facebook CineHouse</p>
    <a href="https://pt-br.facebook.com/" class="btn btn-primary">Acessar</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img style=" height: 10rem;" src="../../img/twitter.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Twitter</h5>
    <p class="card-text">Twitter CineHouse</p>
    <a href="https://twitter.com/" class="btn btn-primary">Acessar</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img style=" height: 10rem;"src="../../img/instagram.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Instagram</h5>
    <p class="card-text">Instagram CineHouse</p>
    <a href="https://www.instagram.com/" class="btn btn-primary">Acessar</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="../../img/github.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">GitHub</h5>
    <p class="card-text">GitHub: Matheus</p>
    <a href="https://github.com/Matheus1964" class="btn btn-primary">Acessar</a>
  </div>
</div>
</div>
`
})
