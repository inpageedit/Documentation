# Install the plugin as a Gadget

## What's a Gadget

> **Gadgets** are mostly based on JavaScript, so JavaScript has to be enabled in your browser for them to work.**<br>
> Also note that these special gadgets are not part of the MediaWiki software, and are usually developed and maintained by users on your local wiki.<br>
> ---- MediaWiki

~~I suggest just read mediawiki.org, so tired to write anymore~~

## Install this plugin as a Gadget

Gadgets on most wikis are defined by `MediaWiki:Gadgets-definition`, we suggest to install InPageEdit as a Gadget of your wiki, according to the following step.

1. Start a new line at `MediaWiki:Gadgets-definition` and add some content:

```wiki
* InPageEdit[resourceloader|rights=edit,skipcaptcha]|InPageEdit.js
```

2. Create `MediaWiki:Gadget-InPageEdit.js` as:

<<< @/.vuepress/components/install.js

3. Create `MediaWiki:Gadget-InPageEdit` and write some content like this:

```wiki
[InPageEdit https://github.com/Dragon-Fish/InPageEdit-v2/] - 由机智的小鱼君开发，面向熟练用户的快速维护工具集(小编辑、重定向、页面历史)
```

4. All done! Visit the Preferences page → Gadget, and check if the Gadget is registered successfully.
