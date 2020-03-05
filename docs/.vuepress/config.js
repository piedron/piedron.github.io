const linkConfig = require('../config/linkConfig.js');
const socialConfig = require('../config/socialConfig');
const footerConfig = require('../config/footerConfig');
const itypedConfig = require('../config/itypedConfig');
const nameplateConfig = require('../config/nameplateConfig');
module.exports = {
    theme: 'yur',
    //小图标
    head: [
        ['script', {src: '//at.alicdn.com/t/font_xxx.js'}]
    ],
    themeConfig: {
        lang: 'zh-CN',
        logo: 'https://www.piedron.cn/images/avatar.jpg',
        author: '谢梓聪',
        authorLink: 'https://www.piedron.cn',
        //封面图
        //banner: '/banner.png',
        locales: {
            title: '谢梓聪',
            description: '便纵有，千种风情，更与何人说。'
        },
        navs: [
            {text: '语言的美', link: '/coding/'},
            {text: '算法的懿', link: '/algorithm/'},
			{text: '学习&生活', link: '/life/'},
			{text: '工具集', link: '/utils/'},
			{text: '照片墙', link: '/gallery/'},
			{text: '其他', link: '/others/'},
        ],
        //按钮组
        buttons: [
            {text: '来篇文章', link: '/posts/', type: 'primary'},
            {text: '了解那个他', link: '/about.html', type: 'default'}
        ],
        timeline: true,
        links: linkConfig,
        about: true,
        avatar: 'https://www.piedron.cn/images/avatar.jpg',
        //添加社交
        social: socialConfig,
        //页脚
        footer: footerConfig,
        //打字特效
        ityped: itypedConfig,
        //标签数量
        tagSize: 100, // 默认：100
        //标示牌
        nameplate: nameplateConfig,
        //随机封面
        post: {
            // cover: [
            //     '/post/1.jpg',
            //     '/post/2.jpg',
            //     'https://xxx.com/3.jpg',
            //     'https://xxx.com/4.jpg'
            // ],
            //分页
            pageSize: 12,
            pageSizeOptions: ['12', '24', '48', '96']
        },
        //打赏
        reward: [
            'https://www.piedron.cn/images/wechat.jpg',
            'https://www.piedron.cn/images/alipay.jpg'
        ],
        //落下帷幕
        curtain: {
            tip: '您的到来让小站蓬荜生辉，请稍待片刻，正在全力加载中😍😍😍',
            textShadow: '#e91e63'
        },

        //客服聊天
        //crisp: 'xxx',

        //添加评论
        //discuss: 'Vssue', //详情查看yur文档  https://imwiki.cn/zh/theme/vuepress-theme-yur.html#vssue

        //百度统计
        // baiDu: {
        //     tongJi: '',
        //     autoPush: true
        // }
        //气泡特效
        post: {
        	bubbles: {
				color: 'random',
				radius: 15,
				density: 0.3,
				clearOffset: 0.2
			}
        },
        //夜间模式
        dark: true,
        
        //cdn
        //cdn: 'https://cdn.jsdelivr.net/gh/cnguu/cnguu.github.io@master/'
    }
};