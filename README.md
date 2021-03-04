<h1 align="center">Electron Pro</h1>

<div align="center">

基于 [Umi](https://umijs.org/) 和 [TypeScript](https://www.typescriptlang.org/) 的 [Electron](https://www.electronjs.org/) 模板

</div>

<img alt="Electron-Pro-Snapshot" src="static/snapshot.svg" width="100%" />

## Features

✔️ 页面切换动画<br /> ✔️ 渲染进程开发环境自动刷新<br /> ✔️ 主进程开发环境自动刷新<br />

## 如何使用？

### 安装

通过 git 克隆仓库到本地

```shell
$ git clone https://github.com/kit48/electron-pro.git
```

安装依赖

> [Yarn](http://yarnpkg.com/) is [strongly](https://github.com/electron-userland/electron-builder/issues/1147#issuecomment-276284477) recommended instead of npm.
>
> by https://www.electron.build/#installation

```shell
$ yarn
```

### 开发

```shell
$ yarn start
```

### 打包

```shell
$ yarn run pack
```

如果想打包成一个 dmg 或 zip 文件，可以以下命令实现

```shell
$ yarn run dist
```

## 致谢

- [wangtianlun/umi-electron-typescript](https://github.com/wangtianlun/umi-electron-typescript)

## Q & A

### [主进程开发环境下自动重启](https://github.com/kit48/electron-pro/issues/3)

收集多方资料，尝试了 [electron-reloader](https://github.com/sindresorhus/electron-reloader) 和 [electron-reload](https://github.com/yan-foto/electron-reload) 都以失败告终，最后看到了一个这样的[答案](https://stackoverflow.com/a/39250782/8335317)：

`nodemon --watch \* --exec "electron ."`

沿着这个思路成功解决。

### yarn 的使用

由于国内环境的原因，需要使用国内镜像源或者启用代理，参考 [.yarnrc](./.yarnrc)。

### 打包时资源下载过慢或超时

设置资源镜像地址，参考 [.npmrc](./.npmrc#L1)。

### 路由模式的选择

只能使用 hash 路由，打包后通过静态文件访问，history 路由不可正常使用。

### 自定义打包文件

详见 electron-builder 官方文档关于 [Application Contents](https://www.electron.build/configuration/contents) 的说明。

### preload 脚本配置

已在 package.json 中配置，详见 electron-webpack 官方文档[配置说明](https://webpack.electron.build/configuration)。
