// Això servirà per agafar els meus repositoris i mostrar-los al portfoli

// Aquí guardarem tots els projectes un cop els haguem descarregat,
// així no els hem de tornar a demanar cada cop que filtrem
projectesPortfoli = [];

fetch("https://api.github.com/users/juliarizo/repos")
    .then(resposta => resposta.json())
    .then(projectes => {

        // Ens quedem només amb els projectes que tinguin el topic "portfolio-project"
        projectesPortfoli = projectes.filter(projecte =>
            projecte.topics.includes("portfolio-project")
        );

        // Els mostrem tots la primera vegada (sense cap filtre)
        mostrarProjectes(projectesPortfoli);
    });

// Aquesta funció pinta a la pantalla la llista de projectes que li passem
function mostrarProjectes(llista) {

    contenidor = document.getElementById("llista-projectes");

    // Buidem el contenidor abans de tornar a omplir-lo
    contenidor.innerHTML = "";

    llista.forEach(projecte => {
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
    });
}

//  Botons de filtre 

document.getElementById("b_java").addEventListener("click", () => {
    const filtrats = projectesPortfoli.filter(
        projecte => projecte.language === "Java"
    );
    mostrarProjectes(filtrats);
});

document.getElementById("b_html").addEventListener("click", () => {
    const filtrats = projectesPortfoli.filter(
        projecte => projecte.language === "HTML" || projecte.language === "CSS"
    );
    mostrarProjectes(filtrats);
});

document.getElementById("b_php").addEventListener("click", () => {
    const filtrats = projectesPortfoli.filter(
        projecte => projecte.language === "PHP"
    );
    mostrarProjectes(filtrats);
});

document.getElementById("b_vb").addEventListener("click", () => {
    const filtrats = projectesPortfoli.filter(
        projecte => projecte.language === "Visual Basic .NET"
    );
    mostrarProjectes(filtrats);
});