import renderGeneral from "./renderGeneral.mjs";

class FunBotones {
    constructor() {
        this.renderGeneral = new renderGeneral();
    }

    addFunciones(plataforma) {
        let accion = document.getElementById("accion");
        accion.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.accion,
                plataforma
            );
        });
        let aventura = document.getElementById("aventura");
        aventura.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.aventura,
                plataforma
            );
        });
        let animacion = document.getElementById("animacion");
        animacion.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.animacion,
                plataforma
            );
        });
        let comedia = document.getElementById("comedia");
        comedia.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.comedia,
                plataforma
            );
        });
        let crimen = document.getElementById("crimen");
        crimen.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.crimen,
                plataforma
            );
        });
        let documental = document.getElementById("documental");
        documental.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.documental,
                plataforma
            );
        });
        let drama = document.getElementById("drama");
        drama.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.drama,
                plataforma
            );
        });
        let misterio = document.getElementById("misterio");
        misterio.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.misterio,
                plataforma
            );
        });
        let form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.renderGeneral.search(
                document.getElementById("buscador").value
            )
            document.getElementById("buscador").value = "";
            
        })
    }
}
export default FunBotones;
