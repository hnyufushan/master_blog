(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{496:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("平常我们可能很少关注这个配置文件，但是这个配置文件，其重要性毕竟是系统级的，重要起来会让你害怕的，因此弄懂他就也很重要啦。")]),s._v(" "),a("p",[s._v("其实它的配置文件相对还是比较简单的。")]),s._v(" "),a("p",[s._v("如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/yum.conf\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cachedir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/cache/yum         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum下载的RPM包的缓存目录")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("keepcache")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#缓存是否保存，1保存，0不保存。一般需要保存一些常用而又不容易下载的软件时，就开启这个选项。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("debuglevel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#调试级别(0-10)，默认为2(具体调试级别的应用，我也不了解)。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logfile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/yum.log         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum的日志文件所在的位置")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exactarch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在更新的时候，是否允许更新不同版本的RPM包，比如是否在i386上更新i686的RPM包。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("obsoletes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这是一个update的参数，具体请参阅yum(8)，简单的说就是相当于upgrade，允许更新陈旧的RPM包。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否检查GPG(GNU Private Guard)，一种密钥方式签名。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否允许使用插件，默认是0不允许，但是我们一般会用yum-fastestmirror这个插件。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("installonly_limit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许保留多少个内核包。")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("selinux*         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#屏蔽不想更新的RPM包，可用通配符，多个RPM包之间使用空格分离。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("yum 的配置一般有两种方式： 一种是直接配置 / etc 目录下的 yum.conf 文件， 另外一种是在 / etc/yum.repos.d 目录下增加. repo 文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/139ba1f1caabfc0e.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("有时候在安装一些 yum 源（如 docker）在国外的软件时，我也会通过配置 ss 让系统走代理进行安装，从而更加快速进行安装。")]),s._v(" "),a("p",[s._v("配置方法就是在上边配置文件最下边添加下边一条：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("socks5://192.168.96.213:1080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("要求就是首先电脑本机需要打开 ss，然后上边的代理填写成电脑主机的 ip 就可以了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);