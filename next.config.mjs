// NEXT_EXPORT=1 builds a fully static site into ./out (used for Firebase Hosting).
// Without it the normal build is used (Vercel).
const isExport = process.env.NEXT_EXPORT === "1";

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  ...(isExport ? { output: "export" } : {}),
  // Photos are already resized WebP files, so serve them straight from the CDN
  // instead of re-processing them on the first request.
  images: { unoptimized: true },
  // Custom headers are not supported by static export (firebase.json sets them there).
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/photos/:path*",
              headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
            },
          ];
        },
      }),
};
