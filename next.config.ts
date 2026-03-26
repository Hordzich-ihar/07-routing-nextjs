import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Explicitly set the project root so Turbopack resolves files inside this
  // workspace even when the path contains spaces or non-ASCII characters.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
