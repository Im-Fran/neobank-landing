import { useEffect, useState } from "react";
import { clsx } from "clsx";

export const Footer = () => {
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

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const footerSections = [
    {
      title: "Producto",
      links: ["Características", "Seguridad", "Precios", "API"]
    },
    {
      title: "Empresa",
      links: ["Sobre Nosotros", "Carreras", "Blog", "Contacto"]
    },
    {
      title: "Legal",
      links: ["Privacidad", "Términos", "Cookies", "Licencias"]
    }
  ];

  return (
    <footer id="footer" className="bg-neutral-900 border-t border-neutral-800 text-txt-50 py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className={clsx("lg:col-span-2 transition-all duration-700", { 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible })}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              NeoBank
            </h3>
            <p className="text-txt-300 mb-6 max-w-md leading-relaxed">
              El futuro de la banca digital, diseñado para la nueva generación de usuarios financieros.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={clsx("transition-all duration-700", { 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible })}
              style={{ transitionDelay: `${(sectionIndex + 1) * 200}ms` }}
            >
              <h4 className="font-semibold text-txt-0 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-txt-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={clsx("mt-12 pt-8 border-t border-neutral-800 text-center transition-all duration-700 delay-1000", { 'translate-y-0 opacity-100': isVisible, 'translate-y-4 opacity-0': !isVisible })}>
          <p className="text-txt-400 text-sm">
            © {new Date().getFullYear()} NeoBank. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
