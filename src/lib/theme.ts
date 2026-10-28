// Tema claro/oscuro. El tema vive en <html data-theme="…">; la elección del usuario se guarda en localStorage.

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Se ejecuta en <head> antes de pintar (ver layout.tsx): usa la elección guardada o, si no hay, la del sistema.
// Así la página nunca parpadea en el tema equivocado al cargar.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
