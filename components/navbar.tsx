"use client"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <header className="flex flex-col items-center justify-center mb-10">
      <div className="flex flex-col items-center gap-4">
        <span className="text-3xl font-bold text-black dark:text-white">
        M!$$|○N€X+ 
        </span>

        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex gap-6">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle({
                  className: "text-lg px-4 py-2",
                })}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={navigationMenuTriggerStyle({
                  className: "text-lg px-4 py-2",
                })}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Promotions */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/promotions"
                className={navigationMenuTriggerStyle({
                  className: "text-lg px-4 py-2",
                })}
              >
                Promotions
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Countries */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/countries"
                className={navigationMenuTriggerStyle({
                  className: "text-lg px-4 py-2",
                })}
              >
                Countries
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={navigationMenuTriggerStyle({
                  className: "text-lg px-4 py-2",
                })}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
