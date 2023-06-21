import tvMovie from "./tvFilm.mjs";

class AllMedia {
    constructor(){
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
        }
    }
    async getData(categoria){
        let trendingListCat = [];
        try {
            let response = await fetch(`https://api.themoviedb.org/3/trending/all/week?language=es&with_genres=${categoria}`,{
            method: 'GET',    
            headers: {
                accept:'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
                },
              });
            let data = await response.json();
            trendingListCat = data.results.map((element) => new tvMovie(element));
        
        }
        catch (error){
            console.error(error)
        }
        return trendingListCat;
    }
}

let trendingListCat = new AllMedia();
let resultado = await trendingListCat.getData(trendingListCat.categorias.crimen);
let seccion = document.getElementById("postPeliculas");
for (let pelicula of resultado){
    let articulo =pelicula.render()
    seccion.appendChild(articulo);
}
console.log (resultado);