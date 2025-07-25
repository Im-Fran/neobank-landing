import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { clsx } from "clsx";
import {Stats} from "@/home/components/security-hero/stats.tsx";

export const SecurityHero = () => {
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const checklistItems = [
    "Encriptación de punto a punto.",
    "Autenticación biométrica en cada paso seguro.",
    "Monitoreo 24/7 con IA y Machine-Learning anti-fraude."
  ];

  return (
    <section id={"security-hero"} className={"flex flex-col items-center justify-center min-h-screen py-16 md:py-20 text-txt-50 relative overflow-hidden"}>
      <div className={"absolute inset-0"}>
        <div className={clsx('absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl transition-all duration-2000', { 'animate-pulse scale-125 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
        <div className={clsx('absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl transition-all duration-2000 delay-500', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
        <div className={clsx('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl transition-all duration-2000 delay-1000', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      </div>

      <div className={"container mx-auto px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-300"}>
          <div className={clsx('transition-all duration-1000', { 'translate-x-0 opacity-100': heroAnimated, '-translate-x-8 opacity-0': !heroAnimated })}>
            <h1 className={"text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"}>
              Tu dinero, <span className={"text-secondary-600"}>100% protegido</span>
            </h1>

            <p className={"text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-txt-200 max-w-lg leading-relaxed"}>
              Utilizamos la misma tecnología de seguridad que los bancos más grandes del mundo, con capas adicionales de protección que van más allá del estándar de la industria.
            </p>

            {/* Lista de verificación */}
            <div className={"mb-8 md:mb-10 space-y-3 md:space-y-4"}>
              {checklistItems.map((item, index) => (
                <div key={index} className={clsx('flex items-start gap-3 transition-all duration-500', { 'translate-x-0 opacity-100': heroAnimated, '-translate-x-4 opacity-0': !heroAnimated })} style={{ transitionDelay: `${750 * (index+1)}ms` }}>
                  <div className={"bg-primary-500 rounded-full p-1 mt-0.5 flex-shrink-0"}>
                    <CheckCircle className={"w-4 h-4 text-txt-0"} />
                  </div>
                  <span className={"text-txt-100 text-sm md:text-base lg:text-lg"}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <Stats heroAnimated={heroAnimated}/>
        </div>
      </div>
    </section>
  );
};
