document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.animal-container');
    const modal = document.getElementById('animal-modal');
    const modalContent = document.getElementById('modal-content');

    animalsData.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.photo}" alt="${animal.nom}" class="animal-img">
            <div class="animal-name">${animal.nom}</div>
        `;
        card.addEventListener('click', () => {
            modalContent.innerHTML = `
                <span id="close-modal" class="close-button">&times;</span>
                <h2>${animal.nom}</h2>
                <img src="${animal.photo}" alt="${animal.nom}" class="animal-img-modal">
                <p><strong>Nom scientifique:</strong> ${animal.nomScientifique}</p>
                <p><strong>Habitat:</strong> ${animal.habitat}</p>
                <p><strong>Description:</strong> ${animal.description}</p>
                <p><strong>État de Santé:</strong> ${animal.etatSante}</p>
                <p><strong>Nourriture:</strong> ${animal.nourriture}</p>
                <p><strong>Date de Passage:</strong> ${animal.datePassage}</p>
            `;
            modal.style.display = 'block';

            
            document.getElementById('close-modal').addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
        container.appendChild(card);
    });

    // Fermer modal onclick ext
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
