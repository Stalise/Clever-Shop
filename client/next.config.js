/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        formats: ['image/webp'],
    },
};

module.exports = nextConfig;
