import{_ as i,r as p,o as l,c as o,b as s,d as a,e,a as t}from"./app-gllHuPV0.js";const c={},r=t('<h1 id="analytics-v5" tabindex="-1"><a class="header-anchor" href="#analytics-v5" aria-hidden="true">#</a> Analytics V5</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>InPageEdit Analysis 从此版本正式更名为 InPageEdit Analytics</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此版本相较上一版本，API 结构有破坏性变更，数据结构有变化。</p><p>V4 数据将被抛弃。</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>API 接入点:</p>',5),d={href:"https://analytics.ipe.wiki/api",target:"_blank",rel:"noopener noreferrer"},u={href:"https://inpageedit-analytics.vercel.app/api",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据" aria-hidden="true">#</a> 获取数据</h2><p><code>/api/query/:type</code></p><h3 id="通用字段" tabindex="-1"><a class="header-anchor" href="#通用字段" aria-hidden="true">#</a> 通用字段</h3><ul><li><strong>过滤</strong> <code>prop</code> {string} <ul><li>通过<code>|</code>分隔，以<code>!</code>开头表示过滤、否则表示显示</li><li>例如：<code>foo|!bar</code>，显示<code>foo</code>字段、过滤<code>bar</code>字段</li><li>当值为<code>*</code>时，显示所有字段</li></ul></li><li><strong>排序</strong> <code>sort</code> {string} <ul><li>通过<code>|</code>分隔，以<code>!</code>开头表示倒序、否则为正序</li><li>例如：<code>foo|!bar</code>，首先以<code>foo</code>字段按顺序排列，相同的按<code>bar</code>字段倒序排列</li></ul></li></ul><h3 id="通过站台-wiki-查询数据" tabindex="-1"><a class="header-anchor" href="#通过站台-wiki-查询数据" aria-hidden="true">#</a> 通过站台(wiki)查询数据</h3><p><code>GET /api/query/wiki</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryWikiParams</span> <span class="token punctuation">{</span>
  siteUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 不提供时查询全部 wiki</span>
  limit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 大于等于 1 且小于等于 100 的整数；预设 10</span>
  offset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 大于等于 0 的整数；预设 0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>返回结果</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryWikiResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      _total<span class="token operator">:</span> <span class="token builtin">number</span>
      siteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
      siteName<span class="token operator">:</span> <span class="token builtin">string</span>
      features<span class="token operator">:</span> <span class="token punctuation">{</span>
        featureID<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      users<span class="token operator">:</span> <span class="token punctuation">{</span>
        userName<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  limit<span class="token operator">:</span> <span class="token number">10</span>
  offset<span class="token operator">:</span> <span class="token number">0</span>
  hasNext<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="通过用户-user-查询数据" tabindex="-1"><a class="header-anchor" href="#通过用户-user-查询数据" aria-hidden="true">#</a> 通过用户(user)查询数据</h3><p><code>GET /api/query/user</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryUserParams</span> <span class="token punctuation">{</span>
  userName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 可以以 | 分隔查询多个</span>
  siteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>返回结果</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryUserResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      userName<span class="token operator">:</span> <span class="token builtin">string</span>
      siteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
      siteName<span class="token operator">:</span> <span class="token builtin">string</span>
      _total<span class="token operator">:</span> <span class="token builtin">number</span>
      features<span class="token operator">:</span> <span class="token punctuation">{</span>
        featureID<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="通过时间-date-查询数据" tabindex="-1"><a class="header-anchor" href="#通过时间-date-查询数据" aria-hidden="true">#</a> 通过时间(date)查询数据</h3><p><code>GET /api/query/date</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryDateParams</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可用于 Date 构造函数的字符串</span>
  from<span class="token operator">:</span> <span class="token builtin">string</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设为请求的当下</span>
  interval<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;year&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;month&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;day&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hour&#39;</span> <span class="token comment">// 预设为 day</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>返回结果</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryDateResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      _total<span class="token operator">:</span> <span class="token builtin">number</span>
      date<span class="token operator">:</span> <span class="token builtin">string</span>
      users<span class="token operator">:</span> <span class="token punctuation">{</span>
        userName<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      sites<span class="token operator">:</span> <span class="token punctuation">{</span>
        featureID<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  fromTime<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// ISOString</span>
  toTime<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// ISOString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="提交数据" tabindex="-1"><a class="header-anchor" href="#提交数据" aria-hidden="true">#</a> 提交数据</h2><p><code>POST /api/submit</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SubmitParams</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details"><summary>返回结果</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SubmitResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    submit<span class="token operator">:</span> <span class="token punctuation">{</span>
      acknowledged<span class="token operator">:</span> <span class="token builtin">boolean</span>
      insertedId<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="错误返回" tabindex="-1"><a class="header-anchor" href="#错误返回" aria-hidden="true">#</a> 错误返回</h2><p>当遇到请求未能正确完成的情况时，一定会返回非 200 状态码，并一般包含错误说明。</p><details class="custom-container details"><summary>返回结果</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ErrorResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 一般不是 200</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token builtin">any</span>
  error<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="常见错误代码" tabindex="-1"><a class="header-anchor" href="#常见错误代码" aria-hidden="true">#</a> 常见错误代码</h3><ul><li><code>400 Bad Request</code> 客户端错误：请求时，提交的字段类型有误/缺少必要字段</li><li><code>405 Method not allowed</code> 客户端错误：请求时，使用了不允许的请求方法，例如有些接入点要求<code>POST</code>方法</li><li><code>500 Internal Server Error</code> 服务端错误：serverless 函数超时/MongoDB 操作失败/<s>小鱼君的带宽用完了</s></li></ul>`,25);function k(m,b){const n=p("ExternalLinkIcon");return l(),o("div",null,[r,s("ul",null,[s("li",null,[s("a",d,[a("https://analytics.ipe.wiki/api"),e(n)])]),s("li",null,[s("a",u,[a("https://inpageedit-analytics.vercel.app/api"),e(n)])])]),v])}const h=i(c,[["render",k],["__file","v5.html.vue"]]);export{h as default};