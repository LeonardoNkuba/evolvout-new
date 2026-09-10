import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EvolvOut",
    short_name: "EvolvOut",
    description: "Tecnologia para fazer negócios evoluírem em Angola.",
    start_url: "/",
    display: "standalone",
    background_color: "#060010",
    theme_color: "#00ff88",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
