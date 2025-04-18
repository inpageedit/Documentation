import{_ as n,c as a,a as e,o as p}from"./app-BUO_Z_l1.js";const t={};function i(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="analysis-v2" tabindex="-1"><a class="header-anchor" href="#analysis-v2"><span>Analysis V2</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>API 接入点：<a href="https://doc.wjghj.cn/inpageedit-v2/analysis/api/" target="_blank" rel="noopener noreferrer">https://doc.wjghj.cn/inpageedit-v2/analysis/api/</a></p><p>V2 是首个使用 mongoDB 数据库的版本，但是 API 没有太大变化，本次更新由于数据结构调整导致了 V1 的数据无法继承。</p><h2 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件"><span>入口文件</span></a></h2><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">GET /inpageedit-v2/analysis/api/?action=&lt;action&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据"><span>获取数据</span></a></h2><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">GET /inpageedit-v2/analysis/api/?action=query&amp;type=&lt;type&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki"><span><code>type=wiki</code></span></a></h3><p>获取 wiki 站点数据</p><p><strong>Send</strong></p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">GET /inpageedit-v2/analysis/api/?action=query&amp;type=wiki&amp;sitename=[sitename]&amp;url=[url]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Params</strong></p><p>按优先级排序</p><ul><li>sitename {String} <ul><li>若指定，以 sitename 为键搜索数据，确切匹配，若有重名 wiki 将返回多个数据</li></ul></li><li>url {String} <ul><li>若指定，以 url 为键搜索数据，确切匹配</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span></span>
<span class="line">    <span class="token string-property property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// wikis...</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// if error</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// Server informations...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交数据" tabindex="-1"><a class="header-anchor" href="#提交数据"><span>提交数据</span></a></h2><p><strong>Send</strong></p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre><code><span class="line">POST /inpageedit-v2/analysis/api/?action=submit</span>
<span class="line"></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span></span>
<span class="line"><span class="token application-json"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgUserName&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;functionID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span></span>
<span class="line">  <span class="token string-property property">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// submitted data..</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// if error</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// Server informations...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const r=n(t,[["render",i]]),c=JSON.parse('{"path":"/develop/analytics/v2.html","title":"Analysis V2","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744982503000,"contributors":[{"name":"dragon-fish","username":"dragon-fish","email":"dragon-fish@qq.com","commits":1,"url":"https://github.com/dragon-fish"}],"changelog":[{"hash":"aa4f9bb6393acdca70b430fbc9e6cf3d1b7f44d4","time":1744982503000,"email":"dragon-fish@qq.com","author":"dragon-fish","message":"chore: 14.5.2 update logs"}]},"filePathRelative":"develop/analytics/v2.md"}');export{r as comp,c as data};
