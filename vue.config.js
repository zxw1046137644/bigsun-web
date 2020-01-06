module.exports = {

    devServer: {
        port: 8080,
        proxy: {//跨域设置

            '/api': {
                target: 'http://localhost:8081',
                // 'target':'http://121.199.14.154:8080',
                pathRewrite: {'^/api': ''}
            }
        },
        hot: true,
    },
    lintOnSave: false//eslint是否启用
}