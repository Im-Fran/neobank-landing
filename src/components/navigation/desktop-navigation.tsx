import type {Link} from "@/components/navigation/types.ts";
import Logo from "@/assets/logo/tenpo.svg";
import LogoNegative from "@/assets/logo/tenpo-negative.svg";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";
import {DropdownNavigationItem, NavigationItem} from "@/components/navigation/navigation-item.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Menu, X} from "lucide-react";

export type DesktopNavigationProps = {
  links: Link[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const DesktopNavigation = ({ links, isMobileMenuOpen, setIsMobileMenuOpen }: DesktopNavigationProps) => {

  return <div className={"flex items-center justify-between container px-2.5 md:p-0 mx-0 md:mx-auto py-5 transition-all duration-300"}>
    <picture className={"h-8"}>
      <source srcSet={Logo} className={"h-8"} media={"(prefers-color-scheme: dark)"}/>
      <img src={LogoNegative} alt={"Tenpo Isologo"} className={"h-8"}/>
    </picture>

    {/* Navegación de escritorio */}
    <section className={"items-center gap-2 hidden md:flex"}>
      {links.map(link => (
        (link.children?.length || 0) > 0 ? <DropdownMenu key={link.name}>
          <DropdownMenuTrigger>
            <NavigationItem>{link.name}</NavigationItem>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={"bg-neutral-100 dark:bg-neutral-800 border-0"} align={"start"}>
            {link.children?.map(child => (
              <DropdownNavigationItem key={child.name} href={child.href}>{child.name}</DropdownNavigationItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> : <NavigationItem key={link.href}>
          {link.href ? <a href={link.href}>{link.name}</a> : link.name}
        </NavigationItem>
      ))}
    </section>

    {/* Botón de escritorio */}
    <section className={"items-center gap-2 hidden md:flex"}>
      <Button onClick={() => {}} className={"flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 cursor-pointer"}>
        Acceder
      </Button>
    </section>

    {/* Botón hamburguesa móvil */}
    <button className={"md:hidden p-2 z-50"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={"Alternar menu"}>
      {isMobileMenuOpen ? <X className={"w-6 h-6 text-neutral-700 dark:text-neutral-300"} /> : <Menu className={"w-6 h-6 text-neutral-700 dark:text-neutral-300"} />}
    </button>
  </div>
}