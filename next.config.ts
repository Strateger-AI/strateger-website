import type { NextConfig } from "next";

// Routes that will be redirected

const redirectMappings = [
  { from: "/web-development", to: "/services" },
  { from: "/about", to: "/about-us" },
  { from: "/introduction", to: "/about-us" },
  { from: "/generative-ai", to: "/services/deep-learning" },
  { from: "/leadership", to: "/about-us" },
  { from: "/contact-us", to: "/contact" },
  { from: "/game-development", to: "/services/game-development" },
  { from: "/staff-augmentation", to: "/services" },
  { from: "/custom-software-development", to: "/services" },
];

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return redirectMappings.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;
