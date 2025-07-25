import type {ReactNode} from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu.tsx";

export type NavigationItemProps = {
  children?: ReactNode;
}

export const NavigationItem = ({children}: NavigationItemProps) =>
  <span className={"flex items-center gap-2 p-2 rounded transition-colors duration-300 text-txt-500 dark:text-txt-50 hover:text-txt-700 dark:hover:text-txt-200"}>{children}</span>;



export type DropdownNavigationItemProps = {
  children?: ReactNode;
  href?: string;
}
export const DropdownNavigationItem = ({children, href}: DropdownNavigationItemProps) => <DropdownMenuItem className={"bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"}>
  {href ? <a href={href}><NavigationItem>{children}</NavigationItem></a> : <NavigationItem>{children}</NavigationItem>}
</DropdownMenuItem>
