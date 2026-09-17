export const site = {
  name: "DevCamp",
  tagline: "Agencia de marketing para marcas que quieren crecer con claridad.",
  description:
    "DevCamp es una agencia de marketing digital. Estrategia, performance, contenido, SEO y producto digital para equipos que miden cada decisión.",
  url: "https://devcamp.agency",
  email: "hola@devcamp.agency",
  phone: "+34 910 000 000",
  location: "Madrid · Remoto",
  socials: {
    instagram: "https://instagram.com/devcamp",
    linkedin: "https://linkedin.com/company/devcamp",
    x: "https://x.com/devcamp",
  },
} as const;

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/insights", label: "Insights" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const services = [
  {
    slug: "estrategia-de-marca",
    title: "Estrategia de marca",
    short: "Posicionamiento, narrativa y sistema de marca listo para escalar.",
    summary:
      "Definimos quién eres, a quién le hablas y por qué deberías ganar. Luego convertimos esa claridad en un sistema que el equipo puede usar todos los días.",
    outcomes: ["Posicionamiento", "Arquitectura de oferta", "Narrativa", "Guía de marca viva"],
    process: ["Diagnóstico", "Workshops", "Sistema", "Activación"],
  },
  {
    slug: "performance",
    title: "Performance marketing",
    short: "Campañas de paid media con medición real, no vanity metrics.",
    summary:
      "Construimos funnels de adquisición que combinan media, creativos y analítica. El objetivo no es gastar más: es aprender más rápido y comprar demanda con margen.",
    outcomes: ["Google Ads", "Meta Ads", "LinkedIn", "Medición y atribución"],
    process: ["Auditoría", "Estructura", "Creativos", "Optimización continua"],
  },
  {
    slug: "contenido-social",
    title: "Contenido y social",
    short: "Un motor editorial que convierte atención en autoridad.",
    summary:
      "Diseñamos un sistema de contenido para las plataformas donde tu audiencia ya está. Menos improvisación, más cadencia, más prueba de concepto en público.",
    outcomes: ["Calendario editorial", "Social organic", "Video corto", "Community"],
    process: ["Pilares", "Producción", "Distribución", "Iteración"],
  },
  {
    slug: "seo-crecimiento",
    title: "SEO y crecimiento orgánico",
    short: "Tráfico que no desaparece cuando apagas la campaña.",
    summary:
      "Investigamos demanda, construimos páginas que responden intención y reforzamos autoridad. SEO como producto, no como lista de keywords.",
    outcomes: ["Arquitectura SEO", "Contenido de captura", "Technical SEO", "Linking interno"],
    process: ["Mapa de demanda", "Priorización", "Producción", "Compounding"],
  },
  {
    slug: "web-producto",
    title: "Web y producto digital",
    short: "Sitios y landings que venden, miden y se sienten premium.",
    summary:
      "Diseñamos y desarrollamos experiencias rápidas, accesibles y listas para conversión. Astro, diseño de sistemas y analítica desde el primer commit.",
    outcomes: ["Sitios de marca", "Landings", "CRO", "Design systems"],
    process: ["UX", "UI", "Build", "Experimentos"],
  },
  {
    slug: "marketing-ia",
    title: "Marketing con IA",
    short: "Operaciones más rápidas sin perder criterio ni voz de marca.",
    summary:
      "Integramos IA en investigación, producción y reporting. El equipo humano decide; los sistemas aceleran. Menos caos, más throughput con control de calidad.",
    outcomes: ["Playbooks de IA", "Automatización", "Agentes internos", "QA de marca"],
    process: ["Mapa de flujos", "Piloto", "Guardrails", "Escalado"],
  },
] as const;

