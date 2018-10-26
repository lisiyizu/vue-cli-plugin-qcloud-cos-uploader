const prompts = require('./prompts')

module.exports = api => {
    api.describeConfig({
        // 唯一的配置 ID
        id: 'yuezhilunhui.com.github',
        // 展示名称
        name: 'QCloud COS uploader',
        // 展示在名称下方的描述
        description: '腾讯云对象存储上传工具',
        // “更多信息 (More info)”链接
        link: 'https://github.com/yuezhilunhui2009/vue-cli-plugin-qcloud-cos-uploader',
        files: {
            qcloudCosUploader: {
                package: 'qcloudCosUploader'
            }
        },
        onRead: ({ data, cwd }) => prompts({ data, cwd }),
        onWrite: async ({ api, prompts }) => {
            const vueData = {}
            for (const prompt of prompts) {
                vueData[prompt.id] = await api.getAnswer(prompt.id)
            }

            api.setData('qcloudCosUploader', vueData)
        }
    })
}
