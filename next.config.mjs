/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
            },
            {
                protocol: 'https',
                hostname: 'gamestack-backend.cda4.garage404.com',     
            },
            {
                protocol: 'https',
                hostname: 'media.rawg.io'
            }
        ]
    }
};

export default nextConfig;
