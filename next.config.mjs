/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backiee.com',
            port: '',
            pathname: 'static/wallpapers/1000x563/403278.jpg',
          },
        ],
      },
};

export default nextConfig;

