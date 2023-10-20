# InPageEdit 开发指南

## 系统要求

- Node.js >= 18.16.0
- Git

## 开发指引

这个段落将指导您如何在本地开发与打包 InPageEdit (以下简称 IPE)。

### 克隆代码仓库

IPE 使用 Git 进行版本控制，您可以使用以下命令克隆代码仓库到本地：

`git clone git@github.com:inpageedit/inpageedit-v2.git`

我们强烈建议您新建一个分支，例如`yourname/dev`，并切换到该分支进行开发：

`git checkout -b yourname/dev`

另外，每次开发前从远程仓库的主分支同步是一个好习惯：

`git merge origin/master`

### 依赖管理

IPE 使用 **pnpm** 进行包管理。如果您没有安装 pnpm，可以使用`npm i -g pnpm`安装。

`pnpm install`

### 自动重新编译

使用 `pnpm dev` 启动开发服务器。

在 MediaWiki 中引用 `http://127.0.0.1/InPageEdit.js` 载入本地的 IPE 脚本。当你修改 IPE 的源码时，打包器会自动重新编译该文件。

目前 IPE 的开发过程中还不支持 HMR (模块热更新)，在修改源码后请手动刷新网页加载最新的内容。

### 测试

我们强烈建议您在提交代码前使用使用 eslint 进行代码检查：

`pnpm test`

虽然 eslint 并不能检查诸如逻辑错误之类的高级问题，但是它可以检查出一些常见的语法错误或者代码风格问题，例如哪里少了个缩进、哪里多了个空格、哪个变量导入了但是没有引用等等。

### 打包

使用以下命令打包 IPE：

`pnpm build`

IPE 当前使用 vite 进行打包，打包后的文件位于`dist`目录下。

您不必在打包前手动清理`dist`目录，执行 build 命令时会清理该目录。

## 版本命名方针

IPE 的版本号遵循[语义化版本](https://semver.org/lang/zh-CN/)规范。

额外的，版本号可能还包含一个以`-`分隔的先行版本后缀，用于标记非稳定版本。先行版本号的格式为：先行版本标签+`.`+正整数。末尾的正整数以 0 开始，每次发布时递增。

这是一个附带先行版本后缀的版本号的例子：`1.0.0-alpha.0`。

我们规定以下先行版本标签：

- `alpha` 内部测试
  - alpha 版本一般是作者对新添加的特性进行技术验证时使用，这些特性在线上环境和本地环境可能存在不兼容的情况，或者存在严重的 bug。
- 外部测试：`beta`
  - beta 版本一般是作者分发给愿意参加测试的用户使用，它们可能包含一些未完成的特性，或者存在一些已知的 bug。
- 预发布版：`pre`
  - pre 版本一般与最终版本相同，它们不会再包含新的特性，但是可能包含一些 bug 修复。

## 标签（tag）方针

- 最新稳定版：`latest`
- 最新测试版：`canary`

## 代码风格方针

IPE 使用`prettier`规范代码格式，在编撰完毕后，请使用`prettier --check <file>`检查格式是否符合标准，也可以使用`pnpm prettier`直接格式化全部文件。

IPE 的风格配置可以在`.prettierrc.js`中找到，请不要更改此文件。

## 版本发布指引

### 推送

使用以下指令发布新的版本：

- 推送稳定版：`npm publish`
- 推送测试版：`npm publish --tag canary`

您不必在发布前进行一次打包，因为我们配置了 prepublish 脚本，它会在每次发布前完成准备工作。

但是，记住在发布前更新版本号，否则可能会导致发布失败。

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
