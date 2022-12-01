## 参考文章
* [调整cpu-知乎](https://zhuanlan.zhihu.com/p/25537264)
* [调整核显-知乎](https://zhuanlan.zhihu.com/p/82058718)

## 原理
我认为原理是让cpu被限制的,不容易过热而触发系统为了保护笔记本的降频。从而获得更好的平均性能

## 操作
1. [下载 XTU](https://downloadcenter.intel.com/download/29183/Intel-Extreme-Tuning-Utility-Intel-XTU-?product=66427)
2. 按照我的图片调整 (我是按照尽量最稳定的偏向去调整的，上面文章中都是推荐自己去做压力实验，电压越低最后获得的性能越好。)
   1. cpu电压设置（offset是我标注的我的电脑的初始值）![coresettings.png](http://ww1.sinaimg.cn/large/006rgJELly1ggxdsv9pmjj312r0dc0uf.jpg)
   2. intel核显电压设置 ![graphic setting.png](http://ww1.sinaimg.cn/large/006rgJELly1ggxdtzknxij313e0cd40b.jpg)
3. 让这个XTU程序开机启动,我推荐你直接把快捷方式放到**开机启动文件夹**里面.(run shell:startup 可以打开这个文件夹)

## 体验
我的使用的笔记本是 razer2019-15寸精英版
* i7-8750H
* RTX 2070MAX-Q

1. 实际上手感觉
   1. 开启降压后温度明显下降,玩游戏的时候机器烫手程度貌似有些许下降
   2. 开启降压后帧数貌似没有不开启的时候高,但是有玩的体验很流畅帧数稳定
2. 数据说话(我玩了两局overwatch,超高画质)
   1. 开启降压![开启降压.png](http://ww1.sinaimg.cn/large/006rgJELly1ggxdywoastj30xk0fvq4h.jpg)
   2. 不开启降压 ![不开启降压.png](http://ww1.sinaimg.cn/large/006rgJELly1ggxdzaf60sj30xk0fvtab.jpg)
   3. 首先讲一下前面的低帧数部分是在匹配的时候ow限制帧数在60 ,总结来说开启降压的平均帧数和不开启的时候相差无几,而且开降压会让帧数更稳定,发热更少,值得尝试一下。