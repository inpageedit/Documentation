# Quick Start

Installing InPageEdit is very simple, and take a few seconds in most cases.

## Via personal JS

Most MediaWiki sites allow user add customized JavaScript and you can install InPageEdit via editing your personal JS page.

1. Go to your personal JS page, the page is usually  `User:<username>/common.js`
2. Click the "Edit" button
3. Add the following content in the text field:

```js
mw.loader.load('https://cdn.jsdelivr.net/gh/dragon-fish/inpageedit-v2@master/script.min.js');
```

4. Click the "Publish changes..." buttion
5. Done, and enjoy~

## Via Gadget

Some wiki sites (e.g. [Moegirlpedia](https://zh.moegirl.org.cn/Special:%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE#mw-prefsection-gadgets)) have already installed this plugin via Gadget. On these sites, we recommend that enable it in the preferences.

1. Visit `http://<wiki path>/Special:Preferences` or via the `Preferences` link in the pages to go to the "Preferences" page
2. Select "Gadgets" in the tabs
3. Find "InPageEdit" and enable it
4. Go to the bottom of the page and click the "Save" button
5. Done, and enjoy~

## Via browser extensions

Some MediaWiki sites disabled personal JS due to security concerns, and don't have a Gadget to install it either (e.g. Huijiwiki). In these cases, you need a browser entension to install it.

There's a ton of userscript extensions around the market and detailed solution is not shown. However, if you are willing to, it is welcomed to click the link below to improve it!
