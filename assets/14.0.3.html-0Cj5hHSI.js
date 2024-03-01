import{_ as e,r as p,o as i,c as l,b as n,e as t,d as s,a as o}from"./app-gllHuPV0.js";const c={},r=n("h1",{id:"_14-0-3-shiro",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_14-0-3-shiro","aria-hidden":"true"},"#"),s(" 14.0.3 "),n("code",null,"Shiro")],-1),u=n("p",null,"更新日期：2020 年 9 月 1 日 15:39:39",-1),d=n("em",null,"14.0.1",-1),k=n("em",null,"14.0.3",-1),v=n("s",null,"阴间 BUG",-1),m=n("code",null,"_msg",-1),_=n("s",null,"阴间 BUG",-1),b=n("ul",null,[n("li",null,[s("例如：台湾正体"),n("code",null,"zh-tw"),s("的使用者可以正常加载繁体中文语言包了")])],-1),g=n("strong",null,"自定义语言包",-1),h=n("ul",null,[n("li",null,[s("自定义语言包分为"),n("strong",null,"全局语言包"),s("和"),n("strong",null,"指定语言语言包"),s("，两种包可以同时定义，其中指定语言语言包的优先级比全局语言包更高")]),n("li",null,[n("strong",null,"提示"),s("：该功能仅为自定义文本显示提供方便，请不要以这种方式修正翻译文本，改进翻译请点击右上角的链接前往 GitHub")]),n("li",null,"示例：")],-1),y=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不要省略这一行</span>
window<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> window<span class="token punctuation">.</span>InPageEdit <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 全局语言包 **/</span>
InPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;✏️快编&#39;</span><span class="token punctuation">,</span> <span class="token comment">// =&gt; 工具盒以及段落编辑中的快速编辑会变成“✏️快编”</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 指定语言语言包
 * 结构为 InPageEdit.i18n.&lt;lang&gt;.&lt;msgKey&gt;
 * 其中语言代码规范与MediaWiki系统保持一致
 */</span>
InPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Fast edit&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ja</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;quick-delete&#39;</span><span class="token operator">:</span> <span class="token string">&#39;💣ページ削除&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 两种同时使用？我全都要。 **/</span>
InPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 对简体中文使用者生效</span>
  <span class="token string-property property">&#39;zh-hans&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE快编&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对日文使用者生效</span>
  <span class="token literal-property property">ja</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPEエディット&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对其他语言的使用者生效</span>
  <span class="token string-property property">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE Edit&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(f,I){const a=p("StatusTag");return i(),l("div",null,[r,u,n("ul",null,[n("li",null,[t(a,{status:"info"}),s(" 本次更新日志涵盖 "),d,s(" ~ "),k,s(" 的多个补丁")]),n("li",null,[t(a,{status:"fixed"}),s(" 修复了旧入口文件（script.js）的"),v,s("，现在调用旧地址的用户也能正常加载 InPageEdit，但推荐尽快修改引用地址为新地址")]),n("li",null,[t(a,{status:"fixed"}),s(" 修复了大量由"),m,s("模块导致的"),_,b]),n("li",null,[t(a,{status:"new"}),s(" 新功能"),g,h])]),y])}const x=e(c,[["render",E],["__file","14.0.3.html.vue"]]);export{x as default};
