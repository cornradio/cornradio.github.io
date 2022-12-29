# [cornradio.github.io](https://cornradio.github.io/)
参考：
[html can do that？](https://dev.to/ananyaneogi/html-can-do-that-c0n)

## github代理设置：

```shell
# 查看所有的gitconfig
git config --global -l
# 解决报错 http2
git config --global http.version HTTP/1.1

# 全局代理
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
# 全局取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 一次性代理
git config http.proxy 127.0.0.1:7890
git config https.proxy 127.0.0.1:7890
git config http.version HTTP/1.1

#git pull
cd C:\Users\J\Documents\GitHub\cornradio.github.io
git pull
cd C:\Users\J\Documents\GitHub\cornBlog-bootstraptheme
git pull

#git push
cd C:\Users\J\Documents\GitHub\cornradio.github.io
git add .
git commit -m "auto commit"
git push --verbose

cd C:\Users\J\Documents\GitHub\cornBlog-bootstraptheme
git add .
git commit -m "auto commit" --verbose
git push --verbose
```
