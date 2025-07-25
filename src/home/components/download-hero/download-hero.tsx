import { useEffect, useState } from "react";
import { clsx } from "clsx";
import {DownloadHeroContent} from "@/home/components/download-hero/download-hero-content.tsx";
import {DownloadPhoneMockup} from "@/home/components/download-hero/download-phone-mockup.tsx";

export const DownloadHero = () => {
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={"download-hero"} className={"relative flex flex-col items-center justify-center h-[120vh] md:h-screen text-txt-50 py-20"}>
      {/* Fondo animado */}
      <div className={"absolute inset-0"}>
        <div className={clsx('absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl transition-all duration-2000', { 'animate-pulse scale-125 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
        <div className={clsx('absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-300/15 rounded-full blur-3xl transition-all duration-2000 delay-500', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      </div>

      <div className={"container mx-auto flex flex-col justify-center items-center px-6 md:px-8 lg:px-12 relative z-10"}>
        {/* Contenido */}
        <DownloadHeroContent heroAnimated={heroAnimated}/>
      </div>

      {/* Phone Mockup con animación de scroll */}
      <DownloadPhoneMockup />
    </section>
  );
};
