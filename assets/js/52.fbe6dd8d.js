(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{396:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("有时候我们会给一些没有集成权限认证系统的页面加一层认证，以提高安全性，但是针对一些涉及到线上生产的一些界面，如果使用 NGINX 统一认证的账号，那么如果某个时刻被改坏了，想要确认是谁都很难。")]),s._v(" "),t("p",[s._v("NGINX 在打印日志的时候，事实上是有 "),t("code",[s._v("$remote_user")]),s._v("这一参数的，只不过常规使用的时候，无法获取到值，需要在基于认证规则的时候，才能够生效，大多时候我们使用"),t("code",[s._v("htpasswd")]),s._v("来做的认证，这样会比较麻烦，所以优雅的方案应该是结合 ldap 认证的模块，来实现认证系统，然后在日志格式化中添加用户字段：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("log_format json "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("escape")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{ "remote_addr": "$remote_addr",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"@timestamp":"$time_iso8601",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_uri": "$request_uri",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"remote_user": "$remote_user",\'')]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入之后，就能记录访问的用户了")]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"verb": "$request_method",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"httpversion": "$server_protocol",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"response": "$status", \'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"body_bytes_sent": "$body_bytes_sent", \'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"referrer": "$http_referer", \'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"user_agent": "$http_user_agent", \'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"server_name": "$host",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_time": "$request_time",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"upstream_response_time": "$upstream_response_time",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"realpath_root": "$realpath_root",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"cookie": "$http_cookie",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_body": "$request_body",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"nginx_version": "$nginx_version",\'')]),s._v("\n                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"scheme": "$scheme"}\'')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("然后添加 ldap 的配置，这里不再赘述，参考这里：http://fsvip.gitee.io/hexo-theme-fluid//pages/3416.html#_6-nginx")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f6405d8c66d3cf70.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("最后模拟访问一下，看看日志中是否记录到了对应用户：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@timestamp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-11-15T16:57:29+08:00"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_uri"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_user"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"verb"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpversion"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body_bytes_sent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"referrer"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_agent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ELinks/0.12pre6 (textmode; Linux; 89x44-2)"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.002"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_response_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"realpath_root"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/nginx/html"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cookie"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_body"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx_version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.14.0"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scheme"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("就能看到了在对应时间点中，eryajf 这个用户登陆了本系统，以后若有什么问题，就能更容易锁定目标了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);