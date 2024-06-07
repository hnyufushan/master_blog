(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{643:function(e,t,r){"use strict";r.r(t);var _=r(0),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("大概在两个月前，我发现了好用的微博图床，并且借助于浏览器扩展的插件，整个上传使用过程都非常方便，那时候，几乎在心里觉得以后就把图片放在微博图床上了，毕竟微博肯定会比自己的博客活的时间长。")]),e._v(" "),t("p",[e._v("然而进入今年四月份，陆续曝出微博开启了防盗链，以往文章当中的图片便全都无法加载了，看到有人支招通过修改网页head来应对这一问题，但是因为有了这么一次变化，让我对三方的图床开始不能放心起来，觉得，还是应该自己建个图床来用更好一些。")]),e._v(" "),t("p",[e._v("于是便开启了一段探索图床的经历。")]),e._v(" "),t("p",[e._v("在这个过程中，发现了不少优秀的开源工具，这里就将自己体验过的以及了解过的记录一下，给一些后来之人以参考。")]),e._v(" "),t("h2",{attrs:{id:"_1-picgo。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-picgo。"}},[e._v("#")]),e._v(" 1，PicGo。")]),e._v(" "),t("p",[e._v("这是一款图床上传图片的客户端，界面简洁美观，使用方便高效，让我一眼就爱上了它。")]),e._v(" "),t("ul",[t("li",[e._v("官方文档：https://picgo.github.io/PicGo-Doc/zh/guide/#%E5%BA%94%E7%94%A8%E8%AF%B4%E6%98%8E")]),e._v(" "),t("li",[e._v("Github地址：https://github.com/Molunerfinn/PicGo")])]),e._v(" "),t("p",[e._v("其支持如下图床：")]),e._v(" "),t("ul",[t("li",[t("s",[e._v("微博图床 v1.0")])]),e._v(" "),t("li",[e._v("七牛图床 v1.0")]),e._v(" "),t("li",[e._v("腾讯云COS v4\\v5版本 v1.1 & v1.5.0")]),e._v(" "),t("li",[e._v("又拍云 v1.2.0")]),e._v(" "),t("li",[e._v("GitHub v1.5.0")]),e._v(" "),t("li",[e._v("SM.MS v1.5.1")]),e._v(" "),t("li",[e._v("阿里云OSS v1.6.0")]),e._v(" "),t("li",[e._v("Imgur v1.6.0")])]),e._v(" "),t("p",[e._v("看着支持如此丰富，于是我开启了折腾之路，首先入坑了"),t("code",[e._v("阿里云OSS")]),e._v("，但很快就跳过了，之前对这款产品了解不是很多，在阿里云计价页面各种复杂介绍中也看不出是怎么个收费方式，一开始以为，购买了标准包之后，只要空间不超过限定的容量，就没事儿，而40G一年9块钱也实在算是实惠了。但是一切配置妥当之后我才发现，还需要流量费，想到自己日常博文用图比较多，而且又担心会有人恶意刷图，因此，所有链路美美打通之后，又只好关闭掉了。")]),e._v(" "),t("p",[e._v("接着又了解了"),t("code",[e._v("七牛的图床")]),e._v("，七牛的规则是每个月有免费的10G空间，还是刚刚那个原因，我于是便没有过多折腾就跳过了，因为在使用阿里云OSS这两天，我所使用的流量就已经不少，因此计算了一下，明显是不够用的。尽管博客流量不是特别大，但是教程类的文章都有不少的图，因此图片的流量还是蛮大的。")]),e._v(" "),t("p",[e._v("同理，另外两个公有云，"),t("code",[e._v("腾讯")]),e._v("以及"),t("code",[e._v("又拍云")]),e._v("，我则没有深入了解就跳过了，其中"),t("code",[e._v('[sm.ms](https://sm.ms/ "sm.ms")')]),e._v("以及"),t("code",[e._v("imgur")]),e._v("都是现存的图床，虽说已经稳定运行很长时间了，但是仍旧有这种第三方不靠谱的思绪，因此也没有考虑。")]),e._v(" "),t("p",[e._v("最后我又折腾了GitHub这条路，事实上也走通了，只不过体验上总有种慢的感觉，而且图片放在Github上也并不稳妥，思来想去，我打算走自建图床的路。")]),e._v(" "),t("h2",{attrs:{id:"_2-自建图床。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自建图床。"}},[e._v("#")]),e._v(" 2，自建图床。")]),e._v(" "),t("p",[e._v("自建的时候也体验尝试了不少的开源工具。")]),e._v(" "),t("ul",[t("li",[e._v("1，"),t("a",{attrs:{href:"https://yun.aoaoao.me/",target:"_blank",rel:"noopener noreferrer"}},[e._v("树洞外链"),t("OutboundLink")],1),e._v("\n体验安装了一波，最后发现许多地方都有问题，好像主要是图片自动生成的外链点击复制没有效果，于是放弃。")]),e._v(" "),t("li",[e._v("2，"),t("a",{attrs:{href:"https://github.com/LycheeOrg/Lychee",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lychee"),t("OutboundLink")],1),e._v("\n体验安装了一波，感觉不是自己想要的那种，于是放弃。")]),e._v(" "),t("li",[e._v("3，"),t("a",{attrs:{href:"https://github.com/qakcn/qchan",target:"_blank",rel:"noopener noreferrer"}},[e._v("qchan"),t("OutboundLink")],1),e._v("\n体验安装了一波，感觉产品不够成熟，于是放弃。")]),e._v(" "),t("li",[e._v("4，"),t("a",{attrs:{href:"https://github.com/electerious/Lychee",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lychee"),t("OutboundLink")],1),e._v("\n体验安装了一波，感觉不是自己想要的那种，于是放弃。")]),e._v(" "),t("li",[e._v("5，"),t("a",{attrs:{href:"https://github.com/iAJue/Fantasy-field",target:"_blank",rel:"noopener noreferrer"}},[e._v("幻想领域"),t("OutboundLink")],1),e._v("\n体验安装了一波，感觉产品应该还不错，只不过自己已经有了更合适的选择。")]),e._v(" "),t("li",[e._v("6，"),t("a",{attrs:{href:"https://doc.xiaoz.me/#/imgurl2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImgURL"),t("OutboundLink")],1),e._v("\n这款是目前在用的图床工具，使用下来，感觉功能还是比较成熟的，因此入坑了这款软件作为自建图床的工具，并且与作者沟通，希望能够在PicGo当中支持上传，如此以来，则基本上就是最完美的组合了。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/10330b0e82b20080.jpg",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"_3-其他一些工具。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他一些工具。"}},[e._v("#")]),e._v(" 3，其他一些工具。")]),e._v(" "),t("p",[e._v("在这个过程中，自己还使用到了其他的一些工具，一并在此记录分享下。")]),e._v(" "),t("ul",[t("li",[e._v("1，"),t("a",{attrs:{href:"https://github.com/meowtec/Imagine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Imagine"),t("OutboundLink")],1),e._v("\n一块清秀好用的图片压缩工具，非常好用。")]),e._v(" "),t("li",[e._v("2，"),t("a",{attrs:{href:"https://maxiang.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("马克飞象"),t("OutboundLink")],1),e._v("\n一款不错的markdown书写工具，支持实时预览，值得体验。")]),e._v(" "),t("li",[e._v("3，"),t("a",{attrs:{href:"https://www.zybuluo.com/cmd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cmd Markdown"),t("OutboundLink")],1),e._v("\n也是一块不错的markdown书写工具，值得收藏！")])])])}),[],!1,null,null,null);t.default=v.exports}}]);