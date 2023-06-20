import tvMovie from "./tvFilm.js";

class searchQuery {
    
    async search(query){
    let searched = [];
    try{
        let response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=es-ES&page=1`,{
        method: 'GET',    
        headers: {
            accept:'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
            },
          });
        let data = await response.json();
        searched = data.results;
    }
    catch (error){
        console.error(error)
    }
    return searched;
    }
};

const search = new searchQuery();
console.log(search.search("avengers"));