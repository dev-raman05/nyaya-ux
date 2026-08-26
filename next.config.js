/** @type {import('next').NextConfig} */

// Detect if we are building in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  // Extract the repository name from "owner/repo"
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
}

// GitHub Pages serves projects at /repo-name/ 
// So we must prefix all assets and routes with the repo name
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: repo ? `/${repo}` : '',
  assetPrefix: repo ? `/${repo}/` : '',
}

module.exports = nextConfig;
