(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{389:function(e,t,n){"use strict";n.r(t);var _=n(0),a=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-前言。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言。"}},[e._v("#")]),e._v(" 1，前言。")]),e._v(" "),t("p",[e._v("风平浪静的下午，一个前端开发同事找到我，说感觉好像nginx那边有一些转发并没有到达后端。")]),e._v(" "),t("p",[e._v("我问，怎么了？")]),e._v(" "),t("p",[e._v("她说的也非常具体，第一是常规访问服务，然后返回的状态是401，提示令牌失效（"),t("code",[e._v("Token Invalid")]),e._v(" ）。接着直接访问后端所代理的服务，然后就是正常的。")]),e._v(" "),t("p",[e._v("哦，听上去很明显啦，事儿就是到nginx这里卡住了呗。我问她详细的情况是怎样的？")]),e._v(" "),t("p",[e._v("她说获取验证码以及登陆都是没有问题的，但是就是这里的token没有传过去，token是放在请求头里边的，这个头的名称是“"),t("code",[e._v("old_token")]),e._v("”。")]),e._v(" "),t("p",[e._v("听上去一切好像都没什么问题，而这个问题也确实是我第一次遇到的，后来求助百度，在某篇文章里找到了答案，这里粘贴过来，以存记录。")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/de6d2228a3d8cc36.jpg",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"_2-解决。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决。"}},[e._v("#")]),e._v(" 2，解决。")]),e._v(" "),t("p",[e._v("原本在测试环境测试通过的APP，今天准备切到线上环境做最后测试，结果发现了错误。查看日志发现是APP端发送的http请求中的header内容丢失了。那么代码没有改动，怎么平白无故会丢失头信息？")]),e._v(" "),t("p",[e._v("于是想到两个环境的不同之处在于线上是通过nginx做的代理转发，会不会是nginx搞的鬼？于是搜索“nginx request header 丢失”，果不其然是这个问题，nginx对下划线的头信息做了限制，找到问题所在就等于完成了一大半，办法总比困难多。遂决定记录之。")]),e._v(" "),t("h3",{attrs:{id:"_2-1不用下划线-。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1不用下划线-。"}},[e._v("#")]),e._v(" 2.1不用下划线 。")]),e._v(" "),t("p",[e._v("既然nginx对下划线不支持，那没关系，不用下划线就是了。比如原来"),t("code",[e._v("old_token")]),e._v("改成"),t("code",[e._v("old-token")]),e._v("就可以了。（难怪一般header的name都是"),t("code",[e._v("-")]),e._v("来拼接的，比如"),t("code",[e._v("User-Agent")]),e._v("） 。")]),e._v(" "),t("h3",{attrs:{id:"_2-2从根本上解除nginx的限制-。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2从根本上解除nginx的限制-。"}},[e._v("#")]),e._v(" 2.2从根本上解除nginx的限制 。")]),e._v(" "),t("p",[e._v("nginx默认request的header的那么中包含"),t("code",[e._v("_")]),e._v("时，会自动忽略掉。")]),e._v(" "),t("p",[e._v("解决方法是：在nginx里的nginx.conf配置文件中的http部分中添加如下配置：")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("underscores_in_headers on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("默认 underscores_in_headers 为off")]),e._v("。")]),e._v(" "),t("p",[e._v("我们采取了第一种方法，她更改了一下请求头的名称，果然这个问题就解决了。")]),e._v(" "),t("p",[e._v("参考链接：https://blog.csdn.net/Nazir2513/article/details/70889319")])])}),[],!1,null,null,null);t.default=a.exports}}]);