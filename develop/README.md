# InPageEdit 开发指南

## 版本号方针

- 稳定版：`<main>.<secondary>.<patch>`
- 内部测试：`<main>.<secondary>.<patch>-alpha.<id>`
- 外部测试：`<main>.<secondary>.<patch>-beta.<id>`
- 预发布版：`<main>.<secondary>.<patch>-pre.<id>`

## tag 方针

- 最新稳定版：`latest`
- 最新测试版：`canary`

## 开发阶段

### 克隆仓库

`git clone <url>`

### 同步仓库

每次开发前从远程仓库同步是一个好习惯。

`git pull`

### 安装依赖

<infobox>
本项目使用<strong>yarn</strong>管理包依赖，如果您没有安装yarn，请使用<code>npm i -g yarn</code>安装
</infobox>

`yarn install`

### 测试

当阶段性开发完毕，需要使用工具测试项目，本项目使用`eslint`进行测试。

`yarn test`

### 构建

本项目通过`webpack`打包构建，输出文件位于`dist`文件夹

- UNIX 系统(bash)：`yarn build:linux`
- Windows 系统(cmd/powershell)：`yarn build:windows`

## 通过 Node.js Package 发布

<infobox>
本项目的 GitHub 的 master 分支收到推送时，会自动构建发布npm包
</infobox>
<infobox type="warning">
在推送前请记得先进行构建
</infobox>

### 推送

当测试通过，可以选择发布包。发布包的指令已经

- 推送稳定版：`npm run publish:stable`
- 推送测试版：`npm run publish:canary`

### 撤回版本

有时候错误的推送了未完成的代码，这时候需要撤回发布。

```bash
npm unpublish "mediawiki-inpageedit@<version>"
```

### 移动 tag

有时候会将测试版错误标记为稳定版发布，这时候需要将`latest`标记重新指向稳定版。

```bash
# 查看所有 tag
npm dist-tag
# 移动 tag
npm dist-tag add "mediawiki-inpageedit@<version>" <tag>
```
