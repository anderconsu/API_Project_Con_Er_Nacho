class tvMovie {
  constructor(media) {
    if ("name" in media) {
      this.name = media.name;
    } else if ("title" in media) {
      this.name = media.title;
    }
    this.id = media.id;
    this.url = media.media_type == "tv" ? `https://themoviedb.org/tv/${media.id}?language=es` : `https://themoviedb.org/movie/${media.id}?language=es`;
    this.overview = media.overview;
    this.poster_path = media.poster_path ? `https://image.tmdb.org/t/p/w500${media.poster_path}` : "https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg";
    this.media_type = media.media_type;
    this.vote_average = media.vote_average;
  }

  renderTvMovie() {
    
    let articulo = document.createElement("article");
// 
    let poster = document.createElement("img");
    poster.src = this.poster_path;
    poster.alt = this.name;
    poster.classList.add("poster");

    let titulo = document.createElement("h2");
    titulo.textContent = this.name;
    titulo.classList.add("titulo");

    let descripcion = document.createElement("p");
    descripcion.textContent = this.overview;
    descripcion.classList.add("descripcion");

    let nota = document.createElement("p");
    nota.textContent = this.vote_average;
    nota.classList.add("nota");

    let boton = document.createElement("button");
    boton.textContent = "Más Info.";
    boton.classList.add("boton");
    boton.addEventListener("click", () => {
      window.open(this.url);
    })
    
    articulo.appendChild(poster);
    articulo.appendChild(titulo);
    articulo.appendChild(descripcion);
    articulo.appendChild(nota);
    articulo.appendChild(boton);

    return articulo;

  }
}

export default tvMovie;

