/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
            name: '[name].[hash].[ext]',
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;