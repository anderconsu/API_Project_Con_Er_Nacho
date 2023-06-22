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

  async renderGeneral() {
    console.log("renderGeneral");
    let trending = await this.trending.getData();
    let seccion = document.getElementById("postMedia");
    trending.forEach(element => {
        seccion.appendChild(element.renderTvMovie());
    });
  }
}

export default renderGeneral;
