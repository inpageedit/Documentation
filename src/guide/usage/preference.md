# 偏好设置 preference

偏好设置的打开位置在工具盒中，可以看到齿轮图标，点击后可以打开 InPageEdit 偏好设置窗口

在这个弹出窗口可以：

- 修改默认编辑摘要
- 修改编辑习惯
- 查看个人的使用数据
- 装载需要的插件
- 找到项目的 GitHub 地址协助开发……

## 配置项

除了通过偏好设置窗口，您还可以通过在 InPageEdit 核心加载前修改全局对象上的`InPageEdit.myPreference`的值来配置偏好设置。

**示例**

```js
;(window.InPageEdit = window.InPageEdit || {}).myPreference = {
  editMinor: true,
}
```

### InPageEdit Core

| 键名                             | 类型                                                  | 预设                                | 说明                                                            |
| -------------------------------- | ----------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------- |
| editMinor                        | `boolean`                                             | `false`                             | 是否预设编辑为小编辑                                            |
| editSummary                      | `string`                                              | `i18n:<preference-summary-default>` | 预设编辑摘要                                                    |
| lockToolBox                      | `boolean`                                             | `false`                             | 是否总是自动展开右下角工具盒                                    |
| redLinkQuickEdit                 | `boolean`                                             | `true`                              | 是否为红链添加快速编辑按钮                                      |
| outSideClose                     | `boolean`                                             | `false`                             | 能否通过点击编辑器外部关闭                                      |
| watchList                        | `'nochange' \| 'preferences' \| 'watch' \| 'unwatch'` | `'preferences'`                     | 分别表示：不改变监视状态、按系统设置、总是监视、从不监视        |
| plugins                          | `string[]`                                            | `['toolbox.js', 'wiki-editor.js']`  | 欲使用的插件的 ID 列表，可用插件见 <https://ipe-plugins.js.org> |
| noConfirmEdit                    | `boolean`                                             | -                                   | 是否跳过点击保存时的确认弹窗                                    |
| noRedirectIfConvertedTitleExists | `boolean`                                             | -                                   | 快速重定向检测目标页面是否存在时是否检查变体页面 (简繁检测)     |

### Plugin - CodeMirror

| 键名                 | 类型      | 预设                | 说明                                       |
| -------------------- | --------- | ------------------- | ------------------------------------------ |
| codeMirrorTheme      | `string`  | `'solarized light'` | 定义 CodeMirror 插件所加载的主题           |
| codeMirrorThemeNoCSS | `boolean` | -                   | 是否不自动加载主题以便使用自定义的主题 CSS |
