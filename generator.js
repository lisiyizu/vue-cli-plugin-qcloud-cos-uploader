module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    api.extendPackage({
        scripts: {
            preview: 'vue-cli-service preview'
        }
    })
}
