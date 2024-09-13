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
        {
          protocol: 'https',
          hostname: 'media4.giphy.com',
          port: '',
          pathname: '/**',
        },
      ],
      },
};

export default nextConfig;

