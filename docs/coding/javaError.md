---
title: 学习Java过程中遇到的一些报错及解决方法
tags: 
	- Java
created: 2020/2/20
---

该篇博客记录了个人在学习Java过程中遇到的一些报错及解决方案，解决方案可能参考CSDN上其他人的博客或者直接转载，一般会自己先试一下并稍微总结以下，因此大多为参考他人博客并有标注，如有侵权请联系邮箱，另外，该篇博客会随着学习过程持续更新…… <!-- more -->

------

> ## input.java:1: 错误: 编码GBK的不可映射字符
>
> 这个错误往往均是由于java文件中包含中文字符，因此需采用unicode编码
>
> 可点击IDE选项保存为utf-8编码即可，若使用命令行的话，还可直接使用以下命令来直接指定编码格式来解决
>
> ```bash
> javac -encoding UTF-8 name.java
> java name
> ```
>
> 参考自 ：[解决 java “错误：编码GBK 的不可映射字符”](<https://blog.csdn.net/l1028386804/article/details/46583279/>)

------

> ##  scanner 使用错误：Exception in thread "main" java.util.NoSuchElementExceptionation
>
> 这个错误是由于在使用Scanner来从控制台读取数据时，假如你从多个不同地方来使用了不同的Scanner对象比如在不同函数中或不同类中分开使用了scanner，则当你在一处关闭了一个scanner对象时，由于所有scanner对象共享一个输入流，因此所有的scanner对象也会被关闭，那么也就是你读了第一处后，后几处没法被读取，从而会报错。
>
> 解决方法：当你是在不同类的不同函数中调用时，只需在main函数中声明一个各处公用的scanner对象，然后在各函数中传入该参数scanner，然后在main函数中最后调用close方法进行关闭，这样就使得多出处可读且只关闭一次，而且保证了close调用之后不会再使用scanner来读取的。
>
> 参考自：[JAVA Scanner 用法注意事项（scanner 使用错误：Exception in thread "main" java.util.NoSuchElementExceptionation ）](<https://blog.csdn.net/Richard_pl/article/details/78053913?utm_source=distribute.pc_relevant.none-task>)

------

-----------------------------------------------------------------------To Be Continued-------------------------------------------------------------------

![](https://www.piedron.cn/images/bg4.jpg)