module.exports = function ({ data, cwd }) {
    return {
        prompts: [
            {
                group: '腾讯云授权',
                name: 'secretId',
                message: 'SecretId',
                type: 'input',
                default: '',
                value: data.qcloudCosUploader.secretId,
                description: '腾讯云 API 密钥 ID',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#secretid-secretkey'
            },
            {
                group: '腾讯云授权',
                name: 'secretKey',
                message: 'SecretKey',
                type: 'input',
                default: '',
                value: data.qcloudCosUploader.secretKey,
                description: '腾讯云 API 密钥',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#secretid-secretkey'
            },
            {
                group: '存储配置',
                name: 'bucket',
                message: 'Bucket',
                type: 'input',
                default: '',
                value: data.qcloudCosUploader.bucket,
                description: '存储桶名字',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#bucket'
            },
            {
                group: '存储配置',
                name: 'region',
                message: 'Region',
                type: 'input',
                default: '',
                value: data.qcloudCosUploader.region,
                description: '存储桶对应的地区名字',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#region'
            },
            {
                group: '本地上传配置',
                name: 'path',
                message: 'Path',
                type: 'input',
                default: 'dist',
                value: data.qcloudCosUploader.path,
                description: '上传文件夹路径',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#path'
            },
            {
                group: '预览配置',
                name: 'baseUrl',
                message: 'BaseUrl',
                type: 'input',
                default: '',
                value: data.qcloudCosUploader.baseUrl,
                description: '存储位置的 URL，用于拼接出正确的页面链接',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#baseurl'
            },
            {
                group: '存储配置',
                name: 'randomPrefix',
                message: 'RandomPrefix',
                type: 'confirm',
                default: true,
                value: data.qcloudCosUploader.randomPrefix,
                description: '生成一个随机前缀拼接在文件路径最前面',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#randomprefix'
            },
            {
                group: '预览配置',
                name: 'qrCode',
                message: 'QRCode',
                type: 'input',
                default: '\\.html$',
                value: data.qcloudCosUploader.qrCode,
                description: '正则字符串，匹配的 url 都会生成二维码打印到控制台',
                link: 'https://github.com/yuezhilunhui2009/cos-uploader#qrcode'
            }
        ]
    }
}
