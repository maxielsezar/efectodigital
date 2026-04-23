"use client"
import CardNav from "./CardNav";


export default function Header() {
   const items = [
    {
      label: "Nosotros",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Servicios", href:"#servicios", ariaLabel: "About Company"  },
        { label: "Beneficios", href:"#beneficios", ariaLabel: "About Careers" },
        { label: "Como trabajamos", href:"#proceso", ariaLabel: "About Company"  },
      ]
    },
    {
      label: "Proyectos", 
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", href:"", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href:"", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contacto",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Email", href:"", ariaLabel: "Email us" },
        { label: "Twitter", href:"", ariaLabel: "Twitter" },
        { label: "LinkedIn", href:"", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  return ( 
           <CardNav
              logo={'logo.png'}
              logoAlt="Company Logo"
              items={items}
              baseColor="#fff"
              menuColor="#000"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
        />
  );
}