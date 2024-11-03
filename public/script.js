const API_URL = 'http://localhost:3000'; // Cambia esto si tu backend corre en un puerto diferente

// Manejar el registro
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    alert(data.message || 'Usuario registrado con éxito');
});

// Manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
        localStorage.setItem('token', data.token); // Guarda el token en el almacenamiento local
        alert('Inicio de sesión exitoso');
        // Redirigir a la sección de perfil o casas
    } else {
        alert(data.message);
    }
});

// Obtener casas
async function getHouses() {
    const response = await fetch(`${API_URL}/houses/select`); // Cambia la ruta según tu implementación
    const houses = await response.json();
    const housesList = document.getElementById('housesList');
    housesList.innerHTML = houses.map(house => `<div><strong>${house.name}</strong>: ${house.description}</div>`).join('');
}

// Obtener personajes
async function getCharacters() {
    const response = await fetch(`${API_URL}/personage/select`); // Cambia la ruta según tu implementación
    const characters = await response.json();
    const charactersList = document.getElementById('charactersList');
    charactersList.innerHTML = characters.map(character => `<div><strong>${character.name}</strong>: ${character.description}</div>`).join('');
}

// Cargar datos al inicio
document.addEventListener('DOMContentLoaded', () => {
    getHouses();
    getCharacters();
});
