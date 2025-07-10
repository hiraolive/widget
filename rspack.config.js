/** @type {import('@rspack/core').Configuration} */
module.exports = {
  mode: "development", // change to "production" for build
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-typescript",
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
  },
};
