const path = require('path');

module.exports = {
  entry: {
    main:  './js/index.js',
    vendor: './js/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //     'html-loader',
      //   ],
      // },
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/,
      //   // type: 'asset/resource',
      //   use: [{
      //     loader: "file-loader",
      //     options: {
      //       name: "[name][contenthash].[ext]",
      //       outputPath:"imgs",
      //     }  
      //   }]
      // }
    ]
  },
};