## 前端路由刷新 404 问题

网上的文章基本都是针对打包完（生产环境）实际使用的时候的处理办法，没有提到开发时本地的情况。

### 问题原因

本质原因其他的文章里已经说的很明确了，就是前端控制路由时，访问的服务器本身没有相应的静态资源，导致 404（本地 express 就是 can not Get bulabulabula）.

### 解决思路

解决思路上其实本地开发和生产环境有相同也有不同的方案。

#### 本地开发

本地开发有几种思路

- 直接使用 webpack 的 devServer，通过 historyApiFallback 的 rewrites 控制。
- 使用模板引擎返回硬盘文件
- 像我一样，webpack 不是把开发时编译好的文件塞到内存里去了吗，那我就去内存里拿出来给服务器

关于最后一种，代码如下：

```javascript
app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.write(
    compiler.outputFileSystem.readFileSync(
      path.resolve(process.cwd(), 'dist/index.html'),
      'utf-8'
    )
  );
  res.end();
});
```

看到 compiler.outputFileSystem 是不是觉得我去，感觉啥都能干了！当然这种办法看起来就不优雅。。。

#### 生产环境

生产环境可以直接采用网上文章所说的

```javascript
app.get('*', (req, res) => {
  res.sendfile(path.resolve(process.cwd(), 'dist/index.html'));
});
```
