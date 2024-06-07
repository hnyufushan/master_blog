(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{502:function(t,_,v){"use strict";v.r(_);var e=v(0),a=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("公司新到两台戴尔的服务器，配置情况如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("型号")]),t._v(" "),_("th",[t._v("R430 1u")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("内存")]),t._v(" "),_("td",[t._v("两条16GB （HR-BXFOWL2）")])]),t._v(" "),_("tr",[_("td",[t._v("硬盘")]),t._v(" "),_("td",[t._v("四块2T的 SAS 7200转")])])])]),t._v(" "),_("p",[t._v("详细配置规划如下：")]),t._v(" "),_("p",[t._v("有三块盘做成raid 5，其中一块儿作为热备，raid 5作为读写速度，冗余，以及磁盘利用率各方面最优选，几乎非他莫属，现在三块2T的来做raid 5，利用率是（n-1/n），所以三块下来应该有4T左右的（当然由于换算关系，会在其左）存储大小。平常的存储都是这三块负责，如果某一天，其中一块儿盘坏掉了，那么热备盘会直接顶上去，利用算法，将那块儿盘对应的数据恢复出来。")]),t._v(" "),_("p",[t._v("配置大概有以下几个步骤：")]),t._v(" "),_("p",[t._v("准备："),_("code",[t._v("显示器")]),t._v("外接出来，然后是"),_("code",[t._v("键盘")]),t._v("，"),_("code",[t._v("系统启动盘")]),t._v("（光盘/U盘）。")]),t._v(" "),_("h2",{attrs:{id:"_1-磁盘管理。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-磁盘管理。"}},[t._v("#")]),t._v(" 1，磁盘管理。")]),t._v(" "),_("p",[t._v("1，开机之后，不用动，看到有字符的界面（下边这个），按"),_("code",[t._v("Ctrl+R")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/af65bf1611dbb0b7.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("2，静静等待下，会进入到磁盘配置的界面，这个时候可能会有两种的显示。")]),t._v(" "),_("p",[t._v("情况一：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/44effbaf82e63944.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("情况二：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8f2c02c580b13db1.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("情况一可以直接进行配置，不用犹豫，只有情况二，可以把光标移动到磁盘位置，按"),_("code",[t._v("F2")]),t._v("直接"),_("code",[t._v("delete")]),t._v("掉，全部"),_("code",[t._v("delete")]),t._v("之后，就会恢复到情况一的样子了。")]),t._v(" "),_("p",[t._v("3，光标移动到"),_("code",[t._v("no configuration")]),t._v("位置，按"),_("code",[t._v("F2")]),t._v("，选中磁盘（按"),_("code",[t._v("空格键")]),t._v("，看到括号里边有一个X说明选中），进入到详细配置界面。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/54c12570cd792f47.jpg",alt:"image"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/309a91a3af93df82.jpg",alt:"image"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b47c5bfbb952df0a.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("4，下面是创建新虚拟磁盘的界面。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/99cf9a5c1730cd4a.jpg",alt:"image"}})]),t._v(" "),_("ul",[_("li",[t._v("–> 在RAID Level中选择 RAID-5")]),t._v(" "),_("li",[t._v("–> 按tab或者方向键，进到下一步的磁盘选中，选中三块磁盘。")]),t._v(" "),_("li",[t._v("–> 大小这个地方可以是全部的，也可以是拆分的，拆分成两块的虚拟磁盘。")]),t._v(" "),_("li",[t._v("–> 名字这个地方可以自定义，也可以默认。")]),t._v(" "),_("li",[t._v("–> 最后选中后边的OK，会有提示窗口，勇往直前就行了。")])]),t._v(" "),_("p",[t._v("5，ok之后，就能够看到三块磁盘做成了一个虚拟盘，而且根据raid 5的原理，刚好是有将近4T的存储空间。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3b1e04fbcc180c75.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("6，现在可以在这个地方按"),_("code",[t._v("F2")]),t._v("进行开始了，但是热备还没有添加，就是最下边的那个Hot spares。现在来做热备。")]),t._v(" "),_("ul",[_("li",[t._v("–> 按"),_("code",[t._v("Ctrl+N")]),t._v("进行左右界面的切换，进入到第二个界面。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/be472a5dbe398b79.jpg",alt:"image"}})]),t._v(" "),_("ul",[_("li",[t._v("–> 仍旧是按"),_("code",[t._v("F2")]),t._v("进入配置界面，选中 "),_("code",[t._v("Make Global HS")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/15d802f60192b158.jpg",alt:"image"}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("–> 创建成功之后，能够看到最后一块儿磁盘的状态已经变成 Hotspare。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/761823950d79cd42.jpg",alt:"image"}})])]),t._v(" "),_("li",[_("p",[t._v("–> 然后按"),_("code",[t._v("Ctrl+N")]),t._v("进行界面的切换，切回首页。这个地方有一些问题，看到网上的教程说会在 Hot spares 下边出现一个刚添加的热备盘，然后我操作的这两台服务器，全都没有出现。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c75d7cc151b2839c.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("7，最后一步，raid的初始化。光标移动到虚拟磁盘（"),_("code",[t._v("Virtual Disks")]),t._v("）上，按F2选择["),_("code",[t._v("Initialzation")]),t._v("]["),_("code",[t._v("Start Init")]),t._v(".]")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7310565228ca04db.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("然后就能够在后边的 Progress后边看到进度条了。还是比较慢的，感觉用掉了两到三个小时左右的样子。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c54292fd3e46af44.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("静静等到初始化完成，重启进行系统安装。\n等啊等\n等啊等\n这个时候无聊等待\n就来做一做整个流程的文档咯。\n终于看到越来越近了。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6193be218bfecc5e.jpg",alt:"image"}})]),t._v(" "),_("h2",{attrs:{id:"_2-安装操作系统。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装操作系统。"}},[t._v("#")]),t._v(" 2，安装操作系统。")]),t._v(" "),_("p",[t._v("1，初始化完成之后，这个时候可以按"),_("code",[t._v("Ctrl+Alt+delete")]),t._v("进行重启。重启之时，按"),_("code",[t._v("F11")]),t._v("进入到系统安装界面。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d836d0cdcbe2f2d8.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("2，接着等待进入下一界面，选择进入到"),_("code",[t._v("BIOS")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b0b2ce91eb11c92e.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("3，然后在下一个出现的界面里选择从U盘安装。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/383f9ca994c973d7.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("4，接着就会进入到熟悉的操作系统安装的界面了。选择第二项，"),_("code",[t._v("test this media a install")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/846bf251016a2b13.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("5，到选择语言界面，默认的英文，不要更改。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ce01a5183eda268a.jpg",alt:"2018070610274737"}})]),t._v(" "),_("p",[t._v("时区选择"),_("code",[t._v("亚洲/上海")]),t._v("。")]),t._v(" "),_("p",[t._v("到达磁盘分区界面。这里选择使用"),_("code",[t._v("LVM逻辑卷")]),t._v("，分配情况如下：\nboot分区："),_("code",[t._v("350M")]),t._v("。记得选择一下"),_("code",[t._v("系统类型为ext4")]),t._v("。\nswap分区："),_("code",[t._v("32G")]),t._v("（一般如果内存不大于8G的话，分配的大小是内存的两倍，如果内存是16G，则分配的大小是内存的1.5倍，如果内存是不小于32G的，交换分区与内存大小一致就可以了），文件"),_("code",[t._v("系统类型就是swap")]),t._v("。\n/根分区："),_("code",[t._v("150G")]),t._v("。记得选择一下"),_("code",[t._v("系统类型为ext4")]),t._v("。\nBiosBoot："),_("code",[t._v("1M")]),t._v("。（第一次分区一直提示有异常，没有注意到异常提示的信息，后来剩下自己来面对的，认真的看了一下异常信息，发现自己是可以大概读懂的，提示说需要一个1M的BIOSboot的分区，分配之后，果然报警消失。）记得选择一下"),_("code",[t._v("系统类型为ext4")]),t._v("。\nhome分区：剩下所有的存储。直接回车就会把剩下的所有分配了。记得选择一下"),_("code",[t._v("系统类型为ext4")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/da5de0546045747e.jpg",alt:"2018070610275031"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8a49044dc0118dea.jpg",alt:"2018070610275383"}})]),t._v(" "),_("blockquote",[_("p",[t._v("后边就没什么说的了，就是常规的安装步骤。\n待安装完成，重启初始化。\n最小化安装，好多命令都没有，配个网好像都会成难题，其实也不复杂。有两种方法，一个就是直接配网络，配通到外网，然后直接就能够安装了。可能没有ifconfig命令，可以通过ip addr 进行ip查看。\n或者就是把刚才安装系统的U盘插上，然后进入到Packages，不要ls，有好几千个包呢，直接把这个目录挂载，然后进行安装。\n然后将服务器上架，按需求做相应的配置就ok了。\n这个地方在网卡添加完了以后,发现怎么也ping不用同网段网络,很是奇怪，第一次摸戴尔，戴尔实在不乖。加上对公司网络环境还不够熟悉，因此一筹莫展。后来小伙伴过来，打算重装系统，真的重装了，又有一些新收获。\n在做完分区之后，下边接着的，是网络的配置页。可以看看连接的是哪个口。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/672c08eb267f46e4.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("后端对应的：上边是网卡1，下边是网卡2，原来之前网络不通的原因就是因为网卡的选择与所插的刚好不一致，才导致网络不通的。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ced57cdb32697028.jpg",alt:"image"}})]),t._v(" "),_("p",[t._v("系统安装完毕之后，需要做一些初始化的事情，可以参考我这篇："),_("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/1366.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS系统安装之后的优化"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("ok了，系统安装完毕之后，可以在此基础上安装KVM来进行管理咯，至于kvm怎么用，出门左转看我博客中的kvm教程咯。")])])}),[],!1,null,null,null);_.default=a.exports}}]);