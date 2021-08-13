# 版本预告

<infobox type="info">
<p class="title">新版本前瞻</p>
<p>本页面的内容是未来可能进行的更新，但不保证提到的所有功能与特性均会实装，可能产生的变化也不会尽数罗列于此，一切请以最终版本为准。</p>
</infobox>

## 14.2.0

<status status="warning">内部测试</status>

**预计**发布时间：不知道。

<infobox type="info">
<p class="title">兼容性变更</p>
<p>本次更新有 API 变动，但所有变动均向前兼容。</p>
</infobox>

<infobox type="info">
<p class="title">本页面是开发版的更新页面</p>
<p>本页面的内容会随开发阶段而变动。</p>
<p>页面记录的内容均为开发阶段内容，不保证与最终发布的版本一致。</p>
</infobox>

### 功能更新

- <status status="new"/> 全新的安装向导
  - 第一次安装 InPageEdit 时，将会向您显示安装向导，以便完成一些配置
- <status status="new"/> 新功能：linksHere 快速链入页面
- <status status="updated"/> 我们将预设不使用 InPageEdit Analysis 对您的使用数据进行收集
  - 当然，我们没有删除这个功能，如果您愿意与其他人分享编辑数据，可以随时从设置里打开数据收集功能

### 技术更新

- <status status="new"/> 新的方法`beforeInstall`，该方法将暴露给 API 接口
- <status status="new"/> 新的模块与 API 接口`linksHere`
- <status status="new"/> 新的模块`stepModal`
- <status status="new"/> 模块`_elements`新增 UI 结构：`$button`、`$checkbox`
- <status status="updated"/> 模块`preference`更新，`preference.default` → `preference.defaultSettings`
  - 向前兼容，但建议更换为新的键名，防止抑郁
- <status status="updated"/> 模块`quickEdit`中的部分功能被拆分为了独立的模块
  - `usedFiles`
  - `usedTemplates`

## Roadmap

<status status="warning">内部测试</status> <status status="dev">前瞻</status>

- <status status="new"/> 快速巡查功能、快速回退功能
  - 在用户反馈中这两个功能的需求呼声较高，因此会考虑优先实装
- <status status="updated"/> 为钩子（hook）添加上下文
- <status status="updated"/> `快速编辑 → 编辑工具条`考虑对`MediaWiki:Edittools`进行支持
- <status status="updated"/> 快速预览功能将会有全新的设计风格和实现逻辑，使页面预览更贴近最终效果
  - 这种新的风格我愿称之为「沉浸式预览界面」
  - 在预览编辑时，将替换文章中的内容，能够让使用者直观感受页面的最终效果
- <status status="fixed"/> 修复 GitHub issues 已罗列的众多问题
  - 移动版皮肤导致的种种问题仍旧不会被优先考虑，~~因为它太烦人了~~
  - 有关编辑提示在子页面的问题可能会在后续补丁中进行修复，~~因为它也太烦人了~~
- <span class="pornhub"><span>恰</span><span>饭</span></span> ~~随着对 InPageEdit 维护的时间越来越久，逐渐发现这个过程很伤肝，为了给自己凑钱买一些生发水，可能会考虑开设打赏通道（SMJBWY）~~
