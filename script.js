//Evenement pour afficher la barre de navigationSimple
window.addEventListener("scroll", () => {
    const jsNav = document.getElementById("navigationSimple");

    if (window.scrollY > 76) {
        jsNav.style.visibility = "visible";
        jsNav.style.opacity = "1";        
    } else {
        jsNav.style.visibility = "hidden";
        jsNav.style.opacity = "0"; 
    }
})

//Récupérer et afficher les données de mes projets

fetch('data.json')
.then(response => response.json())
.then(data => {
    const containerProjets = document.getElementById("containerProjets");

    dataProjets = data.projets
    
    console.log("la mort");
    
    dataProjets.forEach(element => {
        console.log("test");
        
        let div = document.createElement("div");
        let containDiv = document.createElement("div");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let a = document.createElement("a");

        div.setAttribute("class", "cardProjet");

        img.src = element.imageUrl;
        h4.textContent = element.nom;
        p.textContent = element.description;
        a.href = element.lien;
        a.textContent = "Vers le site ->";

        containDiv.appendChild(h4);
        containDiv.appendChild(p);
        containDiv.appendChild(a);
        div.appendChild(img);
        div.appendChild(containDiv);
        containerProjets.appendChild(div);
    });
    
})