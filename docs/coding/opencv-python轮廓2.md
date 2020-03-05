---
title: opencv-python轮廓2
tags:

  - opencv

  - python
created: 2019/11/29
---

该篇文章主要介绍了如何得到一个图像的若干个近似得到的较少的特征轮廓点以及凸包，找出图像的边界矩形和最小外接圆、椭圆和并对其进行直线拟合，并对相关的API的使用进行了简要介绍，并写出了个人的一些简单操作结果。<!-- more -->

# 一、：轮廓近似和凸包、

## 1.需用函数：
(1). approx=cv2.approxPolyDP(cnt,epsilon,True or False)
参数为：原轮廓，由原始轮廓到近似轮廓的最大距离即精确度（最大距离越大，点越少），轮廓是否为闭合（True为闭合）
返回值为：由原轮廓近似得到的由更少点组成的近似轮廓
用途为：将原轮廓近似为由更少点组成的近似轮廓

<!-- more -->(2). hull=cv2.convexHull(points[,clockwise[,returnPoints]])
参数为：组成轮廓的点，返回凸包的方向（True为顺时针方向），返回凸包上点的位置（True为凸包上所有的点，False为与凸包对应的轮廓上的点）
返回值为：凸包的点的坐标
用途为：返回一个轮廓的凸包的点的坐标

(3). cv2.isContourConvex(contour)
参数为：轮廓
返回值为：是否具有凸性的布尔值
用途为：检测一个轮廓是否具有凸性

凸包：包含并接触凸出来的部分的曲线
凸性缺陷：若有凸出来的部分，则凹下去的部分为凸性缺陷

## 2.代码实现：

```python
import cv2
import numpy as np 
img=np.zeros((700,500,3),np.uint8)
#生成一个三通道的512X512的数据类型为unsigned int类型的全黑图像

pts=np.array([[50,75],[100,90],[150,95],[150,200],[200,175],[250,235]],np.int32)
pts=pts.reshape((-1,1,2)) #传入的元组依次为最高维的宽度至最低维的宽度
#对生成的二维numpy数组进行shape属性转换，转换为6 X 1 X 2的三维numpy数组即一个三维数
#组中包含六个二维数组，一个二维数组中包含一个一维数组，一个一维数组中包含两个元素，
#参数-1代表自动计算该维的宽度值，也可指定

#cv2.polylines(img,[pts],True,(255,255,255))  用polylines()或者fillPoly()来对这几组点进行绘制多边形，前者只绘制曲线，后者绘制填充图形
cv2.fillPoly(img,[pts],(255,255,255))
#其中img为原图像，[pts]为生成的包含相关点信息的三维数组，True为该曲线封闭，后接RGB颜色值

gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)  #将BGR颜色空间转换为灰度空间
contours,hierarchy=cv2.findContours(gray,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)


epsilon=0.01*cv2.arcLength(contours[0],True)
approx=cv2.approxPolyDP(contours[0],epsilon,True)
print(approx)


hull=cv2.convexHull(contours[0],True,True)
print(hull)
print(cv2.isContourConvex(contours[0]))




```

# 二、：边界矩形和最小外接圆、椭圆和直线拟合
## 1.需用函数：
(1).x,y,width,height=cv2.boundingRect(cnt)
参数为：轮廓的一个索引
返回值为： x,y为矩形左上角顶点的坐标，width,height为矩形的宽度和高度
用途为：获得一个轮廓的边界直即正矩形
(2). Box2D=cv2.minAreaRect(cnt)
参数为：轮廓的一个索引
返回值为：Box2D结构，包括(x,y),(width,height,theta)
用途为：获得一个轮廓的边界旋转矩形的相关信息
(3).(x,y),radius=cv2.minEnclosingCircle(cnt)
参数为：轮廓的一个索引
返回值为：该最小外接圆的圆心坐标以及半径
用途为：找到一个轮廓的最小外接圆
(4).(x,y),(chan,duan,theta)=cv2.fitEllipse(cnt)
参数为：轮廓的一个索引
返回值为：该轮廓拟合椭圆的中点坐标，长轴长，短轴长，顺时针旋转角度
用途为：找出一个轮廓的拟合椭圆
(5).line=cv2.fitLine(cnt, distType, param, reps, aeps)
## 2.代码实现：

```python
import cv2
import numpy as np 
img=np.zeros((700,500,3),np.uint8)
#生成一个三通道的512X512的数据类型为unsigned int类型的全黑图像

pts=np.array([[50,75],[100,90],[150,95],[150,200],[200,175],[250,235]],np.int32)
pts=pts.reshape((-1,1,2)) #传入的元组依次为最高维的宽度至最低维的宽度
#对生成的二维numpy数组进行shape属性转换，转换为6 X 1 X 2的三维numpy数组即一个三维数
#组中包含六个二维数组，一个二维数组中包含一个一维数组，一个一维数组中包含两个元素，
#参数-1代表自动计算该维的宽度值，也可指定

#cv2.polylines(img,[pts],True,(255,255,255))  用polylines()或者fillPoly()来对这几组点进行绘制多边形，前者只绘制曲线，后者绘制填充图形
cv2.fillPoly(img,[pts],(255,255,255))
#其中img为原图像，[pts]为生成的包含相关点信息的三维数组，True为该曲线封闭，后接RGB颜色值

gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)  #将BGR颜色空间转换为灰度空间
contours,hierarchy=cv2.findContours(gray,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)  #检测该图形的轮廓点

x,y,width,height=cv2.boundingRect(contours[0])   #检测出该轮廓的正边缘矩形
cv2.rectangle(img,(x,y),(x+width,y+height),(0,255,0),2) #画出边界矩形

rect=cv2.minAreaRect(contours[0])
#检测出该轮廓的旋转边缘矩形,该函数返回值为一个Box2D的结构包含左上角坐标x，y和宽度以及高度和旋转角度
#绘制该矩形所要的4个角点需要其他函数cv2.boxPoints()来获得
box=cv2.boxPoints(rect)   
box=np.int0(box)
#因为图像上的每个点的坐标均为正数，因此需要用该函数将计算得到的4个角点的浮点值转换为整数值
cv2.drawContours(img,[box],0,(0,0,255),2)

(x,y),radium=cv2.minEnclosingCircle(contours[0])
x,y,radium=int(x),int(y),int(radium) #浮点坐标转换为整型
cv2.circle(img,(x,y),radium,(255,0,0),2)

ellipse=cv2.fitEllipse(contours[0])
cv2.ellipse(img,ellipse,(255,255,0),2)

rows,cols=img.shape[:2]
[vx,vy,x,y]=cv2.fitLine(contours[0],cv2.DIST_L2,0,0.01,0.01)
left=int((-x*vy/vx)+y)
right=int(((cols-x)*vy/vx)+y)
cv2.line(img,(cols-1,right),(0,left),(0,255,255),2)

cv2.imshow("img",img)
cv2.waitKey(0)
cv2.destroyAllWindows()

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190507222255247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)