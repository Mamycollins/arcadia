<?php
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);

$email = $input['email'];
$password = $input['password'];

// Connexion à la base de données
$conn = new mysqli('localhost', 'nom_utilisateur', 'mot_de_passe', 'nom_de_la_base_de_donnees');

// Vérification de la connexion
if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connexion à la base de données échouée.']));
}

// Requête pour vérifier les informations d'identification
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && md5($password) == $user['pwdHash']) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Email ou mot de passe incorrect.']);
}

$conn->close();
?>
