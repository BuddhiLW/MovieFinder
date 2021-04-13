// const axios = require('axios').default;
var display = (api) =>
    {let requestShow = axios.get(api);
     requestShow.then(render);
    };

var querier = e => document.querySelector(e);
function template (data){ 
    let text = ` 
<div class="movie">
  <img src="$(data.imagem)">
      <div class="title">$(data.titulo)</div>
      <button onClick="buy($(data.id));">
        Comprar
        <ion-icon name="cart-outline"></ion-icon>
      </button>
    </div>
`
    return text;
};
var DataInnerHTML = e => data => f => {e.innerHTML += f(data)};

var render = response =>
    {let movies = querier(".movies");
     response.data.forEach(movie => DataInnerHTML(movies)(movie)(template));
    };

display("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
