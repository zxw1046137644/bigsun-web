module.exports = {

    devServer: {
        hot: true,
        port: 8080,
        // proxy: 'http://121.199.14.154:8080',
        proxy: {//跨域设置

            '/api': {
                // target: 'http://localhost:8081',
                'target': 'http://121.199.14.154:8080',
                pathRewrite: {'^/api': ''}
            }
        },
    },
    lintOnSave: false//eslint是否启用
}
