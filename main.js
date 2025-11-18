// tamar-frontend/js/main.js
import { postData, getData, getAuthToken } from './api.js';

// Lógica global para manejo de autenticación en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            window.location.href = 'index.html'; // Redirigir a la página de inicio
        });
    }

    // Opcional: Mostrar/ocultar elementos de navegación según el estado de autenticación
    const token = getAuthToken();
    const loginLink = document.getElementById('login-link');
    const registroLink = document.getElementById('registro-link');
    const misCursosLink = document.getElementById('mis-cursos-link');
    const cerrarSesionLink = document.getElementById('cerrar-sesion-link');

    if (loginLink && registroLink && misCursosLink && cerrarSesionLink) {
        if (token) {
            loginLink.style.display = 'none';
            registroLink.style.display = 'none';
            misCursosLink.style.display = 'inline';
            cerrarSesionLink.style.display = 'inline';
        } else {
            loginLink.style.display = 'inline';
            registroLink.style.display = 'inline';
            misCursosLink.style.display = 'none';
            cerrarSesionLink.style.display = 'none';
        }
    }
});

// Función para mostrar mensajes en la UI
function showMessage(elementId, message, type = 'info') {
    const messageDiv = document.getElementById(elementId);
    if (messageDiv) {
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
    }
}

// Función para ocultar mensajes en la UI
function hideMessage(elementId) {
    const messageDiv = document.getElementById(elementId);
    if (messageDiv) {
        messageDiv.style.display = 'none';
    }
}

// Exportar funciones útiles para las páginas individuales
export { showMessage, hideMessage, postData, getData, getAuthToken };