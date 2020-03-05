---
title: hexo-next特殊格式富文本使用
tags: 
	- hexo
created: 2020/2/28
---
Next内嵌的一些标签来写一些特殊的富文本 ,使用这些标签可以让每篇文章更个性化更美观，实际上也就是这些元素加一些已在底层写好的样式，以下就介绍四种使用起来很好用的标签使用方法，具体细节看参看[Fixes and enhancements](<https://github.com/iissnan/hexo-theme-next/pull/1697>) <!-- more -->

------

> ## 引用块文本格式
>
> ```
> {% cq %}
> 长亭外
> 古道边
> 芳草碧连天
> 晚风拂柳笛声残
> 夕阳山外山
> 天之涯
> 地之角
> 知交半零落
> 一壶浊酒尽余欢
> 今宵别梦寒
> 情千缕
> 酒一杯
> 声声离笛催
> 问君此去几时还
> 来时莫徘徊
> {% endcq %}
> ```
>
> 实际效果如下：
>
> {% cq %}
> 长亭外
> 古道边
> 芳草碧连天
> 晚风拂柳笛声残
> 夕阳山外山
> 天之涯
> 地之角
> 知交半零落
> 一壶浊酒尽余欢
> 今宵别梦寒
> 情千缕
> 酒一杯
> 声声离笛催
> 问君此去几时还
> 来时莫徘徊
> {% endcq %}

------

> ## note 标签格式输出
>
> ```
> <div class="note default"><p>default</p></div>
> ```
>
> <div class="note default"><p>default</p></div>
>
> ```
> <div class="note primary"><p>primary</p></div>
> ```
>
> <div class="note primary"><p>primary</p></div>
>
> ```
> <div class="note success"><p>success</p></div>
> ```
>
> <div class="note success"><p>success</p></div>
>
> ```
> <div class="note info"><p>info</p></div>
> ```
>
> <div class="note info"><p>info</p></div>
>
> ```
> <div class="note warning"><p>warning</p></div>
> ```
>
> <div class="note warning"><p>warning</p></div>
>
> ```
> <div class="note danger"><p>danger</p></div>
> ```
>
> <div class="note danger"><p>danger</p></div>
>
> ```
> <div class="note danger no-icon"><p>danger no-icon</p></div>
> ```
>
> <div class="note danger no-icon"><p>danger no-icon</p></div>

------

> ## hexo-next label格式输出
>
> {% label default@default %}
>
> 
>
> ```
> {% label default@default %}
> ```
>
> {% label primary@primary %}
>
> 
>
> ```
> {% label primary@primary %}
> ```
>
> {% label success@success %}
>
> 
>
> ```
> {% label success@success %}
> ```
>
> {% label info@info %}
>
> 
>
> ```
> {% label info@info %}
> ```
>
> {% label warning@warning %}
>
> 
>
> ```
> {% label warning@warning %}
> ```
>
> {% label danger@danger %}
>
> 
>
> ```
> {% label danger@danger %}
> ```

------

> ## hexo-next 选择块tabs输出
>
> ```
> {% tabs 来选图片吧😍😍😍😍, 2 %}
> <!-- tab 图片1 -->
> ![](https://www.piedron.cn/images/bg11.jpg)
> <!-- endtab -->
> <!-- tab 图片2-->
> ![](https://www.piedron.cn/images/bg12.jpg)
> <!-- endtab -->
> <!-- tab 图片3-->
> ![](https://www.piedron.cn/images/bg13.jpg)
> <!-- endtab -->
> {% endtabs %}
> ```
>
> {% tabs 来选图片吧😍😍😍😍, 2 %}
> <!-- tab 图片1 -->
> ![](https://www.piedron.cn/images/bg11.jpg)
> <!-- endtab -->
> <!-- tab 图片2-->
> ![](https://www.piedron.cn/images/bg12.jpg)
> <!-- endtab -->
> <!-- tab 图片3-->
> ![](https://www.piedron.cn/images/bg13.jpg)
> <!-- endtab -->
> {% endtabs %}

------

> ## hexo-next 按钮格式
>
> ```
> {% btn https://www.baidu.com, 点击下载百度, download fa-lg fa-fw %}
> ```
>
> {% btn https://www.piedron.cn/images/bg13.jpg, , download fa-lg fa-fw %}

------

未完待续……