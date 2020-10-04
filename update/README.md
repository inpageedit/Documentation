# 更新日志

InPageEdit 是一个不断迭代的插件，开源的本质和~~社区~~作者的热情给予了 InPageEdit 源源不断的活力。

若想查看任意版本的更新详情，可以从目录里选择来快速跳转。

## 14.1.0+ <status status="dev">前瞻</status>

<status status="warning">内部测试</status>

<u>**预计**</u>发布日期: 2020 年 10 月中旬

<infobox type="info">
<p class="title">新版本前瞻</p>
<p>本段落的内容是未来可能进行的更新，但不保证提到的所有功能与特性均会实装，可能产生的变化也不会尽数罗列于此，一切请以最终版本为准。</p>
</infobox>

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

## 14.1.3

更新时间：2020 年 10 月 4 日 19:15:36

### 本次更新

- <status status="fixed"/> 修复了在新版本 MediaWiki (`1.35.0`) 上的一些问题

### New supported languages

- Hindī (hi) - [ThisIsACreeper0101](https://github.com/ThisIsACreeper0101)

## 14.1.2

- <status status="fixed"/> 技术更新，没有任何改动。

## 14.1.1

更新日期：2020 年 9 月 17 日 2:35:00

- <status status="fixed"/> 技术更新，修复了一些缓存导致的问题

## 14.1.0 `Stephanie_Dola`

更新日期：2020 年 9 月 10 日 20:19:20

### 本次更新

- <status status="info"/> 源代码仓库地址已从`Dragon-Fish/InPageEdit-v2`移动到`Wjghj-Project/InPageEdit`，这对于一般使用者不会造成影响
- <status status="updated"/> 个人设置窗口使用 Tabview 进行全新设计，刷新使用体验
  - <status status="new"/> 添加了统计信息展示，快去看看自己已经在 Wiki 上使用了多少次 InPageEdit 吧！
  - <status status="new"/> 添加了插件商店（Plugins Store），基于 InPageEdit 的扩展功能任君挑选！
    - 很多曾近的功能将转换为插件的形式，请前往挑选并开启
    - 未来将添加的部分功能将以插件的形式出现，例如你们一直期待的快速巡查、快速回退
- <status status="deleted"/> 版本更新提示弹窗被删减为了一次弹窗，并会在 10 秒后自动滚蛋，~~因为它确实是烦死人了~~
- <status status="fixed"/> 在快速编辑中，点击比较差异不再显示`undefined`

### 已知问题

- 在快速差异中，查看超出最后一次版本或者最新一次版本后继续点击可能会显示`undefined`，~~在修了在修了别催了~~

### New supported languages

- 日本語 (ja) - [Laclale](https://dev.fandom.com/wiki/User:Laclale)
- Português do Brasil (pt-br) - [Eduaddad](https://dev.fandom.com/wiki/User:Eduaddad)

## 14.0.3 `Shiro`

更新日期：2020 年 9 月 1 日 15:39:39

- <status status="info"/> 本次更新日志涵盖 _14.0.1_ ~ _14.0.3_ 的多个补丁
- <status status="fixed"/> 修复了旧入口文件（script.js）的~~阴间 BUG~~，现在调用旧地址的用户也能正常加载 InPageEdit，但推荐尽快修改引用地址为新地址
- <status status="fixed"/> 修复了大量由`_msg`模块导致的~~阴间 BUG~~
  - 例如：台湾正体`zh-tw`的使用者可以正常加载繁体中文语言包了
- <status status="new"/> 新功能**自定义语言包**
  - 自定义语言包分为**全局语言包**和**指定语言语言包**，两种包可以同时定义，其中指定语言语言包的优先级比全局语言包更高
  - **提示**：该功能仅为自定义文本显示提供方便，请不要以这种方式修正翻译文本，改进翻译请点击右上角的链接前往 GitHub
  - 示例：

```js
// 不要省略这一行
window.InPageEdit = window.InPageEdit || {};

/** 全局语言包 **/
InPageEdit.i18n = {
  "quick-edit": "✏️快编", // => 工具盒以及段落编辑中的快速编辑会变成“✏️快编”
};

/**
 * 指定语言语言包
 * 结构为 InPageEdit.i18n.<lang>.<msgKey>
 * 其中语言代码规范与MediaWiki系统保持一致
 */
InPageEdit.i18n = {
  en: {
    "quick-edit": "Fast edit",
  },
  ja: {
    "quick-delete": "💣ページ削除",
  },
};

/** 两种同时使用？我全都要。 **/
InPageEdit.i18n = {
  // 对简体中文使用者生效
  "zh-hans": {
    "quick-edit": "IPE快编",
  },
  // 对日文使用者生效
  ja: {
    "quick-edit": "IPEエディット",
  },
  // 对其他语言的使用者生效
  "quick-edit": "IPE Edit",
};
```

## 14.0.0 `Sora`

更新日期：2020 年 8 月 30 日 20:05:14

<infobox type="error">
<p class="title">破坏性变更</p>
<p>警告：此版本包含破坏性变更。</p>
</infobox>

- <status status="info"/> 这是一次技术更新，未添加新功能
- <status status="new"/> 插件入口文件地址已更改，请修改您的引用地址为：

<<< @/.vuepress/components/install.js

- <status status="new"/> 源代码现已采用模块化设计
  - InPageEdit 模块使用`CommonJS`规范，使用 Webpack 打包
- <span class="pornhub"><span>Breaking</span><span>changes</span></span> 钩子 `dfgh.i18n` 被删除
  - `_msg` 模块将不再使用 `dfgh.i18n` 钩子，它现在作为 `mw.hook('InPageEdit')` 的上下文传递
- <span class="pornhub"><span>Breaking</span><span>changes</span></span> `InPageEdit-v2` 将<ruby>重命名<rt>brand new</rt></ruby>为 `InPageEdit`
  - **不会**在此版本发布后的 3 个补丁内执行此变更
  - GitHub 仓库将进行重命名，将保留旧仓库到新仓库的重定向
  - 将保证即便使用插件的个人或 wiki 不采取任何应对措施也不会影响正常使用
- <status status="warning"/> 从此版本开始将使用新的版本命名方式
  - 旧版本将**不会**重新命名
  - [查看详情](/develop/index.html#)

## 2.13.4-7 (2.13.4 patch 7)

更新日期：2020 年 8 月 24 日 14:22:24

- <status status="new"/> 现在，使用 `quickRename` 或者 `quickRedirect` 功能时，如果目标页面已存在，将会弹出提示询问是否要编辑目标页面，如果有`delete`权限则会额外询问是否直接删除目标页面
- <status status="fixed"/> 修复了 <issues id="88"/>
- <status status="updated"/> 缓存了 MediaWiki API (`mwApi = new mw.Api()`)
- <status status="updated"/> 更新了`InPageEdit.api`中 about 和 update-logs 的 URL

## 2.13.4-6 (2.13.4 patch 6)

更新日期：2020 年 7 月 18 日 22:52:27

- <status status="updated"/> 针对 i18n 模块做了一些逻辑上的优化
  - 当版本更新时将会自动刷新翻译缓存
  - 您可以使用 url 参数`i18n=nocache`立即刷新翻译缓存
- <status status="fixed"/> 修复了一些翻译文本的错误
- <status status="fixed"/> 修复了 <issues id="80"/>

## 2.13.4-5 (2.13.4 patch 5)

更新日期：2020 年 7 月 4 日 04:41:57

- <status status="fixed"/> 修复了快速编辑段落时快速差异出现的问题 <issues id="73"/>
- <status status="fixed"/> 修复了 ssi_modal 的钩子
- <status status="updated"/> 重命名内部模块`msg`→`_msg`
- <status status="updated"/> 精简了部分 html 的结构
- <status status="updated"/> 对 `InPageEdit.preference.modal` 模块作了一些小调整
  - 新增两条翻译字符串 `preference-translate` `preference-discord`

## 2.13.4-4 (2.13.4 patch 4)

更新日期：2020 年 7 月 1 日 03:40:58

### 常规改动

- <status status="fixed"/> 修正了 2.13.4-3 版本针对 Toolbox 的一些小优化中的逻辑问题
- <status status="fixed"/> 修正了 2.13.4-3 版本针对 <issues id="60"/> 的改动所产生的问题
- <status status="updated"/> 更新了翻译文件的部分字符串
  - 更正部分翻译
  - 删除一些不再使用的字符串
  - 模态框中按钮的文字将全部显示大写字母（主要针对西文）
- <status status="fixed"/> 修复 <issues id="68"/>
- <status status="fixed"/> 修复 <issues id="67"/>
- <status status="fixed"/> **再一次**修复 <issues id="60"/>

### 技术性改动

- <status status="updated"/> 更新了内部模块 `msg()`
  - 不再需要使用 `replace()`，直接传递第二个及之后的参数即可替代占位符，参数数量不限

```javascript
/**
 * @example { "message-name": "$1是$2他爸爸。" }
 */
/** 旧代码 **/
msg("message-name")
  .replace("$1", "大明")
  .replace("$2", "小明"); // => 大明是小明他爸爸。
/** 新代码 **/
msg("message-name", "大明", "小明"); // => 大明是小明他爸爸。
```

## 2.13.4-3 (2.13.4 patch 3)

更新日期：2020 年 6 月 18 日 03:43:46

- <status status="info"/> 一些技术性改动
  - class 属性变更：`.editForm` → `.hideBeforeLoaded`
  - `InPageEdit.preview`模块优化
- <status status="fixed"/> 修复 <issues id="59"/>
  - 再次修复编辑冲突的问题
  - 这意味着现在应该不会再出现**你打开编辑器至你保存这段时间里其他用户做出的修改被覆盖掉**的情况了
  - ~~你知道吗：小鱼君在几个月前曾经尝试修复过一次这个故障，但是用于验证的时间戳填错了变量，本次补丁就是修复了这个变量（这个屑鱼就是逊啦）~~
- <status status="fixed"/> 不刷新页面保存编辑后，关闭标签页时不会再阻止你离开
- <status status="updated"/> 针对 Toolbox 的一些小优化
  - 如果锁定展开工具盒，下次加载网页时工具盒会自动展开
- <status status="fixed"/> 尝试完成了这个~~刻薄~~的要求 <issues id="60"/>
- <status status="deleted"/> 配置项`InPageEdit.myPreference = { "doNotShowLocalWarn": false }`不再生效，现在采用新的提醒方式，不会再有烦人的确认弹窗

## 2.13.4-2 (2.13.4 patch 2)

更新日期：2020 年 6 月 14 日 02:31:24

- <status status="fixed"/> 修复 <issues id="60"/> (<s>最速传说</s>)
- <status status="fixed"/> 修复 <issues id="43"/>
- <status status="info"/> <issues id="43"/> 提及的建议被采纳
  - 可以通过以下自定义选项实现不再跳出本地提示：`InPageEdit.myPreference = { "doNotShowLocalWarn": false }`
- <status status="info"/> <issues id="53"/> 中提到，红链也会出现“快速编辑”链接，使排版显得拥挤，这是 2.13.4 版本更新的功能
  - 但是现在可以通过以下自定义选项移除红链后的“快速编辑”：`InPageEdit.myPreference = { "redLinkQuickEdit": false }`

## 2.13.4-1 (2.13.4 patch 1)

更新日期：2020 年 5 月 21 日 00:22:36

- <status status="info"/> 技术层面
  - 使代码结构更规范(~~徒增字节~~)
- <status status="fixed"/> 修复了“显示一次后加载进度条便不会再显示”的故障
- <status status="fixed"/> 重新设计了**快速编辑**模块中**编辑工具栏**里的`标题`下拉菜单
  - 使用`<ul>`以及`<li>`替代原先的`<select>`，配合 CSS，使其更加美观，避免不同浏览器中的样式不统一
  - 部分系统(例如 iOS)中，调节`<select>`操作不便，此举顺便提高部分用户的使用体验

## 2.13.4 - Awesome Update

更新日期：2020 年 5 月 8 日 04:00:00

- <status status="info"/> 这是一次技术更新
  - 整理了**用户设置**模块保存设置以及读取设置的逻辑
  - 采用 Google 代码规范重新排版，不伤眼，孩子很喜欢
- <status status="new"/> 哦，天哪，是 **<i class="icon icon-font-awesome"></i> FontAwesome**™
  - 使用 FontAwesome 替代了 Material Icons
- <status status="fixed"/> <issues id="26"/>
  - 这个存在了好几个大版本的 Bug 将被修复
- <status status="fixed"/> <issues id="16"/>
  - 采纳了这个建议

## 2.13.3

更新日期：2020 年 4 月 22 日 20:49:11

- <status status="new"/> Brand new **InPageEdit Analysis 3.0**™
  - 使用 MongoDB 非关系型数据库技术技术全新重制的 IPE 数据统计系统，震撼上新
  - \*图形界面正在设计中
- <status status="fixed"/> 修复 <issues id="40"/>
- <status status="fixed"/> 重新修复 <issues id="26"/>
- <status status="test"/> 尝试解决 <issues id="39"/> 的方案正在等待效果反馈

## 2.13.2

更新日期：-

- <status status="deleted"/> 用英文写更新笔记太麻烦了，从该版本开始用中文记载更新笔记
- <status status="info"/> 这是一次技术更新
  - 没有添加新功能
  - 由于 NPM 打包不允许 4 位深度的版本号，因此我们更换了版本号，仅此而已

## 2.13.0.2

Release date: April 17, 2020 02:19 (CST)

- <status status="fixed"/> Update _About InPageEdit_ and _Update Logs_(AKA Version Info) modules.
- <status status="fixed"/> Fixed <issues id="26"/>

## 2.13.0.1(build_c052a80)

Release date: -

- Security update
- <status status="deleted"/> Hook `dev.i18n` modified to `dfgh.i18n`. Prevent contamination of Fandom devwiki variables.

## 2.13.0(build_2795)

**Far From Enough, Continue Cup**
Release date: 17:14, 9 April 2020 (CST)

- <status status="new"/> Quick-Edit edit toolbar is available
  - Designed similar to 2010 Wiki Editor
  - You can add extra custom buttons.
- <status status="deleted"/> `MyInPageEditPreference` variable no longer used. Please use `InPageEdit.myPreference` instead.

```javascript
/** Demo to replace old code **/
/* Old */
window.MyInPageEditPreference = {
  outSideClose: true,
  editMinor: false,
  editSummary: "[InPageEdit] $section没有编辑摘要$oldid",
};
/* New */
window.InPageEdit = window.InPageEdit || {}; // Keep this line
InPageEdit.myPreference = {
  outSideClose: true,
  editMinor: false,
  editSummary: "[InPageEdit] $section没有编辑摘要$oldid",
};
```

## 2.12.0.4(build_2686)

Release data: 00:11, 6 April 2020 (CST)

- <status status="fixed"/> When you are editting page section, IPE can display the name of the section correctly and jump to the anchor point after saving.
  - Now `$section` placeholder in edit summary will replace with `/* Section title */`. Just like the original MW editor. (**Finally!!!**)
- <status status="fixed"/> Fixed a logic issue. When you open another editor in the editor (eg. via Page detail links). Saving will no longer reload the page.
- <status status="fixed"/> Fixed the logic of fetch editnotice.

## 2.12.0.3(build_2629)

Release date: 02:48, 5 April 2020 (CST)

- <status status="fixed"/> Fixed the logic to get the last edit timestamp of the page. Edit conflict issues should be encountered less often.
- <status status="fixed"/> Fixed the logic of whether the editarea is modified.

## 2.12.0.2(build_2619)

Release date: 01:16, 4 April 2020 (CST)

- <status status="fixed"/> Fixed https://github.com/Dragon-Fish/InPageEdit-v2/issues/4

## 2.12.0.1(build_2610)

Release date: 00:11, 4 April 2020 (CST)

- <status status="fixed"/> Fixed https://github.com/Dragon-Fish/InPageEdit-v2/issues/5
- <status status="fixed"/> Fixed https://github.com/Dragon-Fish/InPageEdit-v2/issues/2#issuecomment-607441343

## 2.12.0(build_2575) - The Matryoshka Update

Release date: 01:37, 2 April 2020 (CST)

- <status status="new"/> New functions in quick edit editor: page details list!
  - Show the list of templates and images on the page!
  - You can easily edit the templates or view images via the list.

## 2.11.0(build_2545) - Just Hooks Update

Release date: 18:15, 1 April 2020 (CST)

- <status status="new"/> Quick Delete launched.
- <status status="fixed"/> Rewrote the logic of move pages, delete pages, and redirect pages modules. In addition, it is now possible to add reasons for your action.
- <status status="new"/> Technical update:
  - Add module alias: `InPageEdit.quickEdit`, `InPageEdit.quickRename`, `InPageEdit.quickRedirect`, `InPageEdit.quickDelete`. **ATTENTION**: Old module name will be archive soon.
  - Add mw.hook for InPageEdit. You can now write extended functions for IPE more easily. (eg. `mw.hook('InPageEdit.quickEdit').add(myFunctions);`)

## 2.10.0.1(build_2519)

Release date: 12:03, 1 April 2020 (CST)

- <status status="fixed"/> Minor bug fixed

## 2.10.0(build_2417) - The Structure Tech Update

Release date: 22:12, 28 March 2020 (CST)

- It's more like a technical update. No new functions.
  - We updated the rendering mode of HTML to make it easier to maintain.
  - We updated our method to get the version number.

## 2.9.1(build_2369)

Release date: 00:53, 28 March 2020 (CST)

- <status status="fixed"/> Add i18n cache mechanism. Improve loading speed.
- <status status="fixed"/> Fixed styles for multiple components.
  - eg. checkbox, header, icons

## 2.9.0.1(build_2319) - World Wild Friends Update

Release date: 10:14, 26 March 2020 (CST)

- <status status="fixed"/> Fixed i18n cross-domain reference failure.

## 2.9.0(build_2311)

Release date: -

- <status status="new"/> Now InPageEdit has i18n module. Translate it here: http://dev.fandom.com/wiki/MediaWiki:Custom-InPageEdit-v2/i18n.json

## 2.8.1(build_2236)

Release date: 02:41, 21 March 2020 (CST)

- <status status="new"/> Find and Replace!
  : It took me looooooooong time to write this function. So, hope you like it.

## 2.8.0.1(build_2213)

Release date: 00:27, 18 March 2020 (CST)

- <status status="new"/> InPageEdit advanced edittools coming soon.
- <status status="fixed"/> User feedback that edit notice area takes up too much space. So it will be hide in the beginning.

## 2.8.0(build_2026)

Release date: 21:45, 29 January 2020 (CST)

- <status status="fixed"/> InPageEdit Analysis module will no longer trigger error codes
- <status status="fixed"/> InPageEdit will now register global functions

## 2.7.1.1(build_1960)

Release date: 20:21, 7 January 2020 (CST)

- <status status="fixed"/> Fixed a bug that cause IPE not work

## 2.7.1(build_1948) - The Machine

Release date: 18:01, 7 January 2020 (CST)

- <status status="new"/> We add a new feature:
  - The plugin adds features that may collect your information. The information that may be collected is: The wiki you edited, the number of times you saved using IPE, the number of times you used other features of IPE, and the date you used IPE
  - We **DO NOT** collect any of your personal cookies and privacy information, and all information collected will be public
- <status status="fixed"/> We changed InPageEdit-Analysis's address to https://doc.wjghj.cn/InPageEditAnalysis/

## 2.6.4(build_1897)

Release date: 23:41, 4 January 2020 (CST)

- <status status="test"/> We started testing a new feature:
  - The plugin adds features that may collect your information. The information that may be collected is: The wiki you edited, the number of times you saved using IPE, the number of times you used other features of IPE, and the date you used IPE
  - We **DO NOT** collect any of your personal cookies and privacy information, and all information collected will be public
  - <s>You can find all informations here: https://doc.wjghj.cn/InPageEditApi/</s>

## 2.6.3.5(build_1816)

Release date: 15:29, 11 December 2019 (CST)

- <status status="fixed"/> Fixed a bug where the newest version of MediaWiki Recentchanges auto-refresh feature overwrites ipe-quick-diff module

## 2.6.3.4(build_1767)

Release date: 18:10, 8 December 2019 (CST)

- <status status="fixed"/> Redesigned IPE-Toolbox
- <status status="deleted"/> **We no longer support InPageEdit-v2 compressed edition** (<s>https://common.wjghj.cn/js/InPageEdit-v2/min</s>)

## 2.6.3.3(build_1709)

Release date: 16:18, 5 December 2019 (CST)

- <status status="fixed"/> Rewrite quick-edit module
- <status status="fixed"/> Fixed a bug that cause magic words such like <code>{{PAGENAME}<!---->}</code> not work in quick-edit edit notice
- <status status="fixed"/> Now, if you don't have permission to edit the page, you will receive a notice message and can't submit content
- <status status="fixed"/> Adjusted the load order of CSS, it is more easier to override basic styles with your personal CSS now

## 2.6.3.2(build_1659)

Release date: 05:00, 5 December 2019 (CST)

- <status status="fixed"/> Minor bug fix

## 2.6.3.1(build_1536)

Release date: 17:26, 2 December 2019 (CST)

- <status status="fixed"/> Minor bug fixed: Now quick-diff modal will display at top when quick-edit from quick-diff module

## 2.6.3(build_1517) - Kimi no namai

Release date: 17:20, 30 November 2019 (CST)

- <status status="new"/> New function release: Rename page(Move)!!!
  - Try it in your IPE toolbox~
- <status status="fixed"/> Fixed a bug that cause modal not close after quick redirect

## 2.6.2.3(build_1467)

Release date: 14:03, 25 November 2019 (CST)

- <status status="fixed"/> Now the button in quick diff module lead you to the right page

## 2.6.2.2(build_1459)

Release date: 22:32, 24 November 2019 (CST)

- <status status="fixed"/> Fixed a bug that cause in editor diff can't work

## 2.6.2.1(build_1444)

Release date: -

- <status status="deleted"/> Merged "关于&帮助" button from ipe-toolbox to ipe-preference module

## 2.6.2(build_1432)

Release date: 21:33, 24 November 2019 (CST)

- <status status="new"/> We complete quick diff module
  - Now quick diff shows right info
  - Now you can jump to next or prev version and quick view diff via quick diff module
- <status status="fixed"/> We fixed the quick edit summary text
  - Now `\$oldid` will shows like `<nowiki>(编辑自[[Special:Diff/oldid]])</nowiki>`
- <status status="fixed"/> We fixed checkbox style
  - Made inline width to 1px
  - Hover style \** Transition *thanks to [https://minecraft-zh.gamepedia.com/User:Dianliang233 Dianliang233] :)
- <status status="new"/> <s>Now you can use compressed version via https://common.wjghj.cn/js/InPageEdit-v2/min</s><sup>**DO NOT USE**</sup>

## 2.6.1(build_1238)

Release date: 14:35, 23 November 2019 (CST)

- <status status="new"/> Script now run strict mode
- <status status="new"/> <s>We are now using new version number naming rule: </s>
  - V2 <code>Main.Primary.Secondary(build\_<i>&lt;revision-id&gt;</i>)</code>
  - [https://common.wjghj.cn/s/C Canary edition] <code>Main.Primary.Secondary(canary\_<i>&lt;revision-id&gt;</i>)</code>

## 2.6.0(build_1196)

Release date: 00:32, 23 November 2019 (CST)

- <status status="new"/> We rewrote quick diff module
  - Rename module `InPageEdit.viewDiff()` → `InPageEdit.loadQuickDiff(CompareApiJson)`
  - Add module `InPageEdit.quickDiff()`
- <status status="new"/> You can now quick view diff on history page!
- <status status="new"/> We redesigned the quick edit editor
  - More OOUI style (LOL)
- <status status="new"/> You can now view difference between your code and old code when you are editting!

## 2.5.3(build_1094)

Release date: -

- <status status="deleted"/> We are no longer support skin setting.
  - We are now using the new OOUI-like skin. You can customize the look of the IPE on your personal css page.
- <status status="fixed"/> New OOUI style progress bar: <html><button class="btn btn-primary" onclick="$('#ipe-progress-sample').toggleClass('done')">TOGGLE</button></html>(<s>我可以玩一年</s>)
  - <div id="ipe-progress-sample" class="ipe-progress" style="width: 50%display: block !important;"><div class="ipe-progress-bar"></div></div>

## 2.5.2(build_944)

Release date: -

- <status status="new"/> We are now using the new OOUI-like skin!
  - <s>You can still load old Wikia-like designed skin via `var InPageEditSkin = 'wds';`</s>

## 2.5.1(build_876)

Release date: -

- <status status="fixed"/> The page content is no longer overwritten when an editing conflict occurs

## 2.5.0(build_821)

Release date: 19:59, 16 November 2019 (CST)

- <status status="new"/> This is a big update, we replaced the ''cookie'' function with ''localStorage''
  - You can manually delete old cookies or wait for 60 days to expire automatically
- <status status="new"/> You can turn off the function of clicking outside of edit window to close via setting

## 2.4.1(build_783)

Release date: 16:03, 16 November 2019 (CST)

- <status status="fixed"/> Fixed a bug that caused the display title in the preview as **API**
- <status status="fixed"/> Fixed a bug that caused personal local settings(`MyInPageEditPreference`) not working

## 2.4.0(build_764)

Release date: 01:55, 12 November 2019 (CST)

- <status status="fixed"/> This is not important update for most of you, we use a new version number to remind you that we replaced some function names to make the module more holistic
  - `InPageEdit()` → `InPageEdit.edit()`
  - `InPageEditRedirect()` → `InPageEdit.redirect()`
  - `InPageEditDeletepage` → `InPageEdit.deletepage()`
  - `InPageEditRename()` → `InPageEdit.renamepage()`
  - `InPageEditPreference()` → `InPageEdit.preference()`
  - `InPageEditViewDiff()` → `InPageEdit.viewDiff()`
  - `InPageEditSectionLink()` → `InPageEdit.articleLink()`

## 2.3.1(build_747)

Release date: 00:16, 11 November 2019 (CST)

- <status status="new"/> New function: Quick view page diff!
  - Click diff links from ''Special:Recentchanges'' or ''action=history'', make a quick view of the diff log

## 2.3.0.2(build_616)

Release date: 21:28, 6 November 2019 (CST)

- <status status="fixed"/> This is not important update for most of you, we use a new version number to remind you that we have modified some css selectors
  - Main editor window
    - Add `.ipe-editor .timestamp-''<timestamp>''`
    - `#editPage` → `.editPage`
    - `#editArea` → `.editArea`
    - `#editSummary` → `.editSummary`
    - `#editMinor` → `.editMinor`
  - Quick redirect window
    - Add `.quick-redirect`
  - Quick delete window
    - Add → `.quick-deletepage`
  - Quick rename window
    - Add `.quick-renamepage`
  - About & Help window
    - Add `.in-page-edit`

## 2.3.0.1(build_568)

Release date: 12:52, 5 November 2019 (CST)

- <status status="fixed"/> Simplify codes
- <status status="fixed"/> Fixed a bug that cause in-article edit link save error

## 2.3.0(build_488)

Release date: 23:03, 3 November 2019 (CST)

- <status status="new"/> Now you can save your custom preferences by clicking the gear icon(<span class="material-icons">settings</span>) in the InPageEdit Toolbox!
  - Save your prefer edit summary, who doesn't like to be cool and maverick?
  - Default set all edits as minor edit

## 2.2.2.1(build_460)

Release date: 21:49, 2 November 2019 (CST)

- This is not a regular update, we use a new version number to remind you that we have replaced the license agreement
- \*Some new functions coming soon (•‾̑⌣‾̑•)✧˖°

## 2.2.2(build_420)

Release date: 20:45, 1 November 2019 (CST)

- <status status="new"/> Quick redirect now released! Check the InPageEdit Toolbox on right bottom of the page!

## 2.2.1(build_382)

Release date: 16:53, 1 November 2019 (CST)

- <status status="new"/> The new design: InPageEdit Toolbox! Checking all ipe tools on right bottom of the page!
- [COMING_SOON] Quick redirect & Quick rename page...

## 2.2.0(build_350)

Release date: 02:10, 1 November 2019 (CST)

- <status status="new"/> New design with [https://fandomdesignsystem.com Fandom Design System]!
- <status status="deleted"/> No longer support load via URL param

## 2.1.2.1(build_336)

Release date: -

- <status status="fixed"/> Simplify json codes

## 2.1.2(build_330)

Release date: 19:51, 25 October 2019 (CST)

- <status status="new"/> Use the new way to get plugin version info

## 2.1.1(build_318)

Release date: 20191025

- <status status="new"/><status status="test"/> <s>Load via URL param</s><sup>↑ deleted, see [[#2.2.0(build_350)|Ver.2.2.350]]</sup>

## 2.1.0.1(build_306)

Release date: 20191025

- <status status="fixed"/> Replace syntax with mw resource loader

## 2.1.0(build_298)

Release date: 20191019

- <status status="new"/> Now support edit history
- <status status="fixed"/> Posting error will show you the error code

## 2.0.10(build_279)

Release date: 20191018

- <status status="new"/> Now support minor edit

## 2.0.9

Release date: unknown

- <status status="new"/> Now support multi skins

## 2.0.8

Release date: unknown

- <status status="new"/> Now support preview

## 2.0.7

Release date: unknown

- <status status="fixed"/> Multi bugs fixed, content can be published now

## 2.0.0

Release date: unknown

- <status status="new"/> Alpha release, rewrite InPageEdit via ssi modal plugin

## Earlier version

InPageEdit 1.0 no longer updated
