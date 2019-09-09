const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: path.join(SRC_DIR, "/app/index.js"),
    output: {
        path: DIST_DIR,
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: DIST_DIR,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 8192 }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { 
                        loader: "css-loader",
                        options: { 
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
