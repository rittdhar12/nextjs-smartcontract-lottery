/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

{
    swcMinify: false; // it should be false by default
}
module.exports = nextConfig
