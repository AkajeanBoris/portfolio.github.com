
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire

        let isValid = true;
        const prenom = document.getElementById("prenom").value.trim();
        const nom = document.getElementById("nom").value.trim();
        const sujet = document.getElementById("sujet").value.trim();
        const message = document.getElementById("message").value.trim();

        if (prenom === "" || nom === "" || sujet === "" || message === "") {
            alert("Veuillez remplir tous les champs !");
            isValid = false;
        }

        if (isValid) {
            alert("Message envoyé avec succès !");
            form.reset(); // Réinitialiser le formulaire après l’envoi
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projets = document.querySelectorAll(".project-card");

    projets.forEach(projet => {
        projet.addEventListener("mouseover", function () {
            projet.style.transform = "scale(1.05)";
            projet.style.boxShadow = "0px 4px 15px rgba(247, 159, 31, 1)";
        });

        projet.addEventListener("mouseout", function () {
            projet.style.transform = "scale(1)";
            projet.style.boxShadow = "none";
        });
    });
});