(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{437:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-安装默认的1-13版本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装默认的1-13版本。"}},[s._v("#")]),s._v(" 1，安装默认的1.13版本。")]),s._v(" "),a("p",[s._v("由于docker是外国产品，很多时候安装使用中会受困于网络，因此安装起来也会显得有一些头大，当然也可以直接在CentOS 7上"),a("code",[s._v("yum -y install docker")]),s._v("，这样安装出来的版本就是1.13。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d3e0ddd62eb33fee.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_2-通过rpm安装其他版本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过rpm安装其他版本。"}},[s._v("#")]),s._v(" 2，通过rpm安装其他版本。")]),s._v(" "),a("p",[s._v("可以下载.rpm适用于您的发行版的 文件并手动安装。每次要升级Docker时都需要下载新文件。")]),s._v(" "),a("h3",{attrs:{id:"_1-下载包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载包。"}},[s._v("#")]),s._v(" 1，下载包。")]),s._v(" "),a("p",[s._v("转到 https://download.docker.com/linux/centos/7/x86_64/stable/Packages/ 并下载.rpm要安装的Docker版本的文件。")]),s._v(" "),a("h3",{attrs:{id:"_2-安装包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装包。"}},[s._v("#")]),s._v(" 2，安装包。")]),s._v(" "),a("p",[s._v("安装Docker CE，将下面的路径更改为您下载Docker软件包的路径。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" /path/to/package.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-启动docker。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动docker。"}},[s._v("#")]),s._v(" 3，启动docker。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-验证安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证安装。"}},[s._v("#")]),s._v(" 4，验证安装。")]),s._v(" "),a("p",[s._v("docker通过运行hello-world 映像验证是否已正确安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-通过二进制安装其他版本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过二进制安装其他版本。"}},[s._v("#")]),s._v(" 3，通过二进制安装其他版本。")]),s._v(" "),a("h3",{attrs:{id:"_1-下载包。-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载包。-2"}},[s._v("#")]),s._v(" 1，下载包。")]),s._v(" "),a("p",[s._v("转到https://download.docker.com/linux/static/stable/x86_64/ 下载对应的版本。")]),s._v(" "),a("h3",{attrs:{id:"_2-安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装。"}},[s._v("#")]),s._v(" 2，安装。")]),s._v(" "),a("p",[s._v("将对应的包导入到服务器当中。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf docker-18.06.1-ce.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" docker/* /usr/bin/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动。"}},[s._v("#")]),s._v(" 3，启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-验证安装。-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证安装。-2"}},[s._v("#")]),s._v(" 4，验证安装。")]),s._v(" "),a("p",[s._v("docker通过运行hello-world 映像验证是否已正确安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上两种情况，详细的参考官网。")])])}),[],!1,null,null,null);a.default=r.exports}}]);