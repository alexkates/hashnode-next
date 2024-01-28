const HASHNODE_ANALYTICS_BASE_URL = "https://hn-ping2.hashnode.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ping/data-event",
        destination: `${HASHNODE_ANALYTICS_BASE_URL}/api/data-event`,
      },
      {
        source: "/ping/view",
        destination: `${HASHNODE_ANALYTICS_BASE_URL}/api/view`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
};

module.exports = nextConfig;
