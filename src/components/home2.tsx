import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { siteConfig } from "@/config/site-config";
import { Logo } from "@/components/logo";
import { Container } from "@/components/layout/Container";
import ThemeSelect from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative pt-2 bg-inverse-background">
      <div className="bg-background rounded-t-[3rem] backdrop-blur backdrop-filter">
        <div className="absolute  left-0 right-0 z-10 bg-transparent text-foreground backdrop-blur backdrop-filter rounded-t-[3rem]">
          <Container>
            <div className="py-10 flex items-center justify-between">
              <div>
                <Logo className={cn("block", isOpen && "hidden")} />
                <Logo inverse className={cn("hidden", isOpen && "block")} />
              </div>
              <div>
                {/* <ThemeSelect /> */}
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "flex flex-col rounded-full",
                    isOpen && "hover:bg-zinc-800"
                  )}
                >
                  <span
                    aria-hidden="true"
                    id="line"
                    className={cn(
                      "h-0.5 w-5 rounded bg-foreground",
                      isOpen &&
                        "bg-inverse-foreground rotate-45 top-1/2 -translate-y-1/2 absolute"
                    )}
                  ></span>
                  <span
                    aria-hidden="true"
                    id="line2"
                    className={cn(
                      "h-0.5 w-5 rounded bg-foreground",
                      isOpen && "bg-inverse-foreground -rotate-45 top-1/2"
                    )}
                  ></span>
                </Button>
              </div>
            </div>
          </Container>
        </div>
        {/* <header className="sticky top-0 z-10 border-b bg-transparent text-foreground backdrop-blur backdrop-filter">
        <nav className="w-full">
          <Container>
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 md:gap-0">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="peer hidden"
              />
              <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                <a
                  href="#home"
                  aria-label="logo"
                  className="flex items-center space-x-1.5"
                >
                  <Logo />
                </a>

                <div className="relative flex max-h-10 items-center lg:hidden">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="peer relative -mr-6 p-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-foreground"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-foreground"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-background/95 backdrop-blur-2xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"
              ></div>
              <div
                className="invisible absolute left-0 top-full z-20 w-full origin-top translate-y-0 scale-95 flex-col flex-wrap justify-end gap-6 py-8 opacity-0 shadow-gray-600/10 transition-all duration-300
                          peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center
                          lg:gap-0 lg:border-none lg:bg-transparent lg:p-0
                          lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0"
              >
                <div className="w-full text-gray-500 dark:text-gray-300 lg:w-auto lg:pr-4 lg:pt-0">
                  <ul className="flex flex-col gap-2 font-medium tracking-normal lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8">
                    {siteConfig.navLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground lg:px-3 lg:py-2 text-xl lg:text-sm font-medium"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex w-full flex-col justify-start sm:w-auto lg:mt-0 lg:flex-row"></div>
              </div>
            </div>
          </Container>
        </nav>
      </header> */}
        <div
          className={cn(
            "bg-inverse-background w-full block transition-all duration-500",
            isOpen ? "max-h-[50rem] opacity-100 pt-24" : "max-h-[0px] opacity-0"
            // !isOpen && "hidden",
            // isOpen
            //   ? "translate-y-0 opacity-100"
            //   : "-translate-y-full opacity-0 hidden"
          )}
          style={{
            // "height: auto; transform: none; transform-origin: 50% 50% 0px;"
            height: "auto",
            transform: "none",
            transformOrigin: "50% 50% 0px",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col">
            <div className="flex h-full w-full border mt-10 border-x-0 border-muted-foreground/30">
              <Container className="w-full h-full">
                <ul className="w-full grid grid-cols-2 divide-x divide-muted-foreground/30">
                  {[siteConfig.navLinks[0], siteConfig.navLinks[1]].map(
                    (link) => (
                      <li
                        key={link.name}
                        className="w-full h-full flex relative group "
                      >
                        <a
                          href={link.href}
                          className="text-inverse-foreground lg:px-10 lg:py-16 text-5xl tracking-tight w-full h-full isolate"
                        >
                          {link.name}
                          <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </Container>
            </div>

            <div className="flex h-full w-full border-b border-muted-foreground/30 mb-10">
              <Container className="w-full h-full">
                <ul className="w-full grid grid-cols-2 divide-x divide-muted-foreground/30">
                  {[siteConfig.navLinks[2], siteConfig.navLinks[3]].map(
                    (link) => (
                      <li
                        key={link.name}
                        className="w-full h-full flex relative group"
                      >
                        <a
                          href={link.href}
                          className="text-inverse-foreground lg:px-10 lg:py-16 text-5xl tracking-tight w-full h-full isolate"
                        >
                          {link.name}

                          <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </Container>
            </div>
            {/* <ul className="w-full grid grid-cols-2 border divide-x divide-y divide-muted">
            {[siteConfig.navLinks[2], siteConfig.navLinks[3]].map((link) => (
              <li
                key={link.name}
                className="w-full h-full flex even:bg-red-300"
              >
                <a
                  href={link.href}
                  className="text-inverse-foreground lg:px-10 lg:py-8 text-4xl font-medium w-full h-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul> */}
          </div>
          <div>
            <Container>
              <div className="py-8 flex gap-12">
                <div>
                  <div className="flex flex-col gap-4">
                    <p className="text-inverse-foreground font-medium">
                      Resources
                    </p>
                    <p className="text-inverse-foreground">
                      1 Carlsberg Gate
                      <br />
                      1260, København, Denmark
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-4">
                    <p className="text-inverse-foreground font-medium">
                      Resources
                    </p>
                    <p className="text-inverse-foreground">
                      1 Carlsberg Gate
                      <br />
                      1260, København, Denmark
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <main
          style={{
            // "height: auto; transform: none; transform-origin: 50% 50% 0px;"
            height: "auto",
            transform: "none",
            transformOrigin: "50% 50% 0px",
          }}
          // className="flex flex-col items-center justify-center "
          className={cn(
            "flex flex-col items-center justify-center min-h-screen transition-all duration-500 rounded-t-[3rem]"
            // isOpen ? "pt-[300px]" : "pt-[50px]"
          )}
        >
          {children}
        </main>
        <footer className="flex flex-col items-center justify-center">
          <p>
            {siteConfig.footer.copyright} &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* <div className={`min-h-screen`}> */}
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      {/* </div> */}
    </Layout>
  );
}

function HomeSection({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className={cn("py-44", className)}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <HomeSection id="home">
      <Container className="relative isolate w-full h-screen flex items-center justify-center bg-background">
        {/* <GradientBackground /> */}
        {/* Use a gradient background instead of image for now */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" /> */}
        <div className="relative z-10 space-y-10">
          <Typography
            as="h1"
            variant="display-2xl/semibold"
            className="tracking-tighter"
          >
            Award-winning development studio based in Denmark.
          </Typography>

          <Typography
            as="p"
            variant="display-xs/regular"
            className="text-muted-foreground"
          >
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </Typography>

          <Button
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 0.4 }}
            size="lg"
            className="uppercase text-md h-12"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </HomeSection>
  );
}
