document.addEventListener('DOMContentLoaded', function() {
    const animalForm = document.getElementById('animal-form');
    const animalList = document.getElementById('animal-list');

    function renderAnimalList() {
        animalList.innerHTML = '';

        animalsData.forEach((animal, index) => {
            const animalItem = document.createElement('div');
            animalItem.className = 'item';
            animalItem.innerHTML = `
                <p><strong>Nom:</strong> ${animal.nom}</p>
                <p><strong>Nom Scientifique:</strong> ${animal.nomScientifique}</p>
                <p><strong>Habitat:</strong> ${animal.habitat}</p>
                <p><strong>Description:</strong> ${animal.description}</p>
                <p><strong>État de Santé:</strong> ${animal.etatSante}</p>
                <p><strong>Nourriture:</strong> ${animal.nourriture}</p>
                <button onclick="editAnimal(${index})">Modifier</button>
                <button onclick="deleteAnimal(${index})">Supprimer</button>
            `;
            animalList.appendChild(animalItem);
        });

        // Maj table des animaux sur la page animaux.html
        renderAnimalTable();
    }

    window.saveAnimal = function(event) {
        event.preventDefault();

        const id = document.getElementById('animal-id').value;
        const nom = document.getElementById('animal-nom').value;
        const nomScientifique = document.getElementById('animal-scientifique').value;
        const habitat = document.getElementById('animal-habitat').value;
        const description = document.getElementById('animal-description').value;
        const etatSante = document.getElementById('animal-sante').value;
        const nourriture = document.getElementById('animal-nourriture').value;
        const photo = document.getElementById('animal-photo').value;

        if (!nom || !nomScientifique || !habitat || !description || !etatSante || !nourriture || !photo) {
            alert("Tous les champs doivent être remplis");
            return;
        }

        const animalData = { nom, nomScientifique, habitat, description, etatSante, nourriture, photo };

        if (id === '') {
            // Ajout nouvel animal
            animalsData.push(animalData);
        } else {
            // Modifier animal existant
            animalsData[id] = { ...animalData };
        }

        updateLocalStorage();
        animalForm.reset();
        renderAnimalList();
    };

    window.editAnimal = function(index) {
        const animal = animalsData[index];
        document.getElementById('animal-id').value = index;
        document.getElementById('animal-nom').value = animal.nom;
        document.getElementById('animal-scientifique').value = animal.nomScientifique;
        document.getElementById('animal-habitat').value = animal.habitat;
        document.getElementById('animal-description').value = animal.description;
        document.getElementById('animal-sante').value = animal.etatSante;
        document.getElementById('animal-nourriture').value = animal.nourriture;
        document.getElementById('animal-photo').value = animal.photo;
    };

    window.deleteAnimal = function(index) {
        animalsData.splice(index, 1);
        updateLocalStorage();
        renderAnimalList();
    };

    renderAnimalList();
});

function renderAnimalTable() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Clear the table

    animalsData.forEach(animal => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${animal.photo}" alt="${animal.nom}" width="100"></td>
            <td>${animal.nom}</td>
            <td>${animal.nomScientifique}</td>
            <td>${animal.habitat}</td>
            <td>${animal.description}</td>
            <td>${animal.etatSante}</td>
            <td>${animal.nourriture}</td>
            <td>${new Date().toISOString().split('T')[0]}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderAnimalTable();
});
