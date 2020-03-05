---
title: opencv-python图像梯度算子以及canny边缘检测
tags:

  - opencv

  - python
created: 2019/11/29
---

在这里，能看到一些关于图像梯度以及canny边缘检测的一些概念和基本知识，API的介绍和实际应用，这些操作应用后的图像还是挺有趣的，但是概念和原理还是挺难理解的，但是大致了解之后一些基本应用还是没啥大问题的。<!-- more -->

#  一、图像梯度算子:

1.概念简介（部分引自百度百科）：
图像梯度：可以把图像看成二维离散函数，图像梯度其实就是这个二维离散函数的求导，图像梯度可用来中值差分以及边缘检测。

差分函数(运算)：差分的结果反映了离散量之间的一种变化，差分运算，相应于微分运算，是微积分中重要的一个概念，差分对应离散变量，微分对应连续变量。 

Sobel算子：用来进行计算一阶、二阶或混合图像差分。通过对图像用相应的内核进行卷积操作来计算图像差分；由于该算子不进行图像尺度变换，所以和输入图像(数组)相比，输出图像(数组)的元素通常具有更大的绝对数值（即像素的位深）。为防止溢出，当输入图像是 8 位的，要求输出图像是 16 位的。所有输入和输出图像都必须是单通道的，并且具有相同的图像尺寸或者ROI尺寸。

Laplacian算子：主要用来计算图像的二阶微分算子。



2.需用函数：
cv2.Sobel(**src,ddepth,dx,dy**[,dst[,**ksize**[,scale[,delta[,borderType]]]]])→dst
5个常用参数分别代表：原图像、图像颜色深度即数据类型（一般用cv2.CV_64F,也可用-1使其数据类型与原图像相同即为np.uint8）、x和y方向上的差分阶数、soble核的大小（必须为1、3、5、7中的一个）
如果ksize=-1，会使用3x3的Scharr滤波器，效果要比3x3的Sobel滤波器好（而且速度相同，所以在使用3x3滤波器时应该尽量使用Scharr滤波器），当ksize=1时，采用卷积核为1X3的或3X1的。
常使用的参数组合为：
cv2.Sobel(img,cv2.CV_64F,1,0,ksize=3)  仅在x方向上求一阶导数，最高可求二阶
cv2.Sobel(img,cv2.CV_64F,0,1,ksize=3) 仅在y方向上求一阶导数，最高可求二阶

cv2.Scharr(src,ddepth,dx,dy[,dst[,scale[,delta[,borderType]]]]])→dst
常用参数情况与cv2.Sobel类似，去除ksize参数即为默认其为-1且不可更改，其他用法和cv2.Sobel()函数完全相同，所以可用cv2.Sobel()函数在ksize=-1的情况下取代该函数

cv2.Laplacian(src,ddepth,dx,dy[,dst[,ksize[,scale[,delta[,borderType]]]]])→dst
只使用该函数求图像的二阶微分时只使用前两个参数即可

cv2.convertScaleAbs(**src**[,dst[,alpha[,beta]]])→dst
x先将原图像的全部值进行绝对值操作，然后将原图像转换为unsigned int8类型

3.代码实现如下：