export const cases = [
  {
    slug: "northline",
    client: "Northline",
    sector: "SaaS B2B",
    title: "De tráfico caro a un motor de demanda predecible",
    result: "+214% pipeline calificado en 5 meses",
    metric: "3.1x ROAS",
    summary:
      "Reestructuramos captación, contenido y CRM para que cada euro de media empujara oportunidades reales, no solo leads.",
  },
  {
    slug: "atelier-sol",
    client: "Atelier Sol",
    sector: "DTC",
    title: "Una marca de producto con voz propia y CAC estable",
    result: "-38% CAC con más volumen",
    metric: "1.8M impresiones orgánicas",
    summary:
      "Unificamos identidad, social y paid creative. El contenido dejó de ser un coste y pasó a ser el mejor activo de adquisición.",
  },
  {
    slug: "harbor",
    client: "Harbor Clinic",
    sector: "Salud",
    title: "SEO local que llena agenda sin depender de ads",
    result: "+162% reservas orgánicas",
    metric: "Top 3 en 18 keywords",
    summary:
      "Arquitectura local, contenido clínico claro y una web que convierte visitas en citas sin fricción.",
  },
  {
    slug: "lumen",
    client: "Lumen Studio",
    sector: "Servicios",
    title: "Reposicionamiento y web que cierra proyectos premium",
    result: "+47% ticket medio",
    metric: "2.4x tasa de propuesta",
    summary:
      "Una narrativa más precisa y un sitio más rápido. Menos leads, mejores conversaciones, más cierres.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    body: "Auditamos marca, canales, datos y oferta. En dos semanas sabes qué está frenando el crecimiento.",
  },
  {
    step: "02",
    title: "Sistema",
    body: "Diseñamos la estrategia, los mensajes y el stack de ejecución. Nada de decks que mueren en Drive.",
  },
  {
    step: "03",
    title: "Sprint",
    body: "Lanzamos campañas, contenido y producto en ciclos cortos. Medimos, cortamos y doblamos lo que funciona.",
  },
  {
    step: "04",
    title: "Compound",
    body: "Operamos el motor. Reporting claro, experimentos constantes y un equipo que se siente extensión del tuyo.",
  },
] as const;

export const team = [
  {
    name: "Camila Ortiz",
    role: "Strategy Lead",
    bio: "Posicionamiento y narrativa para marcas que necesitan un punto de vista, no un eslogan.",
  },
  {
    name: "Diego Navarro",
    role: "Growth Lead",
    bio: "Performance, atribución y sistemas de adquisición. Obsesionado con el unit economics.",
  },
  {
    name: "María Beltrán",
    role: "Creative Lead",
    bio: "Dirección de arte y contenido. Convierte estrategia en piezas que la gente realmente para a ver.",
  },
  {
    name: "Leo Campos",
    role: "Product & Web",
    bio: "Diseño y desarrollo de experiencias digitales rápidas, accesibles y pensadas para convertir.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Por primera vez el reporting nos dice qué hacer la semana siguiente, no solo qué pasó el mes pasado.",
    name: "Elena Ruiz",
    role: "CMO, Northline",
  },
  {
    quote:
      "DevCamp no llegó a ‘hacer posts’. Llegó a construir un sistema. La diferencia se nota en pipeline.",
    name: "Javier Costa",
    role: "Founder, Lumen Studio",
  },
  {
    quote:
      "El equipo entiende producto, marca y media. Eso es raro. Y es exactamente lo que necesitábamos.",
    name: "Sofía Alemán",
    role: "Head of Growth, Atelier Sol",
  },
] as const;

export const faqs = [
  {
    q: "¿Con qué tipo de empresas trabajan?",
    a: "Con B2B, DTC y servicios que ya tienen tracción y quieren un sistema de crecimiento más serio: claridad de marca, canales medibles y un sitio que convierta.",
  },
  {
    q: "¿Cuánto tardan en ver resultados?",
    a: "En 2 semanas hay diagnóstico. En 30–45 días hay primeros sprints en mercado. El compounding (SEO, marca, contenido) se mide en trimestres, no en días.",
  },
  {
    q: "¿Trabajan por proyecto o retainer?",
    a: "Los kicks empiezan con un sprint de sistema. La operación continua va en retainer mensual para no perder ritmo ni aprendizaje.",
  },
  {
    q: "¿Incluyen producción creativa y desarrollo?",
    a: "Sí. Estrategia, media, contenido, web y operaciones con IA viven en el mismo equipo para que no se rompa el hilo entre idea y ejecución.",
  },
] as const;
