import {clsx} from "clsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight, Smartphone} from "lucide-react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef, useState} from "react";

gsap.registerPlugin(ScrollTrigger);

export type DownloadHeroContentProps = {
  heroAnimated: boolean;
}

export const DownloadHeroContent = ({ heroAnimated }: DownloadHeroContentProps) => {
  const [titleText, setTitleText] = useState("Únete a la ");
  const [highlightText, setHighlightText] = useState("Revolución");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainTextRef = useRef<HTMLSpanElement>(null);
  const highlightTextRef = useRef<HTMLSpanElement>(null);

  const animateTextChange = (newTitleText: string, newHighlightText: string) => {
    if (!mainTextRef.current || !highlightTextRef.current) return;

    const tl = gsap.timeline();

    // Animación de salida del texto actual
    tl.to([mainTextRef.current, highlightTextRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setTitleText(newTitleText);
        setHighlightText(newHighlightText);
      }
    })
    // Animación de entrada del nuevo texto
    .fromTo([mainTextRef.current, highlightTextRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }
    );
  };

  useGSAP(() => {
    let currentState = "original";

    ScrollTrigger.create({
      trigger: "#download-hero",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.progress > 0.56) {
          if (currentState !== "changed") {
            currentState = "changed";
            animateTextChange("Bienvenido a la ", "Financracia");
          }
        } else {
          if (currentState !== "original") {
            currentState = "original";
            animateTextChange("Únete a la ", "Revolución");
          }
        }
      },
    });
  });

  return (
    <div className={clsx('flex flex-col items-center justify-center text-center max-w-2xl transition-all duration-1000', { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-8 opacity-0': !heroAnimated })}>
      {/* Título con animación de texto */}
      <h2
        ref={titleRef}
        className={"text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight"}
      >
        <span ref={mainTextRef} className="inline-block">{titleText}</span>
        <span
          ref={highlightTextRef}
          className={"bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent inline-block"}
        >
          &nbsp;
          {highlightText}
        </span>
      </h2>

      {/* Descripción */}
      <p className={"text-lg md:text-xl mb-10 text-txt-200 leading-relaxed max-w-lg"}>
        Más de 2 millones de personas ya confían en NeoBank para gestionar sus finanzas. ¿Qué esperas para unirte?
      </p>

      {/* Botones */}
      <div className={clsx('flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-700 delay-300', { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-4 opacity-0': !heroAnimated })}>
        {/* Botón con gradiente */}
        <Button className={"bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-txt-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"}>
          Crear Cuenta Gratis <ArrowRight className={"ml-2 w-5 h-5"} />
        </Button>

        {/* Botón transparente */}
        <Button
          variant={"outline"}
          className={"bg-transparent border-2 border-txt-300 hover:border-txt-200 text-txt-50 hover:text-txt-0 font-semibold px-8 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-txt-50/5 hover:scale-105"}
        >
          Descargar App <Smartphone className={"ml-2 w-5 h-5"} />
        </Button>
      </div>
    </div>
  );
};
