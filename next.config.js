module.exports = {
  async rewrites() {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*'
      }
      /*{
        source: '/:path*',
        destination: '/products/:path*',
      },*/
    ];
  },
  webpack5: true
};
