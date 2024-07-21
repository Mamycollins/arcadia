let animalsData = JSON.parse(localStorage.getItem('animalsData')) || [
    {
        nom: "Whisky le Loup",
        nomScientifique: "Canis lupus",
        habitat: "Forêt",
        description: "Un loup intelligent et rusé, connu pour son agilité et sa force.",
        etatSante: "Bonne santé",
        nourriture: "Viande crue",
        photo: "/medias/whisky.jpg"
    },
    {
        nom: "Georges le Lion",
        nomScientifique: "Panthera leo",
        habitat: "Savane",
        description: "Un lion majestueux, souvent appelé le roi de la savane.",
        etatSante: "Excellente santé",
        nourriture: "Viande",
        photo: "/medias/georges.jpg"
    }
    // Ajoutez d'autres animaux ici
];

function updateAnimalLocalStorage() {
    localStorage.setItem('animalsData', JSON.stringify(animalsData));
}
updateAnimalLocalStorage();
