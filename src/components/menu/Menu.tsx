import * as React from "react";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import navigation from "@/config/navigation.json";
import Link from "next/link";
import clsx from "clsx";
import LeftSubmenu from "../elements/leftSubmenu/LeftSubmenu";
import { ChevronRight } from "lucide-react";


const menuData = navigation.header


const Menu = () => {

    const [hoveredChildMenuId, setHoveredChildMenuId] = useState<number | null>(null);
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleMouseEnter = (id: number) => {
        clearTimeout(timeoutId);
        setHoveredChildMenuId(id);
    };


    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setHoveredChildMenuId(null);
        }, 200);
    };


    return (
        <NavigationMenu>
            <NavigationMenuList >
                {
                    menuData.map((menu) => (
                        <NavigationMenuItem key={menu.id} className="">
                            {
                                menu.hasChildren ? (
                                    <>
                                        <NavigationMenuTrigger className="bg-inherit submenu-trigger text-[16px] leading-[1] px-[15px] py-[37px] h-full uppercase font-normal">{menu.name}</NavigationMenuTrigger>
                                        {menu.children && menu.children.length && (
                                            <NavigationMenuContent className="border-0 bg-[#232529] transition-none">
                                                <NavigationMenuList className={clsx('py-[18px] px-0  w-[240px] gap-4 grid grid-cols-1',
                                                    menu.id === 1 && 'w-[500px] grid grid-cols-2'
                                                )}>
                                                    {menu.children.map((childMenu, j) => (
                                                        <NavigationMenuItem key={childMenu.id} className="px-[25px] relative  ease-in transition-all duration-300 transform hover:scale-105" onMouseEnter={() => handleMouseEnter(childMenu.id)}
                                                            onMouseLeave={handleMouseLeave}>
                                                            <NavigationMenuLink asChild className="px-0 relative "  >
                                                                <>
                                                                    <Link className="text-[#999]  px-0  flex justify-between hover:text-white"
                                                                        href={childMenu.path}
                                                                    >
                                                                        <>
                                                                            {childMenu.name}
                                                                            {childMenu.hasChildren && <ChevronRight className="text-[#999] hover:text-white" />}
                                                                        </>
                                                                    </Link>
                                                                    {childMenu.hasChildren && hoveredChildMenuId === childMenu.id && <LeftSubmenu submenuData={childMenu} />}
                                                                </>
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                    ))}

                                                </NavigationMenuList>
                                            </NavigationMenuContent>
                                        )}
                                    </>
                                ) : (
                                    <NavigationMenuLink asChild className="text-[16px] leading-[1] px-[15px] py-[37px] h-full uppercase">
                                        <Link
                                            href={menu.path}
                                        >
                                            {menu.name}
                                        </Link>
                                    </NavigationMenuLink>
                                )
                            }
                        </NavigationMenuItem>

                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>

    );
};

export default Menu;
