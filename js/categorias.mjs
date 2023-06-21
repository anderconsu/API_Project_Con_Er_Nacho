import tvMovie from "./tvFilm.mjs";

class AllMedia {
    constructor() {
        this.categorias = {
            // Categorias creadas en el constructor para no tener que aprenderse los id
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
    shuffleArray(array) {
        // Método para mezclar un array
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    async getData(categoria, plataforma = "") {
        // Método para obtener los datos
        let lista = []; // Declarar la lista
        if ((plataforma == "tv" && categoria == "28") || categoria == "12") {
            //Condicion con la que se cambia la categoria si es una serie a la conjunta de ambas
            categoria = "10759";
        }
        try {
            // log de categoria y plataforma para ver que estamos haciendo XD
            console.log("categoria " + categoria);
            console.log("plataforma" + plataforma);
            //
            let responseMovie = await fetch(
                // Ejecutar la petición para las peliculas
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${categoria}&watch_region=ES`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
                    },
                }
            );
            let dataMovie = await responseMovie.json(); // Obtener los datos de peliculas y tranformarlos en un objeto
            let trendingListCatMovie = dataMovie.results.map(
                // Crear los objetos con los datos
                (element) => new tvMovie(element)
            );
            //
            let responseTV = await fetch(
                // Ejecutar la petición para las series
                `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${categoria}&watch_region=ES`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
                    },
                }
            );
            let dataTV = await responseTV.json(); // Obtener los datos de series y tranformarlos en un objeto
            let trendingListCatTV = dataTV.results.map(
                // Crear los objetos con los datos
                (element) => new tvMovie(element)
            );
            //
            //Condicional en base a plataforma
            if (plataforma == "") {
                lista = trendingListCatMovie.concat(trendingListCatTV); // Si la plataforma es nula(es decir, ambas) se concatena las dos listas
                lista = this.shuffleArray(lista); // Mezclar la lista
            } else if (plataforma == "movie") {
                // Si la plataforma es movie se iguala a la lista de peliculas
                lista = trendingListCatMovie;
            } else if (plataforma == "tv") {
                // Si la plataforma es tv se iguala a la lista de series
                lista = trendingListCatTV;
            }
        } catch (error) {
            console.error(error);
        }
        return lista; // Devolver la lista
    }
}

//Pruebas
// Hay que añadir el .mjs en index para que las siguientes pruebas funcionen
//===========================================================================//
// let trendingListCat = new AllMedia();
// let resultado = await trendingListCat.getData(
//     trendingListCat.categorias.documental,
//     ""
// );

// console.log(resultado);

// let seccion = document.getElementById("postPeliculas");
// for (let pelicula of resultado) {
//     let articulo = pelicula.renderTvMovie();
//     seccion.appendChild(articulo);
// }
//===========================================================================//
