---
title: nao机器人刷机记录
tags: 
	- Nao
created: 2019/11/29
---

Nao机器人

日常使用Nao机器人，那么对其进行刷机清理数据，以及出现一些异常之后的处理，对它进行刷机自然成了不可不会的操作了，这里有本人刷机过程的一些步骤以及遇到的一些问题处理。 <!-- more -->

## 一、准备工具：

1. 在This is an [softbankrobotics官网上](https://community.ald.softbankrobotics.com/en/resources/software/language/en-gb/robot/nao-2 "With a Title") 下载NaoqiOS镜像 2.1.4 atom system image这个镜像文件

2. 在相同的地方下载给U盘刷镜像文件的工具：2.1.0 Flasher - Win 64，然后解压

3. 一个大于2G的U盘，多次刷机后可能会损坏，可以使用U盘修复工具去修复

4. ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190726194831517.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)

5. ![在这里插入图片描述](https://img-blog.csdnimg.cn/2019072619485021.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
## 二、刷机步骤：
1. 按windows+R键来打开运行，然后输入Diskpart，之后依次输入下列命令：

```
list volume
select volume number(为U盘对应的编号)
clean(删除U盘的文件和配置信息，在这里值通过某些软件格式化后是不可行的)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019072619540619.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)

2. 打开下载解压好的flasher文件夹，右击以管理员权限运行flasher.bat，U盘会为你自动选好，镜像文件的话你选择那个以.opn文件结尾的即可，然后选择Factory reset，开始write，然后刷机U盘就会制作成功，如果再想使用该U盘的话格式化即可，注意：如果没用管理员权限打开会报错的，然后如果你在cleanU盘后写入镜像前，此时U盘是不能使用的并且格式化也是不成功的，插入后会显示“请将U盘插入磁盘”这样的提示，可能是因为U盘已经没有了相关的一些配置信息，Windows无法驱动，此时选择刷入镜像后再格式化即可
3. 先将Nao关机，然后插入刷机U盘，然后长按Nao胸部按钮直到指示灯变紫，然后松手，此时看到Nao眼部LED等闪烁，此时Nao开始刷机，等待大约10分钟后，Nao会重启，至此，Nao刷机结束。



![在这里插入图片描述](https://img-blog.csdnimg.cn/20190726201045229.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)