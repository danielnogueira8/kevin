/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Guides live at /guides/<slug>; the library that lists them is /resources.
    return [{ source: "/guides", destination: "/resources", permanent: false }];
  },
};

export default nextConfig;
