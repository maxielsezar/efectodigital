"use client";

import { useEffect, useState } from "react";
import RotatingText from '../animacion/RotatingText'
import TextPressure from '../animacion/TextPressure';
  


export default function Hero() {


      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
      }, []);

    
  return (
  <section className="h-screen flex flex-col justify-center items-center text-center px-6">

         <div className="relative h-50 sm:h-75 flex flex-col items-center justify-center">

      {isMobile ? (
        <>
          <TextPressure
            text="Efecto"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={80}
          />

          <TextPressure
            text="Digital"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={80}
          />
        </>
      ) : (
        <TextPressure
          text="Efecto.Digital"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={156}
        />
      )}

    </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-center">

          <span className="block">
            CREAMOS PÁGINAS WEB QUE
          </span>

          <span className="block">
            <RotatingText 
              texts={[
                'CONSIGUEN CLIENTES',
                'VENDEN +',
                'CARGAN RÁPIDO',
                'IMPULSAN TU NEGOCIO'
              ]}
              mainClassName="inline-flex items-center justify-center px-3 py-1.5 bg-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base md:text-lg"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={2500}
              splitBy="words"
              auto
              loop
            />
          </span>

        </h1>
        <p className="text-lg text-gray-400 max-w-xl mt-6">
          En Efecto Digital creamos páginas modernas, rápidas y optimizadas para generar resultados reales.
        </p>

      </section>

  );
}