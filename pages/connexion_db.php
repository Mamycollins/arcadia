<?php
// Paramètres de connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zoo_arcadia"; // Remplacez par le nom réel de votre base de données

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Requête SQL pour obtenir toutes les données de la table 'animals'
$sql = "SELECT id, name, habitat, description FROM animals";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Afficher les données de chaque ligne
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . " - Name: " . $row["name"] . " - Habitat: " . $row["habitat"] . " - Description: " . $row["description"] . "<br>";
    }
} else {
    echo "0 results";
}

// Fermer la connexion
$conn->close();
?>