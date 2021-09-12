# 下一代 InPageEdit

::: tip 新版本前瞻
本页面的内容是未来可能进行的更新，但不保证提到的所有功能与特性均会实装，可能产生的变化也不会尽数罗列于此，一切请以最终版本为准。
:::

## 关于下一代

下一代 InPageEdit —— 亦称 `inpageedit-next`，是基于 vue 技术、使用 TypeScript 完全重构的、面向现代浏览器的、以“标签页”为核心设计语言的、全新概念的单页面应用程序。

### 对于开发者

对于开发者来说，inpageedit-next 很可能会完全不兼容 v2 版本的 API，其核心技术也不再使用 jQuery，另外，我们使用 TypeScript 完全重构了应用程序的核心逻辑。

### 对于使用者

对于使用者来说，您可能会看到更漂亮的 UI 界面、体验到更易用的多线程编辑体验、感受到更可靠的稳定性，绝对不会有更高的上手难度，我们会保证您能重新体验到 v2 中已经实现的各种功能。

您可能无法在短时间内接受一些使用体验上的变化——例如多层弹窗可能会变成平行的多个标签页、UI 看起来会和 MediaWiki 的设计语言不那么搭——但相信您在使用一段时间以后会重新喜欢上 InPageEdit。

## Roadmap

- 基于 TypeScript 重新组织的应用逻辑
- 基于 VUE 3 实现的全新前端组件模块化
- 基于 naive-ui 组件库的全新 UI 界面
- 基于平行标签页(tab-view)的全新多线程编辑体验

## 立刻体验 or 参与开发

请参考我们的 GitHub 仓库：<https://github.com/inpageedit/inpageedit-next>

`inpageedit-next`将在近期发布第一个内部测试版本，在此之前，如果您有一定的前端开发经验，可以参考以下步骤自行编译体验最新版：

```sh
# Clone and checkout
git clone git@github.com:inpageedit/inpageedit-next
cd inpageedit-next
git checkout dev
# Resolve dependencies
yarn install
# Run dev server
yarn dev
```

## 碎碎念

### 关于恰饭

InPageEdit 目前是一款完全开源的前端插件，我（机智的小鱼君）以个人开发者的身份维护了它长达数年，这并不是一个很轻松的过程。

因此在将来我可能会开设打赏通道，如果您喜欢 IPE 且财力上有盈余，可以适当地对我进行打赏。

但是 InPageEdit 会一如既往完全免费地提供完整服务。
