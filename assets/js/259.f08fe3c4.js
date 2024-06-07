(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{602:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("geoip主要用于kibana绘制地理区域图时使用，原理就是通过一个IP库，根据IP直接获取对应的地理坐标等信息，从而在地图上进行展示。")]),s._v(" "),t("h2",{attrs:{id:"_1-下载库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载库。"}},[s._v("#")]),s._v(" 1，下载库。")]),s._v(" "),t("p",[s._v("既然依赖库，那么就先下载一下对应的库：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个库是每周一更新的，在生产环境当中如果想要保证最终结果的准确性，可能需要周期性更新这个库。")]),s._v(" "),t("p",[s._v("解压:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf GeoLite2-City.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" GeoLite2-City_20191126/GeoLite2-City.mmdb /etc/logstash/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后在配置logstash转发日志的时候，将这个库引入即可。")]),s._v(" "),t("h2",{attrs:{id:"_2-logstash配置。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-logstash配置。"}},[s._v("#")]),s._v(" 2，logstash配置。")]),s._v(" "),t("p",[s._v("网上针对这个地方的配置各种各样，致使我们有时候反而不知自己应该怎么配置才是最优的，之前我个人的思路也没走对，以至于费了不少功夫，没有多大收获。")]),s._v(" "),t("p",[s._v("这里需要进行一波调试，通过调试，我们获取自己想要的内容，让配置达到最优化。")]),s._v(" "),t("h3",{attrs:{id:"_1-全解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-全解析"}},[s._v("#")]),s._v(" 1，全解析")]),s._v(" "),t("p",[s._v("想要得到最终答案，我们需要先看看配置项都给了我们哪些选择，这个时候可以直接用如下配置对NGINX访问日志进行解析：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("input "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  kafka "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    bootstrap_servers  => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.3.0:9092"')]),s._v("\n    group_id          => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n    consumer_threads => "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n    topics            => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n    codec             => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),s._v("\n    client_id => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nfilter "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  geoip "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    source => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),s._v("\n    database => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/logstash/GeoLite2-City.mmdb"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\noutput "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  stdout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    codec => rubydebug\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n# output "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n#  elasticsearch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n#  hosts => "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.3.0:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n#  index => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logstash-nginx-%{+YYYY.MM}"')]),s._v("\n#  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n#"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("通过filter规则中的geoip模块进行解析， "),t("code",[s._v("source")]),s._v("用于指定日志当中记录客户端IP的字段，"),t("code",[s._v("database")]),s._v("则指定了我们解压之后的IP库。同时使用将日志打印到前台的方式，便于观察调试。")]),s._v(" "),t("p",[s._v("此时如有日志过来，则可以看到经由logstash接管之后的日志样式如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_time"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5.495"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n               "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpversion"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n               "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"request_uri"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/synchrony-proxy/v1/bayeux-sync1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n               "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.3.2.12"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@version"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geoip"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"country_name"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"China"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timezone"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/Shanghai"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"longitude"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120.1619")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region_name"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Zhejiang"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"country_code2"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CN"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"city_name"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hangzhou"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latitude"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.294")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region_code"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZJ"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"continent_code"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AS"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"115.239.211.92"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"location"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lat"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.294")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lon"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120.1619")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"country_code3"')]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CN"')]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("内容比较多，这里只截取了我们想要的部分内容进行后续的讲解。")]),s._v(" "),t("p",[s._v("看到默认的情况下，geoip模块给出的信息还是很多的，但并不是所有的都会用到，各位可以根据自己的需求进行按需配置。")]),s._v(" "),t("p",[s._v("这里可以用到两个关键字：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("fileds")]),s._v("：表示只保留自己想要的字段。")]),s._v(" "),t("li",[t("code",[s._v("remove_field")]),s._v("：表示删除某些不想要的字段。")])]),s._v(" "),t("h3",{attrs:{id:"_2-正式配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-正式配置"}},[s._v("#")]),s._v(" 2，正式配置")]),s._v(" "),t("p",[s._v("根据我的实际需求，最终我的配置如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("input "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  kafka "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    bootstrap_servers  => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.3.0:9092"')]),s._v("\n    group_id          => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n    consumer_threads => "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n    topics            => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n    codec             => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),s._v("\n    client_id => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nfilter "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  geoip "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    source => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote_addr"')]),s._v("\n    database => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/logstash/GeoLite2-City.mmdb"')]),s._v("\n    fields => "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"country_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"city_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"location"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\noutput "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  elasticsearch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    hosts => "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.3.0:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    index => "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logstash-nginx-%{+YYYY.MM}"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("只保留了国家，省份，城市，坐标这四个信息，在绘制地理坐标图的时候，已经够用了。")]),s._v(" "),t("p",[s._v("此处需要注意的一个地方就是最后输出的索引名称，必须是以logstash开头才行，否则在kibana当中绘制的时候，将无法解析到IP的坐标信息。")]),s._v(" "),t("h3",{attrs:{id:"_3-绘图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-绘图"}},[s._v("#")]),s._v(" 3，绘图")]),s._v(" "),t("p",[s._v("创建一个 "),t("code",[s._v("坐标地图")]),s._v("类型的可视化，然后选择对应的索引，进入到配置界面，指标就用默认的计数，主要的配置是下边的存储桶当中，聚合选择"),t("code",[s._v("Geohash")]),s._v("，字段选择"),t("code",[s._v("geoip.location")]),s._v("（如果此处看不到这个字段，应该就是上边注意点没有遵守，需要让索引名称以logstash开头），然后点击播放，即可看到对应访问热图呈现在了右侧地图当中了。")]),s._v(" "),t("p",[s._v("绘制地理热图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8d8b6c3a6a429ea3.jpg",alt:"image-20191202110445187"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);