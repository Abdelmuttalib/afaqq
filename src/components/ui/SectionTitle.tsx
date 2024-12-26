import React from "react";
import { Typography } from "./typography";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  labelTag?: {
    id: string;
    label: string;
  };
}

export function SectionTitle({
  title,
  subtitle,
  className = "",
  labelTag,
}: SectionTitleProps) {
  return (
    <div className={`${className}`}>
      {labelTag && <SectionLabelTag id={labelTag.id} label={labelTag.label} />}
      <Typography
        as="h2"
        variant="display-md/medium"
        className="text-foreground tracking-tight max-w-lg"
      >
        {title}
      </Typography>
      {subtitle && (
        <p className="text-xl text-muted-foreground mt-3">{subtitle}</p>
      )}

      {/* <p className="text-xl text-gray-600">{subtitle}</p> */}
    </div>
  );
}

export function SectionLabelTag({ id, label }: { id: string; label: string }) {
  return (
    <p
      id={id}
      className="inline-flex items-center rounded-full bg-primary-100/20 px-1.5 py-0.5 text-primary-600 ring-1 ring-inset ring-primary-600 text-sm md:text-base font-medium mb-2 md:px-2 md:py-1"
    >
      <span className="mx-1.5 font-medium">{label}</span>
    </p>
  );
}
