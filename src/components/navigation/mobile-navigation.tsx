import {Button} from "@/components/ui/button.tsx";
import type {Link} from "@/components/navigation/types.ts";
import {clsx} from "clsx";

export type MobileNavigationProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  links: Link[]
}

export const MobileNavigation = ({ isMobileMenuOpen, setIsMobileMenuOpen, links }: MobileNavigationProps) => <div className={clsx('md:hidden bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 ease-in-out z-50', {'max-h-96 opacity-100': isMobileMenuOpen, 'max-h-0 opacity-0': !isMobileMenuOpen})}>
  <div className={"container p-4 space-y-4"}>
    {links.map(link => (
      <div key={link.name}>
        {link.href ? (<a href={link.href} className={"block py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>) : (<div className={"py-2"}>
          <span className={"text-neutral-700 dark:text-neutral-300 font-medium"}>{link.name}</span>
          {link.children && <div className={"ml-4 mt-2 space-y-2"}>
            {link.children.map(child => <a key={child.name} href={child.href} className={"block py-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"} onClick={() => setIsMobileMenuOpen(false)}>{child.name}</a>)}
          </div>}
        </div>)}
      </div>
    ))}
    <Button onClick={() => setIsMobileMenuOpen(false)} className={"w-full bg-gradient-to-br from-primary-500 to-primary-700"}>
      Acceder
    </Button>
  </div>
</div>