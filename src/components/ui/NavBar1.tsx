import { Book, Menu, Code, ShoppingCart, Shirt, Utensils, Sparkles, Waves, Eye, Share } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const subMenuItemsOne = [
  {
    title: "Visual Effects (VFX)",
    description: "From subtle enhancements to mind-blowing transformations, we make the impossible, visually possible",
    icon: <Sparkles className="size-5 shrink-0" />,
  },
  {
    title: "Motion Graphics",
    description: "Animate your story, elevate your brand, and captivate your audience with visuals that move",
    icon: <Waves className="size-5 shrink-0" />,
  },
  {
    title: "Product Visualization",
    description: "See your product shine, before it even exists, with stunning 3D visuals that sell",
    icon: <Eye className="size-5 shrink-0" />,
  },
  {
    title: "Brand Storytelling",
    description:
      "Craft a compelling narrative that connects with your audience, creating a lasting impression that turns viewers into fans",
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: "Social Media Content",
    description:
      "Stand out from the scroll with eye-catching visuals that stop thumbs and start conversations, optimized for every platform",
    icon: <Share className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: "E-Commerce",
    description: "Transform online shopping experiences with product visuals that entice, engage, and drive sales.",
    icon: <ShoppingCart className="size-5 shrink-0" />,
  },
  {
    title: "Tech",
    description: "Visualize the future of innovation with stunning animations and graphics that showcase groundbreaking technologies.",
    icon: <Code className="size-5 shrink-0" />,
  },
  {
    title: "Fashion",
    description: "Elevate your brand with captivating visuals that embody style, trend, and aspiration",
    icon: <Shirt className="size-5 shrink-0" />,
  },
  {
    title: "Food & Beverage",
    description: "Savor the flavor with mouthwatering visuals that make every dish and drink irresistible",
    icon: <Utensils className="size-5 shrink-0" />,
  },
];

const Navbar1 = () => {
  return (
    <section className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="hidden h-16 justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
            
              <img src="https://placehold.co/32" className="h-8 w-8" alt="BrainMuffin logo" />
              <a href="/" className="flex items-center gap-2 transition-colors hover:text-foreground/80">
                <span className="text-xl font-bold">BrainMuffin</span>
              </a>
            </div>
            <div className="flex items-center">
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <span>Services</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                                href="#"
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-foreground/60">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsTwo.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                                href="#"
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-foreground/60">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground/80",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="/portfolio"
              >
                Portfolio
              </a>
              <a
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground/80",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="/insights"
              >
                Insights
              </a>
              <a
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground/80",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#"
              >
                Our Story
              </a>
              <a
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground/80",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="transition-colors hover:text-foreground/80">Log in</Button>
              <Button className="transition-colors hover:bg-primary/90">Sign up</Button>
            </div>
          </div>
        </nav>
        <div className="block border-b py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://placehold.co/32" className="h-8 w-8" alt="BrainMuffin logo" />
              <span className="text-xl font-bold">BrainMuffin</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://placehold.co/32"
                        className="h-8 w-8"
                        alt="BrainMuffin logo"
                      />
                      <span className="text-xl font-bold">BrainMuffin</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <a href="/" className="font-semibold transition-colors hover:text-foreground/80">
                    Home
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-foreground/60">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        Work
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-foreground/60">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a href="/portfolio" className="font-semibold transition-colors hover:text-foreground/80">
                    Portfolio
                  </a>
                  <a href="/insights" className="font-semibold transition-colors hover:text-foreground/80">
                    Insights
                  </a>
                  <a href="#" className="font-semibold transition-colors hover:text-foreground/80">
                    Our Story
                  </a>
                  <a href="#" className="font-semibold transition-colors hover:text-foreground/80">
                    Contact
                  </a>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-foreground/60 transition-colors hover:text-foreground/80",
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-foreground/60 transition-colors hover:text-foreground/80",
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-foreground/60 transition-colors hover:text-foreground/80",
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-foreground/60 transition-colors hover:text-foreground/80",
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-foreground/60 transition-colors hover:text-foreground/80",
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-foreground/60 transition-colors hover:text-foreground/80",
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <Button variant="outline" className="w-full transition-colors hover:text-foreground/80">Log in</Button>
                    <Button className="w-full transition-colors hover:bg-primary/90">Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar1;
