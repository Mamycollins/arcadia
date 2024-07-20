-- Création des tables
CREATE TABLE IF NOT EXISTS Habitats (
    HabitatID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Description TEXT
);

CREATE TABLE IF NOT EXISTS Animals (
    AnimalID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Species TEXT NOT NULL,
    HabitatID INTEGER,
    HealthStatus TEXT,
    FOREIGN KEY (HabitatID) REFERENCES Habitats(HabitatID)
);

CREATE TABLE IF NOT EXISTS Veterinarians (
    VeterinarianID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Visits (
    VisitID INTEGER PRIMARY KEY AUTOINCREMENT,
    AnimalID INTEGER,
    VeterinarianID INTEGER,
    VisitDate TEXT NOT NULL,
    HealthStatus TEXT,
    FoodProvided TEXT,
    FoodQuantity TEXT,
    Notes TEXT,
    FOREIGN KEY (AnimalID) REFERENCES Animals(AnimalID),
    FOREIGN KEY (VeterinarianID) REFERENCES Veterinarians(VeterinarianID)
);