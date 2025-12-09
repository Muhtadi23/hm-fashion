/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your API URL (you already had this – keep it!)
    env: {
        NEXT_PUBLIC_API_URL: "https://test.skyit.com.bd",
    },

    // THIS IS WHAT FIXES THE IMAGE ERROR
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "test.skyit.com.bd",
                // optional: restrict to only category images
                // pathname: "/images/category/**",
            },
            // If you ever switch to production domain, just add it here:
            // {
            //   protocol: "https",
            //   hostname: "skyit.com.bd",
            // },
        ],
    },
};

export default nextConfig;