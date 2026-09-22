// Això servirà per agafar els meus repositoris i mostrar-los al portfoli
// fetch("https://api.github.com/users/juliarizo/repos")
// .then(resposta => resposta.json())
// .then(projectes => {
//     console.log(projectes);
// });

fetch("https://api.github.com/users/juliarizo/repos")
    .then(resposta => resposta.json())
    .then(projectes => {

        contenidor = document.getElementById("llista-projectes");

        projectes.forEach(projecte => {
            // Així filtraré solament els projectes que vulgui mostrar
            if(projecte.topics.includes("portfolio-project")){
            tarjeta = document.createElement("article");

            tarjeta.innerHTML = `
                <h3>${projecte.name}</h3>
                <p>${projecte.description || "Sense descripció"}</p>
                <p>${projecte.language || "No especificat"}</p>
                <a href="${projecte.html_url}" target="_blank">
                    Veure a GitHub
                </a>
            `;

            contenidor.appendChild(tarjeta);
            }
        });

    });