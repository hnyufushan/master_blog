(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{684:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("RequestBody和RequestParam区别全面详细")]),e._v(" "),a("h2",{attrs:{id:"_1-requestbody和-requestparam区别全面详细"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-requestbody和-requestparam区别全面详细"}},[e._v("#")]),e._v(" 1.@RequestBody和@RequestParam区别全面详细")]),e._v(" "),a("p",[e._v("@RequestParam")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("注解@RequestParam接收的参数是来自requestHeader中，即请求头。")]),e._v(" "),a("li",[e._v("RequestParam可以接受简单类型的属性，也可以接受对象类型。")]),e._v(" "),a("li",[e._v("@RequestParam有三个配置参数：\nrequired 表示是否必须，默认为 true，必须。\ndefaultValue 可设置请求参数的默认值。\nvalue 为接收url的参数名（相当于key值）。")]),e._v(" "),a("li",[e._v("@RequestParam用来处理 Content-Type 为 application/x-www-form-urlencoded 编码的内容，Content-Type默认为该属性。@RequestParam也可用于其它类型的请求，例如：POST、DELETE等请求。\n所以在postman中，要选择body的类型为 x-www-form-urlencoded，这样在headers中就自动变为了 Content-Type : application/x-www-form-urlencoded 编码格式。\n但是这样不支持批量插入数据啊，如果改用 json 字符串来传值的话，类型设置为 application/json，点击发送的话，会报错，后台接收不到值，为 null。\n这时候，注解@RequestBody就派上用场了。继续往下看")])])]),e._v(" "),a("h2",{attrs:{id:"_2-requestbody"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-requestbody"}},[e._v("#")]),e._v(" 2.@RequestBody")]),e._v(" "),a("blockquote",[a("p",[e._v("注解@RequestBody接收的参数是来自requestBody中，即请求体。一般用于处理非 Content-Type: application/x-www-form-urlencoded编码格式的数据，比如：application/json、application/xml等类型的数据。\n就application/json类型的数据而言，使用注解@RequestBody可以将body里面所有的json数据传到后端，后端再进行解析。\nGET请求中，因为没有HttpEntity，所以@RequestBody并不适用。\nPOST请求中，通过HttpEntity传递的参数，必须要在请求头中声明数据的类型Content-Type，SpringMVC通过使用\nHandlerAdapter 配置的HttpMessageConverters来解析HttpEntity中的数据，然后绑定到相应的bean上。")])]),e._v(" "),a("h2",{attrs:{id:"_3-向表中批量插入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-向表中批量插入数据"}},[e._v("#")]),e._v(" 3.向表中批量插入数据")]),e._v(" "),a("p",[e._v("举个批量插入数据的例子，Controller层的写法如下图所示：")]),e._v(" "),a("blockquote",[a("p",[e._v("由于@RequestBody可用来处理 Content-Type 为 application/json 编码的内容，所以在postman中，选择body的类型为row -> JSON(application/json)，这样在 Headers 中也会自动变为 Content-Type : application/json 编码格式。body内的数据如下图所示：\n批量向表中插入两条数据，这里的 saveBatchNovel()方法已经封装了 JPA的 saveAll() 方法。body 里面的 json 语句的 key 值要与后端实体类的属性一一对应。\n注意：前端使用$.ajax的话，一定要指定 contentType: “application/json;charset=utf-8;”，默认为 application/x-www-form-urlencoded。")])]),e._v(" "),a("h2",{attrs:{id:"_4-后端解析json数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-后端解析json数据"}},[e._v("#")]),e._v(" 4.后端解析json数据")]),e._v(" "),a("p",[e._v("上述示例是传递到实体类中的具体写法，那么如果传递到非实体类中，body里面的json数据需要怎么解析呢？我们再来看下面这个例子：\n在body中，我们还是输入上面的json数据，根据分析，上面的json数据是一个List数组内嵌套着map对象，那么在后台的接收形式可写为 List<Map<String, String>>，具体代码如下图所示：")]),e._v(" "),a("blockquote",[a("p",[e._v("得出结论，通过@RequestBody可以解析Body中json格式的数据。")])]),e._v(" "),a("h2",{attrs:{id:"_5-post请求时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-post请求时"}},[e._v("#")]),e._v(" 5.POST请求时")]),e._v(" "),a("blockquote",[a("p",[e._v("@RequestBody --\x3e JSON字符串部分\n@RequestParam --\x3e 请求参数部分\napplication/json格局图\nform-data、x-www-form-urlencoded格局图")])]),e._v(" "),a("p",[e._v("从content-type方面总结：")]),e._v(" "),a("blockquote",[a("p",[e._v("① form-data、x-www-form-urlencoded：不可以用@RequestBody；可以用@RequestParam。见postman的格局，这两种方式的时候没有json字符串部分。\n② application/json：json字符串部分可以用@RequestBody；url中的?后面参数可以用@RequestParam。见postman的格局")])]),e._v(" "),a("p",[e._v("从两种注解方式总结：\n@RequestBody")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestBody Map map)\n(@RequestBody Object object)\napplication/json时候可用\nform-data、x-www-form-urlencoded时候不可用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("@RequestParam")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestParam Map map)\napplication/json时候，json字符串部分不可用，url中的?后面添加参数即可用，form-data、x-www-form-urlencoded时候可用，但是要将Headers里的Content-Type删掉\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestParam String waterEleId,@RequestParam String enterpriseName)\napplication/json时候，json字符串部分不可用，url中的?后面添加参数即可用\nform-data、x-www-form-urlencoded时候可用，且参数可以没有顺序（即前端传过来的参数或者url中的参数顺序不必和后台接口中的参数顺序一致，只要字段名相同就可以），但是要将Headers里的Content-Type删掉\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestParam Object object)\n不管application/json、form-data、x-www-form-urlencoded都不可用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("既不是@RequestBody也不是@RequestParam，没有指定参数哪种接收方式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(Map map)\n(Object object)\napplication/json时候：json字符串部分不可用，url中的?后面添加参数不可用。\n因为没有指定，它也不知道到底是用json字符串部分还是?后面添加参数部分，所以干脆都不可以用\nform-data、x-www-form-urlencoded时都不可用，见图二\n\n(HttpServletRequest request)\napplication/json不可用\nform-data、x-www-form-urlencoded时可用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"_6-get请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-get请求"}},[e._v("#")]),e._v(" 6.GET请求")]),e._v(" "),a("p",[e._v("@RequestBody")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RequestBody -- Map / Object\nGET请求中不可以使用@RequestBody\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("@RequestParam")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestParam Map map)\n在url中的?后面添加参数即可使用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestParam String waterEleId,@RequestParam String enterpriseName)\n在url中的?后面添加参数即可使用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(@RequestParam Object object)\nGET请求中不可以使用\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("当使用GET请求时，通过postman添加?后面的参数，不用在url中自己一个一个拼，点击Params，在下面key-value中输入就自动拼接到url中\n举列子\n上传文件，包含了图中圈出来的两部分\n如果这样，没有@RequestParam，那么url?后的参数就拿不到")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@RequestMapping(value = "/leadingIn", method = RequestMethod.POST)\n    public ResponseObj<Boolean> leadingIn(Map formData,\n                                          HttpServletRequest request,\n                                          Map<String, InputStream> files) {\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("如果control中这样接收，本来想formData只接收url?后的参数，结果将{ “retCode”: null, “data”: true }这部分内容也拿到了，真实意外之喜。字符串这部分内容还可以从request中取到，见下面完整方法。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@RequestMapping(value = "/leadingIn", method = RequestMethod.POST)\n    public ResponseObj<Boolean> leadingIn(@RequestParam Map formData,\n                                          HttpServletRequest request,\n                                          Map<String, InputStream> files) {\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("完整方法")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/**\n     * 导入\n     */\n    @RequestMapping(value = "/leadingIn", method = RequestMethod.POST)\n    public ResponseObj<Boolean> leadingIn(@RequestParam Map formData,\n                                          HttpServletRequest request,\n                                          Map<String, InputStream> files) {\n        //测试\n        try {\n            MultipartHttpServletRequest mulRequest = (MultipartHttpServletRequest) request;\n            Set<Map.Entry<String, MultipartFile>> set = mulRequest.getFileMap().entrySet();\n            Map<String, InputStream> listFile = new LinkedHashMap<>();\n            System.out.println("个数" + set.size());\n            for (Map.Entry<String, MultipartFile> each : set) {\n                String fileName = each.getKey();\n                MultipartFile file = each.getValue();\n                //这里需要上传FTP\n                try {\n                    listFile.put(fileName, file.getInputStream());\n                } catch (Exception ex) {\n                    return new ResponseObj<>(false, null);\n                }\n            }\n\n            String formjson = mulRequest.getParameter("content");\n            ObjectMapper mapper = new ObjectMapper();\n            mapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);\n            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);\n\n//            boolean result = iInstallWorkOrder.upLoadFile(listFile);\n            boolean result = true;\n\n            return new ResponseObj<>(result, null);\n        } catch (Exception ex) {\n            System.out.println(ex.toString());\n            return new ResponseObj<>(false, null);\n        }\n\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br")])]),a("p",[e._v("按F12看一下Network里对应请求：\n使用@RequestParam：Content-Type为application/x-www-form-urlencoded，参数在FormData中\n使用@RequestBody：Content-Type为application/json，参数在Request PayLoad中")]),e._v(" "),a("h2",{attrs:{id:"_7-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-总结"}},[e._v("#")]),e._v(" 7.总结")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("在GET请求中，不能使用@RequestBody")]),e._v(" "),a("li",[e._v("在POST请求，可以使用@RequestBody和@RequestParam，但是如果使用@RequestBody，对于参数转化             的配置必须统一。")]),e._v(" "),a("li",[e._v("可以使用多个@RequestParam获取数据，@RequestBody不可以")])])]),e._v(" "),a("p",[e._v("标题举个例子11")]),e._v(" "),a("blockquote",[a("p",[e._v('在SpringMVC配置了HttpMessageConverters处理栈中，指定json转化的格式，如Date转成‘yyyy-MM-dd’,则参数接收对象包含的字段如果是Date类型，就只能让客户端传递年月日的格式，不能传时分秒。因为不同的接口，它的参数可能对时间参数有不同的格式要求，所以这样做会让客户端调用同事对参数的格式有点困惑，所以说扩展性不高。 如果使用@RequestParam来接受参数，可以在接受参数的model中设置@DateFormat指定所需要接受时间参数的格式。 另外，使用@RequestBody接受的参数是不会被Servlet转化统一放在request对象的Param参数集中，@RequestParam是可以的。 另外，还有一种应用场景，接口规范为resultful风格时，举个例子：如果要获取某个id下此条问题答案的查询次数的话，则后台就需要动态获取参数，其注解为@PathVariable，并且requestMapping中的value应为value="/{id}/queryNum"，')])])])}),[],!1,null,null,null);a.default=n.exports}}]);