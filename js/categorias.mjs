import tvMovie from "./tvFilm.mjs";

class AllMedia {
  constructor() {
    this.categorias = {
      accion: "28",
      aventura: "12",
      accion_aventura: "10759",
      animacion: "16",
      comedia: "35",
      crimen: "80",
      documental: "99",
      drama: "18",
      misterio: "9648",
    };
  }
  async getData(categoria, plataforma = "") {
    let lista = [];
    try {
        console.log("categoria " + categoria);
        console.log("plataforma" + plataforma);
      let responseMovie = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${categoria}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
          },
        }
      );
      let dataMovie = await responseMovie.json();
      let trendingListCatMovie = dataMovie.results.map(
        (element) => new tvMovie(element)
      );
      let responseTV = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${categoria}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
          },
        }
      );
      let dataTV = await responseTV.json();
      let trendingListCatTV = dataTV.results.map(
        (element) => new tvMovie(element)
      );
      if (plataforma == "") {
        lista = trendingListCatMovie.concat(trendingListCatTV);
      } else if (plataforma == "movie") {
        lista = trendingListCatMovie
      } else if (plataforma == "tv") {
        lista = trendingListCatTV;
      }
      
    } catch (error) {
      console.error(error);
    }
    return lista;
  }
}

let trendingListCat = new AllMedia();
let resultado = await trendingListCat.getData(
  trendingListCat.categorias.accion,
  ""
);
console.log(resultado);
let seccion = document.getElementById("postPeliculas");
for (let pelicula of resultado) {
  let articulo = pelicula.renderTvMovie();
  seccion.appendChild(articulo);
}
