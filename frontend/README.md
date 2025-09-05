# 📺 Netflix-Style Catalog App

Este es un proyecto de **React Native con Expo** que muestra un catálogo de series y películas con categorías y detalle de episodios.  
La aplicación usa **Supabase** como backend y base de datos.

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
La base de datos implementa el siguiente modelo (SQL):

create table categories (
  id bigint primary key generated always as identity,
  created_at timestamptz default now(),
  name text not null,
  slug text not null
);

create table shows (
  id bigint primary key generated always as identity,
  created_at timestamptz default now(),
  title text not null,
  slug text not null,
  synopsis text,
  poster_url text,
  popularity int,
  category_id bigint references categories(id)
);

create table episodes (
  id bigint primary key generated always as identity,
  created_at timestamptz default now(),
  show_id bigint references shows(id),
  title text not null,
  video_url text,
  description text,
  episode_number int,
  season_number int
);

Relaciones:

Una categoría → muchos shows.

Un show → muchos episodios.


---
Decisiones Técnicas:
- Se usó Expo Router en lugar de @react-navigation/native para reducir configuración manual.
- Se integró React Query para manejar caché de datos en lugar de useEffect directo.
- El catálogo se implementó con FlatList horizontal para cumplir el requisito de carrusel.
- Supabase permite tener un backend rápido y escalable con Postgres y APIs automáticas.

---
🎯 Próximos pasos
- Agregar buscador de shows por título.
- Implementar sistema de favoritos por usuario.
- Añadir autenticación con Supabase Auth para login y registro.
- Paginación y performance ( para que la app sea más rápida y funcione sin problemas cuando haya muchos usuarios al tiempo).

---
👩‍💻 Autor
✍️ Hecho por Tatiana Peña
💻 GitHub: @tatianapena
🔗 LinkedIn: tatianapenam
```
