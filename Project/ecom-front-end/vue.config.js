const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                pathRewrite: { "^/api": "" }, // Add this if the backend doesn't expect '/api'
            },
        },
    },
};
