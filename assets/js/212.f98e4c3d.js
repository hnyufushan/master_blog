(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{558:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-闲言碎语。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-闲言碎语。"}},[s._v("#")]),s._v(" 1，闲言碎语。")]),s._v(" "),t("p",[s._v("承接上一篇文档以及在上篇所配置好的环境，继续往前走，模拟开发提交代码之后，Jenkins自动构建的试验。")]),s._v(" "),t("p",[s._v("之前从来没有做过自动构建的事情，有时候听着别人说如何如何，开发提交之后就构建了，好像很不一般。")]),s._v(" "),t("p",[s._v("自己知道是如何实现的，但是总觉得好像有局限，就没有前去涉猎，但是今天根据教程看了之后，发现有些事情呀，或者有些偏见呀，都是来自于一些小的，基础的不能在基础的东西。因为你不懂某个小基础，那么，可能蝴蝶效应的，后续很多东西你也就无从知起。")]),s._v(" "),t("p",[s._v("好了，进入正题。")]),s._v(" "),t("p",[s._v("这里主要展示以下内容。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("1，模拟程序员拿到项目之后的一系列操作与使用。（即程序员与gitlab的交互）")]),s._v(" "),t("li",[s._v("2，配置Jenkins与gitlab的互信，然后配置自动构建。")]),s._v(" "),t("li",[s._v("3，模拟程序员开发代码，然后提交之后Jenkins自动构建。")])])]),s._v(" "),t("p",[s._v("需要准备的：")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("1，已经安装配置好了的gitlab。")]),s._v(" "),t("li",[s._v("2，上篇文章中的配置好了的Jenkins。")]),s._v(" "),t("li",[s._v("3，git的GUI工具。")])])]),s._v(" "),t("p",[s._v("现在进入正题。因为试验已经根据飞翔文档做过一遍了，所以现在整理的话，就不再看文档了，根据自己的记忆，来完成整个的配置。")]),s._v(" "),t("h2",{attrs:{id:"_2-先在gitlab上操作。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-先在gitlab上操作。"}},[s._v("#")]),s._v(" 2，先在gitlab上操作。")]),s._v(" "),t("h3",{attrs:{id:"_1-在gitlab创建测试项目。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在gitlab创建测试项目。"}},[s._v("#")]),s._v(" 1，在gitlab创建测试项目。")]),s._v(" "),t("p",[s._v("关于gitlab的安装这里就不展示了，不熟悉的小伙伴可以出门左转参考我发布过的gitlab的文章。（"),t("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/243.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击转到gitlab部署安装"),t("OutboundLink")],1),s._v("）现在我们直接来到Windows的git客户端。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Administrator@liqilong MINGW64 ~/Desktop/gittest\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@192.168.106.70:linux/test.git\nCloning into "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nwarning: You appear to have cloned an empty repository.\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is master branch."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" readme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" readme\nthis is master branch.\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add readme'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root-commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bf79505"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" insertions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" deletions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n create mode "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" readme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master\nCounting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", done.\nWriting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("204.00")]),s._v(" KiB/s, done.\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.70:linux/test.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      master -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master\nBranch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up to track remote branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v(" from "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v("然后去gitlab中就能看到刚才创建的项目已经有内容了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/21271b5f28c329de.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("接着再来创建一个分支作为开发分支。再来一波操作。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Administrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nreadme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is dev branch"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" readme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" readme\nthis is dev branch\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add dev'")]),s._v("\nwarning: LF will be replaced by CRLF "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" readme.\nThe "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" will have its original line endings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working directory.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dev 8419ae8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" dev\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev\nCounting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", done.\nWriting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("248")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("248.00")]),s._v(" KiB/s, done.\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nremote:\nremote: To create a merge request "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" dev, visit:\nremote:   http://192.168.106.70/linux/test/merge_requests/new?merge_request%5Bsource_branch%5D"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev\nremote:\nTo "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.70:linux/test.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      dev -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("然后去gitlab就能看到dev分支以及对应内容了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/85c04bd98e95d990.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_3-将jenkins的公钥放入gitlab中-测试是否可以进行拉取代码。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-将jenkins的公钥放入gitlab中-测试是否可以进行拉取代码。"}},[s._v("#")]),s._v(" 3，将Jenkins的公钥放入gitlab中，测试是否可以进行拉取代码。")]),s._v(" "),t("p",[s._v("假定我们的项目目录是宿主机的/usr/local/test目录。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cd")]),s._v(" /usr/local/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" dev git@192.168.106.70:linux/test.git\nCloning into "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nremote: Counting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(", done.\nremote: Compressing objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nReceiving objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("/9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cd")]),s._v(" test/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v("\nreadme\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" readme\nthis is dev branch\n \n说明： "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" 是根据分支进行拉取。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("注意：如果拉取失败，有可能是秘钥配置问题，可以将Jenkins本机秘钥删除，然后再次生成添加，就可以了。")])]),s._v(" "),t("h2",{attrs:{id:"_4-ok-现在我们去创建一个项目进行测试。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-ok-现在我们去创建一个项目进行测试。"}},[s._v("#")]),s._v(" 4，ok，现在我们去创建一个项目进行测试。")]),s._v(" "),t("p",[s._v("来到Jenkins的配置界面。")]),s._v(" "),t("h3",{attrs:{id:"_1-先添加这样一个ssh-server。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-先添加这样一个ssh-server。"}},[s._v("#")]),s._v(" 1，先添加这样一个ssh server。")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("注意这里添加的远程工作目录要与我们刚才测试拉取的目录保持一致，以使其工作的时候，可以直接通过Git进行连接，配置，这一点至关重要，不然稍候配置完成之后，就会出现构建异常的问题。我刚才就掉进这个坑里了，现在找到了是这个原因，然后回头一想，不禁拍腿叹息，哎呀，，这里其实就是模仿的正常的，就像我们开发工作一样的，在某个目录，拉取代码，进行开发，推拉弹唱，都是在这个目录下进行，然后Jenkins就是一个自动化的外壳，，完全套进去，然后进行工作。")])]),s._v(" "),t("p",[s._v("进入系统管理—》系统设置。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e8325270d0b2ae9f.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("如果测试中报错： "),t("code",[s._v("jenkins.plugins.publish_over.BapPublisherException: Failed to connect and initialize SSH connection. Message: [Failed to change to remote directory [/usr/local/test]]")])]),s._v(" "),t("p",[s._v("看信息得知是没有这个目录，去服务器创建一下就好了。")]),s._v(" "),t("p",[s._v("然后新建项目，创建一个自由风格的名为test的项目，分支填写成dev，从而在构建的时候直接默认为dev分支。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/921063f66d4eac64.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("接着配置构建触发器。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1a955a7e50ce22f3.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("在构建中添加ssh server的动作，具体操作如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6568541458dcd175.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("暂时这样一个简答的项目就创建完成了。")]),s._v(" "),t("p",[t("code",[s._v("简单总结配置：")])]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("1，添加一个自由风格的名为test的项目。")]),s._v(" "),t("li",[s._v("2，配置gitlab的项目链接。")]),s._v(" "),t("li",[s._v("3，配置gitlab的webhook通过Jenkins的api进行构建。")]),s._v(" "),t("li",[s._v("4，添加构建命令以验证试验效果。")])])]),s._v(" "),t("h2",{attrs:{id:"_5-将刚才的jenkins-api添加到gitlab中。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-将刚才的jenkins-api添加到gitlab中。"}},[s._v("#")]),s._v(" 5，将刚才的Jenkins api添加到gitlab中。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f19446b014cf20a8.jpg",alt:"image"}})]),s._v(" "),t("p",[t("code",[s._v("说明：")])]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("1，首先是进入到刚刚创建的test项目当中。")]),s._v(" "),t("li",[s._v("2，进入设置的此选项当中。")]),s._v(" "),t("li",[s._v("3，将刚才Jenkins中的url填写进来。")]),s._v(" "),t("li",[s._v("4，点击添加，就生成了。")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/89ed0918ed17be7e.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("那么现在就在gitlab这里先测试下效果，看看点击这里之后，Jenkins是否会自动构建。注意，我们现在的项目可是刚创建好，现在先去跑一下看看效果如何。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bf3e4a4b6a60d05f.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这里是我们的第一次构建，如果你跟着做的，但是构建失败或者异常，那么有以下思路可供参考：")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("1，那就是我上边再三强调的，是否一开始测试拉取分支所在的服务器目录，与刚才在项目配置处定义的目录是否一致，如果测试拉取代码是在：/usr/local/ 拉去到test目录中，那么再项目中就应该定义为/usr/local/test，此意为指定项目工作目录。")]),s._v(" "),t("li",[s._v("2，看看是否有一些免密码的地方配置有问题。")])])]),s._v(" "),t("h2",{attrs:{id:"_6-试验。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-试验。"}},[s._v("#")]),s._v(" 6，试验。")]),s._v(" "),t("p",[s._v("那么接下来，我们一层一层剥离，先看在gitlab中手动一下看看是否能联动Jenkins的构建。")]),s._v(" "),t("p",[s._v("方法很简单，在前边配置好的"),t("code",[s._v("webhook")]),s._v("当中点击"),t("code",[s._v("Push Events")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/37823b19d1ddd7b0.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("点击之后，我们去看下Jenkins那边是什么效果。")]),s._v(" "),t("p",[s._v("哎呦我去，报错了！！")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8a5086c402da46a6.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("看到403的错误应该是刚刚添加的URL访问出问题啦。"),t("code",[s._v("而，前人存在的意义正在于，把这些小坑填平助我们直驱成功。")])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("注意：如果你此刻做测试所使用的Jenkins是公司生成在用的，而且这个Jenkins也启用了相关的针对不同用户分配不同视图的功能了的话，那么，请谨慎执行下边的操作，因为下边的操作可能会导致你之前做过的权限分配，化为虚有，当然，如果你用的Jenkins是自己个人测试的，或者压根就没有启用用户权限分配相关的功能，那么可以大胆的往下走。")])]),s._v(" "),t("p",[s._v("现在去到Jenkins方。点击"),t("code",[s._v("系统设置")]),s._v("—》"),t("code",[s._v("全局安全配置")]),s._v("—》取消“"),t("code",[s._v("防止跨站点请求伪造")]),s._v("”—》配置授权“"),t("code",[s._v("授权策略")]),s._v("”中的“安全矩阵”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/451e224581a7c38b.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("接着：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/00918b5bc01c0698.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("配置完之后保存，然后再重复刚才在gitlab当中的动作。")]),s._v(" "),t("p",[s._v("看到了返回值至少已经是200了。如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/344d6abb2e6a2205.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("接着去Jenkins中看看。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/03f778381ae11cf9.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("再看下构建信息：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fedb31cd8e405ac2.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("完美。如果已经到了这步，那么接下来你就可以安心于开发了，从你开发中，无论开发了什么代码，只要一进行提交，那么就会触发Jenkins的构建，新代码也就自动跑到远程目标服务器啦。")]),s._v(" "),t("p",[s._v("接下来先模拟一下开发与提交：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Administrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nreadme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Test push code builds automatically"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" readme\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" readme\nthis is dev branch\nTest push code builds automatically\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Test push code builds automatically"')]),s._v("\nwarning: LF will be replaced by CRLF "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" readme.\nThe "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" will have its original line endings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working directory.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dev 0cd5af4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Test push code builds automatically\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev\nCounting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", done.\nDelta compression using up to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" threads.\nCompressing objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("309")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("309.00")]),s._v(" KiB/s, done.\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nremote:\nremote: To create a merge request "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" dev, visit:\nremote:   http://192.168.106.70/linux/test/merge_requests/new?merge_request%5Bsource_branch%5D"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev\nremote:\nTo "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.70:linux/test.git\n   8419ae8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("0cd5af4  dev -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v("now，去看下Jenkins是否执行了构建并把新代码推到了远程服务器。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4fc2551d0b41e667.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后看代码是否是新的。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/12235c057d0e4128.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("此处模拟的算是一个类似php或者静态网站开发的一系列自动化，那么，套用这个思路，基本上对于java项目，nodejs项目，以及其他项目，都是可以通过这种方式来进行配置构建的。")]),s._v(" "),t("p",[s._v("以上的试验流程，是依据原文进行了一次疏通与整理，并没有再往深入的探索以及应用，因为在我们公司里边，并没有任何一个项目，是使用了自动构建的这种方式的，当然了，每家有每家的情况，要能够结合实际工作情况，来进行分析判断。")]),s._v(" "),t("h2",{attrs:{id:"_7-补充内容-分支的探索。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-补充内容-分支的探索。"}},[s._v("#")]),s._v(" 7，补充内容，分支的探索。")]),s._v(" "),t("p",[s._v("昨天收到一个同学的求助，说自己公司的情况正是如此，测试预发线上三个环境全部都在一个Jenkins中，然后测试以及预发的项目都做成了自动构建的，现在的问题是，在测试提交代码，会发现，测试以及预发的这个项目都构建起来了。那么问题来了，如何实现，提交对应的环境的代码，就只有对应环境的项目部署？")]),s._v(" "),t("p",[s._v("首先，听完这段话，我想说，首先三个环境放在一起，不合理，测试可以自动构建，预发，不应该自动构建了，最后他的回答是，这些功能是之前的运维人员配置的，现在也没有太多话语权，无法决定大建筑上的东东。")]),s._v(" "),t("p",[s._v("唯有提升自己的技术，才是最真的王道！")]),s._v(" "),t("p",[s._v("那么好，现在就来说说这个自动构建过程中如何让项目区分开来。当然，可能像这样测试预发放在一起，又同时开启了自动构建的情况，并不常见，但是，经过对接下来这个知识点的了解学习，可以让我们掌握，如何在配置自动构建的时候，灵活的控制分支问题。")]),s._v(" "),t("p",[s._v("其实，玄机就在Jenkins项目配置当中webhook处的高级里边的内容，下图是展开的高级的样子：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/acb588c26c210c9c.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这个地方Jenkins默认的选择的是接受所有分支提交的触发，也就是，无论你提交了什么分支，那么都会触发此项目的构建。")]),s._v(" "),t("p",[s._v("现在，假如我们开发的分支都是dev分支，那么可以如下图设置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a421fc8226141479.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这样配置之后，即代表此项目只在当dev分支提交会触发构建，其他分支提交则不会触发构建。")]),s._v(" "),t("p",[s._v("当然这个地方可以使用通配符进行扩展性定义：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("*.dev")]),s._v(" ： 表示以dev结尾的分支提交都会触发构建。")]),s._v(" "),t("li",[t("code",[s._v("dev.*")]),s._v(" ： 表示以dev开头的分支提交都会触发构建。")]),s._v(" "),t("li",[t("code",[s._v("*.dev.*")]),s._v(" ： 表示包含dev的分支提交都会触发构建。")])]),s._v(" "),t("p",[s._v("嗯，这个知识点就分享到这里，如果有一些其他的个性化需求，请根据这些现有的功能，发挥自己的脑洞，灵活运用。")])])}),[],!1,null,null,null);t.default=e.exports}}]);