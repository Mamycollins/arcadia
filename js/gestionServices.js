document.addEventListener('DOMContentLoaded', function() {
    const serviceForm = document.getElementById('service-form');
    const serviceList = document.getElementById('service-list');

    function renderServiceList() {
        serviceList.innerHTML = '';

        servicesData.forEach((service, index) => {
            const serviceItem = document.createElement('div');
            serviceItem.className = 'item';
            serviceItem.innerHTML = `
                <p><strong>Type:</strong> ${service.type}</p>
                <p><strong>Nom:</strong> ${service.nom}</p>
                <p><strong>Ouverture:</strong> ${service.ouverture || ''}</p>
                <p><strong>Fermeture:</strong> ${service.fermeture || ''}</p>
                ${service.horaires ? `<p><strong>Horaires:</strong> ${service.horaires.map(h => `${h.time} - ${h.description}`).join(', ')}</p>` : ''}
                <button onclick="editService(${index})">Modifier</button>
                <button onclick="deleteService(${index})">Supprimer</button>
            `;
            serviceList.appendChild(serviceItem);
        });

        renderServiceTables();
    }

    window.saveService = function(event) {
        event.preventDefault();

        const id = document.getElementById('service-id').value;
        const type = document.getElementById('service-type').value;
        const nom = document.getElementById('service-nom').value;
        const ouverture = document.getElementById('service-ouverture').value;
        const fermeture = document.getElementById('service-fermeture').value;
        let horaires = [];

        if (type === "Petit Train") {
            const scheduleInputs = document.querySelectorAll('.schedule-input');
            horaires = Array.from(scheduleInputs).map(input => {
                const [time, description] = input.value.split(' - ');
                return { time, description };
            });
        }

        const serviceData = { type, nom, ouverture, fermeture, horaires };

        if (id === '') {
            servicesData.push(serviceData);
        } else {
            servicesData[id] = { ...serviceData };
        }

        updateServiceLocalStorage();
        serviceForm.reset();
        renderServiceList();
    };

    window.editService = function(index) {
        const service = servicesData[index];
        document.getElementById('service-id').value = index;
        document.getElementById('service-type').value = service.type;
        document.getElementById('service-nom').value = service.nom;
        document.getElementById('service-ouverture').value = service.ouverture;
        document.getElementById('service-fermeture').value = service.fermeture;
        if (service.type === "Petit Train") {
            document.getElementById('service-horaires').value = service.horaires.map(h => `${h.time} - ${h.description}`).join('\n');
        }
    };

    window.deleteService = function(index) {
        servicesData.splice(index, 1);
        updateServiceLocalStorage();
        renderServiceList();
    };

    renderServiceList();
});

function renderServiceTables() {
    const boutiqueTableBody = document.querySelector('#boutique-table tbody');
    const restaurantTableBody = document.querySelector('#restaurant-table tbody');
    const trainScheduleList = document.getElementById('train-schedule');

    boutiqueTableBody.innerHTML = '';
    restaurantTableBody.innerHTML = '';
    trainScheduleList.innerHTML = '';

    servicesData.forEach(service => {
        if (service.type === "Boutique") {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service.nom}</td>
                <td>${service.ouverture}</td>
                <td>${service.fermeture}</td>
            `;
            boutiqueTableBody.appendChild(row);
        } else if (service.type === "Restaurant") {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service.nom}</td>
                <td>${service.ouverture}</td>
                <td>${service.fermeture}</td>
            `;
            restaurantTableBody.appendChild(row);
        } else if (service.type === "Petit Train") {
            service.horaires.forEach(schedule => {
                const listItem = document.createElement('li');
                listItem.textContent = `${schedule.time} - ${schedule.description}`;
                trainScheduleList.appendChild(listItem);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderServiceTables();
});
