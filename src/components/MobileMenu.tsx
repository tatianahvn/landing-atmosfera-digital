"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";

// Menú desplegable para celular. En escritorio se oculta con CSS (.mnav) y se usa el <nav> de Nav.tsx.
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    // Si la ventana crece a tamaño escritorio, el menú se cierra para no quedar abierto al volver.
    const desktop = window.matchMedia("(min-width: 761px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className="mnav">
      <button
        ref={buttonRef}
        type="button"
        className="mnav-btn"
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mnav-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav id="menu-movil" className="mnav-panel" aria-label="Principal" hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.label} className="mnav-link" href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a className="btn mnav-cta" href="#contacto" onClick={close}>
          Contacto
        </a>
      </nav>
    </div>
  );
}
