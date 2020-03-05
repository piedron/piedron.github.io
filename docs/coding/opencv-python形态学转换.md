---
title: opencv-python的形态学转换
tags:

  - opencv

  - python
created: 2019/11/29
---

OpenCV for Python的形态学转换学习日志，这里包括了图像处理中经常用到的基本操作，包括腐蚀、膨胀、开运算、闭运算、形态学梯度以及结构化元素的表示，通过概念介绍以及opencv python中的API介绍，然后介绍了其实际应用中的代码<!-- more -->

#  1. ：腐蚀 

腐蚀主要用于形态学中除去图像的某些部分，会把前景物体的边界腐蚀掉（前景仍然是白色），即将黑色背景中白色的部分变少变窄。
大致原理：卷积核沿着图像滑动，如果与卷积核对应的原图像的所有像素值都是1，那么中心元素就保持原来的像素值，否则就变为零。根据卷积核的大小靠近前景的所有像素都会被腐蚀掉（变为0），所以前景物体会变小，整幅图像的白色区域会减少。
腐蚀可用来去除白噪声和断开两个连在一块的物体等。
cv2.erode(**src,kernel,**[,dst[,anchor[,**iterations**[,borderType[,borderValue]]]]])→dst
各常用参数分别为：原图像、卷积核、重复腐蚀卷积的次数（该数越大，腐蚀程度越大）
代码实现如下：

```python
import cv2
import numpy as np
img=np.zeros((512,512),np.uint8) #生成512X512的全黑的图像矩阵
img=cv2.circle(img,(256,256),128,(255,255,255),4) 
#在img中心画一个半径为128的白色的线条宽度为4的圆
kernel=np.ones((5,5),np.float32)   #生成尺寸为5的全1卷积核
dst=cv2.erode(img,kernel,iterations=1)
cv2.imshow("dst",dst)
cv2.waitKey(0)
cv2.destroyAllWindows()
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190331233237859.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)
#  2. ：膨胀 
膨胀时是使图像的某部分的范围变大变宽，如使黑色背景下的白色线条变宽范围变大
大致原理:与卷积核对应的原图像的像素值中只要有一个是1，中心元素的像素值就是1。这会增加图像中的白色区域（前景）。
膨胀可用来连接图像中的两个分开的物体。
cv2.dilate(**src,kernel,**[,dst[,anchor[,**iterations**[,borderType[,borderValue]]]]])→dst[,borderType[,borderValue]]]]])→dst各常用参数分别为：原图像、卷积核、重复膨胀卷积的次数(该数越大，膨胀程度越大)
代码实现如下：

```python
import cv2
import numpy as np
img=np.zeros((512,512),np.uint8)
img=cv2.circle(img,(256,256),128,(255,255,255),4)
kernel=np.ones((5,5),np.float32)
dst=cv2.dilate(img,kernel,iterations=1)
cv2.imshow("dst",dst)
cv2.waitKey(0)
cv2.destroyAllWindows()
```


#  3. ：开运算（先腐蚀后膨胀）
去除噪声时要进行开运算(先腐蚀再膨胀),因为腐蚀在去掉白噪声的同时，也会使前景对象变小,所以我们需再进行膨胀。使前景前景恢复到原来的状态。
cv2.morphologyEx(**src,op,kernel,**[,dst[,anchor[,iterations[,borderType[,borderValue]]]]])各常用参数分别为：原图像、形态学转换操作、卷积核 ，使用operation为cv2.MORPH_OPEN
代码实现如下：

```python
dst=cv2.morphologyEx(img,cv2.MORPH_OPEN，kernel)
```

#  4. ：闭运算 (先膨胀后腐蚀）
闭运算可用来消除前景中的小黑点，先膨胀后腐蚀是因为膨胀消除小黑点的同时会使整个前景部分整体变大，需用腐蚀使其前景回到原来状态。
仍使用cv2.morphologyEx()函数
使用operation为cv2.MORPH_CLOSE
代码实现如下：

```python
dst=cv2.morphologyEx(img,cv2.MORPH_CLOSE，kernel)
```

#  5. ：礼帽 
礼帽：将得到原始图像与进行开运算之后得到的图像的差。
仍使用cv2.morphologyEx()函数
使用operation为cv2.MORPH_TOPHAT
代码实现如下：

```python
dst=cv2.morphologyEx(img,cv2.MORPH_TOPHAT,kernel)
```

#  6. ：黑帽 
黑帽：闭运算之后得到的图像与原始图像的差。
仍使用cv2.morphologyEx()函数
使用operation为cv2.MORPH_BLACKHAT
代码实现如下：

```python
cv2.morphologyEx(img,cv2.MORPH_BLACKHAT,kernel)
```

#  7. ： 形态学梯度 
形态学梯度：膨胀后的图像与腐蚀后的图像的差，结果为前景部分的轮廓。
仍使用cv2.morphologyEx()函数
使用operation为cv2.MORPH_GRADIENT
代码实现如下：

```python
cv2.morphologyEx(img,cv2.MORPH_GRADIENT,kernel)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190331233629856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70)

#  8. ：结构化元素 
安抚可使用numpy数组产生结构化元素，也可通过以下函数来生成多种形状。
cv2.getStructuringElement(shape,ksize[,anchor])→retval
shape参数为要生成的结构化元素形状如矩形(cv2.MORPH_RECT)、椭圆(cv2.MORPH_ELLIPSE、十字交叉线(cv2.MORPH_CROSS)等,ksize为结构化元素或卷积核尺寸大小。
代码实现如下：

```python
cv2.getStructuringElement(cv2.MORPH_RECT,(5,5))
"""
array([[1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1]], dtype=uint8)
"""
cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5))
"""
array([[0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0]], dtype=uint8)
"""
cv2.getStructuringElement(cv2.MORPH_CROSS,(5,5))
"""
array([[0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0]], dtype=uint8)
"""
```