const seccion = {
    titulo: "Titulo: toca un poco de Hierba",
    parrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, porro non! Totam hic earum debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imagen: {
        url: "turtle-grass.webp",
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
    const mobile = window.matchMedia("(max-width: 768px)")

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

    //dark mode upon creating a new section
    const isDark = window.getComputedStyle(document.body).backgroundColor === "rgb(21, 21, 21)";
    if (isDark) {
        newSection.style.color = "white";
        newSection.style.backgroundColor = "#151515";
        div.style.color = "white";
        div.style.backgroundColor = "#151515";
        btn.style.color = "white";
        btn.style.backgroundColor = "#151515";
        h2.style.color = "white";
        h2.style.backgroundColor = "#151515";
        p.style.color = "white";
        p.style.backgroundColor = "#151515";
           
    }

    //mobile media query en js (css' better)
    if (section_counter % 2 != 0) { 
        if (!mobile.matches) {
            newSection.style.flexDirection = "row-reverse";
        }
    }
    if (mobile.matches) {        
        alert("Nueva sección creada!")
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

 document.getElementById("dark-mode").addEventListener("click", function() {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    if (bgColor === "rgb(255, 255, 255)") {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#151515";
        document.getElementById("dark-mode").textContent = "modo claro";
    } else {
        document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
        document.getElementById("dark-mode").textContent = "modo oscuro";
    }

    //aplicar a todas las secciones dentro de body 
    const isDark = window.getComputedStyle(document.body).backgroundColor === "rgb(21, 21, 21)";
    document.querySelectorAll("*").forEach(el => {
        el.style.backgroundColor = isDark ? "#151515" : "white";
        el.style.color = isDark ? "white" : "black";
    });
 })