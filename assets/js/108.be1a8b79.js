(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{453:function(s,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("准备给开源项目做一个镜像，由于当前使用的是 M1 型号的 Mac 电脑，打出来的镜像无法运行在 AMD 架构之上，但是在 dockerhub 上又见过一些比较大的项目的镜像，支持多平台，因此就了解了一波，本文记录一下实操过程。")]),s._v(" "),a("p",[s._v("在 docker 官方文档中，也有对这块儿内容的讲解，参考： "),a("a",{attrs:{href:"https://docs.docker.com/desktop/multi-arch/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Leverage multi-CPU architecture support"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("核心点是：Docker 在 19.03 版本引入了构建插件 "),a("a",{attrs:{href:"https://github.com/docker/buildx",target:"_blank",rel:"noopener noreferrer"}},[s._v("buildx"),a("OutboundLink")],1),s._v(" ，可以很轻松地构建多平台 Docker 镜像。")]),s._v(" "),a("h2",{attrs:{id:"启用-buildx-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-buildx-插件"}},[s._v("#")]),s._v(" 启用 buildx 插件")]),s._v(" "),a("p",[s._v("使用之前确保自己的 docker 版本不低于 19.03，通过如下方式查看自己的 docker 版本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nDocker version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.10")]),s._v(".13, build a224086\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("启用 buildx 插件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_CLI_EXPERIMENTAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enabled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("验证是否开启：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx version\ngithub.com/docker/buildx v0.8.1 5fac64c2c49dae1320f2b51f1a899ca451935554\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用桌面版的 docker 已经提供 "),a("code",[s._v("binfmt_misc")]),s._v(" 多架构支持，这意味着您可以为不同的 Linux 架构运行容器，例如 "),a("code",[s._v("arm")]),s._v("、"),a("code",[s._v("mips")]),s._v("、"),a("code",[s._v("ppc64le")]),s._v(" 甚至 "),a("code",[s._v("s390x")]),s._v("，因此不需要再单独配置。")]),s._v(" "),a("h4",{attrs:{id:"从默认的构建器切换到多平台构建器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从默认的构建器切换到多平台构建器"}},[s._v("#")]),s._v(" 从默认的构建器切换到多平台构建器")]),s._v(" "),a("p",[s._v("Docker 默认会使用不支持多 CPU 架构的构建器，我们需要手动切换。")]),s._v(" "),a("p",[s._v("先创建一个新的构建器：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mybuilder\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后启动构建器：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx inspect mybuilder "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--bootstrap")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Building "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(".6s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" FINISHED\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("internal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" booting buildkit                                                                                                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(".5s\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" pulling image moby/buildkit:buildx-stable-1                                                                                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(".8s\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" creating container buildx_buildkit_mybuilder0                                                                                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".7s\nName:   mybuilder\nDriver: docker-container\n\nNodes:\nName:      mybuilder0\nEndpoint:  unix:///var/run/docker.sock\nStatus:    running\nPlatforms: linux/arm64, linux/amd64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/mips64le, linux/mips64, linux/arm/v7, linux/arm/v6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("查看当前使用的构建器支持的 CPU 架构：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nNAME/NODE       DRIVER/ENDPOINT             STATUS  PLATFORMS\nmybuilder *     docker-container\n  mybuilder0    unix:///var/run/docker.sock running linux/arm64, linux/amd64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/mips64le, linux/mips64, linux/arm/v7, linux/arm/v6\ndesktop-linux   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n  desktop-linux desktop-linux               running linux/arm64, linux/amd64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6\ndefault         "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n  default       default                     running linux/arm64, linux/amd64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"基于-dockerfile-构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-dockerfile-构建"}},[s._v("#")]),s._v(" 基于 Dockerfile 构建")]),s._v(" "),a("p",[s._v("我们准备好项目的 Dockerfile，并做好 dockerhub 的认证，然后开始构建镜像，并直接推送到 dockerhub。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" eryajf/go-ldap-admin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--platform")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux/arm64,linux/amd64 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--push")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时来到 dockerhub 中看这个镜像，也能看到多平台支持的标识了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/7b99d9255193df82.jpg",alt:""}})]),s._v(" "),a("p",[s._v("我们也可以通过命令行查看每个镜像的信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx imagetools inspect eryajf/go-ldap-admin\nName:      docker.io/eryajf/go-ldap-admin:latest\nMediaType: application/vnd.docker.distribution.manifest.list.v2+json\nDigest:    sha256:e70c93a079f64bf3b11beb5bb5c3365d521ab150ceaccc5c0318ccc94945aa48\n\nManifests:\n  Name:      docker.io/eryajf/go-ldap-admin:latest@sha256:af9f6c43744850e8430124cfa2a3d7faaa998b31e0db500e8e005d7916e3bec2\n  MediaType: application/vnd.docker.distribution.manifest.v2+json\n  Platform:  linux/arm64\n\n  Name:      docker.io/eryajf/go-ldap-admin:latest@sha256:fcf385c734aaf1d7ee9ebc69925f457c6fae5c84df9beffb354b875b0cfc7409\n  MediaType: application/vnd.docker.distribution.manifest.v2+json\n  Platform:  linux/amd64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("当我们在使用并拉取这个镜像的时候，docker 会根据 CPU 架构拉取匹配的镜像。")]),s._v(" "),a("ul",[a("li",[s._v("参考：\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/desktop/multi-arch/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.docker.com/desktop/multi-arch/"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1543689",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cloud.tencent.com/developer/article/1543689"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);