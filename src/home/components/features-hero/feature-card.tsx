import {type ReactNode, useEffect, useState} from "react";
import {clsx} from "clsx";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const cardElement = document.getElementById(`feature-card-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => observer.disconnect();
  }, [title]);

  return (
    <div
      id={`feature-card-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={clsx(
        "group bg-transparent hover:bg-neutral-800 backdrop-blur-md border border-neutral-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 h-58 md:h-64 xl:h-80 relative overflow-hidden cursor-pointer",
        { 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }
      )}
    >
      {/* Efecto de brillo en hover */}
      <div className={"absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}></div>

      <div className={"flex flex-col items-start gap-4 relative z-10"}>
        <div className={clsx("flex items-center justify-center rounded-xl p-4 text-txt-50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3", color)}>
          {icon}
        </div>
        <div className={"flex flex-col items-start gap-2 text-left"}>
          <h3 className={"text-lg font-semibold text-txt-0 group-hover:text-primary-400 transition-colors duration-300"}>{title}</h3>
          <p className={"text-sm text-txt-200 group-hover:text-txt-100 transition-colors duration-300"}>{description}</p>
        </div>
      </div>

      {/* Indicador de interactividad */}
      <div className={"absolute bottom-2 right-2 w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"}></div>
    </div>
  );
};