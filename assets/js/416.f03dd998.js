(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{760:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("玩个人博客的都知道，数据库备份必不可少，如果哪一天服务器直接挂掉，而且还没有备份，那基本上等同于丢失了命根子。因此日常的备份小脚本一定是不能少的。")]),s._v(" "),a("p",[s._v("因为个人玩家一般只有一台服务器，数据不能异地备份，因此这就想到，通过邮件附件的形式，保存到邮箱也是不错的选择。")]),s._v(" "),a("h2",{attrs:{id:"_1-配置邮件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置邮件。"}},[s._v("#")]),s._v(" 1，配置邮件。")]),s._v(" "),a("p",[s._v("一般常规服务器自带发信端，我在自己本地测试也是很简单就实现了，但是阿里云服务器多少有一些不一样，所以需要一些注意的地方。")]),s._v(" "),a("ul",[a("li",[s._v("安装发信组件。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install sendmail\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("启动发信组件。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service sendmail start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接着配置邮件服务端信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/mail.rc\n在文件底部添加如下内容：\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linuxlql@163.com\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("smtp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smtps://smtp.163.com:465"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" smtp-auth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("login\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" smtp-auth-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linuxlql@163.com\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" smtp-auth-password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxxxx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改成你自己的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" ssl-verify"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ignore\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" nss-config-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/pki/nssdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("简单说明：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("set from")]),s._v("：发邮件时显示的发送方")]),s._v(" "),a("li",[a("code",[s._v("set smtp")]),s._v("：指定第三方发邮件的 smtp 服务器地址，普通服务器可以使用 25 端口，阿里云服务器测试需使用 465 端口。")]),s._v(" "),a("li",[a("code",[s._v("set smtp-auth")]),s._v("：邮件认证的方式，默认为 login")]),s._v(" "),a("li",[a("code",[s._v("set smtp-auth-user")]),s._v("：第三方发邮件的用户名")]),s._v(" "),a("li",[a("code",[s._v("set smtp-auth-password")]),s._v("：邮箱授权码")])]),s._v(" "),a("h2",{attrs:{id:"_2-简单使用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单使用。"}},[s._v("#")]),s._v(" 2，简单使用。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('echo "testb" | mail -s "testa" Linuxlql@163.com\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一个简单的发信方式，其中 testa 表示邮件的主题，testb 是邮件内容，等待一会儿，可以在邮箱看到这封邮件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/09b13c8c75ea361e.jpg",alt:"image"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$echo "测试一下文本导入的方式" > aa.txt\n$mail -s "testc" Linuxlql@163.com < aa.txt\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过读取文本内容的方式发送邮件，过一会儿可以看看收到的邮件是否正常。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d715b3f730b3e9ca.jpg",alt:"image"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$touch test\n$echo "testb" | mail -s"testa"  -a test Linuxlql@163.com\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将本地文件 test 作为附件发出，等下可以在邮箱当中验证一下。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bf2014d6b434724e.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_3-投入使用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-投入使用。"}},[s._v("#")]),s._v(" 3，投入使用。")]),s._v(" "),a("p",[s._v("最后在原来的备份脚本当中，做一下简单的调整，从而让每天把数据库文件备份到邮箱成为现实。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("curdate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y%m%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("backupdir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/backup\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logfile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/dump.log\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("expdays")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("expdir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$expdays")]),s._v(' days ago"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y%m%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("dbname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" wordpress wiki\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dbname")]),s._v(' begin export..."')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$logfile")]),s._v("\n    /usr//bin/mysqldump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ppassword")]),s._v(" --default-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dbname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dbname")]),s._v(".sql.gz\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(' export finished "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$logfile")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" cf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v(".tar.gz "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"备份文件在附件"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mail -s"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v('日数据备份"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" /backup/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v(".tar.gz Linuxlql@163.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curdate")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$expdir")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$expdir")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backupdir")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$expdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$logfile")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("执行一下，然后去邮箱看看是否成功了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2f121ee9f8920a99.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);