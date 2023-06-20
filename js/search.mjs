import tvMovie from "./tvFilm.mjs";

class searchQuery {
  /*
   * Busca de manera asíncrona películas y programas de TV utilizando la cadena de consulta proporcionada.
   * Devuelve un array de instancias de `tvMovie` que representan los resultados de la búsqueda.
   *
   * @param {string} query - La cadena de consulta a utilizar.
   * @return {array} Un array de instancias de `tvMovie` que representan los resultados de la búsqueda.
   */
  async search(query) {
    let searched = []; // Declarar el array de resultados
    try {
      let response = await fetch(
        // Ejecutar la petición
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=es-ES&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
          },
        }
      );
      let data = await response.json(); // Obtener los datos y tranformarlos en un objeto
      console.log(data);
      searched = data.results.forEach((element) => new tvMovie(element)); // Crear los objetos con los datos
    } catch (error) {
      console.error(error);
    }
    return searched;
  }
}

export default searchQuery; // Exportar el objeto

// Ejemplo
let search = new searchQuery();
search.search("avengers");
