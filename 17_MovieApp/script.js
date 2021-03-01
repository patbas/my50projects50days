const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=284e63f458fdd9dada856bd9fd034816&language=it-IT';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=284e63f458fdd9dada856bd9fd034816&language=it-IT&query="';

const form = document.getElementById('form');
const main = document.getElementById('main');
// get initial movies

getMovies(API_URL);

async function getMovies(url) {
   const res = await fetch(url);
   const data = await res.json();

   console.log(data.results);
   showMovies(data.results);
}

function showMovies(movies) {
   /* svuoto il main da tutti i risultati */
   main.innerHTML = '';

   movies.forEach(movie => {
      /* questo serve per non richiamare i dati come 
      movie.title ecc */
      const { title, poster_path, vote_average, overview} = movie;

      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
               <h3>${title}</h3>
               <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
               <h3>Overview</h3>
               ${overview}
            </div>
      `;
      main.appendChild(movieEl);
   });
}

function getClassByRate(vote) {
   if (vote >= 8) {
      return 'green';
   } else if ( vote >= 5 ) {
      return 'orange'; 
   } else {return 'red';}
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   let searchTerm = search.value;

   if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm);
      searchTerm = '';
   } else {
      // ricarico la pagina
      window.location.reload();

   }
})