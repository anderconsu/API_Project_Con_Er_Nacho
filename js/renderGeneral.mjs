// import tvMovie from "./tvFilm.mjs";
import categorias from "./categorias.mjs";
import searchQuery from "./search.mjs";
import trending from "./trending.mjs";

class renderGeneral {
  constructor() {
    this.categorias = new categorias();
    this.searchQuery = new searchQuery();
    this.trending = new trending();
  }

  append(array) {
    let seccion = document.getElementById("postMedia");
    seccion.innerHTML = "";
    array.forEach(element => {
        seccion.appendChild(element.renderTvMovie());
    });
  }
  async renderGeneral(tipo) {
    let trending = await this.trending.getData(tipo);
    this.append(trending);
  }
  async search(searchword){
    let search = await this.searchQuery.search(searchword);
    this.append(search);
  }
  async filter(genero, plataforma){
    let filtrado = await this.categorias.getData(genero, plataforma)
    this.append(filtrado)
  }
}
export default renderGeneral;
