import{_ as t,r as e,o as p,c as o,b as n,d as s,e as i,a as r}from"./app-gllHuPV0.js";const l={},c=n("h1",{id:"analysis-v2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#analysis-v2","aria-hidden":"true"},"#"),s(" Analysis V2")],-1),u=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://doc.wjghj.cn/inpageedit-v2/analysis/api/",target:"_blank",rel:"noopener noreferrer"},v=r(`<p>V2 是首个使用 mongoDB 数据库的版本，但是 API 没有太大变化，本次更新由于数据结构调整导致了 V1 的数据无法继承。</p><h2 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件" aria-hidden="true">#</a> 入口文件</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=&lt;action&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据" aria-hidden="true">#</a> 获取数据</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=query&amp;type=&lt;type&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki" aria-hidden="true">#</a> <code>type=wiki</code></h3><p>获取 wiki 站点数据</p><p><strong>Send</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=query&amp;type=wiki&amp;sitename=[sitename]&amp;url=[url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Params</strong></p><p>按优先级排序</p><ul><li>sitename {String} <ul><li>若指定，以 sitename 为键搜索数据，确切匹配，若有重名 wiki 将返回多个数据</li></ul></li><li>url {String} <ul><li>若指定，以 url 为键搜索数据，确切匹配</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>
    <span class="token string-property property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// wikis...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// if error</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Server informations...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交数据" tabindex="-1"><a class="header-anchor" href="#提交数据" aria-hidden="true">#</a> 提交数据</h2><p><strong>Send</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /inpageedit-v2/analysis/api/?action=submit

<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgUserName&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;functionID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>
  <span class="token string-property property">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// submitted data..</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// if error</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Server informations...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ID&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServer&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;&lt;wgUserName&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function k(m,g){const a=e("ExternalLinkIcon");return p(),o("div",null,[c,u,n("p",null,[s("API 接入点："),n("a",d,[s("https://doc.wjghj.cn/inpageedit-v2/analysis/api/"),i(a)])]),v])}const y=t(l,[["render",k],["__file","v2.html.vue"]]);export{y as default};
