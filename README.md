<h1 align="center">Electron Pro</h1>

<div align="center">

基于 [Umi](https://umijs.org/) 和 [TypeScript](https://www.typescriptlang.org/) 的 [Electron](https://www.electronjs.org/) 模板

</div>

<img alt="Electron-Pro-Snapshot" src="static/snapshot.svg" width="100%" />

## 安装

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

## 开发

```shell
$ yarn start
```

## 打包

```shell
$ yarn run pack
```

如果想打包成一个 dmg 或 zip 文件，可以以下命令实现

```shell
$ yarn run dist
```
