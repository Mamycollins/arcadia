let servicesData = JSON.parse(localStorage.getItem('servicesData')) || [
    {
        type: "Boutique",
        nom: "Souvenirs",
        ouverture: "10:00",
        fermeture: "19:00"
    },
    {
        type: "Restaurant",
        nom: "L'Abreuvoir",
        ouverture: "11:00",
        fermeture: "18:00"
    },
    {
        type: "Petit Train",
        nom: "Petit Train",
        horaires: [
            { time: "10:00", description: "Premier départ de la journée" },
            { time: "11:30", description: "Départ pour la section des Lions" },
            { time: "13:00", description: "Départ pour la Forêt Tropicale" },
            { time: "14:30", description: "Départ pour la Section des Oiseaux" },
            { time: "16:00", description: "Départ pour la Ferme Pédagogique" },
            { time: "17:30", description: "Dernier tour de la journée" }
        ]
    }
];

function updateServiceLocalStorage() {
    localStorage.setItem('servicesData', JSON.stringify(servicesData));
}
