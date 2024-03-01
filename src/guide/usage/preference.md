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

### Plugin - CodeMirror 5

| 键名                 | 类型      | 预设                | 说明                                                                                                                                                   |
| -------------------- | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| codeMirrorTheme      | `string`  | `'solarized light'` | 定义 CodeMirror 插件所加载的主题，所有可用的主题可以在 [这里找到](https://www.jsdelivr.com/package/npm/codemirror?tab=files&version=5.65.1&path=theme) |
| codeMirrorThemeNoCSS | `boolean` | -                   | 是否不自动加载主题以便使用自定义的主题 CSS                                                                                                             |

### Plugin - CodeMirror 6

CodeMirror 6 插件的配置方法与其他设置不同。

方法一：插件会向页面中的某个菜单（取决于 MediaWiki 皮肤）添加一个 `CodeMirror插件` 选项，点击后会弹出一个设置窗口，您可以在这个窗口中修改 CodeMirror 6 插件的设置。这个方法添加的设置只在同一台设备上生效。

方法二：您可以通过修改 `localStorage` 的 `codemirror-mediawiki-addons`、`codemirror-mediawiki-wikilint`、`codemirror-mediawiki-ESLint`、`codemirror-mediawiki-Stylelint` 等键值来修改 CodeMirror 6 插件的设置。这个方法添加的设置会在所有设备上生效。

**示例**

```js
;localStorage.setItem('codemirror-mediawiki-addons', JSON.stringify([
  'allowMultipleSelections',
  'autocompletion',
  'bracketMatching',
  'closeBrackets',
  'codeFolding',
  'escape',
  'highlightActiveLine',
  'highlightSpecialChars',
  'highlightTrailingWhitespace',
  'highlightWhitespace',
  'indent',
  'lint',
  'openLinks',
  'tagMatching',
  'wikiEditor'
])
;localStorage.setItem('codemirror-mediawiki-wikilint', JSON.stringify({ 'no-arg': '1' }))
;localStorage.setItem('codemirror-mediawiki-ESLint', JSON.stringify({
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module'
  }
}))
;localStorage.setItem('codemirror-mediawiki-Stylelint', JSON.stringify({
  rules: {
    'declaration-property-value-no-unknown': true
  }
}))
```

| 键名                            | 类型                    | 预设                                                                                                                                                        | 说明                                                                                                                  |
| ------------------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| codemirror-mediawiki-addons    | `string[]`              | `[]`                                                                                                                                                       | 选择 CodeMirror 6 所加载的单项插件，所有可用的插件可以在 [这里找到](https://github.com/bhsd-harry/wikiplus-highlight#更多插件) |
| codemirror-mediawiki-wikilint  | `Object<'0'\|'1'\|'2'>` | 除`no-arg`为`'0'`外，其他均为`'1'`                                                                                                                            | 对维基语法检查的规则进行单独设置，`'0'`表示忽略，`'1'`表示仅报告错误，`'2'`表示报告错误和警告                                     |
| codemirror-mediawiki-ESLint    | `object`                | 全局常数预设了 jQuery、`mw`和`OO`，<br>`rules`见[eslint:recommended](https://eslint.org/docs/latest/use/configure/configuration-files#using-eslintrecommended) | JavaScript 语法检查设置，所有设置项可以在 [这里找到](https://eslint.org/docs/latest/use/configure/)                        |
| codemirror-mediawiki-Stylelint | `{rules: object}`       | [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)                                                                  | CSS 语法检查设置，所有规则可以在 [这里找到](https://stylelint.io/user-guide/rules/)                                        |
