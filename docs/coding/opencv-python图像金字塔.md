---
title: opencv-python图像金字塔
tags:

  - opencv

  - python
created: 2019/11/29
---

图像金字塔：是一系列以金字塔形状排列的分辨率逐步降低或升高的图像集合。可以由一副高分辨率的图像逐渐向下生成一系列低分辨率的图像（像素行数和列数减少即分辨率降低，同时尺寸变小），也可以由低分辨率的图像向上生成一系列的尺寸变大的图像，但分辨率不会增大且会使图像变模糊。即图像先向下后向上生成会使图像原像素损失。<!-- more -->
## 1.原理简述： 
有两类图像金字塔：高斯金字塔和拉普拉斯金字塔。
高斯金字塔形成：先通过高斯平滑函数将原图像通过高斯核进行平滑模糊即对原图像的周围即上下左右中五个像素点的值进行加权平均，再隔一行各一列分别采样而得，这样操作一次一个MxN的图像就变成了一个M/2xN/2的图像。所以这幅图像的面积就变为原来图像面积的四分之一，连续进行这样的操作我们就会得到一个分辨率不断下降的图像金字塔。

拉普拉斯金字塔：可由高斯金字塔计算而来，计算方法为：原图像与其先向下后向上取样后生成的图像的差，经过几次重复操作后，其中很多像素点的值都会变为0，这种金字塔经常被用在图像压缩中。

## 2.使用函数介绍：
cv2.pyrUp(src[,dst[,dstsize[,borderType]]]) →dst
cv2.pyrDown(src[,dst[,dstsize[,borderType]]]) →dst
参数基本上只需用src即原图像，第二个和第三个参数分别代表：目标图像以及其尺寸元组。
## 3.代码实现：

```python
import cv2
import numpy as np
img=cv2.imread("    /1.jpg")
low=cv2.pyrDown(img)  #原图像向下取样
high=cv2.pyrUp(low)  #向下取样后的图像想上取样
laplacian=img-hign   #用hign和img生成一层拉普拉斯金字塔图像
cv2.imshow("img",img)
cv2.imshow("high",high)
cv2.imshow("low",low)
cv2.imshow("laplacian",laplacian)
cv2.waitKey(0)
cv2.destroyAllWindows()
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190403223343957.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019040322500514.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)