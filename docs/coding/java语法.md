---
title: 初学Java时注意到的一些语法点
tags: 
	- Java
created: 2020/2/20
---

该篇文章主要记录一些初学Java时比较需要注意的一些语法点或者是个人需要厘清的一些语法点，后续会持续更新

一些语法点可能有参考其他博客或者直接转载，以下若有引用均有标注，如有侵权请联系邮箱

<!-- more -->

------

> ## Java三种常用的输入方式：
>
> ```java
> import java.util.Scanner;  // java中较简洁的读取输入方法
> import java.io.InputStreamReader;   
> import java.io.BufferedReader;  
> import java.io.IOException;  //输入输出流异常
> 
> public class input{
> 	public static void main(String[] args){
> 		SystemIn();  //通过调用与System.out相对应的System.out来输入
> 		BufferIn();   //通过建立缓冲区读取的对象来读取输入
> 		ScannerIn();   //调用java工具包里的Scanner来读取
> 	}
> 	
> 	
> 	//System.in.read()只能读取一个整数或字符
> 	//也就是要想读字符串是行不通的，读取浮点数还需转换
> 	public static void SystemIn(){
> 		try{
> 			System.out.print("请输入要读取的一个字符：");
> 			char ch=(char)System.in.read();
> 			System.out.println("读取到的字符为:"+ch);
> 		}
> 		catch(IOException e){
> 			e.printStackTrace();
> 		}
> 	}
> 	
> 	
> 	//使用InputStreamReader和BufferReader来读取
> 	//可以读取字符串，但是读取整数和浮点数仍需转换
> 	public static void BufferIn(){
> 		InputStreamReader isr=new InputStreamReader(System.in);
> 		BufferedReader br=new BufferedReader(isr);
> 		//注意上面的SystemIn调用时由于输入了Enter键，且会被缓冲区读取，因此
> 		//若不加一个读取Enter键的，name就为空了也就是\n
> 		try{	
> 			System.out.print("请输入要你的名字：");
> 			br.readLine();  //读取掉换行符
> 			String name=br.readLine();
> 			System.out.println("名字为："+name);
> 		}
> 		catch(IOException e){
> 			e.printStackTrace();
> 		}
> 	}
> 	
> 	//使用java工具包里的Scanner来读取
> 	//可以直接读取整数和浮点数等，各种数据类型都方便读取
> 	public static void ScannerIn(){
> 		Scanner s=new Scanner(System.in);
> 		System.out.print("请输入要你的年龄，你的成绩，你的名字:");
> 		int age=s.nextInt();
> 		double score=s.nextFloat();
> 		String name=s.nextLine();
> 		System.out.printf("你的信息为：\n姓名：%s\n年龄：%d\n成绩：%.1f",
> 		name,age,score);
> 	}
> }
> ```
>
> 参考： [java中从键盘输入的三种方法](<https://blog.csdn.net/u012249177/article/details/49586383?utm_source=distribute.pc_relevant.none-task>)

------

-----------------------------------------------------------------------To Be Continued-------------------------------------------------------------------

![](https://www.piedron.cn/images/bg3.jpg)