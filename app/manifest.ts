import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CashCalcs - Financial Calculators",
    short_name: "CashCalcs",
    description: "Free financial calculators. Budget, savings, debt payoff, FIRE, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#10b981",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
