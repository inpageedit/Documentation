import{_ as e,c as s,a as n,o as i}from"./app-BUO_Z_l1.js";const t={};function l(d,a){return i(),s("div",null,a[0]||(a[0]=[n(`<h1 id="install-the-plugin-as-a-gadget" tabindex="-1"><a class="header-anchor" href="#install-the-plugin-as-a-gadget"><span>Install the plugin as a Gadget</span></a></h1><h2 id="what-s-a-gadget" tabindex="-1"><a class="header-anchor" href="#what-s-a-gadget"><span>What&#39;s a Gadget</span></a></h2><blockquote><p><strong>Gadgets</strong> are mostly based on JavaScript, so JavaScript has to be enabled in your browser for them to work.**<br> Also note that these special gadgets are not part of the MediaWiki software, and are usually developed and maintained by users on your local wiki.<br> ---- MediaWiki</p></blockquote><p><s>I suggest just read <a href="http://mediawiki.org" target="_blank" rel="noopener noreferrer">mediawiki.org</a>, so tired to write anymore</s></p><h2 id="install-this-plugin-as-a-gadget" tabindex="-1"><a class="header-anchor" href="#install-this-plugin-as-a-gadget"><span>Install this plugin as a Gadget</span></a></h2><p>Gadgets on most wikis are defined by <code>MediaWiki:Gadgets-definition</code>, we suggest to install InPageEdit as a Gadget of your wiki, according to the following step.</p><ol><li>Start a new line at <code>MediaWiki:Gadgets-definition</code> and add some content:</li></ol><div class="language-wiki line-numbers-mode" data-highlighter="prismjs" data-ext="wiki"><pre><code><span class="line"><span class="token punctuation">*</span> InPageEdit<span class="token url">[resourceloader|rights=edit,skipcaptcha]</span><span class="token punctuation">|</span>InPageEdit.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>Create <code>MediaWiki:Gadget-InPageEdit.js</code> as:</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 从下面的方法中任选一个即可 Choose one from the following</span>
<span class="line"> */</span></span>
<span class="line"><span class="token comment">// 1. jsdelivr</span></span>
<span class="line">mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 2. unpkg</span></span>
<span class="line">mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://unpkg.com/mediawiki-inpageedit&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Create <code>MediaWiki:Gadget-InPageEdit</code> and write some content like this:</li></ol><div class="language-wiki line-numbers-mode" data-highlighter="prismjs" data-ext="wiki"><pre><code><span class="line"><span class="token url">[InPageEdit https://github.com/Dragon-Fish/InPageEdit-v2/]</span> - 由机智的小鱼君开发，面向熟练用户的快速维护工具集(小编辑、重定向、页面历史)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>All done! Visit the Preferences page → Gadget, and check if the Gadget is registered successfully.</li></ol>`,13)]))}const r=e(t,[["render",l]]),c=JSON.parse('{"path":"/en/guide/install/gadget.html","title":"Install the plugin as a Gadget","lang":"en-US","frontmatter":{},"git":{"updatedTime":1744982503000,"contributors":[{"name":"dragon-fish","username":"dragon-fish","email":"dragon-fish@qq.com","commits":1,"url":"https://github.com/dragon-fish"}],"changelog":[{"hash":"aa4f9bb6393acdca70b430fbc9e6cf3d1b7f44d4","time":1744982503000,"email":"dragon-fish@qq.com","author":"dragon-fish","message":"chore: 14.5.2 update logs"}]},"filePathRelative":"en/guide/install/gadget.md"}');export{r as comp,c as data};
