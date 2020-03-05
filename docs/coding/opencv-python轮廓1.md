---
title: opencv-python轮廓1
tags:

  - opencv

  - python
created: 2019/11/29
---

轮廓是颜色或者灰度相同的边界点连成的边界曲线，轮廓在物体形状分析以及轮廓检测和识别中很有用。轮廓检测要求原图像要转换为二值图像即黑白图像，因此要进行轮廓检测之前，先要转换为灰度图像，再对灰度图像做阈值化处理或者经过canny边缘检测时类似的处理，处理后得到的图像应是背景为黑，物体为白。  <!-- more -->

# 一、：图像轮廓检测以及绘制轮廓

## 1.轮廓简介：
轮廓是颜色或者灰度相同的边界点连成的边界曲线，轮廓在物体形状分析以及轮廓检测和识别中很有用。轮廓检测要求原图像要转换为二值图像即黑白图像，因此要进行轮廓检测之前，先要转换为灰度图像，再对灰度图像做阈值化处理或者经过canny边缘检测时类似的处理，处理后得到的图像应是背景为黑，物体为白。
## 2.需用函数：
(1).cv2.findContours(image,mode,method)
该函数可以检测一个图像的轮廓
三个参数分别代表：原图像，轮廓查找模式，轮廓近似方法
返回值有（该函数会对原图像进行更改，因此需使用原图像时应在用该函数前保存该原图像）图像轮廓（该轮廓为一个python列表，列表的每一项为轮廓的相关点的信息的一个numpy数组），以及轮廓的层析结构。
(2).cv2.drawContours(image,coutours,contourIdx,color,thickness,linetype)
该函数可以根据提供的列表中的相关点信息绘制轮廓
各参数分别代表：原图像，轮廓即python列表，轮廓索引即轮廓的序号（为-1时即选择所有的轮廓，序号从0开始），线条颜色，线条粗细，线条类型。

## 3.代码实现如下：

```python
#二值化图形处理
import cv2
import numpy as np
img=np.zeros((512,512,3),np.uint8)  #生成一个背景为黑图像
cv2.rectangle(img,(50,50),(250,250),(255,255,255),-1)   #为该图像添加一个目标为白的圆形
gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
contours,hierarchy=cv2.findContours(gray,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
print(contours)
#两种方法索引轮廓
cnt=contours[0]
cv2.drawContours(img,[cnt],0,(255,0,0),10) #在对单个轮廓进行操作时前者更常用

cv2.drawContours(img,contours,0,(255,0,0),10)

cv2.imshow("img",img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
# coding:utf-8  
#指明该程序编码格式为utf-8，以便图片路径可正常识别并找到图片
#普通图像处理
import cv2
import numpy as np
img=cv2.imread("/home/zicongxie/下载/pictures/hwlogo.png",0)
ret,thresh=cv2.threshold(img,175,255,cv2.THRESH_BINARY)  #二值化处理
contours,hierarchy=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(img,contours,-1,(0,255,0),1)
cv2.namedWindow("img",cv2.WINDOW_NORMAL)  
cv2.imshow("img",img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190503210014284.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
## 4.图像近似方法说明：
cv2.CHAIN_APPROX_SIMPLE:将图像的轮廓点减少一部分不必要的点，如当轮廓是一条直线时，只需要两点即可
cv2.CHAIN_APPROX_NONE:将尽可能多的点列出来以便确定轮廓

# 二、：图像轮廓的矩、面积和周长
## 1.图像的矩（image moments）
cv2.moments(),使用该函数来获得某轮廓索引的矩
参数为：图像轮廓的其中一个
返回值为：包含该轮廓矩的信息的一个字典
## 2.图像的面积
cv2.contourArea(),使用该函数来计算得到某轮廓索引下的面积
参数为：图像轮廓中的其中一个
返回值为：该轮廓索引的面积
## 3.图像的周长
cv2.arcLength(),使用该函数来计算得到某轮廓索引下的周长
参数为：图像轮廓中的其中一个，以及确认该轮廓是否闭合的参数（True为闭合，False为打开）
返回值为：该轮廓索引的周长
## 4.代码实现

```python
import cv2
import numpy as np
img=zeros((512,512),np.uint8)
contours=cv2.findContours(img,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
moments=cv2.moments(contours[0])
print(moments)
area=cv2.contourArea(contours[0])
length=cv2.arcLength(contours[0],True)
print(area)
print(length)
```