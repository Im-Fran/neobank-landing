import {useEffect, useState, useRef, useCallback} from "react";
import {Eye, ShieldIcon, Sparkles, Zap} from "lucide-react";
import {clsx} from "clsx";
import {FeatureCard} from "@/home/components/features-hero/feature-card.tsx";

export const FeaturesHero = () => {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number>(0);
  const ticking = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Sistema de parallax optimizado utilizando requestAnimationFrame para rendimiento fluido
  const updateScrollEffects = useCallback(() => {
    setScrollY(window.scrollY);
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestRef.current = requestAnimationFrame(updateScrollEffects);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateScrollEffects]);

  return <section id={"features-hero"} className={"relative flex flex-col items-center justify-center min-h-screen py-16 md:py-20 text-txt-50 overflow-hidden"}>
    {/* Elementos de fondo con desplazamiento parallax aplicado */}
    <div
      className={"absolute inset-0 will-change-transform"}
      style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
    >
      <div className={clsx('absolute top-1/4 left-1/4 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl transition-all duration-2000', { 'animate-pulse scale-125 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      <div className={clsx('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl transition-all duration-2000 delay-1000', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      <div className={clsx('absolute bottom-1/2 right-1/4 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl transition-all duration-2000 delay-500', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
    </div>

    <div className={"container mx-auto flex flex-col justify-center items-center px-6 md:px-8 lg:px-12 relative z-10"}>
      <div className={clsx("flex flex-col items-center justify-center text-center max-w-3xl mb-12 transition-all duration-1000", { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-8 opacity-0': !heroAnimated })}>
        <h2 className={"text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 relative group leading-tight"}>
          Diseñado para tu <span className={"text-primary-400 relative"}>Tranquilidad
            <span className={"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 transition-transform duration-700 delay-500 origin-left group-hover:scale-x-100"}></span>
          </span>
        </h2>
        <p className={"text-sm md:text-base lg:text-lg mb-8 px-4 leading-relaxed"}>Cada característica está pensada para darte control total sobre tus finanzas con la máxima seguridad y transparencia.</p>
      </div>

      <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch justify-center gap-4 md:gap-6 w-full max-w-7xl transition-all duration-300"}>
        {/* Grid de tarjetas de características con microinteracciones */}
        <FeatureCard
          title={"Transparencia Total"}
          description={"Acceso a informes detallados y análisis de gastos para que siempre sepas a dónde va tu dinero."}
          icon={<Eye className={"w-10 md:w-12 h-10 md:h-12 transition-transform duration-300 group-hover:scale-110"} />}
          color={"bg-gradient-to-bl from-primary-400 to-primary-600"}
        />

        <FeatureCard
          title={"Seguridad Bancaria"}
          description={"Protección de nivel bancario con encriptación de extremo a extremo y autenticación biométrica."}
          icon={<ShieldIcon className={"w-10 md:w-12 h-10 md:h-12 transition-transform duration-300 group-hover:rotate-12"} />}
          color={"bg-gradient-to-br from-secondary-400 to-secondary-600"}
        />

        <FeatureCard
          title={"Transferencias Instantáneas"}
          description={"Envía y recibe dinero al instante, 24/7, sin comisiones ocultas ni tiempos de espera."}
          icon={<Zap className={"w-10 md:w-12 h-10 md:h-12 transition-transform duration-300 group-hover:rotate-45"} />}
          color={"bg-gradient-to-bl from-primary-400 to-primary-600"}
        />

        <FeatureCard
          title={"Asistente IA"}
          description={"Tu asistente personal para gestionar tus finanzas, responder preguntas y ofrecer recomendaciones."}
          icon={<Sparkles className={"w-10 md:w-12 h-10 md:h-12 transition-transform duration-300 group-hover:rotate-180"} />}
          color={"bg-gradient-to-br from-secondary-400 to-secondary-600"}
        />
      </div>
    </div>
  </section>
}