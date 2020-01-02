module.exports = {

    devServer: {//跨域设置
        proxy: 'http://121.199.14.154:8080/',
        hot:true,
    },
    lintOnSave: false//eslint是否启用
}