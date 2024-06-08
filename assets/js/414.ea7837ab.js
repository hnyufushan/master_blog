(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{757:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("天气不错，正在忙活自己的事情，一位开发大哥过来说有一些日志，最好清理一下，只保留最近的就行。瞬间明白这个情况，但是日志是线上的，所以当然不能清理，打算异地转移，然后本地保留五天的。")]),s._v(" "),a("p",[s._v("说干就干，说起来这应该是一个很小的事情，就算脚本从无到有，那么一个小时也足够的了，但是我却足足的忙活了一大晌，中间做了很多事情，也并没有一开始想象的一个小时搞定的样子，毕竟做了一件事情，就想朝完美的方向去跨越的，所以不断调试，总结，终于搞定，欣喜之情自不待言，其中也有许多值得记录一下的，特别在此记下。")]),s._v(" "),a("p",[s._v("写脚本是一个有意思的过程，最开始可能特别小，后来慢慢特别大，到最后，基本上会精简到最合适。")]),s._v(" "),a("p",[s._v("由于线上是五台服务器，有三台是一样的，基本上可以分成三个种类来考虑。")]),s._v(" "),a("p",[s._v("其实只把眼前的都给弄好了，这没什么难度大概主体操作也就那么三步而已，分别是下边这样：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" filename.zip filename  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user@ip "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ ! -d /nfs_mount/alladminlog ] && mkdir -p /nfs_mount/alladminlog "')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" filename.zip user@ip:/nfs_mount/alladminlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" filename.zip  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("简单解释，那就是，先将本地对应的日志压缩（注意这里的日志全部都是按照日期每天或者每个小时都自动分割好了的），检测要移动的服务器是否有对应的目录，没有的话创建目录，然后将压缩好的文件传输到备份服务器的对应目录下，并顺便把刚刚在本地压缩出来的文件删除掉。\n接下来所有的考虑则都是围绕着主题来进行的了。")]),s._v(" "),a("p",[s._v("首先是我想把今天之前的所有日志先进行如上的操作，如此才能够放心的将这些古老而庞大的日志在本地进行删除，所以，就必须先写出一个可供使用的或递减或递增的日期（这个日期的格式要与服务器中日志日期格式相匹配），这样才能一个一个将之前的日志扔进刚才三句主体里边进行 “加工” 操作。")]),s._v(" "),a("p",[s._v("日常工作中，类似的循环之类的脚本，我个人写的并不是很经常，于是乎更经常的，就是遗忘掉了，好在自己有心，以往写过的脚本，都会保留在一个地方，使用到了哪种类型的脚本，看两眼，自己也就知道格式是什么样的了。于是就先写了一个输出日期的脚本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAte")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(' day ago"')]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" a++  \n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DAte")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("脚本完全是自己琢磨出来，并没有参考任何地方，基本思路在创造出来之后，看上去也很简单，因为 Linux 有这样的一个日期表达，昨天是 “date -d “1 day ago” +”%Y-%m-%d””，那么好，两天前就是 2 咯，就让他作为一个变量，然后如上脚本，制作出一个不停的可以循环输出日期的内容。这样基本上就满足了我的需要了，只用在每一次输出一个日期的时候对这个输出加以利用就 ok 啦。这里的工作原理也不用过多介绍了，不懂的可以先去看看 while 的原理，其实就是先将变量赋值，然后主体动作，完成一次之后，接着，再次进入到循环之中，如果不加判断或者干预，那么这个脚本将会一直运行下去，跑到世界初始的时候（不信的话，可以自己去试试，嘿嘿，最好不要试，因为除了无聊之外，这还会将你的 CPU 持续性吃满）。")]),s._v(" "),a("p",[s._v("那么，既然想要的东西已经满足了，现在就是拿着这个东西来进行一些加工的时候了。明白了刚才简单讲解的这个循环的工作原理的话，那么再进行下一步的操作，也就非常简单了，就是在他的当次循环没有结束之前进行对应的工作，其实就是在 done 之前添加工作的代码就 ok 了。如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/tomcat/logs  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" yesterday "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAte")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(' day ago"')]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" admin admin-error admin_warn admin-maidian admin-risk \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Path")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DAte}")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v("*\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user@ip "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ ! -d /nfs_mount/alladminlog/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v(" ] && mkdir -p /nfs_mount/alladminlog/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v('"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip user@ip:/nfs_mount/alladminlog/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" A++  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("到这里，要简单做一些小注解了：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1，本机要对远程服务器免密码登陆，如果是普通用户，公钥放置在普通用户家目录下。")])]),s._v(" "),a("li",[a("p",[s._v("2，切勿照搬此脚本，因为我只是把大框架给罗列出来了，请根据实际情况对脚本进行调整。")])]),s._v(" "),a("li",[a("p",[s._v("3，$i 是在日志目录下的每个日志类型的前缀，这个时候有可能与日期的衔接处稍微不同，也请注意调整，如 admin.2018-01-27.log，以及 admin_2018-01-27.log。")])]),s._v(" "),a("li",[a("p",[s._v("4，定义 filename 是为了备份后的文件容易辨识，这是非常重要的一件事儿，包括在目录后边加上月份的分类，这些都是对日志归类存放的策略之一，包括等会儿脚本还会再添加一些参数，让存放的日志清晰易寻。")])]),s._v(" "),a("li",[a("ul",[a("li",[a("p",[s._v("命名大概这样：")])]),s._v(" "),a("li",[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/nfs_mount/alladminlog/admin-1/tomcat_admin1/admin-error/201801/…\n备份目录/总目录/主机名/项目名/日志前缀/月份/日志文件。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("5， 在最后加了一个小判断，是为了避免脚本跑到了世界之初，数字根据服务器存留日志的历史最早日期来进行控制，不用精确计算，基本上按月来进行一个估算就行。")])]),s._v(" "),a("li",[a("p",[s._v("如此，基本上对于一个历史日志异地备份的脚本就此落成。而再根据不同服务器下会有不同项目，不同项目下会有不同日志文件，仔细观察其中规律，然后最后将脚本彻底改造成适合实际生产使用的样子：")])]),s._v(" "),a("li",[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("dosome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin-A"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" yesterday "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAte")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(' day ago"')]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$B")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Path")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DAte}")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v("*  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user@ip "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ ! -d /nfs_mount/alladminlog/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v(" ] && mkdir -p /nfs_mount/alladminlog/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v('"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip user@ip:/nfs_mount/alladminlog/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" A++  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" tomcat_admin tomcat_admin1 tomcat_admin2 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" tomcat_admin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat_admin/logs"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin admin-error admin_warn admin-maidian admin-risk"')]),s._v("  \n    dosome  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" tomcat_admin1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat_admin1/logs"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin1 admin1-error admin1_warn admin1-maidian admin1-risk"')]),s._v("  \n    dosome  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat_admin2/logs"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin2 admin-error2 admin_warn2 admin-maidian2 admin-risk2"')]),s._v("  \n    dosome  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("这里也不用多说了，基本上就是根据实际情况进行参数变量的设置调用，基本上难度不大了。只用将脚本安放在一个规范的地方 / usr/local/scripts 下，然后加入到定时任务当中，因为历史日志太多估计要跑二三十分钟了，服务器又是线上的，所以将这第一次任务放在凌晨执行最合适了。")])]),s._v(" "),a("li",[a("p",[s._v("第二天一大早，我就赶忙打开服务器查看脚本执行的情况，这是一个重要的点，尤其是对线上服务器，前天制定的定时任务，第二天一定要检查任务执行情况。\n看到以往的日志全部都乖乖的压缩然后被转移到了备份服务器之上，心情瞬间舒畅了。最后再对脚本进行一些调整，那么以后就不用管啦。")])]),s._v(" "),a("li",[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("dosome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin-A"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" yesterday +%Y-%m-%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" yesterday "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$B")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Path")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DAte}")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v("*  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user@ip "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ ! -d /nfs_mount/alladminlog/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v(" ] && mkdir -p /nfs_mount/alladminlog/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v('"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip user@ip:/nfs_mount/alladminlog/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONTH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v(".zip    \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mtime")]),s._v(" +5 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*log*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" tomcat_admin tomcat_admin1 tomcat_admin2 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" tomcat_admin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat_admin/logs"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin admin-error admin_warn admin-maidian admin-risk"')]),s._v("  \n    dosome  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" tomcat_admin1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat_admin1/logs"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin1 admin1-error admin1_warn admin1-maidian admin1-risk"')]),s._v("  \n    dosome  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat_admin2/logs"')]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin2 admin-error2 admin_warn2 admin-maidian2 admin-risk2"')]),s._v("  \n    dosome  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("与之前脚本比较改动的地方有：")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("1，删除掉对历史日志备份的循环。")]),s._v(" "),a("li",[s._v("2，Date="),a("code",[s._v("date -d yesterday +%Y-%m-%d")]),s._v(" 备份日志的日期由今天改成昨天，因为脚本执行的时间是凌晨，所以备份昨天的日志，是对的。")]),s._v(" "),a("li",[s._v("3，加入一句删除日志的命令。只在本地保留 5 天。")])])]),s._v(" "),a("li",[a("p",[s._v("记录于 18 年 1 月 29 日")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);