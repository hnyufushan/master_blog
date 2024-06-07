(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{402:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-以往"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-以往"}},[s._v("#")]),s._v(" 1，以往")]),s._v(" "),t("p",[s._v("以往的 PHP 项目处理方案大多沿用了经典的 lnmp，然后几乎有 PHP 的主机都会配套一个 Nginx，接着有多少个 PHP，就会有多少个 Nginx，然后 lb 后边就得挂上这所有的 Nginx。")]),s._v(" "),t("p",[s._v("但事实上还可以用如下办法来将 PHP 分散管理。")]),s._v(" "),t("h2",{attrs:{id:"_2-现在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-现在"}},[s._v("#")]),s._v(" 2，现在")]),s._v(" "),t("p",[s._v("Nginx 主配置像配置 Java 应用一般反代转发给 PHP 服务：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("upstream php-fpm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9006 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9007 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".7.7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_connect_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_read_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_connect_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_send_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fastcgi_read_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root /data/www/liql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index index.php index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header X-Real-IP  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        try_files "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.php?"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$query_string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   location ~ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root /data/www/liql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index index.php index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_pass  php-fpm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_index  index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_split_path_info ^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        include  fastcgi_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_param  SCRIPT_FILENAME  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("这样只需要将代码放入到 PHP 容器内即可：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" liql/index.php\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php\n    phpinfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Dockerfile\nFROM reg.eryajf.net/multienv/wpt_phpfpm:7.2.34\nCOPY "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /data/www/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("然后重新打镜像：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" aaa "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动两个容器进行访问，可以发现权重很均衡的取到了两个 PHP 容器之内：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.105.201.43"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@timestamp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-01-24T17:14:27+08:00"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9006"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_uri"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"verb"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpversion"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body_bytes_sent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"28892"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"referrer"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_agent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http_x_forwarded_for"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.3.7.7"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.003"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_response_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.003"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"realpath_root"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cookie"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grafana_session=02bc6ce5e1489781ff5ed00ef9fb61ca"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_body"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx_version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.13.6"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scheme"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.105.201.43"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@timestamp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-01-24T17:14:28+08:00"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9007"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_uri"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"verb"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpversion"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body_bytes_sent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"28895"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"referrer"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_agent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http_x_forwarded_for"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.3.7.7"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.004"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_response_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.004"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"realpath_root"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cookie"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grafana_session=02bc6ce5e1489781ff5ed00ef9fb61ca"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_body"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx_version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.13.6"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scheme"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1f46815554ec1108.jpg",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"_3-另外"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-另外"}},[s._v("#")]),s._v(" 3，另外")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在测试过程中发现，如果代理的两个容器有一个没有起来，竟丝毫不影响服务的访问，转发的方式也非常有意思，从日志中观察：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.105.201.43"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@timestamp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-01-24T17:36:27+08:00"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9006"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_uri"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"verb"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpversion"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body_bytes_sent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"28898"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"referrer"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_agent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http_x_forwarded_for"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.3.7.7"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.004"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_response_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.004"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"realpath_root"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/www/liql"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cookie"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grafana_session=02bc6ce5e1489781ff5ed00ef9fb61ca"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_body"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx_version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.13.6"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scheme"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.105.201.43"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@timestamp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-01-24T17:36:29+08:00"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9007, 127.0.0.1:9006"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_uri"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"verb"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpversion"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body_bytes_sent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"28899"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"referrer"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_agent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http_x_forwarded_for"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.3.7.7"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.004"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"upstream_response_time"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.000, 0.004"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"realpath_root"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/www/liql"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cookie"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grafana_session=02bc6ce5e1489781ff5ed00ef9fb61ca"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_body"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx_version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.13.6"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scheme"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("注意日志中的 "),t("code",[s._v("upstream_addr")]),s._v("字段，第一条请求被 9006 端口正常解析，第二条的解析竟然两个端口都有，也就是说，9007 端口不存在或者无法正常解析的时候，此请求会被正常的 9006 给解析掉，看错误日志里记录下了 9007 的错误：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("/01/24 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":36:29 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24165")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#24165: *394 connect() failed (111: Connection refused) while connecting to upstream, client: 10.105.201.43, server: 10.3.7.7, request: "GET / HTTP/1.1", upstream: "fastcgi://127.0.0.1:9007", host: "10.3.7.7"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("注意代码的存放位置")]),s._v(" "),t("ul",[t("li",[s._v("这里有两点需要注意，一个是 "),t("code",[s._v("root")]),s._v("指令不要放在 location 外边，这里是纯 PHP 解析，如果放到外边，请求的时候总会报一个本地找不到的错误：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("/01/24 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":21:51 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("crit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23563")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#23563: *347 realpath() "/data/www/liql" failed (2: No such file or directory) while logging request, client: 10.105.201.43, server: 10.3.7.7, request: "GET / HTTP/1.1", upstream: "fastcgi://127.0.0.1:9006", host: "10.3.7.7"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个时候把 "),t("code",[s._v("root")]),s._v("指令放到 location 内部就不会报这个错误了。")]),s._v(" "),t("ul",[t("li",[s._v("另外注意，代码是存放在 PHP 所在主机上的，而非 Nginx 所在主机，因为"),t("code",[s._v(".php")]),s._v("结尾的请求都是通过 fast_cgi 解析的，而非 Nginx，这里千万不要用传统的 http 代理来理解了。")])]),s._v(" "),t("p",[s._v("所以这个地方的处理流程应该是这样的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("www.example.com\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n      Nginx\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n路由到www.example.com/index.php\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n加载nginx的fast-cgi模块\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nfast-cgi监听127.0.0.1:9006地址\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nwww.example.com/index.php请求到达127.0.0.1:9000\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nphp-fpm 监听127.0.0.1:9000\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nphp-fpm 接收到请求，启用worker进程处理请求\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nphp-fpm 在给定的root地址下解析PHP源码，将结果返回给nginx\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nnginx将结果通过http返回给浏览器\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("这样，就能很清晰地解析整个处理链路了。")]),s._v(" "),t("p",[s._v("本文实验探索的主要意义在于，在这种基础之下，我们就可以摒弃掉以往处理 PHP 业务场景的固化思维，从而将 Nginx 这层网关像处理 Java 应用那样一般，集中对 PHP 应用进行处理了，以实现集中化管理，更加便于横向扩展与运维。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);