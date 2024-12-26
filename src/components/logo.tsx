import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverse,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-3xl font-medium relative text-foreground",
        inverse && "text-inverse-foreground",
        className
      )}
    >
      afa
      <span
        className={cn(
          "relative text-foreground",
          inverse && "text-inverse-foreground"
        )}
      >
        {/* q */}q
        <span
          className={cn(
            "absolute top-2 right-[3px] bg-foreground w-1 h-1 rounded-md",
            inverse && "bg-inverse-foreground"
          )}
        ></span>
        <span
          className={cn(
            "absolute top-2 right-2.5 bg-foreground w-1 h-1 rounded-md",
            inverse && "bg-inverse-foreground"
          )}
        ></span>
      </span>
      {/* <span className="absolute top-0 right-0 bg-white w-4 h-4 rounded-full"></span>
    <span className="absolute top-0 right-6 bg-white w-4 h-4 rounded-full"></span> */}
      {/* <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-green-500 opacity-40 blur-3xl -z-10"></span> */}
    </p>
  );
}

export function LargeLogo({ className }: { className?: string }) {
  return (
    <p className={cn("text-8xl font-light relative", className)}>
      afa
      <span className="relative text-white">
        {/* q */}q
        <span className="absolute top-7 right-3 bg-white w-[13px] h-[13px] rounded-md"></span>
        <span className="absolute top-7 right-8 bg-white w-[13px] h-[13px] rounded-md"></span>
      </span>
      {/* <span className="absolute top-0 right-0 bg-white w-4 h-4 rounded-full"></span>
    <span className="absolute top-0 right-6 bg-white w-4 h-4 rounded-full"></span> */}
      {/* <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-green-500 opacity-40 blur-3xl -z-10"></span> */}
    </p>
  );
}
