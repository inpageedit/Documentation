import{_ as c,r as s,o as n,c as t,b as e,d as a,e as o,a as l}from"./app-gllHuPV0.js";const d={},r=l('<h1 id="_14-2-3" tabindex="-1"><a class="header-anchor" href="#_14-2-3" aria-hidden="true">#</a> 14.2.3</h1><p>更新时间：2021 年 9 月 13 日 21:49:43</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>本次更新没有修改现有功能，API 有向前兼容的变更。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>版本 14.2.2 由于构建时的一个错误而被跳过了。</p></div><h2 id="功能更新" tabindex="-1"><a class="header-anchor" href="#功能更新" aria-hidden="true">#</a> 功能更新</h2><ul><li>现在，“快速编辑”中的页面工具被恢复成了以前的样式，不再默认是折叠状态了（<s>作者本人终于意识到了点击展开有多麻烦</s>）</li><li>现在，“链入页面”中的“快速编辑”按钮正常生效了</li></ul><h2 id="故障修复" tabindex="-1"><a class="header-anchor" href="#故障修复" aria-hidden="true">#</a> 故障修复</h2>',7),u=e("li",null,[a("针对“监视列表”配置项未生效的 bug 采取了一些临时措施（"),e("s",null,"万年遗产"),a("）")],-1),h=e("li",null,[a("已修复因 Analytics 数据中心切换导致的“数据”信息框显示异常 "),e("ul",null,[e("li",null,"现在功能列表会按使用次数降序排序")])],-1),_=l('<h2 id="技术更新" tabindex="-1"><a class="header-anchor" href="#技术更新" aria-hidden="true">#</a> 技术更新</h2><ul><li>修改了<code>api.json</code>的导入方式</li><li>修改了<code>api.js</code>中的部分 API 的接口地址</li><li>修改了一处内部 API 命名以避开 js 保留字：<code>preference.default</code> → <code>preference._defaults</code></li><li>为一处 API 添加了别名：<code>_analysis</code> → <code>_analytics</code></li></ul>',2);function p(f,m){const i=s("IssueLink");return n(),t("div",null,[r,e("ul",null,[e("li",null,[a("修复了关于“偏好设置”功能的诸多问题 "),e("ul",null,[e("li",null,[a("已修复“偏好设置”弹窗无法打开的问题 "),o(i,{id:"153"})]),u,h])])]),_])}const v=c(d,[["render",p],["__file","14.2.3.html.vue"]]);export{v as default};