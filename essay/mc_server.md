# 快速指南
[搭建服务器](#搭建服务端)
[客户端使用](#使用客户端)
## 有用的链接
* [server.properties的wiki](https://minecraft-zh.gamepedia.com/index.php?title=Server.properties&variant=zh)
* [screen的简介和使用 ](https://www.cnblogs.com/quan-coder/p/9857883.html)
---
* [启动器-bakaXL](https://www.bakaxl.com/)
* [材质包下载站点](https://www.curseforge.com/minecraft/texture-packs)
* [optifine(光影插件)](https://optifine.net/home)

---
[快捷下载包(蓝奏云)](https://kasusa.lanzous.com/b00znhczi)  密码:mccc

# 搭建服务端

## 提前工作:
* apt 安装 default-jre
* apt 安装 screen

## 开服流程
1. 下载server端java文件
2. 创建sh脚本(我取名为startserver.sh) 如下
```sh
java -Xmx2000M -Xms1024M -jar server.jar nogui
#-Xmx 最大内存使用
#-Xms 最小内存使用
```
3. 把他们放在一个能找到的文件夹里并且 `chmod 777 *` 赋予权限
4. 第一次运行脚本`./startserver.sh`,会生成txt,然后自动退出让你同意eula
5. 将生成的`eula.txt`中的`eula=false`改为`eula=true`表示同意条款
6. 使用screen开一个新的窗体,运行脚本`./startserver.sh` (参考下面: 如何用screen)
7. 挂起screen到后台,这时候可以关闭ssh窗口也不会让MC服务器被关闭了
8. 去安全组开启对应端口的防火墙通道

---

附加: 
1. 调整server.properties来让服务器可以接受盗版玩家(详情见顶部的wiki)
2. 如何让某人升级为管理员?--- op <username> (ssh连入后进入对应screen操作)
3. 

## 如何使用screen
```sh
screen -S mcserver
# 开启一个新的screen(名为mcserver)
ctrl + a + d
# 把当前正在开启的screen放到后台运行
screen -ls
# 在终端里面显示所有运行的screen
screen -r mcserver
# 根据制定名字重新开启screen
```
---

# 使用客户端
我推荐使用bakaXL(支持win10),可以在顶部链接中找到

我有做好快捷下载包,在顶部链接中,包括:
* optifine1.14.4 jar
* oCd 材质 zip
* seus-重置 光影 zip
* Ebin 光影 zip

## 安装游戏
1. 下载 bakaXL 后放到一个自己能找到的文件夹中,然后你可以建立一个桌面快捷方式
2. java版本需要java8,如果电脑没有(安装在默认的文件夹里)bakaXL提供下载,推荐安装到默认位置,这样bakaXL可以自动识别到
3. 设置好自己的内存使用,如果玩带光影的需要设置的较大(6G+),同时双显卡机器,显卡驱动中最好把javaw设置为使用独立显卡
4. 进入主界面选择使用正版账号或者盗版(无需验证)账号登录.
5. 进入bakaXL主界面之后可以点击开始游戏,选择下载[1.14.4]版本的"内核"
6. 下载完毕后就可以进入游戏了,只有第一次进入会有较长时间的验证游戏文件

ps : 你的所有下载的文件都会放在第一步中你建立的文件夹内

## 光影和材质(可选步骤)
* 材质
1. 下载自己喜欢的材质包(去顶部链接)
2. 请尽量选择1.14.4版本的材质包(与游戏版本相同)
3. 选项-资源包(把你下载的zip拖到材质包文件夹然后选择)
* 光影
1. 下载对应版本optifine,optinfine是光影加载器,因为mc默认不支持光影(去顶部链接)(这里是1.14.4)
2. 下载光影zip包,他是光影的本体
3. 下载好之后直接运行java程序,会让你选择.minecraft文件夹,就是安装游戏中第一步的文件夹中现在应该有了这个".minecraft文件夹",他会在你"下载游戏核心"的时候下载。
4. 选项-视频设置-光影，把下载的光影包zip拖进光影包文件夹，然后在游戏中选择即可。

## 链接kasusa的服务器
1. 选择多人模式
2. 选择"直连"或者"添加服务器"

kasusa的服务器地址是： 123.56.18.36 






