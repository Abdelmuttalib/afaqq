import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import ThemeSelect from "@/components/theme-select";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemeProvider
        defaultTheme="system"
        attribute="class"
        themes={["light", "dark"]}
      >
        <TailwindIndicator />
        <Component {...pageProps} />
        <Analytics />
        <div className="fixed bottom-0 right-0 flex items-center justify-center gap-2 p-2 bg-background/70 backdrop-blur-lg backdrop-filter size-fit">
          <ThemeSelect />
        </div>
      </NextThemeProvider>
    </>
  );
}

export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 print:hidden flex h-6 w-6 items-center justify-center rounded bg-background p-3 font-mono text-xs font-semibold text-foreground">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}

export function UICustomizer() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 right-1 z-50 print:hidden flex items-center justify-center rounded-xl bg-gray-800 text-xs font-semibold text-white">
      <ThemeSelect />
    </div>
  );
}
