// modal.js
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour ouvrir la modal
    window.openModal = function(imageSrc, title, scientificName, description, healthStatus, food) {
        document.getElementById('animalModal').style.display = 'block';
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('modalCaption').innerHTML = `
            <h2>${title}</h2>
            <p><strong>Nom scientifique:</strong> ${scientificName}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>État de Santé:</strong> ${healthStatus}</p>
            <p><strong>Nourriture:</strong> ${food}</p>
        `;
    }

    // Fonction pour fermer la modal
    window.closeModal = function() {
        document.getElementById('animalModal').style.display = 'none';
    }

    // Fermer la modal si l'utilisateur clique en dehors de celle-ci
    window.onclick = function(event) {
        if (event.target == document.getElementById('animalModal')) {
            closeModal();
        }
    }

    // Attacher l'événement de fermeture au bouton de fermeture
    document.querySelector('.close').addEventListener('click', function() {
        closeModal();
    });
});
