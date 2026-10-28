"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

// Lee el tema de <html data-theme>, que ya fijó el script de layout.tsx antes de pintar.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

// En el servidor no se conoce el tema; null evita que la hidratación no coincida.
function getServerTheme(): Theme | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const isDark = theme === "dark";

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Sin localStorage (modo privado): el cambio dura solo esta visita.
    }
  }

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggle}
      aria-label="Tema oscuro"
      aria-pressed={theme === null ? undefined : isDark}
      title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {/* Los dos íconos se dibujan siempre; el CSS muestra el que corresponde según data-theme. */}
      <svg className="theme-moon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="theme-sun" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </g>
      </svg>
    </button>
  );
}
