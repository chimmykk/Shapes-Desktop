const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/components/ChatWindow.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'chat.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    target: 'electron-renderer'
}; 