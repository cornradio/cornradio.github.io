# ubuntu的环境变量

最近我经常用redis数据库的作业,我是按照[educoder](https://www.educoder.net/tasks/3wtem9p5iyhv)的办法安装的`redis`，然后每次用redis都需要 ` cd redis-5.0.0/ `然后才能使用那些命令(启动服务器等)。

每次启动redis都要cd进目录,是很烦人的一件事情，于是我去搜索了关于ubuntu添加环境变量的教程，设置好之后打开命令行不需要cd进目录，即可直接使用redis的命令。

```sh
#通过修改.bashrc文件:
vim ~/.bashrc 
#在最后一行添上：
export PATH=/bin:/usr/bin:/usr/local/bin:/mnt/c/Users/kasusa/redis-5.0.0
```

其中每一个path都是用冒号`:`分隔的,我这就相当于在path中加入了如下四个位置
```
/bin
/usr/bin
/usr/local/bin
/mnt/c/Users/kasusa/redis-5.0.0
```
* 生效方法：（有以下两种）
  1. 关闭当前终端窗口，重新打开一个新终端窗口就能生效
  2. 输入“source ~/.bashrc”命令，立即生效
* 有效期限：永久有效
* 用户局限：仅对当前用户

