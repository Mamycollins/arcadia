<?php
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);

$email = $input['email'];
$password = md5($input['password']); // Hash du mot de passe
$role = $input['role'];

// Connexion à la base de données
$conn = new mysqli('localhost', 'nom_utilisateur', 'mot_de_passe', 'nom_de_la_base_de_donnees');

// Vérification de la connexion
if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connexion à la base de données échouée.']));
}

// Requête pour insérer un nouvel utilisateur
$sql = "INSERT INTO users (email, pwdHash, role) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $email, $password, $role);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Erreur lors de la création de l\'utilisateur.']);
}

$conn->close();
?>
