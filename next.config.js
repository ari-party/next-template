import bundleAnalyzer from '@next/bundle-analyzer';

// https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer
const config = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})({});

export default config;
