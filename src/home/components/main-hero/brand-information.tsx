import {clsx} from "clsx";
import LogoTenpo from "@/assets/logo/tenpo.svg";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";

export type BrandInformationProps = {
  heroAnimated: boolean;
}

export const BrandInformation = ({ heroAnimated }: BrandInformationProps) => {
  return <div className={clsx("container mx-auto text-left mb-6 md:mb-10 md:my-0 px-6 md:px-5 lg:px-0 max-w-2xl transition-all duration-1000", { 'translate-x-0 opacity-100': heroAnimated, '-translate-x-8 opacity-0': !heroAnimated })}>
    <div className={"flex flex-col items-start mb-4 md:mb-5 gap-0.5"}>
      <h1 className={clsx("text-3xl md:text-6xl font-bold transition-all duration-1000 delay-300 leading-tight", { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-8 opacity-0': !heroAnimated })}>
        Bienvenido a <span className={"font-graphie font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent animate-pulse"}>Neobank</span>
      </h1>
      <span className={clsx("flex items-end text-base md:text-lg transition-all duration-1000 delay-500", { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-4 opacity-0': !heroAnimated })}>
        by <img src={LogoTenpo} alt={"Tenpo Isologo"} className={"h-6 md:h-8 ml-1"}/>
      </span>
    </div>
    <p className={clsx("text-sm md:text-lg mb-6 md:mb-8 max-w-md md:max-w-lg lg:max-w-xl transition-all duration-1000 delay-700 leading-relaxed", { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-4 opacity-0': !heroAnimated })}>
      Experimenta la transparencia total, seguridad de nivel bancario e innovación que revoluciona tu relación con el dinero. Todo en una app elegante y poderosa.
    </p>

    <div className={clsx("transition-all duration-1000 delay-900", { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-4 opacity-0': !heroAnimated })}>
      <Button onClick={() => document.querySelector('#download-hero')?.scrollIntoView({ behavior: 'smooth' })} className={"group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-txt-50 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 relative overflow-hidden"}>
        <span className={"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"}></span>
        <span className={"relative z-10"}>Únete a la Revolución Financiera</span>
        <ArrowRight className={"ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"}/>
      </Button>
    </div>
  </div>
}