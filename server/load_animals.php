<?php
header('Content-Type: application/json');

// Connexion à la base de données
$conn = new mysqli('localhost', 'nom_utilisateur', 'mot_de_passe', 'nom_de_la_base_de_donnees');

// Vérification de la connexion
if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connexion à la base de données échouée.']));
}

// Requête pour obtenir les données des animaux
$sql = "SELECT id, name, habitat, description FROM animals";
$result = $conn->query($sql);

$animals = [];
while ($row = $result->fetch_assoc()) {
    $animals[] = $row;
}

echo json_encode($animals);

$conn->close();
?>
