module.exports = {
    entry: __dirname+'/main.js',
    output: {
        path: __dirname+'/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        host: '192.168.2.115',
        // colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8888
    }
}