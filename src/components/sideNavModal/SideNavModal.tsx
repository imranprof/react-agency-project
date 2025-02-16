'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { FaBars } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import navigation from "@/config/navigation.json";
import clsx from "clsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area"



const SideNavModal = () => {

  const SideMenuData = navigation.header

  return (
    <>
      <Drawer direction="left" >
        <DrawerTrigger asChild>
          <button className="lg:hidden">
            <FaBars />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full border-none">
          <DrawerTitle className="hidden">Side Navigation</DrawerTitle>
          <DrawerDescription className="hidden">Navigate through the site menu</DrawerDescription>

          <div className="offcanvas-3__area bg-black w-full h-full px-[50px] pt-[50px] pb-[100px]">

            <div className="offcanvas-3__inner flex flex-col sm:grid sm:grid-cols-[260px_1fr] md:grid-cols-[340px_1fr] h-full">
              <div className="offcanvas-3__meta-wrapper flex flex-col gap-[50px] justify-between">
                <div className="pb-[50px] sm:pb-0">
                  <DrawerClose asChild>
                    <Button className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full border border-[#333337] bg-black-2 relative shadow-sm">
                      <span className="pos-center h-[1px] w-[20px] sm:w-[26px] transform -translate-x-1/2 rotate-45 bg-white inline-block"></span>
                      <span className="pos-center h-[1px] w-[20px] sm:w-[26px] transform -translate-x-1/2 -rotate-45 bg-white inline-block"></span>
                    </Button>
                  </DrawerClose>
                </div>
                <div className="hidden sm:block">
                  <div className="offcanvas-3__meta top-0 relative mb-[60px] sm:mb-[90px] md:mb-[100px] lg:mb-[145px] opacity-100  uppercase text-white ">
                    <ul>
                      <li className="mb-[19px]"><a href="tel:+2-352698102" className="underline"><u>+2-352 698 102</u></a></li>
                      <li className="text-[18px] leading-[20px] mb-[19px]"><a href="mailto:contact@me.com">contact@me.com</a></li>
                      <li><a href="">27 Division St, <br />
                        New York, NY 10002, USA</a></li>
                    </ul>
                  </div>
                  <div className="offcanvas-3__social block">
                    <p className=" text-[18px] font-semibold leading-[20px] text-white uppercase mb-[10px] ">Follow Me</p>
                    <div className="offcanvas-3__social-links flex gap-[20px] text-[18px] text-white">
                      <a href=""><FaFacebookF /> </a>
                      <a href=""><FaXTwitter /></a>
                      <a href=""><FaDribbble /></a>
                      <a href=""><FaInstagram /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offcanvas-3__menu-wrapper flex items-end overflow-y-hidden">

                <nav className="nav-menu offcanvas-3__menu relative w-full h-full overflow-x-hidden text-secondary-2 md:text-black-2">
                  <ScrollArea className="h-full scrollbar-none">
                    <Accordion type="single" collapsible className="w-full">
                      <div className="absolute left-[8px] top-0 w-[1px] h-full bg-[#333337] hidden sm:block"></div>
                      {SideMenuData.map((menuItem, i) => (
                        menuItem.hasChildren ? (
                          <AccordionItem value={`item-${menuItem.name}`} key={menuItem.id} className="!border-0 relative">
                            <AccordionTrigger className={clsx(" text-[2.5vh] md:text-[6vh] lg:text-[7vh] xl:text-[8vh] hover:text-white sm:pl-[58px] !leading-[0.9]", (i !== SideMenuData.length - 1) && "mb-5 md:mb-[26px]")}>

                              {menuItem.name}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col pl-[20px]">
                              {menuItem.children.map((submenu, k) => (
                                submenu.hasChildren ? (
                                  <Accordion type="single" collapsible key={`id-${submenu.id}`} className="sm:pl-[58px]">
                                    <AccordionItem value={`submenuChild-${submenu.id}`} className="border-0">
                                      <AccordionTrigger className={clsx("text-[2.2vh] md:text-[5.3vh] lg:text-[6.2vh] hover:text-white  mb-[20px] md:mb-[26px]",)}>{submenu.name}</AccordionTrigger>
                                      {
                                        submenu.children?.map((submenuChild, j) => (
                                          <AccordionContent className="flex flex-col" key={submenuChild.id}>
                                            <DrawerClose asChild >
                                              <Link href={submenuChild.path} className="text-[1.9vh] md:text-[4.58vh] lg:text-[5.36vh] hover:text-white pl-5 mb-[20px] md:mb-[26px]">
                                                {submenuChild.name}
                                              </Link>
                                            </DrawerClose>
                                          </AccordionContent>
                                        ))
                                      }
                                    </AccordionItem>
                                  </Accordion>
                                ) : (
                                  <DrawerClose asChild key={submenu.id}>
                                    <Link href={submenu.path} className="text-[2.2vh] md:text-[5.3vh] lg:text-[6.2vh] mb-[20px] md:mb-[26px] hover:text-white sm:pl-[58px]">
                                      {submenu.name}
                                    </Link>
                                  </DrawerClose>
                                )
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <DrawerClose asChild key={menuItem.id}>
                            <Link href={menuItem.path} className={clsx(" text-[2.5vh] md:text-[6vh] lg:text-[7vh] xl:text-[8vh] inline-block hover:text-white sm:pl-[58px] !leading-[0.9]", (i !== SideMenuData.length - 1) && "mb-5 md:mb-[26px]")}>
                              {menuItem.name}
                            </Link>
                          </DrawerClose>

                        )
                      ))
                      }
                    </Accordion>
                  </ScrollArea>
                </nav>
              </div>
            </div>
          </div >
        </DrawerContent >
      </Drawer >
    </>
  );
};

export default SideNavModal
