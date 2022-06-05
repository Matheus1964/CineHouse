const tela = document.getElementById('redes')
const fundo = document.getElementById('matheus')
tela.addEventListener('click', function () {
  console.log('deu certo')
  fundo.innerHTML = `
  <style>
  #matheus {
    position: absolute;
    top: 8.5rem;
    width: 100%;
    height: 262%;
    background-color: rgba(0, 27, 40, 1);
    z-index: 2;
  }</style>
  <div class="card" style="width: 18rem;">
  <img src="img/foto/facebook.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Facebook</h5>
    <p class="card-text">Essa é a rede social cinehouse</p>
    <a href="#" class="btn btn-primary">qualquer coisa</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
})
