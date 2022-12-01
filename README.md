# [kasusa.github.io](https://kasusa.github.io/)

- [x] 博客
- [ ] awtrix--我的钟表
- [ ] mysql服务器来给我的所有其他作业用！
- [ ] 不错的[share菜单](https://www.freepik.com/blog/premium-ui-ux-icon-pack-download-for-free-in-the-next-24-hours/)，有空凑一个
参考链接（一些）
[html can do that？](https://dev.to/ananyaneogi/html-can-do-that-c0n)
用了里面的`Expand/collapse details`来做`get a life2`的下拉菜单

## vscode插件
1. Auto Rename Tag
2. HTMl Tag Wrapper
3. Live Server

## github拉取代理设置：
克隆本项目
```
git clone https://github.com/kasusa/java-installation.git
```

上代理（github）
```
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
```
消除代理（国内）
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```
仅仅给github上代理
```
git config --global http.https://github.com.proxy https://127.0.0.1:1080
git config --global https.https://github.com.proxy https://127.0.0.1:1080
```
把上面的only github 代理下了
```
git config --global --unset http.https://github.com.proxy 
git config --global --unset https.https://github.com.proxy
```