import { siteConfig } from "@/config/site-config";
import { Logo } from "@/components/logo";
import { MiniContainer } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GradientBackground } from "@/components/ui/gradient";

function Layout({ children }: { children: React.ReactNode }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="sticky top-0 z-10 border-b bg-transparent text-foreground backdrop-blur-xl backdrop-filter">
        <nav className="w-full">
          <MiniContainer>
            <div className="relative flex items-center justify-between gap-6 py-4 md:gap-0">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="peer hidden"
              />
              <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                <a
                  href="/"
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

              <div className="invisible absolute left-0 top-full z-20 w-full origin-top translate-y-0 scale-95 flex-col flex-wrap justify-end gap-6 py-8 opacity-0 shadow-gray-600/10 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 dark:shadow-none lg:visible lg:relative lg:flex lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0">
                <div className="w-full text-gray-500 dark:text-gray-300 lg:w-auto lg:pr-4 lg:pt-0">
                  <ul className="flex flex-col gap-2 font-medium tracking-normal lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-2 uppercase">
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

                {/* <div className="mt-8 lg:border-l-2 lg:pl-4 lg:mt-0 flex w-full flex-col justify-start sm:w-auto lg:flex-row">
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="sm"
                    className="uppercase"
                  >
                    Reach out
                    <ArrowRight className="inline-block -rotate-45" />
                  </Button>
                </div> */}
              </div>

              {/*  */}
              <div
                aria-hidden="true"
                className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-background/95 backdrop-blur-2xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"
              ></div>
            </div>
          </MiniContainer>
        </nav>
      </header>
      {/* <div className={cn("bg-inverse-background w-full block")}>
        <div className="flex flex-col">
          <div className="flex h-full w-full border mt-10 border-x-0 border-muted-foreground/30">
            <MiniContainer className="w-full h-full">
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
            </MiniContainer>
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
        </div>
        <div>
          <MiniContainer>
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
          </MiniContainer>
        </div>
      </div> */}
      <main
        // className="flex flex-col items-center justify-center "
        className={cn("flex flex-col items-center justify-center min-h-screen")}
      >
        {children}
      </main>
      <footer className="flex flex-col items-center justify-center pt-56 pb-8">
        <p className="text-sm text-muted-foreground">
          {siteConfig.footer.copyright}
        </p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      {/* <Portfolio /> */}
    </Layout>
  );
}

// function HomeSection({
//   id,
//   className,
//   children,
// }: {
//   id: string;
//   className?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div id={id} className={cn("py-44", className)}>
//       {children}
//     </div>
//   );
// }

function Hero() {
  return (
    <section id="home" className="py-24">
      <MiniContainer className="relative isolate w-full flex items-center justify-center bg-background">
        <GradientBackground />
        {/* Use a gradient background instead of image for now */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" /> */}
        <div className="relative z-10 space-y-10">
          <Typography
            as="h1"
            variant="display-xl/semibold"
            className="tracking-tighter"
          >
            Award-winning development agency.
          </Typography>

          <Typography
            as="p"
            variant="display-xs/regular"
            className="text-foreground"
          >
            We are a development agency working at the intersection of design
            and technology.
            {/* We are a development agency working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs. */}
          </Typography>

          {/* <Button size="lg" className="uppercase text-md h-12">
            Get Started
          </Button> */}
        </div>
      </MiniContainer>
    </section>
  );
}

import React from "react";
import {
  HiOutlineCode,
  HiOutlinePencil,
  HiOutlineCamera,
  HiOutlineChartBar,
} from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineCode className="size-6" />,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies and best practices.",
  },
  {
    icon: <HiOutlinePencil className="size-6" />,
    title: "Brand Design",
    description:
      "Crafting unique brand identities that leave lasting impressions.",
  },
  {
    icon: <HiOutlineCamera className="size-6" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your digital presence.",
  },
  {
    icon: <HiOutlineChartBar className="size-6" />,
    title: "Data Analysis",
    description: "Analyzing data to make informed decisions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <MiniContainer className="space-y-10">
        <SectionTitle
          title="Elevating brands through innovative solutions"
          labelTag={{ id: "services", label: "Services" }}
          // subtitle="Elevating brands through innovative solutions"
        />

        <div className="grid md:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              // bg-[#0e0e0e]
              className="py-8 px-10 rounded-xl bg-zinc-100 dark:bg-[#141414] transition-colors space-y-4"
            >
              <div className="text-emerald-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </MiniContainer>
    </section>
  );
}

const projects = [
  {
    title: "Modern E-commerce",
    category: "Web Development",
    bgColor: "bg-gray-800",
  },
  {
    title: "Brand Identity",
    category: "Design",
    bgColor: "bg-gray-900",
  },
  {
    title: "Digital Campaign",
    category: "Marketing",
    bgColor: "bg-black",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 w-full">
      <MiniContainer>
        <SectionTitle
          title="Showcasing our finest projects"
          subtitle=""
          labelTag={{ id: "work", label: "Work" }}
        />

        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project, index) => {
            const { title, category, bgColor } = project;
            return (
              <div className="group relative overflow-hidden rounded-lg aspect-video">
                <div className={`w-full h-full ${bgColor}`} />
                <div className="absolute inset-0 bg-[#141414] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-300">{category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MiniContainer>
    </section>
  );
}

// export function Contact() {
//   return (
//     <section id="contact" className="py-20">
//       <MiniContainer className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <SectionTitle
//           title="Get in Touch"
//           subtitle="Let's create something amazing together"
//           labelTag={{ id: "contact", label: "Contact" }}
//         />

//         <div className="lg:col-span-2">
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
//                 placeholder="your@email.com"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
//                 placeholder="Your message"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gold-400 hover:text-white transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </MiniContainer>
//     </section>
//   );
// }
