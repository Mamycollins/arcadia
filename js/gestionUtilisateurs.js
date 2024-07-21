document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('user-form');
    const userList = document.getElementById('user-list');

    function renderUserList() {
        userList.innerHTML = ''; // Clear the list

        usersData.forEach((user, index) => {
            const userItem = document.createElement('div');
            userItem.className = 'item';
            userItem.innerHTML = `
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Nom:</strong> ${user.nom}</p>
                <p><strong>Rôle:</strong> ${user.role}</p>
                <button onclick="editUser(${index})">Modifier</button>
                <button onclick="deleteUser(${index})">Supprimer</button>
            `;
            userList.appendChild(userItem);
        });
    }

    window.saveUser = function() {
        const id = document.getElementById('user-id').value;
        const email = document.getElementById('user-email').value;
        const nom = document.getElementById('user-nom').value;
        const role = document.getElementById('user-role').value;
        const password = document.getElementById('user-password').value;

        const userData = { email, nom, role, password };

        if (id === '') {
            // Ajouter un nouvel utilisateur
            userData.id = usersData.length + 1;
            usersData.push(userData);
        } else {
            // Modifier un utilisateur existant
            usersData[id] = { id: parseInt(id), ...userData };
        }

        userForm.reset();
        renderUserList();
    };

    window.editUser = function(index) {
        const user = usersData[index];
        document.getElementById('user-id').value = index;
        document.getElementById('user-email').value = user.email;
        document.getElementById('user-nom').value = user.nom;
        document.getElementById('user-role').value = user.role;
        document.getElementById('user-password').value = user.password;
    };

    window.deleteUser = function(index) {
        usersData.splice(index, 1);
        renderUserList();
    };

    renderUserList();
});
