# Mis 15 Jazmin

La fecha, el horario y la ubicación de la invitación se configuran en `src/config/invitation.js`.

## Fotos de la galería

Agregar las fotos en `public/assets/galeria/`. Se admiten JPG, JPEG, PNG, WebP y AVIF. Nombrarlas `01.jpg`, `02.jpg`, etc. para elegir el orden. Solo las imágenes de esta carpeta se incluyen en la galería.

Los GIF quedan fuera. Sin fotos, aparece un mensaje de próxima publicación.

Después de agregar fotos, reiniciar `npm run dev` o volver a ejecutar `npm run build` para incluirlas. La galería muestra una sola foto completa y centrada por vez, con avance automático cada 4,5 segundos, flechas y gestos táctiles. El avance automático se pausa fuera de la galería, al abrir una foto o con el botón de pausa; se desactiva cuando el dispositivo pide movimiento reducido.

Cada foto abre un carrusel a pantalla completa, con gestos táctiles, flechas, navegación por teclado y cierre con Escape. Al cerrar, la galería conserva la última foto vista.

## Desarrollo

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
