module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // {test: /\.css$/, loader: 'style-loader!css-loader'}
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
}