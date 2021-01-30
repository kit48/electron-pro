<h1 align="center">Electron Pro</h1>

<div align="center">

基于 [Umi](https://umijs.org/) 和 [TypeScript](https://www.typescriptlang.org/) 的 [Electron](https://www.electronjs.org/) 模板

</div>

<img alt="Electron-Pro-Snapshot" src="static/snapshot.svg" width="100%" />

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

## Q & A

### 打包时资源下载过慢或超时

设置资源镜像地址，参考 [.npmrc](./.npmrc#L1)

### 路由模式的选择

只能使用 hash 路由，打包后通过静态文件访问，history 路由不可正常使用。

### 自定义打包文件

详见 electron-builder 官方文档关于 [Application Contents](https://www.electron.build/configuration/contents) 的说明。
