const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [

    ],
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.tsx', '.ts', '...'],
    },
}