// Contenido y configuración del sitio. Cambia aquí textos, enlaces y datos de contacto.

export const site = {
  name: "Atmósfera Digital",
  tagline: "Soluciones digitales para negocios locales. Una guía confiable para crecer.",
  description:
    "Soluciones digitales simples, prácticas y a tu medida para negocios locales: sitios web, presencia en Google, reservas en línea, WhatsApp y catálogo, y micrositios con QR.",
  // TODO: reemplaza por tu número con lada de país, sin "+" ni espacios (ej. 524521234567)
  whatsappNumber: "52XXXXXXXXXX",
  year: 2026,
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}`;

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Nosotros", href: "#nosotros" },
  // TODO: apunta a tu blog cuando exista
  { label: "Blog", href: "#" },
];

export const heroPoints = [
  "Estrategia digital personalizada",
  "Tecnología accesible",
  "Acompañamiento en todo el proceso",
];

export const services = [
  {
    key: "site",
    tone: "tb",
    title: "Sitios web",
    text: "Páginas modernas y funcionales que te representan.",
    aria: "Más sobre sitios web",
  },
  {
    key: "tools",
    tone: "tt",
    title: "Herramientas digitales",
    text: "Automatiza procesos y haz tu negocio más eficiente.",
    aria: "Más sobre herramientas digitales",
  },
  {
    key: "google",
    tone: "tb",
    title: "Presencia en Google",
    text: "Para que aparezcas cuando alguien busque un negocio como el tuyo cerca de ellos.",
    aria: "Más sobre presencia en Google",
  },
  {
    key: "booking",
    tone: "tt",
    title: "Reservas en línea",
    text: "Tus clientes agendan solos, sin que tú estés contestando todo el día.",
    aria: "Más sobre reservas en línea",
  },
  {
    key: "whatsapp",
    tone: "tb",
    title: "WhatsApp y catálogo",
    text: "Muestra tus servicios y precios, y que te escriban con un clic.",
    aria: "Más sobre WhatsApp y catálogo",
  },
  {
    key: "qr",
    tone: "tt",
    title: "Micrositio con QR",
    text: "Un enlace que compartes en tarjetas, redes o en tu local.",
    aria: "Más sobre micrositio con QR",
  },
] as const;

export const whyPoints = [
  { key: "eye", label: "Más visibilidad" },
  { key: "users", label: "Más clientes" },
  { key: "trend", label: "Más ventas" },
] as const;

export const steps = [
  {
    key: "store",
    title: "Conocemos tu negocio",
    text: "Hablamos sobre tus objetivos, necesidades y lo que quieres lograr.",
  },
  {
    key: "plan",
    title: "Diseñamos la estrategia",
    text: "Creamos un plan a la medida para tu negocio.",
  },
  {
    key: "rocket",
    title: "Implementamos y lanzamos",
    text: "Desarrollamos, configuramos y ponemos en marcha.",
  },
  {
    key: "handshake",
    title: "Te acompañamos",
    text: "Damos seguimiento y optimizamos para mejorar resultados.",
  },
] as const;

// TODO: reemplaza [Agrega tu caso] con casos reales (resultado, cliente, métricas)
export const cases = [
  { key: "food", tone: "cv1", title: "Tienda de alimentos", note: "[Agrega tu caso]" },
  { key: "wrench", tone: "cv2", title: "Taller mecánico", note: "[Agrega tu caso]" },
  { key: "scissors", tone: "cv3", title: "Estética y belleza", note: "[Agrega tu caso]" },
  { key: "shirt", tone: "cv4", title: "Boutique de ropa", note: "[Agrega tu caso]" },
] as const;

// TODO: sustituye por un testimonio real y quita la etiqueta "Testimonio ilustrativo"
export const testimonial = {
  quote:
    "Gracias a Atmósfera Digital, hoy mi negocio tiene presencia en redes y recibo más clientes. El proceso fue claro, sencillo y siempre estuvieron muy atentos.",
  name: "Laura Martínez",
  role: "Propietaria de un negocio local",
  initials: "LM",
  illustrative: true,
};
