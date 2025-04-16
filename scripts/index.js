
//Conectar com a API do TMDB
async function getPopularMovies(){
  const apiKey = 'a3187aef28b3c5307ae2dfbf0b9a31d9'
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;
  
  try{
    const response = await fetch(url);
    if (!response.ok){
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data.results; //lkista de filmes populares
  }catch (error){
    console.error('Erro ao buscar filmes populares:', error);
    return[];
  }
}

/* --Verificar se trouxe os filmes da API pelo console.
getPopularMovies().then(filmes => {
  console.log(filmes);
});
*/

//Renderizar os filmes na tela
async function renderMoviesFromAPI(){
  const section = document.querySelector("section");
  section.innerHTML = '';

  const movies = await getPopularMovies();

  movies.forEach((movie) =>{
    const movieElement = document.createElement('div');
    movieElement.classList.add(
      'flex',
      'items-center',
      'gap-[3rem]',
      'bg-[#1D1C3B]',
      'px-[2rem]',
      'py-[1rem]',
      'rounded-lg'
    );
  

  const imageUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
  : 'https://via.placeholder.com/139x139?text=Sem+Imagem';

  const title = movie.title;
  const rating = movie.vote_average.toFixed(1);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
  const description = movie.overview ? movie.overview : 'Descrição não disponível';

  movieElement.innerHTML = `
  <div class="grid grid-cols-[139px_1fr_2fr] items-center gap-[3rem] w-full">
    
    <!-- Coluna 1: Imagem -->
    <img class="w-[139px] h-[139px] rounded-full object-cover" src="${imageUrl}" alt="${title}" />
    
    <!-- Coluna 2: Informações -->
    <div>
      <h2>${title} (${year})</h2>
      <div class="flex gap-[30px] mt-[5px] font-normal">
        <div class="flex gap-[5px] items-center">
          <img class="w-[20px] h-[19px]" src="./imgs/Star.svg" />
          <p>${rating}</p>
        </div>
        <div class="flex gap-[5px] cursor-pointer items-center">
          <img class="w-[20px] h-[19px]" src="./imgs/Heart.svg" />
          <p>Favoritar</p>
        </div>
      </div>
    </div>

    <!-- Coluna 3: Descrição -->
    <p class="w-full">${description}</p>
  </div>
`;


  section.appendChild(movieElement);

  });
}

document.addEventListener('DOMContentLoaded', renderMoviesFromAPI);