```python
import cv2
import numpy as np
img=cv2.imread("   /1.jpg",cv2.IMREAD_GRAYSCALE)
#只能对单通道图像进行处理，因此以灰度格式读取该图片，第二个参数也可为0

#两种选择输出图像数组数据深度方式来生成目标图像

sobel_x=cv2.Sobel(img,cv2.CV_8U,1,0)
sobel_y=cv2.Sobel(img,cv2.CV_8U,0,1)    
# 直接使用unsigned int8类型的图像矩阵，这将会导致求方向导数后的某些负值或超过255的值损失
scharr_x=cv2.Sobel(img,cv2.CV_8U,1,0,ksize=-1)  
scharr_y=cv2.Sobel(img,cv2.CV_8U,0,1,ksize=-1)
laplacian=cv2.Laplacian(img,cv2.CV_8U)  #求图像二阶导数

sobel_x=cv2.Sobel(img,cv2.CV_64F,1,0)
sobel_y=cv2.Sobel(img,cv2.CV_64F,0,1)    
# 直接使用float32类型的图像矩阵，不会使输出图像某些值的损失，但由于cv2.imshow()函数不支持输出
# float32的图像，因此需要通过cv2.convertScaleAbs()改变输出图像为uint8类型的
scharr_x=cv2.Sobel(img,cv2.CV_64F,1,0,ksize=-1)  
scharr_y=cv2.Sobel(img,cv2.CV_64F,0,1,ksize=-1)
laplacian=cv2.Laplacian(img,cv2.CV_64F)  
cv2.convertScaleAbs(sobel_x)
cv2.convertScaleAbs(sobel_y)
cv2.convertScaleAbs(scharr_x)
cv2.convertScaleAbs(scharr_x)
cv2.convertScaleAbs(laplacian)
#使用后者这种方法会发现比前者的线条和轮廓更加具体
#还可使用numpy模块中的方法实现输出图像类型的转变
#sobel_x=np.absolute(sobel_x)，sobel_x=np.array(sobel_x,np.uint8)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190401214635224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190401214702280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019040121460844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)

#  二、Canny边缘检测（一个多级边缘检测算法）：
1.边缘检测原理简介：（大部分引自百度百科）

(1). 应用高斯滤波来平滑图像。目的是去除噪声，由于噪声对边缘检测影响很大，因此需要先进行平滑操作去除部分噪声
(2).寻找图像的梯度强度。Canny算法的基本思想是寻找一幅图像中灰度强度变化最强的位置。所谓变化最强，即指梯度方向。平滑后的图像中每个像素点的梯度可以由Sobel算子来获得。在变化剧烈的地方（边界处），将获得较大的梯度度量值G，对应的颜色为白色。然而，这些边界通常非常粗，难以标定边界的真正位置。为了做到这一点（需进行非极大值抑制），还必须存储梯度方向，因此在这一步会存数两块数据，分别是梯度的强度信息和梯度的方向信息。
(3).进行非最大值抑制，使边界线更细，找到边界的真正位置即使模糊的边界变得清晰。通俗的讲，就是保留了每个像素点上梯度强度的极大值，而删掉其他的值。对于每个像素点，进行如下操作：
	a) 将其梯度方向近似为以下值中的一个（0,45,90,135,180,225,270,315）（即上下左右和45度方向）
	b) 比较该像素点和其梯度方向正负方向相邻像素点的梯度强度，如果该像素点梯度强度最大则保留，否则抑制（删除，即置为0），边界处的梯度方向总是指向垂直于边界的方向，即最后会保留一条边界处最亮的一条细线。
(4).应用双阈值的方法来确定可能的边界。高斯平滑后如还有少量噪声，这些噪声点会影响第二步和第三步的边界确定，因此需通过该步骤更全面的确定边界。Canny算法中应用双阈值方法即设定一个阈值上界和阈值下界，图像中的像素点如果大于阈值上界则认为必然是边界（称为强边界），小于阈值下界则认为必然不是边界，两者之间的则认为是候选项（称为弱边界）。
(5).利用滞后技术来跟踪边界。和强边界相连的弱边界认为是边界，其他的弱边界则被抑制。
2.函数简介；
OpenCV使用一个函数和多个参数来完成以上五个步骤
cv2.Canny(**img,threshold1,threshold2**,[,edges[,**apertureSize[,L2gradient**]]])→edges
参数分别代表：原图像、下界阈值、上界阈值、卷积核尺寸大小（默认为3）、求梯度大小的方程（值为True和False,对应不同方法，默认为False）,返回值为该图像的边界
3.代码实现：

```python
import cv2
img=cv2.imread("   /1.jpg",0)
edges=cv2.Canny(img,100,200)
cv2.imshow("img",img)
cv2.imshow("edges",edeges)
cv2.waitKey(0)
cv2.destroyAllWindows()

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190401182545921.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)