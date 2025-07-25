import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { clsx } from "clsx";

export type TestimonialCardProps = {
  testimonial: string;
  user: {
    name: string;
    title: string;
    avatar: string;
  };
}

export const TestimonialCard = ({ testimonial, user }: TestimonialCardProps) => (
  <div className={"bg-transparent hover:bg-neutral-800 backdrop-blur-md border border-neutral-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[200px] flex flex-col justify-between"}>
    <div className={"flex flex-col gap-4"}>
      <div className={"flex gap-1"}>
        {[...Array(5)].map((_, index) => (
          <Star key={index} className={"w-5 h-5 fill-primary-600 text-primary-600"} />
        ))}
      </div>

      <p className={"text-txt-400 italic text-base leading-relaxed"}>
        "{testimonial}"
      </p>
    </div>

    <div className={"flex items-center gap-3 mt-4"}>
      <div className={"w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center font-bold text-txt-0 text-lg"}>
        {user.avatar}
      </div>
      <div className={"flex flex-col"}>
        <span className={"text-txt-50 font-bold text-base"}>{user.name}</span>
        <span className={"text-txt-400 text-sm"}>{user.title}</span>
      </div>
    </div>
  </div>
);

export const TestimonialsHero = () => {
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      testimonial: "Neobank ha revolucionado completamente la forma en que manejo mis finanzas. La transparencia total me da una confianza que nunca había experimentado con otros bancos.",
      user: {
        name: "Carlos Ruiz",
        title: "Freelancer",
        avatar: "CR"
      }
    },
    {
      testimonial: "Como emprendedora, necesito rapidez y seguridad. Neobank me ofrece ambas cosas sin comprometer la experiencia de usuario. Es simplemente perfecto.",
      user: {
        name: "María González",
        title: "Emprendedora",
        avatar: "MG"
      }
    },
    {
      testimonial: "La interfaz es tan intuitiva que desde el primer día pude manejar todas mis transacciones sin problemas. Ideal para mi vida de estudiante.",
      user: {
        name: "Ana Martín",
        title: "Estudiante",
        avatar: "AM"
      }
    },
    {
      testimonial: "En ExDev recomendamos Neobank por su tecnología de vanguardia y su enfoque en la seguridad. Es el futuro de la banca digital.",
      user: {
        name: "Francisco Solís",
        title: "Líder, Club ExDev",
        avatar: "FS"
      }
    }
  ];

  return (
    <section id={"testimonials-hero"} className={"relative flex flex-col items-center justify-center min-h-screen text-txt-50 pt-20 pb-20"}>
      <div className={"absolute inset-0"}>
        <div className={clsx('absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl transition-all duration-2000', { 'animate-pulse scale-125 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
        <div className={clsx('absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl transition-all duration-2000 delay-500', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
        <div className={clsx('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl transition-all duration-2000 delay-1000', { 'animate-pulse scale-100 opacity-100': heroAnimated, 'scale-50 opacity-0': !heroAnimated })}></div>
      </div>

      <div className={"container mx-auto flex flex-col justify-center items-center px-6 md:px-8 lg:px-12 relative z-10"}>
        <div className={clsx('flex flex-col items-center justify-center text-center max-w-3xl mb-12 transition-all duration-1000', { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-8 opacity-0': !heroAnimated })}>
          <h2 className={"text-3xl md:text-4xl xl:text-5xl font-bold mb-4 leading-tight"}>
            Lo que dicen nuestros <span className={"bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent"}>Usuarios</span>
          </h2>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl"}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx('transition-all duration-700', { 'translate-y-0 opacity-100': heroAnimated, 'translate-y-8 opacity-0': !heroAnimated })}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
