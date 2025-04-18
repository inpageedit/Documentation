import{_ as t,c as l,a as e,b as n,d as a,e as i,r as o,o as r}from"./app-BUO_Z_l1.js";const c={};function u(d,s){const p=o("StatusTag");return r(),l("div",null,[s[6]||(s[6]=e(`<h1 id="analysis-v4" tabindex="-1"><a class="header-anchor" href="#analysis-v4"><span>Analysis V4</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>API 接入点：<a href="https://analysis.ipe.wjghj.cn/api" target="_blank" rel="noopener noreferrer">https://analysis.ipe.wjghj.cn/api</a></p><p>V4 是首个使用 serverless 技术的版本，API 结构有破坏性变更，数据结构无变化。</p><h2 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件"><span>入口文件</span></a></h2><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">GET /api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据"><span>获取数据</span></a></h2><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">GET /api/auery/:type</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki"><span><code>type=wiki</code></span></a></h3><p>获取 wiki 站点数据</p><p><strong>Send</strong></p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">GET /api/query/wiki?sitename=[sitename]&amp;siteurl=[siteurl]&amp;prop=[prop]&amp;sortby=[sortby]&amp;sortorder=[sortorder]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Params</strong></p><p>以下两个为 wiki 筛选，仅生效一条，优先级从高到低排序。可选，若未指定则搜索全部 wiki。</p><ul><li>siteurl <code>{String&lt;URL&gt;}</code><ul><li>若指定，以 url 为键搜索数据，确切匹配</li></ul></li><li>sitename <code>{String}</code><ul><li>若指定，以 sitename 为键搜索数据，模糊匹配，接受正则表达式，若有重名 wiki 将返回多个数据</li></ul></li></ul><p>以下为项目筛选，可选。</p><ul><li>prop <code>{String}</code><ul><li>@default <code>&quot;url|sitename|_total&quot;</code></li><li>若指定，仅显示指定数据，多个以<code>|</code>隔开</li><li>url, sitename, _total, date, functions, users</li></ul></li><li>sortby <code>{String}</code><ul><li>若指定，按键排序 wiki array</li></ul></li><li>sortorder <code>{Number}</code><ul><li>排序规则，预设顺序</li><li>&gt;= 0 顺序</li><li>&lt; 0 倒序</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span></span>
<span class="line">    <span class="token string-property property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// wikis...</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// if error</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// Server informations...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-date" tabindex="-1"><a class="header-anchor" href="#type-date"><span><code>type=date</code></span></a></h3><p>暂未实装。</p><h2 id="提交数据" tabindex="-1"><a class="header-anchor" href="#提交数据"><span>提交数据</span></a></h2><p><strong>Send</strong></p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">POST /api/submit</span>
<span class="line"></span>
<span class="line">application/json</span>
<span class="line">{</span>
<span class="line">  &quot;url&quot;: &quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;,</span>
<span class="line">  &quot;sitename&quot;: &quot;&lt;wgSiteName&gt;&quot;,</span>
<span class="line">  &quot;username&quot;: &quot;&lt;wgUserName&gt;&quot;,</span>
<span class="line">  &quot;functionID&quot;: &quot;&lt;inpageedit_function_name&gt;&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有数据将会被验证：</p>`,26)),n("ul",null,[s[3]||(s[3]=n("li",null,"url 必须为合法的 URL",-1)),n("li",null,[s[2]||(s[2]=a("sitename, username ")),n("ul",null,[s[1]||(s[1]=n("li",null,[a("将处理潜在的 xss 风险，"),n("code",null,"<(.+?)>"),a(" → "),n("code",null,"&lt;$1&gt;")],-1)),n("li",null,[i(p,{status:"dev"}),s[0]||(s[0]=a(" 关键词屏蔽，防止冒犯性词汇"))])])]),s[4]||(s[4]=n("li",null,[a("username 不允许不合法的用户名，不可出现以下符号："),n("code",null,"#&?=[]{}")],-1)),s[5]||(s[5]=n("li",null,"functionID 有白名单机制",-1))]),s[7]||(s[7]=e(`<p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span></span>
<span class="line">  <span class="token string-property property">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// submitted data..</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// if error</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// Server informations...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><p>⚠️注意：由于技术原因，<code>sitename</code>与<code>username</code>中的英文句号<code>.</code>将被转义为<code>{dot}</code>储存</p><p><code>application/BSON</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ID&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServer&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;&lt;wgUserName&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7))])}const v=t(c,[["render",u]]),k=JSON.parse('{"path":"/develop/analytics/v4.html","title":"Analysis V4","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744982503000,"contributors":[{"name":"dragon-fish","username":"dragon-fish","email":"dragon-fish@qq.com","commits":1,"url":"https://github.com/dragon-fish"}],"changelog":[{"hash":"aa4f9bb6393acdca70b430fbc9e6cf3d1b7f44d4","time":1744982503000,"email":"dragon-fish@qq.com","author":"dragon-fish","message":"chore: 14.5.2 update logs"}]},"filePathRelative":"develop/analytics/v4.md"}');export{v as comp,k as data};
