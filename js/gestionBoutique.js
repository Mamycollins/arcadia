document.addEventListener('DOMContentLoaded', function() {
    const boutiqueForm = document.getElementById('boutique-form');
    const boutiqueList = document.getElementById('boutique-list');

    function renderBoutiqueList() {
        boutiqueList.innerHTML = ''; // Clear the list

        boutiquesData.forEach((boutique, index) => {
            const boutiqueItem = document.createElement('div');
            boutiqueItem.className = 'item';
            boutiqueItem.innerHTML = `
                <p><strong>Nom:</strong> ${boutique.nom}</p>
                <p><strong>Ouverture:</strong> ${boutique.ouverture}</p>
                <p><strong>Fermeture:</strong> ${boutique.fermeture}</p>
                <button onclick="editBoutique(${index})">Modifier</button>
                <button onclick="deleteBoutique(${index})">Supprimer</button>
            `;
            boutiqueList.appendChild(boutiqueItem);
        });
    }

    window.saveBoutique = function() {
        const id = document.getElementById('boutique-id').value;
        const nom = document.getElementById('boutique-nom').value;
        const ouverture = document.getElementById('boutique-ouverture').value;
        const fermeture = document.getElementById('boutique-fermeture').value;

        const boutiqueData = { nom, ouverture, fermeture };

        if (id === '') {
            // Ajouter une nouvelle boutique
            boutiqueData.id = boutiquesData.length + 1;
            boutiquesData.push(boutiqueData);
        } else {
            // Modifier une boutique existante
            boutiquesData[id] = { id: parseInt(id), ...boutiqueData };
        }

        boutiqueForm.reset();
        renderBoutiqueList();
        renderBoutiqueTable();
    };

    window.editBoutique = function(index) {
        const boutique = boutiquesData[index];
        document.getElementById('boutique-id').value = index;
        document.getElementById('boutique-nom').value = boutique.nom;
        document.getElementById('boutique-ouverture').value = boutique.ouverture;
        document.getElementById('boutique-fermeture').value = boutique.fermeture;
    };

    window.deleteBoutique = function(index) {
        boutiquesData.splice(index, 1);
        renderBoutiqueList();
        renderBoutiqueTable();
    };

    renderBoutiqueList();
});

function renderBoutiqueTable() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Clear the table

    boutiquesData.forEach(boutique => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${boutique.nom}</td>
            <td>${boutique.ouverture}</td>
                       <td>${boutique.fermeture}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderBoutiqueTable();
});

