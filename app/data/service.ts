export const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas diseñadas estratégicamente para convertir visitantes en clientes.",
    features: [
      "Diseño moderno y responsive",
      "Optimización para conversiones",
      "Integración con WhatsApp",
      "Carga rápida (performance optimizada)",
    ],
    price: "Desde $150 USD",
    animation: {
      direction: "horizontal",
      reverse: true,
    },
    pagina:"landing"
  },
  {
    title: "Webs Profesionales",
    description:
      "Sitios completos para posicionar tu marca y generar confianza.",
    features: [
      "Diseño personalizado",
      "SEO básico incluido",
      "Secciones completas",
      "Optimización mobile",
    ],
    price: "Desde $400 USD",
    animation: {
      direction: "vertical",
      reverse: false,
    },
    pagina:"webs",
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online listas para vender desde el primer día.",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Integración con pagos",
      "Panel de administración",
    ],
    price: "Desde $1000 USD",
    animation: {
      direction: "horizontal",
      reverse: false,
    },
    pagina:"ecommerce"
  },
] as const;