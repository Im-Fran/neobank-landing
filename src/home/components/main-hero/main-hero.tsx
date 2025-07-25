import {useEffect, useState } from "react";
import {clsx} from "clsx";
import {BrandInformation} from "@/home/components/main-hero/brand-information.tsx";
import {FloatingIcons} from "@/home/components/main-hero/floating-icons.tsx";
import {PhoneMockup} from "@/home/components/main-hero/phone-mockup.tsx";

export const MainHero = () => {
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <section id={"main-hero"} className={"flex flex-col items-center justify-center min-h-screen md:h-screen text-txt-50 pt-20 pb-8 md:pb-0 relative overflow-hidden"}>
    <div className={"absolute inset-0 will-change-transform"}>
      <div className={clsx('absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl transition-all duration-2000', { 'animate-pulse scale-125 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      <div className={clsx('absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl transition-all duration-2000 delay-500', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      <div className={clsx('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-300/10 rounded-full blur-3xl transition-all duration-2000 delay-1000', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
    </div>

    {/* Contenido */}
    <div className={"flex flex-col md:flex-row items-center relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"}>
      {/* Título y descripción, además de botón call to action */}
      <BrandInformation heroAnimated={heroAnimated}/>

      {/* Mockup del teléfono y los iconos flotantes */}
      <div className={clsx('relative mt-8 md:mt-0 transition-all duration-1000', { 'translate-x-0 opacity-100 scale-100': heroAnimated, 'translate-x-8 opacity-0 scale-95': !heroAnimated })}>
        <PhoneMockup/>

        <FloatingIcons heroAnimated={heroAnimated}/>
      </div>
    </div>

    {/* Animación Mostrando el Scroll Down */}
    <div className={clsx('absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200', { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-4 opacity-0': !heroAnimated })}>
      <div className={"w-6 h-10 border-2 border-txt-300 rounded-full flex justify-center animate-bounce hover:border-primary-400 transition-colors duration-300 cursor-pointer"}>
        <div className={"w-1 h-3 bg-txt-200 rounded-full mt-2 animate-pulse"}></div>
      </div>
    </div>
  </section>
}