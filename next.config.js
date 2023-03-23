/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  i18n: {
    defaultLocale: "ru",
    localeDetection: false,
    locales: ["ru"],
    domains: [
      {
        domain: "guraevskiy.ru/",
        defaultLocale: "ru",
        locales: ["ru"],
      },
      // {
      //   domain: "guraevskiy.vercel.app/",
      //   defaultLocale: "ru",
      //   locales: ["ru"],
      // },
    ],
  },
};

module.exports = nextConfig;
