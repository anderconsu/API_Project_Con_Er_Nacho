import renderGeneral from "./renderGeneral.mjs";

class FunBotones {
    constructor() {
        this.renderGeneral = new renderGeneral();
    }

    addFunciones() {
        function isItSelected(){
            let buttons = document.getElementsByClassName('selectable')
            if (buttons[0].classList.contains("seleccionado") && buttons[1].classList.contains("seleccionado")) {
                return ""
            }else if (buttons[1].classList.contains("seleccionado")) {
                return "tv"
            }else if (buttons[0].classList.contains("seleccionado")) {
                return "movie"
            }
        };
        let accion = document.getElementById("accion");
        accion.addEventListener("click", () => {
            console.log(isItSelected());
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.accion,
                isItSelected()
            );
        });
        let aventura = document.getElementById("aventura");
        aventura.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.aventura,
                isItSelected()
            );
        });
        let animacion = document.getElementById("animacion");
        animacion.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.animacion,
                isItSelected()
            );
        });
        let comedia = document.getElementById("comedia");
        comedia.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.comedia,
                isItSelected()
            );
        });
        let crimen = document.getElementById("crimen");
        crimen.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.crimen,
                isItSelected()
            );
        });
        let documental = document.getElementById("documental");
        documental.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.documental,
                isItSelected()
            );
        });
        let drama = document.getElementById("drama");
        drama.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.drama,
                isItSelected()
            );
        });
        let misterio = document.getElementById("misterio");
        misterio.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.misterio,
                isItSelected()
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
        function toggleButton(obj) {
            obj.classList.toggle('seleccionado');}

        let buttons = document.getElementsByClassName('selectable')
        buttons[0].addEventListener('click', () => {
            toggleButton(buttons[0]);
            if (buttons[0].classList.contains('seleccionado')) {
                this.renderGeneral.renderGeneral("movie");
                console.log("movie searched")
              } else { 
                this.renderGeneral.renderGeneral();
                console.log("all searched")
            }
            this.renderGeneral.trending.getData("movie");
        });
        buttons[1].addEventListener('click', () => {
            toggleButton(buttons[1]);
            if (buttons[1].classList.contains('seleccionado')) {
                this.renderGeneral.renderGeneral("tv");
                console.log("tv searched")
              } else { 
                this.renderGeneral.renderGeneral();
                console.log("all searched")
            }
        });
        
        let lupa = document.getElementById("lupa");
        lupa.addEventListener("click", () => {
            this.renderGeneral.search(
                document.getElementById("buscador").value
            )
            document.getElementById("buscador").value = "";
        })
        let logo = document.getElementById("logo");
        logo.addEventListener("click", () => {
            this.renderGeneral.renderGeneral();
        })
        console.log("all searched")
    }
}
export default FunBotones;
