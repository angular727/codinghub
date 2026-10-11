/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  // Photos are already resized WebP files, so serve them straight from the CDN
  // instead of re-processing them on the first request.
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/photos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};
