import React from "react";
import { Button } from "./ui/button";
import { GradientBackground } from "@/components/ui/gradient";
import { Typography } from "./ui/typography";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate w-full h-screen flex items-center justify-center bg-background"
    >
      {/* <GradientBackground /> */}
      {/* Use a gradient background instead of image for now */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" /> */}
      <div className="relative z-10 text-center px-4 space-y-10">
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
          We are a development studio working at the intersection of design and
          technology. It’s a really busy intersection though — a lot of our
          staff have been involved in hit and runs.
        </Typography>

        <Button
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.4 }}
          size="lg"
          className="uppercase text-md"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
