import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**", // Permite todas as imagens do domínio
      },
    ],
  },
};

export default nextConfig;
