# API 文档

::: tip 施工中
本页面的内容正在施工中，请以最终版为准！
:::

安装 InPageEdit 时，将会在全局作用域下创建一个`InPageEdit`对象，该对象包含了 InPageEdit 的所有接口。

## `window.InPageEdit`

IPE 的全局对象。

请注意：该对象不是一个类，而是一个 `Record`，在调用时不需要使用`new`关键字。

## `InPageEdit.about(): void`

打开“关于&帮助”的模态框。

## `InPageEdit.api: Record<string, string>`

保留了有关 InPageEdit 的一些 API Endpoint 的信息。

## `InPageEdit.articleLink(elements: string | HTMLAnchorElement | JQuery<HTMLAnchorElement>): void`

为指定的链接元素添加“快速编辑”入口。

- `elements` 链接元素的 CSS 选择器或者 DOM 元素或者 jQuery 对象

## `InPageEdit.linksHere(title?: string): Promise<ApiResponseQueryPage[]>`

通过标题获取链入页面，并通过模态框展示列表。

- `title` 要获取链入页面的页面标题，默认为当前页面

## `InPageEdit.preference: Record<string, any>`

```ts
const preference: {
  _defaults: {
    doNotCollectMyInfo: boolean
    editMinor: boolean
    editSummary: string
    lockToolBox: boolean
    redLinkQuickEdit: boolean
    outSideClose: boolean
    watchList: string
    noConfirmEdit: boolean
    plugins: string[]
  }
  get(setting: string): object | string
  set(settingKey?: Record<string, any> | string, settingValue?: any): void
  modal(): void
}
```

## `InPageEdit.progress(title?: boolean | string): void`

操控载入中覆盖层。

- `title` 要显示的标题，
  - 若为`true`，将最后打开的载入中状态修改为已完成
  - 若为`false`，关闭最后打开的载入中覆盖层
  - 若为字符串，将最后打开的载入中标题修改为该字符串，如果没有打开的载入中覆盖层，则打开一个新的覆盖层

这个接口设计的比较脑瘫，之后可能会改。

## `InPageEdit.quickDelete(page: string, givenReason?: string): void`

打开快速删除的对话框。

- `page` 要删除的页面名称
- `givenReason` 预设的删除理由

## `InPageEdit.quickDiff(param: any)`

打开快速差异模态框，并通过给定参数获取差异内容。

- `param` MediaWiki diff API 入参

这个接口设计的比较脑瘫，之后可能也懒得改。

## `InPageEdit.quickEdit(options?: { page: string; revision?: number; section?: number; reload?: boolean })`

打开快速编辑的模态框。

- `options`

  - 不配置或者传入空值，以当前浏览的页面为目标页面
  - 传入字符串时，将字符串视为目标页面名
  - 传入 JSON 对象时，将会尝试与默认配置项进行合并后执行后续操作

- 可供配置的参数：
  - `options.page` {string} 页面名称，不能与`pageId`同时使用（预设为当前页面名）
  - `options.pageId` {number} 页面 ID，不能与`page`同时使用
  - `options.revision` {number} 若配置，将以提供的 revision 编号查找页面信息，可能忽略页面配置（预设为当前页面的版本 ID）
  - `options.section` {number|"new"} 若配置，编辑段落，段落为大于 0 且小于页面段落数的数字或者"new"（预设为 null，编辑全文）
  - `options.editMinor` {boolean} 若配置，取代小编辑的勾选状态
  - `options.editSummary` 若配置，取代编辑摘要的内容
  - `options.reload` {boolean} 若配置，取代保存后刷新页面的勾选状态

其余参数均不建议修改，否则可能导致故障。

这个模块开发的时间比较古早，变量的状态和代码指令都非常混乱，非常不建议随便改动。之后可能也不会再改了。

## `InPageEdit.quickPreview(params: Object, modalSize?: string, center?: boolean): void`

打开快速预览的模态框。

- `params` MediaWiki parse API 入参
- `modalSize` 模态框大小，可选值为`"small"`、`"medium"`、`"large"`，默认为`"large"`
- `center` 是否居中显示模态框，默认为`true`

## `InPageEdit.quickRedirect(type?: 'from' | 'to'): void`

打开快速重定向的模态框。

将当前页面重定向到其他页面，或者将其他页面重定向到当前页面。

- `type` 重定向类型，可选值为`"from"`和`"to"`，默认为`"to"`
  - `"from"` 将其他页面重定向到当前页面
  - `"to"` 将当前页面重定向到其他页面

好像是这样的，我也不记得了。

## `InPageEdit.quickRename(from: string, to: string): void`

打开快速重命名的模态框。

- `from` 要重命名的页面名称
- `to` 重命名后的页面名称

## `InPageEdit.specialNotice(): void`

这是啥啊，我也不记得了。

## `InPageEdit.version: string`

IPE 的版本号。

不建议你修改它的值，否则可能导致一些奇怪的问题。

## 一些奇怪的内部接口

你可能得通过钩子来访问这些接口，它们中有些根本就没有注册到全局对象上。

一般来说你最好不要使用这些接口，鬼知道会不会有什么奇怪的问题。

### `_analytics(featID: string): void`

详见[InPageEdit Analytics](./analytics/index.md)。

提交 IPE 的使用数据。

### `_msg: (msgKey: string, ...args: string) => string`

通过当前 mw 的语言环境获取消息。

- `msgKey` 消息键名
- `args` 消息参数，替代消息中的占位符($1, $2...)

该方法还能解析消息字符串中的简单 wiki 标记：

- `http/https`
- `[url text]`
- `[[pagename]]`
- `[[pagename|text]]`
- `{{PLURAL:count|singular|plural}}`
- `{{GENDER:gender|masculine|feminine|neutral}}`

它也接受以下 HTML 标签：

- `b`
- `br`
- `code`
- `del`
- `em`
- `i`
- `s`
- `strong`
- `span`
- `u`

允许以上 HTML 标签使用以下属性：

- `title`
- `style`
- `class`

### `_resolveExists: (page: string, reason?: { delete: string; edit: string } | string) => void`

为什么这是个内部接口？我也不知道。

打开解决目标页面已存在的问题的模态框。它提供两个按钮，一个是编辑目标页面，另一个是删除目标页面。

- `page` 目标页面名称
- `reason` 理由
  - 如果是字符串，同时作为编辑摘要和删除理由
  - `reason.delete` 删除页面的原因
  - `reason.edit` 移编辑摘要
