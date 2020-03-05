---
title: opencv for python的图像ROI相关操作
tags:

  - opencv

  - python

created: 2019/11/22
---

所谓ROI即为感兴趣区域（range of interest）即从被处理的图像中以方框、圆、椭圆、不规则多边形等方式截取需要处理的区域。这里介绍了简单截取矩形ROI以及不规则图形的ROI并进而进行图像拼接的方法。 <!-- more -->

# 截取规则和不规则ROI的方法

[TOC]

#  一、ROI简介：

所谓ROI即为感兴趣区域（range of interest）即从被处理的图像中以方框、圆、椭圆、不规则多边形等方式截取需要处理的区域。
#  二、截取矩形ROI：
矩形区域：可用numpy中的数组索引选择像素点的行数列数范围截取相关的指定区域。

```python
roi=img[100:200,200:300]
 #截取图像img中像素点行数为100到200、列数为200到300即x轴200至300y轴100至200的roi区域
roi1=img[:,:,0] #0，1，2分别对应blue,green,red三个颜色通道
#截取图像中的blue颜色通道中的全部像素点即整个图像的范围
```


#  三、截取不规则ROI：
需用函数简介：
cv2.bitwise_and(src1,src2,[,dst[,mask]])  → dst
对两幅图像进行按位和运算，其中mask为掩码，src和dst分别为原图像和返回图像

cv2.bitwise_not(src,[,dst[,mask]]) → dst
对一幅图像进行按位非运算，其中mask为掩码

cv2.threshold(src,thresh,maxval,type[,dst]) → dst
简单阈值函数将原图像二值化，其中各参数分别代表原图像、阈值、二进制值的最大值、阈值处理的方法

cv2.cvtColor(src,code[,dst[,dstCn]])  → dst
颜色空间转换函数，code为颜色空间转换模式，常用的有cv2.COLOR_BGR2GRAY:将BGR格式的转换为灰度格式的图像
cv2.COLOR_BGR2HSV:将BGR格式的图像转换为HSV格式的图像

cv2.add(src1,src2[,dst[,mask[,dtype]]]) → dst将两幅源图像进行简单算术加和操作

利用阈值函数来生成掩码，将其分为ROI和背景（可白可黑），然后利用位运算中的反运算来生成掩码的二进制反码、利用和运算来生成ROI。
如下以将Opencv的logo融合到另一张图中为例来说明其操作：

```python
import cv2
import numpy as np
img1=cv2.imread("……/1.jpg") #logo图像
img2=cv2.imread("……/2.jpg") #要添加logo的图像
rows,cols=img1.shape[:2] 
range=img2[:rows,:cols]  #选取ROI所在的矩形区域即为logo的全部区域
img1_gray=cv2.cvtColor(img1,cv2.COLOR_BGR2GRAY)
#由于简单阈值函数cv2.threshold()只能接受单通道的图像，因此需要利用颜色空间转换函数cv2.cvtColor()将其转换为灰度图像
mask=cv2.threshold(img1_gray,175,255,cv2.THRESH_BINARY)
#利用简单阈值函数来生成黑白二进制值的掩码
mask_inv=cv2.bitwise_not(mask) #利用位运算的非函数来生成与mask黑白区域对调的掩码
roi1=cv2.bitwise_and(img1,img1,mask_inv) 
 #利用和函数来生成ROI1，即在img2中挖出logo的区域，即该区域为黑
roi2=cv2.bitwise_and(img2,img2,mask)
#利用和函数生成ROI2，即使logo的背景变黑且使logo变白
add=cv2.add(roi1,roi2)  # 利用图像加法来将两个ROI加在一起来完成更好的融合
img2[:rows,:cols]=add  # 将合成后的区域还原到img2上
#可展示出各个中间处理图像，来理解整个过程
cv2.imshow("mask",mask)
cv2.imshow("mask_inv",mask_inv)
cv2.imshow("add1",add1)
cv2.imshow("add2",add2)
cv2.imshow("add",add)
cv2.imshow("img2",img2")
cv2.waitKey(0)
cv2.destroyAllWindows()

```

图片示例
![处理后的图像](https://img-blog.csdnimg.cn/20190325230705134.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
![logo](https://img-blog.csdnimg.cn/20190325230734723.png)