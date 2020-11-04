# 从小工具安装

## 什么是小工具

> **小工具**（零件/Gadget）大多数基于 JavaScript，所以你必须使你的浏览器启用 JavaScript 以使它们工作。<br>
> 同时请注意，这些特殊小工具不是 MediaWiki 软件的组成部分，他们通常是由 Wiki 的管理员开发并维护的。<br>
> —— MediaWiki

~~建议直接看 mediawiki.org，懒得写了~~

## 从小工具安装本插件

大多数 Wiki 上的小工具由`MediaWiki:Gadgets-definition`统一定义，我们建议按照以下步骤将 InPageEdit 安装为您 wiki 的小工具。

1. 在`MediaWiki:Gadgets-definition`另起一行，添加以下内容：

```wiki
* InPageEdit[ResourceLoader|rights=edit,skipcaptcha]|InPageEdit.js
```

2. 在`MediaWiki:Gadget-InPageEdit.js`中添加以下内容：

<<< @/.vuepress/components/install.js

3. 在`MediaWiki:Gadget-InPageEdit`添加类似这样的内容，可以改动：

```wiki
[https://ipe.js.org/ InPageEdit] - 由机智的小鱼君维护，面向熟练用户的快速维护工具集(小编辑、重定向、页面历史)
```

4. 大功告成，前往参数设置页面 → 小工具，查看小工具是否成功注册
