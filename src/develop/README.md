# InPageEdit 开发指南

## 版本命名方针

版本号的格式为 `X.Y.Z` (又称`Major.Minor.Patch`)，递增的规则为：

- `X` 表示主版本号，当 API 的兼容性变化时，X 需递增。
- `Y` 表示次版本号，当增加功能时(不影响 API 的兼容性)，Y 需递增。
- `Z` 表示修订号，当做 Bug 修复时(不影响 API 的兼容性)，Z 需递增。

详细的规则如下：

- X, Y, Z 必须为**非负整数**，且**不得**包含前导零，必须按数值**递增**，如 1.9.0 -> 1.10.0 -> 1.11.0
- 当 API 的兼容性变化时，X 必须递增，Y 和 Z 同时设置为 0
- 当新增功能(不影响 API 的兼容性)或者 API 被标记为 Deprecated 时，Y 必须递增，同时 Z 设置为 0
- 当进行 bug fix 时，Z 必须递增
- 先行版本号(Pre-release)意味该版本不稳定，可能存在兼容性问题，其格式为：X.Y.Z-[类型].[非负整数]，例如`2.0.0-alpha.1`
- 版本号的排序规则为依次比较主版本号、次版本号和修订号的数值，如 1.0.0 < 1.0.1 < 1.1.1 < 2.0.0；对于先行版本号和开发版本号，我们规定 alpha < beta < pre < stable
- **注意**：版本一经发布，不得修改其内容，任何修改必须在新版本发布！

先行版本的类型如下：

- 内部测试：`alpha`
- 外部测试：`beta`
- 预发布版：`pre`

使用以下命令维护版本号：

```bash
# 检查版本号
yarn checkversion
# 跟新版本号
yarn updateversion x.x.x-xxx.x
```

## 标签（tag）方针

- 最新稳定版：`latest`
- 最新测试版：`canary`

## 代码格式方针

本项目使用`prettier`规范代码格式，在编撰完毕后，请使用`prettier --check <file>`检查格式是否符合标准，也可以使用`yarn prettier`直接格式化全部文件。

本项目的格式规范如下：

- 请使用空格缩进，缩进为 2 空格
- 请使用单引号或模板语法包裹字符串
- 请不要在行末添加分号
- 关键词与关键词之间需要使用空格隔开，例如`{ foo: 'bar' }`
- 任何进入 P4 阶段的语法都是允许的，我们不考虑低版本浏览器兼容

您可以在`.prettierrc.js`中找到相关配置，请不要更改此文件。

## 开发指引

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
在手动推送前请记得先进行构建
</infobox>

### 推送

当测试通过，可以选择发布包。可以试用一下指令推送包：

- 推送稳定版：`npm run publish:stable`
- 推送测试版：`npm run publish:canary`

注：推送测试版包的指令目前针对 Windows 系统设计；稳定版一般由 GitHub Actions 自动构建，一般情况下开发完毕后向源仓库发送 PR 即可。

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
