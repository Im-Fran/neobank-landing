import {clsx} from "clsx";
import {CheckCircle, Eye, Sparkles, Zap} from "lucide-react";

export type FloatingIconsProps = {
  heroAnimated: boolean;
}

export const FloatingIcons = ({ heroAnimated }: FloatingIconsProps) => {
  return <>
    <div className={clsx('absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-1000 delay-1500 hover:scale-110 cursor-pointer', { 'translate-y-0 opacity-100 rotate-0': heroAnimated, '-translate-y-4 opacity-0 rotate-12': !heroAnimated, 'animate-float': heroAnimated})}>
      <CheckCircle className={"w-10 h-10 text-txt-0 transition-transform duration-300 hover:rotate-12"} />
    </div>

    <div className={clsx('absolute top-2/3 -right-5 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-xl flex items-center justify-center shadow-2xl transition-all duration-1000 delay-1300 hover:scale-110 cursor-pointer', { 'translate-y-0 opacity-100 rotate-0': heroAnimated, '-translate-y-4 opacity-0 rotate-12': !heroAnimated, 'animate-float': heroAnimated})}>
      <Eye className={"w-8 h-8 text-txt-0 transition-transform duration-300 hover:scale-110"} />
    </div>

    <div className={clsx('absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-xl flex items-center justify-center shadow-2xl transition-all duration-1000 delay-1700 hover:scale-110 cursor-pointer', { 'translate-y-0 opacity-100 rotate-0': heroAnimated, '-translate-y-4 opacity-0 rotate-12': !heroAnimated, 'animate-reverse-float': heroAnimated})}>
      <Sparkles className={"w-8 h-8 text-txt-0 transition-transform duration-300 hover:rotate-180"} />
    </div>

    <div className={clsx('absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-primary-300 to-secondary-400 rounded-full flex items-center justify-center shadow-xl transition-all duration-1000 delay-1900 hover:scale-110 cursor-pointer', { 'translate-y-0 opacity-100 rotate-0': heroAnimated, '-translate-y-4 opacity-0 rotate-12': !heroAnimated, 'animate-slow-float': heroAnimated})}>
      <Zap className={"w-6 h-6 text-txt-0 transition-transform duration-300 hover:rotate-12"} />
    </div>
  </>
}