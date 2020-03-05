---
title: hexo-next优化过程
tags: 
	- hexo
created: 2020/2/19
---

由于hexo-next从接触开始到配置到现在这个程度，有很多小步骤和小错误及小细节，因此写博客太过于复杂，我选择了直接转载一些我用过的和将来还学要用的，部分配置过程如下，以下用原文章标题加链接显示，该篇文章会持续更新<!-- more -->

------

> ### hexo-next添加百度seo使得博客推广
>
> 转载自 [hexo的SEO优化百度录入](<https://www.jianshu.com/p/77d7aaedb0eb>)

------

> ### hexo-next文章置顶以及高版本文章的缩排(excerpt)
>
> 转载自 [Hexo-Next 主题美化](<https://geek-space.cn/post/next.html#more>)
>
> 其中缩排，因为hexo-next版本逐渐变高时在主题配置文件中去掉了excerpt的选项，因此官方给了其他几种方法，推荐的是以下这种，就是在博客中添加
>
> ```html
> <!-- more  --> 
> ```
>
> 这一条语句来实现缩排，也就是你需要在每篇博客中添加该语句，则hexo会自动实现缩排，然后你还需要在主题配置文件中把那个readmore那个buttom改为true，这样就能出现阅读更多的按钮了。

------

> ### hexo-next添加鼠标点击特效（社会主义核心价值观和爱心）
>
> 转载自 [网页点击特效](<https://geek-space.cn/post/htmllove.html#more>)

------

> ### hexo-next标题根据是否在当前窗口改变文字
>
> 转载自 [标题动态切换](<https://geek-space.cn/post/title-change.html#more>)

------

> ### hexo-next添加cdn加速访问
>
> 转载自 [Hexo 开启 CDN 加速访问](<https://geek-space.cn/post/hexo-qiniu.html#more>)

------

> ### hexo-next元素微调自定义
>
> 在一些文件指定风格文件后，可能存在局部不美观问题，可自行根据火狐或谷歌浏览器的调试器进行自行选择修改，然后到相应的文件进行style内容修改
>
> 转载自 [基于Hexo搭建个人博客——进阶篇(从入门到入土)](<https://yangbingdong.com/2017/build-blog-hexo-advanced/>)

------

> ### hexo-next 在侧边栏下加入会旋转的魔方并能到顶部
>
> 转载自 [Hexo NexT主题美化2.0](<https://www.liaofuzhan.com/posts/2114475547.html>)

------

> ### hexo-next侧边栏最顶部内标题和副标题及其所在框的样式修改
>
> 转载自 [Hexo NexT主题移动端样式适配](<https://www.liaofuzhan.com/posts/507826828.html>)

------

> ### hexo-next对应阿里云服务器来加快访问速度
>
> 我之前已经使用的是github+coding来配置hexo，然而访问速度依然不是很好，而且我发现的是使用github+coding来配置的话，有时候你本地已经试好了，但你推上去了以后，你会发现好久网站还是没反应过来，甚至我hexo clean 并且 hexo g -d退了好几遍，它都没反应，这对网站影响还是挺大的，所以就一直想搞个服务器，本来是没想要搞得，但是加入你想通过github+coding在加一个cdn的话，你必须要域名备案，而阿里云的域名备案还必须要一个备案服务号，这就要求你买其他的一个产品，而且这产品都不便宜，但是好在有学生价，你可以通过学生认证买一个轻量应用服务器，每月才不到1块，但限制你每次最多只能买一年，而且配置好像还很不错，因此选择在阿里云买一个一年的轻量应用服务器再加一个不贵的域名（一般50以上就能买一年了）同时还会赠送你5个备案服务号，然后你就可以实现阿里云服务器+备案域名+阿里云后者七牛云的cdn+hexo来实现hexo访问速度很不错的博客，关于域名购买和服务器购买，和阿里云服务器搭建hexo博客参考如下：
>
> 转载自 [阿里云学生服务器搭建教程1--购买学生服务器](<https://blog.csdn.net/qq_38399751/article/details/90744450?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task>)
>
> 转载自 [使用阿里云服务器+域名+hexo搭建个人博客](<https://blog.csdn.net/FungLi_notLove/article/details/103450832>)
>
> 转载自 [Hexo个人博客的搭建（阿里云服务器）](<https://www.jianshu.com/p/86e80be14d8f>)
>
> 转载自 [在Nginx/Tengine服务器上安装证书](<https://help.aliyun.com/document_detail/98728.html?spm=a2c4g.11186623.6.581.37ea43ff4V89uR>) 注意若使用了hexo-blog-encrypt为文章加密的，当使用服务器后，由于链接不安全，即无ssl证书即不满足https协议的，将会发现插件输入时无效的情况，需为其添加ssl协议方可，当还是存在小问题，有时可能还是不管用，不过刷新一下就好了

------

> ### hexo-next 百度及谷歌seo优化
>
> 转载自 [基于Hexo搭建个人博客——进阶篇(从入门到入土)](<https://yangbingdong.com/2017/build-blog-hexo-advanced/>)

------

----------------------------------------------------------------------To Be Continued-------------------------------------------------------------------

![](https://www.piedron.cn/images/bg2.jpg)