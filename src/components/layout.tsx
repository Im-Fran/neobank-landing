import {type ReactNode, useEffect} from "react";
import {BotMessageSquare} from "lucide-react";
import {useState} from "react";
import {MobileNavigation} from "@/components/navigation/mobile-navigation.tsx";
import {DesktopNavigation} from "@/components/navigation/desktop-navigation.tsx";
import type {Link} from "@/components/navigation/types.ts";
import {clsx} from "clsx";
import {Footer} from "@/components/footer.tsx";

export type LayoutProps = {
  children: ReactNode;
}

const links: Link[] = [
  { name: "Inicio", href: "/" },
  { name: "Cuentas", children: [{ name: 'Cuenta Vista', href: '#' }, { name: 'Cuenta Corriente', href: '#' }, { name: 'Empresas', href: '#'}] },
  { name: "Emergencias", href: "/emergencias" },
]

const Layout = ({children}: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDidScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className={"flex flex-col font-sans min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 transition-colors duration-300"}>
    <header className={clsx("fixed top-0 w-full z-50 transition-all duration-300 py-0.5 md:py-5", { 'bg-neutral-900/90 backdrop-blur-md border-b border-neutral-700/50': didScroll, 'bg-transparent': !didScroll })}>
      <DesktopNavigation links={links} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>

      {/* Menú móvil */}
      <MobileNavigation isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} links={links}/>
    </header>
    <main>
      {children}

      {/* Botón flotante de IA */}
      <div className={"fixed bottom-4 right-4 z-50"}>
        <BotMessageSquare className={"w-12 h-12 md:w-14 md:h-14 p-2.5 bg-gradient-to-br from-primary-500 to-primary-700 text-neutral-50 duration-300 rounded-full"}/>
      </div>
    </main>
    <footer className={"bg-neutral-900 border-t border-neutral-700 text-txt-200"}>
      <Footer/>
    </footer>
  </div>
}

export default Layout;