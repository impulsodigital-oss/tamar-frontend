// tamar-frontend/js/api.js

const API_BASE_URL = 'https://tamar-backend-api-gqy9.onrender.com'; // La URL base de tu backend local

// Función para hacer solicitudes POST
async function postData(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response; // Retorna la respuesta completa para manejar status y JSON
}

// Función para hacer solicitudes GET (con token para rutas protegidas)
async function getData(endpoint, token = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: headers
    });
    return response;
}

// Función para obtener el token de autenticación del localStorage
function getAuthToken() {
    return localStorage.getItem('token');
}

// Exportamos las funciones para que puedan ser usadas en otros archivos JS

export { postData, getData, getAuthToken };
