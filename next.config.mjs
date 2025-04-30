/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Uncomment and set these if deploying to a subdirectory on GitHub Pages
  // For example, if your repo is github.com/user/my-repo, and you want to deploy
  // to gh-pages, the URL will be https://user.github.io/my-repo
  // basePath: '/my-repo',
  // assetPrefix: '/my-repo/',

  // Required for static export with dynamic routes:
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 