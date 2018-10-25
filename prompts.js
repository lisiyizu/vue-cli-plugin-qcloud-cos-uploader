module.exports = [
    {
        name: 'secretId',
        message: 'SecretId',
        type: 'input',
        default: '',
        description: '腾讯云 API 密钥 ID',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#secretid-secretkey'
    },
    {
        name: 'secretKey',
        message: 'SecretKey',
        type: 'input',
        default: '',
        description: '腾讯云 API 密钥',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#secretid-secretkey'
    },
    {
        name: 'bucket',
        message: 'Bucket',
        type: 'input',
        default: '',
        description: '存储桶名字',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#bucket'
    },
    {
        name: 'region',
        message: 'Region',
        type: 'input',
        default: '',
        description: '存储桶对应的地区名字',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#region'
    },
    {
        name: 'path',
        message: 'Path',
        type: 'input',
        default: 'dist',
        description: '上传文件夹路径',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#path'
    },
    {
        name: 'baseUrl',
        message: 'BaseUrl',
        type: 'input',
        default: '',
        description: '存储位置的 URL',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#baseurl'
    },
    {
        name: 'randomPrefix',
        message: 'RandomPrefix',
        type: 'confirm',
        default: true,
        description: '生成一个随机前缀拼接在文件路径最前面',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#randomprefix'
    },
    {
        name: 'qrCode',
        message: 'QRCode',
        type: 'input',
        default: '\\.html$',
        description: '正则字符串，匹配的 url 都会生成二维码打印到控制台',
        link: 'https://github.com/yuezhilunhui2009/cos-uploader#qrcode'
    }
]
