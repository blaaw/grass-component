const seccion = {
    titulo: "Tituto: toca un poco de Hierba",
    parrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, porro non! Totam hic earum debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imagen: {
        url: "turtle-grass.jpg",
        width: 400
    } ,
    boton: "Borrame"
}
const sections = document.getElementById("section1")
let section_counter = 0;

function nuevaSeccion() {
    const newSection = document.createElement("section");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const btn = document. createElement("button");
    const img = document.createElement("img");

    h2.textContent = seccion.titulo;
    p.textContent = seccion.parrafo;
    btn.textContent = seccion.boton;
    btn.addEventListener("click", borrarSeccion);
    img.src = seccion.imagen.url;
    img.width = seccion.imagen.width;
    
    div.classList.add("sections")
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(btn)
    
    newSection.classList.add("newsections")
    newSection.appendChild(div)
    newSection.appendChild(img)

    if (section_counter % 2 != 0) { //media querie en js (css' better)
        const mobile = window.matchMedia("(max-width: 768px)")
        if (!mobile.matches) {
            newSection.style.flexDirection = "row-reverse";
            alert("Nueva sección creada!")
        }
    }
    sections.appendChild(newSection)
    section_counter++;
}

function borrarSeccion() {
    if (section_counter > 0) {
    const seccion = this.parentElement.parentElement;
    seccion.remove();
    section_counter--;
    }
 }
