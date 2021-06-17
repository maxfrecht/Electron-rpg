
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const commonConfig = {
    name: 'dev',
    entry: {
        main: "./src/main.ts",
        gui: './src/renderer.ts'
    },
    output: {
        clean: false,
        filename: "[name].js", //contenthash est optionnel
        path: path.resolve(__dirname, "dist"), //chemin absolu
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/img/*",
                    to: "img/[name][ext]",
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            hash: false,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),

    },
    mode: "development",
    devtool: "inline-source-map", //ajout des fichiers de sourceMapping
    module: {
        rules: [
            //Configuration compilation TS
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg|webp|pdf)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            fsevents$: path.resolve(__dirname, `fsevents.js`),
        }
    },
    node: {
        __dirname: false
    },
};

module.exports = [
    Object.assign(
        {
            target: 'electron-main',
            entry: { main: './src/main.ts' }
        },
        commonConfig),
    Object.assign(
        {
            target: 'electron-renderer',
            entry: { gui: './src/renderer.ts' },
        },
        commonConfig)
]