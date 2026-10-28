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
  { label: "Proyectos", href: "#proyectos" },
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
    text: "Platicamos contigo, sin costo, sobre tu negocio, tus clientes y lo que quieres lograr. Revisamos lo que ya tienes, como tus redes sociales o tu página, para entender qué te funciona y qué te hace falta.",
  },
  {
    key: "plan",
    title: "Diseñamos la estrategia",
    text: "Con esa información te proponemos un plan claro: qué herramientas necesitas, cómo se verá tu página y qué secciones tendrá. Lo revisamos juntos, sin tecnicismos, y lo ajustamos antes de empezar.",
  },
  {
    key: "rocket",
    title: "Implementamos y lanzamos",
    text: "Construimos tu sitio y configuramos lo que haga falta: WhatsApp, Google, reservas o catálogo. Te mostramos avances en cada etapa, hacemos los cambios que pidas y lo publicamos solo cuando estés satisfecho con el resultado.",
  },
  {
    key: "handshake",
    title: "Te acompañamos",
    text: "Después del lanzamiento seguimos contigo. Te enseñamos a usar tus herramientas paso a paso, resolvemos tus dudas y revisamos cómo responden tus clientes para hacer mejoras que te den mejores resultados.",
  },
] as const;

// Proyectos y demos. kind: "client" = proyecto real para un cliente, "demo" = ejemplo para mostrar.
// link: "here" = esta misma página, "external" = sitio publicado (abre en otra pestaña), "soon" = en preparación (sin enlace).
// image: captura del inicio en public/demos (960 × 600, WebP). Sin image se muestra el ícono sobre el degradado.
export type Demo = {
  key: "calnorthex" | "dental" | "salon" | "agency";
  tone: "cv1" | "cv2" | "cv3" | "cv4";
  kind: "client" | "demo";
  title: string;
  text: string;
  features: readonly string[];
  link: "here" | "external" | "soon";
  href?: string;
  image?: string;
};

export const demos: readonly Demo[] = [
  {
    key: "calnorthex",
    tone: "cv4",
    kind: "client",
    title: "Constructora en USA",
    text: "Sitio en inglés para Calnorthex Concrete, constructora de concreto en Santa Rosa, California: presenta sus servicios, muestra obras terminadas y facilita pedir una cotización.",
    features: ["Servicios", "Galería de obras", "Testimonios", "Cotización y llamada"],
    link: "external",
    href: "https://calnorthex.com/",
    image: "/demos/calnorthex.webp",
  },
  {
    key: "salon",
    tone: "cv3",
    kind: "demo",
    title: "Salón y belleza",
    text: "Un sitio completo para un salón: muestra servicios con precios, enseña tus trabajos y facilita agendar.",
    features: ["Servicios y precios", "Galería de trabajos", "Citas por WhatsApp", "Mapa y horarios"],
    link: "external",
    href: "https://landing-salon-demo.vercel.app/",
    image: "/demos/salon.webp",
  },
  {
    key: "agency",
    tone: "cv2",
    kind: "demo",
    title: "Atmósfera Digital",
    text: "Esta misma página es una demo: diseño a la medida, animaciones suaves y una versión pensada para celular.",
    features: ["Tema claro y oscuro", "Animaciones", "Menú para celular", "Contacto por WhatsApp"],
    link: "here",
    href: "#inicio",
    image: "/demos/atmosfera.webp",
  },
  {
    key: "dental",
    tone: "cv1",
    kind: "client",
    title: "Clínica dental",
    text: "Sitio en preparación para una clínica dental: sus pacientes podrán agendar citas en línea y consultar servicios, ubicación, galería y horarios.",
    features: ["Citas en línea", "Servicios", "Mapa", "Galería", "Horarios"],
    link: "soon",
  },
];

// Tarjeta de invitación al final de «Proyectos y demos»: el siguiente proyecto puede ser el del visitante.
export const invite = {
  title: "Tu nueva página web",
  text: "El siguiente proyecto puede ser el tuyo. Cuéntanos de tu negocio y diseñamos una página a tu medida.",
  features: ["Diseño a tu medida", "Lista para celular", "Acompañamiento"],
  cta: "Agenda una asesoría gratuita",
};

// TODO: sustituye por un testimonio real y quita la etiqueta "Testimonio ilustrativo"
export const testimonial = {
  quote:
    "Gracias a Atmósfera Digital, hoy mi negocio tiene presencia en redes y recibo más clientes. El proceso fue claro, sencillo y siempre estuvieron muy atentos.",
  name: "Laura Martínez",
  role: "Propietaria de un negocio local",
  initials: "LM",
  illustrative: true,
};
