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
  { label: "Demos", href: "#demos" },
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

// Demos para explorar. status: "here" = esta misma página, "live" = demo publicada (abre en otra pestaña),
// "soon" = próximamente (sin enlace). image: captura del inicio en public/demos (960 × 600, WebP).
export type Demo = {
  key: "agency" | "salon" | "health";
  tone: "cv1" | "cv2" | "cv3" | "cv4";
  title: string;
  text: string;
  features: readonly string[];
  status: "here" | "live" | "soon";
  href?: string;
  image?: string;
};

export const demos: readonly Demo[] = [
  {
    key: "agency",
    tone: "cv2",
    title: "Atmósfera Digital",
    text: "Esta misma página es una demo: diseño a la medida, animaciones suaves y una versión pensada para celular.",
    features: ["Tema claro y oscuro", "Animaciones", "Menú para celular", "Contacto por WhatsApp"],
    status: "here",
    href: "#inicio",
    image: "/demos/atmosfera.webp",
  },
  {
    key: "salon",
    tone: "cv3",
    title: "Salón y belleza",
    text: "Un sitio completo para un salón: muestra servicios con precios, enseña tus trabajos y facilita agendar.",
    features: ["Servicios y precios", "Galería de trabajos", "Citas por WhatsApp", "Mapa y horarios"],
    status: "live",
    href: "https://landing-salon-demo.vercel.app/",
    image: "/demos/salon.webp",
  },
  {
    key: "health",
    tone: "cv1",
    title: "Salud",
    text: "Próximo ejemplo para un consultorio dental y un laboratorio clínico: tratamientos y estudios, indicaciones y citas en línea.",
    features: ["Consultorio dental", "Laboratorio clínico"],
    status: "soon",
  },
];

// TODO: sustituye por un testimonio real y quita la etiqueta "Testimonio ilustrativo"
export const testimonial = {
  quote:
    "Gracias a Atmósfera Digital, hoy mi negocio tiene presencia en redes y recibo más clientes. El proceso fue claro, sencillo y siempre estuvieron muy atentos.",
  name: "Laura Martínez",
  role: "Propietaria de un negocio local",
  initials: "LM",
  illustrative: true,
};
