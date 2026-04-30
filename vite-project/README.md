# Around The U.S. - Refactorización a React 🚀

¡Hola! Este proyecto es la evolución de mi aplicación "Around The U.S.". Lo que antes era una página construida con HTML, CSS y JavaScript Vanilla, ahora es una aplicación moderna, escalable y eficiente gracias a **React**.

A continuación, detallo los cambios principales y la lógica que implementé durante este proceso de refactorización.

---

El objetivo principal fue "desmenuzar" la interfaz original en piezas reutilizables llamadas **componentes**. Aquí está el desglose de la nueva arquitectura:

### 1. Componentización del Layout
Separamos las partes globales de la aplicación para que el código sea más limpio:
*   `Header`: El encabezado con el logo.
*   `Main`: El corazón de la app que gestiona el perfil y la galería.
*   `Footer`: El pie de página con el copyright.

### 2. El Sistema de Popups (Modales)
En lugar de tener tres o cuatro modales repetidos en el HTML, creamos un **Componente Popup único y genérico**. 
*   **Contenedor Universal:** Este componente solo se encarga de la estructura externa (fondo oscuro, botón de cierre y título).
*   **Prop `children`:** Usamos esta potente característica de React para "inyectar" diferentes formularios (Editar Perfil, Añadir Tarjeta, Cambiar Avatar) dentro del mismo Popup. ¡Reutilización al máximo!

### 3. Gestión de Estado con `useState`
Implementamos una lógica inteligente para abrir y cerrar ventanas:
*   Usamos un único estado llamado `popup` que empieza en `null`.
*   Cuando haces clic en un botón, le pasamos al estado un objeto con la configuración de esa ventana.
*   Si el estado no es `null`, React renderiza el modal automáticamente. Si es `null`, lo elimina del DOM.

### 4. Galería Dinámica y Datos Ficticios (Mocks)
Para la sección de tarjetas:
*   Creamos un componente `Card` independiente.
*   Utilizamos el método `.map()` para iterar sobre un array de objetos (datos ficticios) y generar las tarjetas dinámicamente.
*   Cada tarjeta es capaz de detectar clics en su imagen para abrir la vista ampliada.

---

## 🛠️ Desafíos Técnicos Superados

*   **Sincronización con CSS:** Tuvimos que ajustar los estilos originales. En React, la visibilidad se gestiona montando/desmontando el componente, por lo que eliminamos reglas de `visibility: hidden` que bloqueaban la interacción.
*   **Fragmentos y Props:** Aprendimos a pasar funciones del padre a los hijos para que un botón dentro de una `Card` pueda modificar el estado del componente `Main`.

---

Este es solo el comienzo. La estructura ya es sólida, pero el plan de vuelo incluye:
1.  **Formularios Controlados:** Gestionar los datos que el usuario escribe en los inputs.
2.  **Validación en tiempo real:** Usar el estado para mostrar mensajes de error si los campos no cumplen los requisitos.
3.  **Integración con API:** Conectar la aplicación con un servidor real para que los cambios se guarden permanentemente.

---
