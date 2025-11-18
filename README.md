# 🚀 Plataforma de Educación Tamar: Homeschooling y Desarrollo Personal

Este repositorio contiene el código fuente del Frontend (HTML, CSS, JavaScript) para la plataforma de E-learning de Tamar, un Centro de Capacitación especializado en acompañamiento integral para familias homeschoolers.

## ✨ Misión del Proyecto

La plataforma Tamar, liderada por **Sofía** (CEO y profesora de Arte), tiene la misión de guiar a las familias a cumplir su propósito educativo, enfocándose en el desarrollo integral: **arte, valores, salud y autonomía**. Ofrecemos una alternativa consciente a la escolaridad tradicional, con respaldo académico y humano.

## ⚙️ Arquitectura de la Aplicación

La aplicación está dividida en dos componentes principales:

1.  **Frontend (Este Repositorio):**
    * **Tecnología:** HTML, CSS, JavaScript (módulos ES6).
    * **Despliegue:** Netlify (https://tamarescuela.netlify.app/).
    * **Funcionalidades:** Captura de Leads (`/api/leads`), Registro/Login (`/api/registro`, `/api/login`), y Panel de Videos Protegido (`/api/videos`).

2.  **Backend (API de Tamar):**
    * **Tecnología:** Node.js / Express con autenticación JWT.
    * **Base de Datos:** PostgreSQL (Desplegado en Render, conectado a **tamar-db**).
    * **URL Base de la API:** `https://tamar-backend-api-gqy9.onrender.com/api`

## 📚 Módulos Clave

El contenido E-learning incluye acceso a:
* **Contenido Pago:** Más de 30 videos principales, esenciales para la metodología Tamar.
* **Certificación:** Acreditación escolar a través de "Integrative Learning Academy" (Sede en EE. UU.).
* **Comunidad:** Acompañamiento por un staff de 25 profesionales especializados.

## 🚨 Configuración y Despliegue (IMPORTANTE)

Para que el frontend funcione, asegúrate de que:

* La estructura de carpetas en este repositorio sea: **`css/`**, **`js/`**, y **`images/`**.
* El archivo `js/api.js` contenga la URL correcta del backend de Render.
