/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: "/:path*",
        source: "/:path*",
      },
      {
          source: "/mf2/_next/webpack-hmr",
        destination: `http://localhost:3001/mf2/_next/webpack-hmr`,
        locale: false,
      },
      {
          source: "/mf2/:path*",
        destination: 'http://localhost:3001' + "/mf2/:path*",
      },
    ];
  },
  transpilePackages: ["beacon-ui", "shared", "tailwind-config"],
};

export default nextConfig;
