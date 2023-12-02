/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "maquuiezipsgffzbhiiu.supabase.co" },
    ],
  },
};

module.exports = nextConfig;
