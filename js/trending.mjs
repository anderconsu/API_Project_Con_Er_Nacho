import tvMovie from "./tvFilm.mjs";

class trending {
    
    async getData(type = "all"){
        let trendingList = [];
        try {
            let response = await fetch(`https://api.themoviedb.org/3/trending/${type}/week?language=es`,{
            method: 'GET',    
            headers: {
                accept:'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
                },
              });
            let data = await response.json();
            trendingList = data.results.map((element) => new tvMovie(element));
        
        }
        catch (error){
            console.error(error)
        }
        return trendingList;
    }
     
}

export default trending;
// let trendingList = new trending();
// let resultado = await trendingList.getData();
// console.log (resultado);