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
                package: 'qcouldCosUploader'
            }
        },
        onRead: ({ data, cwd }) => ({
            prompts
        }),
        onWrite: async ({ api, prompts, answers }) => {
            const result = {}
            for (const prompt of prompts) {
                result[prompt.id] = await api.getAnswer(prompt.id, JSON.parse)
            }
            api.setData('qcloudCosUploader', result)
        }
    })
}
