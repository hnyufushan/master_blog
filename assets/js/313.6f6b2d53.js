(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{657:function(t,r,e){"use strict";e.r(r);var a=e(0),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_1-前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1，前言")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("在使用Mac的时候，基本上没有场景需要用到Windows系统了，就连之前一直使用的图片水印工具也在Mac平台找了替代。")]),t._v(" "),r("p",[t._v("直到"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("在使用网易云音乐时，Mac平台一直没有上传到云盘的功能，这一点让"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("十分恼火，经过一番冲浪了解之后，大概能有以下几种方案解决这个问题：")]),t._v(" "),r("ul",[r("li",[t._v("不使用Mac上传，通过手机进行上传，但这有违"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("的场景目标，故而废弃。")]),t._v(" "),r("li",[t._v("通过Mac的音乐软件itunes，这种方案操作步骤太过繁琐，暂不推荐。")]),t._v(" "),r("li",[t._v("通过安装网易mumu安卓模拟器来曲线救国，然而看到"),r("a",{attrs:{href:"https://mumu.163.com/mac/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),r("OutboundLink")],1),t._v("赫然写着暂不支持M1，也就直接劝退了"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("li",[t._v("通过虚拟机安装Windows系统，通过与Windows共享目录方式，在虚拟机内上传。这种方式最为稳定稳妥，因此"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("打算走这种方式来曲线救国。")])]),t._v(" "),r("p",[t._v("那么选择虚拟机的话，又会面临几种常见虚拟机平台的选择问题，目前比较主流热门的虚拟机平台大概有：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMware Workstation"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.parallels.cn/welcome-trial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parallels Desktop for Mac"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("如上两款因为收费被"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("弃选，也许你会说网上很容易找到绿色版的，但是都是有条件的使用，条条框框太多，不适合"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("的使用习惯。")]),t._v(" "),r("p",[t._v("于是打算将眼光转向开源的工具平台：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.virtualbox.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualBox"),r("OutboundLink")],1),t._v("：官方介绍说VirtualBox 是一款功能强大的 x86 和 AMD64/Intel64"),r("a",{attrs:{href:"https://www.virtualbox.org/wiki/Virtualization",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟化"),r("OutboundLink")],1),t._v("产品，适用于企业和家庭使用。不支持M1 ARM架构，直接劝退。")])]),t._v(" "),r("p",[t._v("好在前几天，网上冲浪的时候发现了一个新的开源的虚拟工具："),r("a",{attrs:{href:"https://github.com/utmapp/UTM",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM"),r("OutboundLink")],1),t._v("，后来经过一番详细了解之后，就是它了，本文的主角，"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("的虚拟机平台工具。")]),t._v(" "),r("h2",{attrs:{id:"_2-准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备"}},[t._v("#")]),t._v(" 2，准备")]),t._v(" "),r("p",[t._v("事实上当前国内对于在Mac电脑M1平台通过UTM配置Windows系统的教程并不是很多，很多也写的比较模糊，让人看了之后摸不着头脑，"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("之所以能够配置成功，则需要感谢两个参考，必须前置说明一下：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/BV1T44y1W7o1?spm_id_from=333.337.search-card.all.click",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM - M1 mac 安装 arm win11"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jensd.be/1533/windows/windows-11-arm-on-m1-based-macs-with-utm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Windows 11 ARM on M1-based Macs with UTM"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("软件准备：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/utmapp/UTM/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM安装包"),r("OutboundLink")],1),t._v("：安装方式与其他软件安装方式一致，不多赘述。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://next.itellyou.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows11镜像"),r("OutboundLink")],1),t._v("：可以找到Windows11的ARM版本。注意下载之后校验一下文件MD5，以确保镜像文件完整。推荐通过"),r("a",{attrs:{href:"https://motrix.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Motrix"),r("OutboundLink")],1),t._v("进行下载。\n![[b53923506dcfd9d85e88f3a0147885af.png]]")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mac.getutm.app/support/",target:"_blank",rel:"noopener noreferrer"}},[t._v("访客工具与驱动程序"),r("OutboundLink")],1),t._v("：系统安装成功之后，提供联网调整分辨率等功能。")])]),t._v(" "),r("h2",{attrs:{id:"_3-创建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建"}},[t._v("#")]),t._v(" 3，创建")]),t._v(" "),r("p",[t._v("启动UTM软件之后，就可以直接创建虚拟机了，接下来是一波截图来介绍整个流程。")]),t._v(" "),r("p",[t._v("创建虚拟机：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/c211b5a9a42f6214.jpg",alt:""}})]),t._v(" "),r("p",[t._v("添加虚拟化：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/14d182b662259dc3.jpg",alt:""}})]),t._v(" "),r("p",[t._v("操作系统选择Windows：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/056731dadfc97fe5.jpg",alt:""}})]),t._v(" "),r("p",[t._v("镜像选择方式，详情如下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/a4c94771e33d9422.jpg",alt:""}})]),t._v(" "),r("ul",[r("li",[t._v("第一步：取消勾选导入VHDX磁盘镜像，选择本地挂载的方式。")]),t._v(" "),r("li",[t._v("第二步：点击浏览文件，选择我们下载好的镜像文件。")])]),t._v(" "),r("p",[t._v("硬件分配可以给4C6G，如果你的主机配置够高，还可以给更多一些：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/ba687a481174eba3.jpg",alt:""}})]),t._v(" "),r("p",[t._v("存储器默认定的是64G，我们保持默认：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/264ad12eba425431.jpg",alt:""}})]),t._v(" "),r("p",[t._v("文件共享，根据自己的实际需求进行自定义：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/4b10a02c4d66263b.jpg",alt:""}})]),t._v(" "),r("p",[t._v("总结内容如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/6e79449f4cb89b13.jpg",alt:""}})]),t._v(" "),r("p",[t._v("保存之后，进入到概览界面，只需要注意下镜像的挂载是否正常即可：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/be16d060253e3f4b.jpg",alt:""}})]),t._v(" "),r("p",[t._v("如上步骤创建好了系统，注意过程中其他不需要调整的参数，都保持默认就好，不要乱改。")]),t._v(" "),r("h2",{attrs:{id:"_4-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装"}},[t._v("#")]),t._v(" 4，安装")]),t._v(" "),r("p",[t._v("点击播放按钮，进入安装页面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/19e8f0f121542ac2.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后可以看到加载了镜像：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/9a9e7e64ccb37003.jpg",alt:""}})]),t._v(" "),r("p",[t._v("如果你没看到这一个页面，则可能是前边配置镜像的时候没有选择正确，请回到开头重新来一遍。如果你开机之后进入到shell界面，也可能是镜像没有配置正确，一般到如上界面，再次点击回车，就可以看到系统安装的页面了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/353656cf64887d2b.jpg",alt:""}})]),t._v(" "),r("p",[t._v("继续往下走，点击安装：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/b6f237e8509564e9.jpg",alt:""}})]),t._v(" "),r("p",[t._v("选择安装专业版：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/c463698bce60e960.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后会遇到安装过程中的第一个问题：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/1636077013f02684.jpg",alt:""}})]),t._v(" "),r("p",[t._v("Windows 11 对其允许运行的硬件有一些严格的要求。由于"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("的 Macbook 和 VM 没有 Secure Boot 或 TPM，需要通过在寄存器中添加一些密钥来解决这个问题。")]),t._v(" "),r("p",[t._v("在界面中通过键入"),r("code",[t._v("Shift + F10")]),t._v("进入到终端，键入"),r("code",[t._v("regedit")]),t._v("进入到注册表界面。")]),t._v(" "),r("p",[t._v("然后在注册表中找到如下路径："),r("code",[t._v("计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\Setup")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/ff7b234f921227e2.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后新建一个名为LabConfig的项，在界面中看起来是一个文件夹。然后在LabConfig里边新建"),r("code",[t._v("DWORD(32位)值(D)")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/b66a8cd0744b9ea8.jpg",alt:""}})]),t._v(" "),r("p",[t._v("一共需要创建两个，一个命名为："),r("code",[t._v("BypassTPMCheck")]),t._v("，一个命名为："),r("code",[t._v("BypassSecureBootCheck")]),t._v("。然后双击这两个 DWORD 中的每一个并将值更改为 1。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/7a7e128378b523bd.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后再回到安装程序的页面，点击左上角上一步，然后再次点击右下角下一页，会看到条款页面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/0867f826e88ff850.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后选择"),r("code",[t._v("仅安装Windows")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/2203c89cee0837ce.jpg",alt:""}})]),t._v(" "),r("p",[t._v("磁盘分配保持默认，继续下一步：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/0331a40b3c8b120a.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后就能看到正在安装系统了：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/1febf235eb68e9ef.jpg",alt:""}})]),t._v(" "),r("p",[t._v("如果在第二步准备安装文件的时候报错，则仍然可能是前边挂在安装镜像的时候有问题，可回去重新检查。")]),t._v(" "),r("p",[t._v("剩下的就是静静等待系统安装完成了，大约三分钟左右，会提示进入到重启。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/9d0ba2e5afae972d.jpg",alt:""}})]),t._v(" "),r("p",[t._v("注意，此时如果不去管他，重启之后仍旧会加载安装界面，我们此时可以从右上角的图标将安装镜像弹出：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/22aca783ad25c7c3.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后再次点击左上角的图标重启系统：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/79667c106356eb9f.jpg",alt:""}})]),t._v(" "),r("p",[t._v("再次重启就可以看到Windows的系统界面了：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/625a78a9aaa17655.jpg",alt:""}})]),t._v(" "),r("p",[t._v("接下来的步骤根据自己的实际情况配置即可，不再截图赘述。")]),t._v(" "),r("p",[t._v("网络步骤先选择没有Internet连接：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/cf33d640b3082ac4.jpg",alt:""}})]),t._v(" "),r("p",[t._v("看到如下界面，则说明系统安装成功了，接下来就是一些优化性质的工作了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/8bf8cc5007e92a4b.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"_5-优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-优化"}},[t._v("#")]),t._v(" 5，优化")]),t._v(" "),r("p",[t._v("注意安装之后是无法使用网络的，分辨率也是无法调整的：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/b8a90b5d37711dd4.jpg",alt:""}})]),t._v(" "),r("p",[t._v("此时需要将开始准备的软件，访客工具与驱动程序挂载进来，与上边将安装镜像弹出的方式一样，选择变化，将对应文件挂载进来：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/888279736f9c7456.jpg",alt:""}})]),t._v(" "),r("p",[t._v("然后进入到文件管理，双击进行安装：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/35dd712f151647fe.jpg",alt:""}})]),t._v(" "),r("p",[t._v("软件安装完成之后，可以看到已经自动成功联网，另外显示器选择仅在1显示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/32d62386e6271c61.jpg",alt:""}})]),t._v(" "),r("p",[t._v("选择之后，可将系统进行一次重启。这种时候就不需要再关联任何外部镜像文件了，可以将刚刚挂载进来的软件工具卸载。")]),t._v(" "),r("p",[t._v("开机之后，就可以来到设置，显示里边调整分辨率了。"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("这里因为电脑屏幕不大，因此分辨率调整成了"),r("code",[t._v("1512*982")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/694e89a22658f1a2.jpg",alt:""}})]),t._v(" "),r("p",[t._v("至此，一个基于开源虚拟化工具UTM在M1版本的Mac系统中安装配置Windows11系统的完整步骤就介绍完毕了。")]),t._v(" "),r("p",[t._v("Windows后续使用过程中还会遇到一些其他优化方面的问题，基本上通过百度都能找到答案，这里也不再赘述了。")]),t._v(" "),r("p",[t._v("目前"),r("a",{attrs:{href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"}},[t._v("二丫"),r("OutboundLink")],1),t._v("这里遇到点击暂停之后会报错，看issue中也有人遇到过，暂时不影响使用，所以就忽略了。")]),t._v(" "),r("p",[t._v("现在系统安装好了，那么Windows系统下的软件自然也不在话下了，只需要通过共享目录，就可以方便地将本地的音乐上传到网易音乐云盘了。")])])}),[],!1,null,null,null);r.default=_.exports}}]);