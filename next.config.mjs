/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backiee.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;

