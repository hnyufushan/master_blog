(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{772:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("作为一名阿里巴巴开源项目的拥护者，从 Chat2DB 开源至今都有关注这个开源项目。因为之前的版本还存在较多 Bug，暂时就没有分享。目前升级到 v1.0.11 版本后，我来谈谈我个人的一个使用感受。")])]),t._v(" "),e("h2",{attrs:{id:"_1-什么是-chat2db"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-chat2db"}},[t._v("#")]),t._v(" 1.什么是 Chat2DB")]),t._v(" "),e("p",[t._v("Chat2DB 是一款有开源免费的多数据库客户端工具，支持 Windows、MAC 本地安装，也支持服务器端部署，Web 网页访问。和传统的数据库客户端软件Navicat、DBeaver 相比 Chat2DB 集成了 AIGC 的能力，能够将自然语言转换为 SQL，也可以将 SQL 转换为自然语言，可以给出研发人员 SQL 的优化建议，极大地提升人员的效率，是 AI 时代数据库研发人员的利器。未来即使不懂SQL的运营业务也可以使用快速查询业务数据、生成报表能力。")]),t._v(" "),e("h2",{attrs:{id:"_2-下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载安装"}},[t._v("#")]),t._v(" 2.下载安装")]),t._v(" "),e("p",[t._v("项目 Releases 地址：\nhttps://github.com/alibaba/Chat2DB/releases")]),t._v(" "),e("p",[t._v("大家根据自己的电脑环境选择对应版本即可，博主这里使用的 MacOS X64（Intel芯片）版本。")]),t._v(" "),e("h2",{attrs:{id:"_3-安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装配置"}},[t._v("#")]),t._v(" 3.安装配置")]),t._v(" "),e("p",[t._v("正常双击打开拖动到 Applications 进行安装，安装完成后配置 Chat2DB AI SQL 功能。找到设置，填写 Open AI 的密钥（登录 OpenAI 官网，右上角View API keys 创建即可）。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics3.baidu.com/feed/730e0cf3d7ca7bcbfd0d1463bc70086ff724a88a.jpeg",alt:""}})]),t._v(" "),e("p",[t._v("创建完成后，在设置中输入刚刚获取的 OpenAI 密钥。\n"),e("img",{attrs:{src:"https://pics1.baidu.com/feed/7acb0a46f21fbe0939ce501481186f3f8644ada7.jpeg@f_auto?token=25dee4efcbaf357f85d15a807e4558f5",alt:""}}),t._v("\n至此，我们已经完成了基础的配置，下面我们来感受一下 Chat2DB。\nChat2DB 初体验")]),t._v(" "),e("h2",{attrs:{id:"_4-配置数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置数据源"}},[t._v("#")]),t._v(" 4.配置数据源")]),t._v(" "),e("p",[t._v("这里以 MySQL 为例，点击加号（+）新建数据源。\n"),e("img",{attrs:{src:"https://pics6.baidu.com/feed/b3fb43166d224f4ad2febdc5e08ff35e9922d103.jpeg@f_auto?token=0575a845550dc5f3a99049d616ee1bde",alt:""}})]),t._v(" "),e("p",[t._v("填写相关链接信息，选择数据库，这里 test 为例：\n"),e("img",{attrs:{src:"https://pics2.baidu.com/feed/c8177f3e6709c93d3ffc19b575459bd0d00054ee.jpeg@f_auto?token=8bfe9b8074e17bac3373ff55b41989a5",alt:""}}),t._v("\n目前 MAC 版本选择了数据库 test，但是实际上依旧还是将整个 localhost 的所有数据库列出来了。这是个已知 Bug，博主也提交了 Issue，建议官方不选择数据库默认所有，指定了数据库就单独显示某个库。")]),t._v(" "),e("h2",{attrs:{id:"_5-准备测试数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-准备测试数据"}},[t._v("#")]),t._v(" 5.准备测试数据")]),t._v(" "),e("p",[t._v("这里博主准备了一份测试数据表，分别是：科目表、学生成绩表、学生信息表、学生选修科目表，大家可以复制执行即可。")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" NAMES utf8mb4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" FOREIGN_KEY_CHECKS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ------------------------------ Table structure for course-- ----------------------------DROP TABLE IF EXISTS `course`;CREATE TABLE `course` (  `id` int NOT NULL AUTO_INCREMENT COMMENT '科目ID',  `name` varchar(50) NOT NULL COMMENT '科目名称',  `teacher` varchar(50) NOT NULL COMMENT '授课教师',  `credit` int NOT NULL COMMENT '科目学分',  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='科目表';-- ------------------------------ Records of course-- ----------------------------BEGIN;INSERT INTO `course` VALUES (1, '语文', '张老师', 100);INSERT INTO `course` VALUES (2, '数学', '王老师', 100);COMMIT;-- ------------------------------ Table structure for score-- ----------------------------DROP TABLE IF EXISTS `score`;CREATE TABLE `score` (  `id` int NOT NULL AUTO_INCREMENT COMMENT '成绩ID',  `student_id` int NOT NULL COMMENT '学生ID',  `course_id` int NOT NULL COMMENT '科目ID',  `score` int NOT NULL COMMENT '成绩',  PRIMARY KEY (`id`),  KEY `student_id` (`student_id`),  KEY `course_id` (`course_id`),  CONSTRAINT `score_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),  CONSTRAINT `score_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学生成绩表';-- ------------------------------ Records of score-- ----------------------------BEGIN;INSERT INTO `score` VALUES (1, 1, 1, 90);INSERT INTO `score` VALUES (2, 1, 2, 95);INSERT INTO `score` VALUES (3, 2, 1, 100);INSERT INTO `score` VALUES (4, 2, 2, 99);COMMIT;-- ------------------------------ Table structure for student-- ----------------------------DROP TABLE IF EXISTS `student`;CREATE TABLE `student` (  `id` int NOT NULL AUTO_INCREMENT COMMENT '学生ID',  `name` varchar(50) NOT NULL COMMENT '学生姓名',  `gender` varchar(10) NOT NULL COMMENT '学生性别',  `birthday` date NOT NULL COMMENT '学生生日',  `address` varchar(100) NOT NULL COMMENT '学生住址',  `phone` varchar(20) NOT NULL COMMENT '学生联系方式',  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学生信息表';-- ------------------------------ Records of student-- ----------------------------BEGIN;INSERT INTO `student` VALUES (1, '小明', '男', '2023-06-16', '广州', '13724889158');INSERT INTO `student` VALUES (2, '小羊', '女', '2023-06-16', '广州', '13800126000');COMMIT;-- ------------------------------ Table structure for student_course-- ----------------------------DROP TABLE IF EXISTS `student_course`;CREATE TABLE `student_course` (  `id` int NOT NULL AUTO_INCREMENT COMMENT '关系ID',  `student_id` int NOT NULL COMMENT '学生ID',  `course_id` int NOT NULL COMMENT '科目ID',  PRIMARY KEY (`id`),  KEY `student_id` (`student_id`),  KEY `course_id` (`course_id`),  CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),  CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学生选修科目表';-- ------------------------------ Records of student_course-- ----------------------------BEGIN;INSERT INTO `student_course` VALUES (1, 1, 1);INSERT INTO `student_course` VALUES (2, 1, 2);INSERT INTO `student_course` VALUES (3, 2, 1);INSERT INTO `student_course` VALUES (4, 2, 2);COMMIT;SET FOREIGN_KEY_CHECKS = 1;")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"_6-认识几个功能菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-认识几个功能菜单"}},[t._v("#")]),t._v(" 6.认识几个功能菜单")]),t._v(" "),e("p",[t._v("当你选择好对应的数据库表后，你会发现有这么 4 个菜单：\n"),e("img",{attrs:{src:"https://pics2.baidu.com/feed/242dd42a2834349bc00a1ec7209276c237d3beed.jpeg@f_auto?token=69ceef76c6f5192e8917df6e2e0e011b",alt:""}})]),t._v(" "),e("p",[t._v("自然语言转 SQL：简单来说就是 使用中文描述，软件自动帮我们生成 SQL；\nSQL 解释：SQL 语句转中文解释（有的时候我们会遇到非常复杂的 SQL，有的甚至成百上千行的SQL，要读懂这段 SQL 语句可能需要几个小时甚至几天时间。 通过 Chat2DB就可以快速了解这段 SQL 的含义）\n有的时候我们写了一段 SQL 性能不好，Chat2DB 也可以帮我们优化 SQL，提升查询性能\n不同数据库 SQL 语法有略微的差异，也可以通过 Chat2DB 让它帮我们去转换这个 SQL 的语法（比如 MySQL 转 SQLServer 语句）\n开始测试")]),t._v(" "),e("h2",{attrs:{id:"_7-自然语言转-sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-自然语言转-sql"}},[t._v("#")]),t._v(" 7.自然语言转 SQL")]),t._v(" "),e("p",[t._v("终端输入查询学生小明的各科目成绩，包括科目名称、教师名字段，点击自然语言转 SQL。\n在弹出的选择表中选择本次查询所涉及到的几个表：course、score、student。\n最终生成如下：\n"),e("img",{attrs:{src:"https://pics2.baidu.com/feed/9e3df8dcd100baa11780ec42ae68da1ec9fc2e24.jpeg@f_auto?token=f5203d0f4b5c5c2cbce04f771973b29d",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_8-sql-解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-sql-解释"}},[t._v("#")]),t._v(" 8.SQL 解释")]),t._v(" "),e("p",[t._v("那么，我们使用这段生成的 SQL 语句反过来看看 Chat2DB 会帮我们解释成什么。选中生成的 SQL 点击 SQL 解释，输出如下：\n"),e("img",{attrs:{src:"https://pics7.baidu.com/feed/9358d109b3de9c824ae30c5f85f9e3061bd843e5.jpeg@f_auto?token=60029aa0a171cf4cd01d12ed70ea30ee",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);