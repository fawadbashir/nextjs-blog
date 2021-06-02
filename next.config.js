module.exports = {
  images: {
    // loader: 'cloudinary',
    // path: 'res.cloudinary.com/dljowttfv',
    domains: [
      'chhatt.s3.ap-south-1.amazonaws.com',
      'upload.wikimedia.org',
      // 'cloudinary.com',
    ],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // console.log(dev)
    // console.log(dir)
    // console.log(outDir)
    // console.log(outDir)

    return {
      '/': { page: '/' },
      '/lists/': { page: '/lists' },
      // '/lists/[id]': { page: '/lists/[id]' },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/lists/[id].js': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}
