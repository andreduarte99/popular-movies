//console.log("Hello, world!");

/*
const movieElement = document.createElement("div");
movieElement.classList.add("movie");
document.body.appendChild(movieElement);

const movieTitle = document.createElement("span");
movieTitle.textContent = "Titulo do Filme";
movieElement.appendChild(movieTitle);
*/

const movies = [
  {
    image:
      "https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg",
    title: "Batman",
    rating: 9.2,
    year: 2022,
    description:
      "Batman luta contra o crime em Gotham enquanto enfrenta desafios pessoais.",
    isFavorite: true,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
    title: "Avengers: Endgame",
    rating: 8.9,
    year: 2019,
    description:
      "Os Vingadores se unem para derrotar Thanos e restaurar o universo.",
    isFavorite: false,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    title: "Doctor Strange 2",
    rating: 7.5,
    year: 2022,
    description:
      "Doutor Estranho explora o multiverso e enfrenta ameaças desconhecidas.",
    isFavorite: false,
  },
];

function renderMovies() {
  const section = document.querySelector("section"); //Seleciona a seção onde os filmes serão renderizados
  section.innerHTML = ""; //Limpa o conteúdo antes de renderizar

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add(
      "flex",
      "items-center",
      "gap-[3rem]",
      "bg-[#1D1C3B]",
      "px-[2rem]",
      "py-[1rem]",
      "rounded-lg"
    );

    movieElement.innerHTML = `
        <img class="w-[139px] h-[139px] rounded-full" src="${movie.image}" alt="${movie.title}" />
        <div class="mr-[5rem]">
            <h2>${movie.title} (${movie.year})</h2>
            <div class="flex gap-[30px] mt-[5px] font-normal">
             <div class="flex gap-[5px]">
                <img class="w-[20px] h-[19px]" src="./imgs/Star.svg" />
                <p>${movie.rating}</p>
            </div>
            <div class="flex gap-[5px] cursor-pointer">
                <img class="w-[20px] h-[19px]" src="./imgs/Heart.svg" />
                <p>${movie.isFavorite ? "Favorito" : "Favoritar"}</p>
            </div>
            </div>
        </div>
        <p class="flex w-[50%]">${movie.description}</p>
    `;

    section.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", renderMovies);
