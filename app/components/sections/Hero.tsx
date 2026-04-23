"use client";

import RotatingText from '../animacion/RotatingText'
import TextPressure from '../animacion/TextPressure';
  


export default function Hero() {
  return (
  <section className="h-screen flex flex-col justify-center items-center text-center px-6">

          <div style={{position: 'relative', height: '300px'}}>
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
          </div>
     
        <h1 className="text-4xl md:text-4xl font-bold leading-tight whitespace-nowrap">
          CREAMOS PAGINAS WEBS QUE

          <RotatingText 
            texts={[
              'CONSIGUEN CLIENTES',
              'VENDEN +',
              'CARGAN RAPIDO',
              'IMPULSAN TU NEGOCIO'
            ]}
            mainClassName="inline-flex items-center justify-center min-w-[220px] px-3 py-1.5 bg-blue-600 text-white rounded-xl font-semibold"
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

        </h1>
        <p className="text-lg text-gray-400 max-w-xl mt-6">
          En Efecto Digital creamos páginas modernas, rápidas y optimizadas para generar resultados reales.
        </p>

      </section>

  );
}