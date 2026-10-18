// Main public address of the website. Change it here (or set NEXT_PUBLIC_SITE_URL)
// when the final domain is ready; robots.txt and sitemap.xml use it.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://codinghub-one.vercel.app").replace(/\/$/, "");
