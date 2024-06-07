(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{664:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("使用如下两条命令安装 jdk：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew tap adoptopenjdk/openjdk\n\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cask")]),s._v(" adoptopenjdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// example:\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cask")]),s._v(" adoptopenjdk11\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后可以执行命令进行验证：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\nopenjdk "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.0")]),s._v(".11 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-04-20\nOpenJDK Runtime Environment AdoptOpenJDK-11.0.11+9 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.0")]),s._v(".11+9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOpenJDK "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-Bit Server VM AdoptOpenJDK-11.0.11+9 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.0")]),s._v(".11+9, mixed mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后通过"),a("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个页面下载 maven"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/04/80cc8c393d1e3fcf.png",alt:""}})]),s._v(" "),a("p",[s._v("下载之后，解压文件，将其放到 "),a("code",[s._v("/usr/local")]),s._v(" 目录下，然后将如下内容添加到环境变量：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.zshrc\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAVEN_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/maven\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEN_HOME")]),s._v("/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后加载配置文件，通过如下命令验证是否配置成功：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ mvn "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nApache Maven "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("2e178502fcdbffc201671fb2537d0cb4b4cc58f8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nMaven home: /usr/local/maven\nJava version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.0")]),s._v(".11, vendor: AdoptOpenJDK, runtime: /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home\nDefault locale: zh_CN_"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Hans, platform encoding: UTF-8")]),s._v("\nOS name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mac os x"')]),s._v(", version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11.4"')]),s._v(", arch: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x86_64"')]),s._v(", family: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mac"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);