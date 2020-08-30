# 快速上手

安装 InPageEdit 十分简单，通常情况下只需要**几秒**就能完成。

## 个人 js 使用

在大多数 MediaWiki 网站上，都允许用户添加自定义的 JavaScript，您可以通过编辑个人 js 页面安装 InPageEdit。

1. 前往您的个人 js 页面，这个页面通常是`User:<你的用户名>/common.js`
2. 点击“编辑”按钮
3. 在编辑框中添加以下内容：

<<< @/.vuepress/components/install.js

4. 点击“保存”按钮
5. 完成，请享用~

## 通过小工具开启

有一些 wiki 网站（例如[萌娘百科](https://zh.moegirl.org.cn/Special:%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE#mw-prefsection-gadgets)）已经通过小工具（Gadget）安装了本插件，在这些网站上，我们推荐直接在设置里打钩启用它。

1. 前往`Special:Preferences`页面或者通过网页上的`参数设置`链接进入“参数设置”页面
2. 从页面的导航条选中“小工具”
3. 找到带有“InPageEdit”字样的选择框，打钩选中它
4. 翻到页面底部，点击“保存”按钮
5. 完成，请享用~

## 通过浏览器扩展安装

有一些 MediaWiki 网站出于对安全的考虑，禁用了个人 js 功能，而且也没有通过小工具安装本插件（例如灰机 Wiki）。在这种情况下如果您想使用本插件，需要通过浏览器扩展来实现。

使浏览器运行 js 插件的扩展市面上有很多，在此不赘述具体实现方案，这里仅仅提供一种加载的思路。

```js
!(function() {
  // RLQ是MediaWiki保存异步执行函数的数组
  window.RLQ = RLQ || [];
  RLQ.push(() => {
    // 等待jQuery加载完毕
    var _count = 0;
    var _interval = setInterval(() => {
      _count++;
      if (typeof jQuery !== "undefined") {
        // jQuery加载完毕
        clearInterval(_interval);
        // 防止网站并不是MediaWiki时报错
        try {
          mw.loader.load(/* InPageEdit Path */);
        } catch (e) {}
      } else if (_count > 30 * 5) {
        // 加载超时
        clearInterval(_interval);
      }
    }, 200);
  });
})();
```

## 安装要求

InPageEdit 是一个基于 JavaScript 的插件，在编写时使用了很多 jQuery 的语法以及 ECMAScript 版本大于 2018 的语法，在请求 MediaWiki API 时也用到了一些比较新的接口，因此建议你在现代浏览器以及尽可能新的 MediaWiki 网站上使用。在未来并没有兼容过时浏览器或者老版本 MediaWiki 的计划。

### 支持的浏览器

<table class="browsersupport"><tbody>
  <tr>
    <th>IE</th>
    <th>Firefox</th>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Opera</th>
  </tr>
  <tr class="browsericons">
    <td class="bsNoIE">不支持IE浏览器</td>						
    <td class="bsFirefox">最新2个版本</td>
    <td class="bsChrome">最新2个版本</td>
    <td class="bsSafari">最新2个版本</td>				
    <td class="bsOpera">最新2个版本</td>				
  </tr>
</tbody></table>

### MediaWiki 版本

- MediaWiki > 1.20.x

### jQuery 版本

- jQuery > 1.9.x
