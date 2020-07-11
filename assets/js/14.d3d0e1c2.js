(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{257:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"最简单的插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最简单的插件"}},[t._v("#")]),t._v(" 最简单的插件")]),t._v(" "),s("h1",{attrs:{id:"bukkit插件的本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bukkit插件的本质"}},[t._v("#")]),t._v(" Bukkit插件的本质")]),t._v(" "),s("p",[t._v("插件本质是一个基于BukkitAPI的Java应用. 一个插件必须要有 主类 和 "),s("code",[t._v("plugin.yml")]),t._v("文件.")]),t._v(" "),s("p",[t._v("例如下面是一个常见插件, 让我们找一下它的主类和"),s("code",[t._v("plugin.yml")]),t._v("文件.")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/07/11/32WYP4VthqJDLyB.jpg",rel:"external nofollow"}},[s("img",{attrs:{src:"https://i.loli.net/2020/07/11/32WYP4VthqJDLyB.jpg",alt:""}})])]),t._v(" "),s("h1",{attrs:{id:"简单的插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单的插件"}},[t._v("#")]),t._v(" 简单的插件")]),t._v(" "),s("p",[t._v("在编写自己想做的插件之前, 不妨做一个简单的插件来了解一下Bukkit插件如何编写.")]),t._v(" "),s("p",[t._v("新建一个Java工程, 导入开服用的服务端jar文件到工程的Libraries中. 创建"),s("code",[t._v("tdiant.helloworld.HelloWorld")]),t._v("类作为插件的主类, 并继承"),s("code",[t._v("JavaPlugin")]),t._v("类."),s("br"),t._v("\n在主类里覆写"),s("code",[t._v("onEnable")]),t._v("方法和"),s("code",[t._v("onDisable")]),t._v("方法. 完成后, 代码应该类似这样:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("tdiant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helloworld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bukkit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onEnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("      \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDisable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("p",[t._v("Bukkit服务端会在插件被启用时调用"),s("code",[t._v("onEnable")]),t._v("方法, 被停用时调用"),s("code",[t._v("onDisable")]),t._v("方法.")]),t._v(" "),s("p",[t._v("创建"),s("code",[t._v("plugin.yml")]),t._v("文件. 打开plugin.yml文件并在其中输入如下信息：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HelloWorld\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tdiant.helloworld.HelloWorld\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tdiant\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("特别注意: 如果你的插件是基于新版本API(1.13以及以上版本)编写的, 应当在plugin.yml中额外增加"),s("code",[t._v("api-version: 1.13")]),t._v("键值对.例如这样:")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HelloWorld\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tdiant.helloworld.HelloWorld\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.13")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BakaRinya\n")])])]),s("p",[s("strong",[t._v("这会告诉Bukkit, 这个插件是基于新版API编写的.")]),s("br"),t._v("\n若要兼容1.13及以上版本的同时兼容旧版本, 应特别注意各版本之间的 API 变化(譬如1.12进度系统取代了成就系统, 1.13的 Material 枚举发生了巨大变化).")])]),t._v(" "),s("p",[s("em",[t._v("注意: 主类的名称并不是固定的, 但是"),s("code",[t._v("plugin.yml")]),t._v("文件的名称是固定的.")])]),t._v(" "),s("p",[t._v("上面的plugin.yml文件逐行分析如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("键")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("意义")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("插件名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不允许带有中文和空格, 推荐只含有下划线、英文.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("main")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("插件的完整主类名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("例如我这里插件主类为tdiant.helloworld.HelloWorld, 此处则需填写tdiant.helloworld.HelloWorld.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("插件版本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("您可以填写一个合理的String内容, 而不一定必须为数字, 例如可填写v1.0.0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("author")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("作者")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),s("p",[t._v("可以发现, 当插件Jar被正常加载后, 会在控制台输出"),s("code",[t._v("Hello World")]),t._v("字符串, 这标志着我们的HelloWorld插件正常工作.")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/07/11/wBv1hfPEIdRigHC.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://i.loli.net/2020/07/11/wBv1hfPEIdRigHC.png",alt:""}})])]),t._v(" "),s("h1",{attrs:{id:"bukkitapi中的logger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bukkitapi中的logger"}},[t._v("#")]),t._v(" BukkitAPI中的Logger")]),t._v(" "),s("h2",{attrs:{id:"logger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" Logger")]),t._v(" "),s("p",[s("em",[t._v("这里只是简要提及, 不详细介绍, 只需要知道有这件事即可.")])]),t._v(" "),s("p",[t._v("BukkitAPI“修改”了我们常用的sout (即"),s("code",[t._v("System.out.println")]),t._v("), 将其“引入”了BukkitAPI提供的Logger."),s("br"),t._v("\n只有通过Logger输出的文本信息才能记录在服务端生成的log文件中.")]),t._v(" "),s("p",[t._v("在BukkitAPI插件开发时, 我们通常不用sout输出想往后台输出给服主看的文本信息, 而应用Logger."),s("br"),t._v("\n主类有"),s("code",[t._v("getLogger()")]),t._v("方法, 可以利用这个方法获得Logger."),s("br"),t._v("\n例如这样:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onEnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("      \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDisable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("p",[t._v("这样输出信息的方式与sout相比最主要的区别是, 如果你的插件"),s("code",[t._v("plugin.yml")]),t._v("里的名称为"),s("code",[t._v("Test")]),t._v("那么:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("输出的结果是")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[23:33:33 INFO]: 测试\n[23:33:33 INFO]: [Test] 测试\n")])])]),s("h2",{attrs:{id:"chatcolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chatcolor"}},[t._v("#")]),t._v(" ChatColor")]),t._v(" "),s("p",[t._v("在所有能发彩色文字的地方, 你可以直接使用双s (即"),s("code",[t._v("§")]),t._v("符号, Windows系统下按住键盘Alt键, 在数字键盘区域依次按下0167后松开Alt键即可输入该字符) + 对应颜色代码(可以在Minecraft Wiki上查到)代表颜色."),s("br"),t._v("\n颜色是可以混用的: "),s("code",[t._v("§4比§c如§6这§2样")]),t._v(".")]),t._v(" "),s("p",[t._v("在开发中, 你不必这样, "),s("code",[t._v("ChatColor")]),t._v("可以替代.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GREEN"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"好"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("YELLOW "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这样就可以发送一个 红色的“你”, 绿色的“好”, 黄色的感叹号 给玩家.")]),t._v(" "),s("p",[t._v("后面了解配置文件的操作后, 一些插件允许服主在设定一些提示语时用"),s("code",[t._v("&")]),t._v("符号代替"),s("code",[t._v("§")]),t._v(", 插件处理这样的文本信息时, 可以这样处理成带颜色的字符串:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&4哈&c哈&6哈....."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//待处理字符串")]),t._v("\np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发给玩家的还是: &4哈&c哈&6哈.....")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str_finish "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateAlternateColorCodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理好的字符串")]),t._v("\np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str_finish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发给玩家就是彩色的")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("提示：你可以使用")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bukkit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("来导入"),s("code",[t._v("ChatColor")]),t._v("中的所有枚举。接下来你就可以更方便地写颜色代码：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test help"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" GREY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    -    "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" WHITE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"显示帮助菜单。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);