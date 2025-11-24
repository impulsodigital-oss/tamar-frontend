// tamar-frontend/js/api.js

// La URL base DEBE incluir /api para que las peticiones se resuelvan correctamente.
const API_BASE_URL = 'https://tamar-backend-api-gqy9.onrender.com/api'; 

// Función para hacer solicitudes POST (CORREGIDA para aceptar Token)
async function postData(endpoint, data, token = null) {
    const headers = {
        'Content-Type': 'application/json'
    };

    // Si recibimos un token, lo agregamos a los headers
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: headers,
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

// Función para hacer solicitudes DELETE (Agregada por si necesitas borrar usuarios/videos desde el front)
async function deleteData(endpoint, token = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'DELETE',
        headers: headers
    });
    return response;
}

// Función para obtener el token de autenticación del localStorage
function getAuthToken() {
    return localStorage.getItem('token');
}

// Exportamos las funciones para que puedan ser usadas en otros archivos JS
export { postData, getData, deleteData, getAuthToken };
