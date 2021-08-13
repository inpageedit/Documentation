# InPageEdit 趣闻录

## 机智的小鱼君 —— 关于作者，这一切的元凶

InPageEdit 最初是由一名自称**机智的小鱼君**的网友开发的，这是他在各种 MediaWiki 平台最常用的用户名。

> 他之所以自称“小鱼君”是因为他的姓氏与“鱼”发音相近，而“机智的”只是一个没有太多含义的前缀，他本人并不记得为什么要用这个形容词。

## InPageEdit 与 Wikiplus —— 项目的伊始

在 InPageEdit 问世前许多年就已经有另一款以“避免打开编辑页面以提高小编辑的速度”为主要功能的 JavaScript 小工具 [Wikiplus](https://zh.moegirl.org.cn/User:妹空酱/Wikiplus)（以下简称 W+），原作者**妹空酱**已经弃坑。

机智的小鱼君曾经也是 W+ 使用者，但是 W+ 直到 2019 年也未能支持 Fandom 平台（原 Wikia），而机智的小鱼君是一名主要编辑 Fandom wiki 的编辑者，他为此感到十分难过，于是在 2019 年打算自行开发一款类似定位的小工具，最初的目的是开发能够运行于 Fandom 的小编辑插件。

但是现在 InPageEdit 已经拥有比 W+ 更好看的设计以及远多于小编辑的丰富功能。

> 机智的小鱼君承认 W+ 的代码素质远高于 InPageEdit，并一直以超越 W+、满足 wiki 编辑者的更多需求为目标努力更新。

## 欧亨利式开局 —— 意想不到的尴尬开局

InPageEdit 最初被开发出来的目的是能够运行于 Fandom 平台，而令人意想不到的是，由于 2019 年 Fandom 仍旧使用 MediaWiki 1.19.x 平台，导致了众多兼容性问题，机智的小鱼君不得不放弃支持 Fandom 平台，半成品的插件一直被个人使用。

> 2020 年 Fandom 平台迎来了近 8 年来最大的一次更新，更新后的 Fandom 运行 MediaWiki 1.33.x，可以正常运行 InPageEdit，也算是圆了作者一个梦。

## InPageEdit 与 Minecraft Wiki —— 偶然间的传播

在机智的小鱼君放弃支持 Fandom 平台后，很长一段时间都没有继续更新它，只是用它来维护 MediaWiki 驱动的个人网站。

直到 2019 年底，他被自己的亲友拉去玩一款叫 Minecraft 的游戏，他曾经参与过该游戏的 wiki，于是他趁此机会回到了 中文 Minecraft Wiki （以下简称 MCW）打算继续编辑，就是这个时候他把 InPageEdit 的源代码拷贝到了该 wiki 的个人 js 页面。

令机智的小鱼君没想到的是，一名 MCW 用户拷贝了他的 js 代码，并在试用后通过 MCW 的闲聊 QQ 群提出了改进建议。以此为契机，更多的 MCW 用户开始使用并传播 InPageEdit，自此 InPageEdit 开始拥有了更多的使用者以及反馈。

> 目前首个使用 InPageEdit 的第三者不明，如果您知道这个用户是谁，请联系作者！

## InPageEdit 与 萌娘百科 —— 大规模扩散

机智的小鱼君是一名萌娘百科用户，因此他自然而然的将 InPageEdit 相关的代码带到了萌娘百科的个人 js 页面。当时他正在寻找可以提供 InPageEdit 的简介页面的托管网站，虽然已经利用 Fandom Dev Wiki、GitHub Pages 以及个人网站发布过页面，但是加载速度过慢以及难以维护依旧是大问题。这时他想到 InPageEdit 的前辈 W+ 的简介位于萌娘百科，于是尝试在萌娘百科撰写了一份简介页面。

机智的小鱼君最初在萌娘百科撰写 InPageEdit 页面的目的只是单纯的想<ruby>借用<rt>白嫖</rt></ruby>萌娘百科的服务器资源来托管简介资料，但不久后经网友提醒，他发现萌娘百科通过 Gadget 收录了 InPageEdit，自此 InPageEdit 的使用次数呈指数增长。

> 目前萌娘百科收录 InPageEdit 的原因不明，如果您知道这其中的原因请联系作者！

## InPageEdit 与 GitHub —— 源码版本管控的进化

最初 InPageEdit 的源代码位于 Wjghj Project 服务器上（机智的小鱼君的私人服务器），但从萌娘百科收录 InPageEdit 为 Gadget 起的第二天起，服务器每秒都会受到上千次来源不明的用户标识为移动端的<ruby>不明目的请求<rt>疑似被 DDoS 攻击</rt></ruby>，大多数请求虽然毫无规律但是很不巧的命中了高开销请求（需要调用数据库动态渲染的页面），导致 Wjghj Project 数据中心瘫痪。

机智的小鱼君明白自己的服务器<ruby>并不能提供稳定的服务<rt>配置垃圾的一比</rt></ruby>，于是将源代码迁移到了~~全球最大同性交友网站~~GitHub，自此 InPageEdit 的版本管控由 MediaWiki 转为 Git，并使用 GitHub 托管源代码，CDN 供应商为 jsDeliver。

## InPageEdit 与 Node.js Package —— 项目分发的进化

机智的小鱼君认为 GitHub 的包管理太麻烦，因此在 2020 年 8 月左右选择使用 Node.js Package 来管理 InPageEdit 的编译包分发。~~不，他只是单纯的认为 JavaScript 包用 NPM 发布比较帅。~~
