/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // El linter del build abre un worker que Node 26 revienta ("Zone Allocation failed").
  // El lint sigue corriendo como paso propio: `npm run build` lo ejecuta antes de compilar.
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
