/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.startpage.com',
          },
        ],
      },
};

export default nextConfig;
