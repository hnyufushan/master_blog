(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{549:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("邮件通知这个还真是有意思，之前有想搞过，但是每每都是失败的，今天痛下决心，一定要将之搞搞明白，把Jenkins各个方面都弄通弄懂。")]),t._v(" "),a("p",[t._v("一般情况下，部署的流程大概是这样的，所有的测试环境权限全部放出去然后由开发测试人员进行构建调试使用，而预发线上的环境则由测试人员测过之后发通知邮件给运维，运维进行部署，部署完层之后回复邮件。然而有时候会遇到部署完了之后忘记回邮件的情况，因此配置Jenkins的构建邮件通知也是很有必要的一项。")]),t._v(" "),a("p",[t._v("首先来介绍比较简单的系统自带的比较简单的邮件通知。")]),t._v(" "),a("h2",{attrs:{id:"_1-进入系统配置当中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-进入系统配置当中"}},[t._v("#")]),t._v(" 1，进入系统配置当中")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2a623cd508380130.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_2-配置jenkins的url以及系统往外发邮件通知所使用的身份。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置jenkins的url以及系统往外发邮件通知所使用的身份。"}},[t._v("#")]),t._v(" 2，配置Jenkins的URL以及系统往外发邮件通知所使用的身份。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7286c5dd0c378e86.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_3-然后拉到最下边进行配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-然后拉到最下边进行配置"}},[t._v("#")]),t._v(" 3，然后拉到最下边进行配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9d1de6834dc389bb.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_4-这个时候可以去邮箱看一眼收到的测试邮件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-这个时候可以去邮箱看一眼收到的测试邮件。"}},[t._v("#")]),t._v(" 4，这个时候可以去邮箱看一眼收到的测试邮件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d8ea319df1a45fd3.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_5-有时候会遇到问题-报一些错误。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-有时候会遇到问题-报一些错误。"}},[t._v("#")]),t._v(" 5，有时候会遇到问题，报一些错误。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bcd49ffb5c61cd38.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("遇到这个问题一般是前后文邮件配置对应有问题。")]),t._v(" "),a("p",[t._v("因为smtp类型的机器只允许发信人是本站用户地址，如果设置成其他的，或者没有设置，则都是失败的。")]),t._v(" "),a("p",[t._v("最好使用统一的，我在网上某个地方看到说发送邮件的地址与配置的地址可以不一样，或者邮件后缀可以是其他之类的说法，，但是经过自己测试，这些说法都是不可以的。")]),t._v(" "),a("p",[t._v("刚刚报错问题解决办法参考此处：https://blog.csdn.net/twc829/article/details/52137794")]),t._v(" "),a("p",[t._v("但是使用以上方式一般配置的邮件通知都是不大给力不怎么好用的。")]),t._v(" "),a("p",[t._v("其所能进行配置的功能也就是下边图示中的。")]),t._v(" "),a("p",[t._v("在项目的配置当中找到构建后操作，添加这个配置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/17dd85555d30ced9.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);