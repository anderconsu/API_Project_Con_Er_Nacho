async function getData(){
    let tv = [];
    try{
        let response = await fetch("https://api.themoviedb.org/3/trending/all/week?language=es",{
        method: 'GET',    
        headers: {
            accept:'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTBjZjRlYjI1YTI1YTQ0NTQ5M2NiYzVhMjIyYTA4ZiIsInN1YiI6IjYzYWIzZmJlYzU2ZDJkMDA4OWFmYmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eSKbqW8m2aFGiuNnOmobjtIVdGJtFNl0DGQG7rRwhtw",
            },
          });
        let data = await response.json();
        tv = data.results;
    }
    catch (error){
        console.error(error)
    }
    return tv;
}
console.log (getData())