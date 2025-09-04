# 📺 Netflix-Style Catalog App

Este es un proyecto de **React Native con Expo** que muestra un catálogo de series y películas con categorías y detalle de episodios.  
La aplicación usa **Supabase** como backend y base de datos _(antes se usaba un backend en NestJS, pero fue reemplazado por Supabase)_.

---

## 🚀 Tecnologías principales

- ⚛️ [Expo](https://expo.dev/) → Framework para el frontend móvil.
- 🗄️ [Supabase](https://supabase.com/) → Base de datos y autenticación.
- 🔄 [React Query](https://tanstack.com/query/latest) → Manejo de estado de servidor y caché.
- 🧭 [Expo Router](https://expo.github.io/router/docs/) → Navegación basada en archivos.

---

## 📂 Estructura del proyecto

- `app/` → Pantallas principales (`index.tsx`, `details.tsx`).
- `components/` → Componentes reutilizables (`Layout.tsx`).
- `hooks/` → Hooks personalizados (`useColorScheme`, `useThemeColor`).
- `lib/` → Conexión a Supabase y funciones API.
- `constants/` → Configuración de colores y estilos globales.

---

## ⚙️ Requisitos previos

- 📌 Node.js (versión 18 o superior).
- 📌 Una cuenta y proyecto en [Supabase](https://supabase.com/).

Configura tus credenciales en `app.config.js`:

```js
export default {
  expo: {
    extra: {
      SUPABASE_URL: "https://<your-project>.supabase.co",
      SUPABASE_ANON_KEY: "<your-anon-key>"
    }
  }
}

---
Cómo correr el proyecto:
1. Instalar dependencias => npm install
2. Iniciar la app => npx expo start

---
📱 Podrás abrir la app en:
Android/iOS (emulador o dispositivo físico con Expo Go).
💻 Web.

---
🗄️ Modelo de datos en Supabase
categories → Drama, Comedia, Sci-Fi, etc.
shows → Cada show con su título, sinopsis, poster y categoría.
episodes → Lista de episodios vinculados a cada show.

---
🎯 Próximos pasos
🔍 Agregar buscador de shows.
⭐ Implementar sistema de favoritos por usuario.
🔐 Añadir autenticación con Supabase Auth.

---
👩‍💻 Autor
✍️ Hecho por Tatiana Peña
💻 GitHub: @tatianapena
🔗 LinkedIn: tatianapenam
```
