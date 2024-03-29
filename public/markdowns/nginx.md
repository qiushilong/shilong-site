## Nginx

Nginx 是一款轻量级的 HTTP 服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的 IO 性能，时常用于服务端的反向代理和负载均衡。

- 正向代理
- 反向代理
- 负载均衡
- 动静分离



## 正向代理

正向代理需要在客户端配置代理服务器，访问的还是原来的网址 google.com。（以翻墙为例）

![](/markdowns/img/正向代理.png)



## 反向代理

暴露的是代理服务器地址，隐藏了真实服务器的 IP 地址。

![](/markdowns/img/反向代理.png)



## 负载均衡

增加服务器的数量，然后将请求分发到各个服务器上。

![](/markdowns/img/负载均衡.png)



## 动静分离

将一些静态资源通过 nginx 直接获取，而不再请求后端，避免后端压力过大。

![](/markdowns/img/动静结合.png)


```javascript
let str = 'hello world'
console.log(str)
```