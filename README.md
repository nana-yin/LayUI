# LayUI框架学习

# 安装包：
```
npm i
```

# 运行项目：
```
npm run dev
```

# 打包项目：
```
npm run build
```
<br /> 
____________________________________________________________________________________
<br /> 
<br /> 
<br /> 

# 1、全局配置(layui.config(options))：
```
layui.config({
  dir: '/res/layui/', // layui.js 所在目录（如果是 script 单独引入 layui.js，无需设定该参数）一般可无视
  version: false, // 一般用于更新模块缓存，默认不开启。设为 true 即让浏览器不缓存。也可以设为一个固定的值，如：201610
  debug: false, // 用于开启调试模式，默认 false，如果设为 true，则JS模块的节点会保留在页面
  base: '', // 设定扩展的 layui 模块的所在目录，一般用于外部模块扩展
});
```
# 2、定义一个layui模块(layui.define([mods], callback))：
```
// 参数 mods 是可选的，用于声明该模块所依赖的模块。
// callback 即为模块加载完毕的回调函数，它返回一个 exports 参数，用于输出该模块的接口
layui.define(function(exports){
  // TODOS...
  // exports 是一个函数，它接受两个参数，第1个参数为模块名，第2个参数为模块接口。
  exports('demo', {
    msg: 'Hello Demo'
  });
});
```
// 最终结果：demo 就会注册到 layui 对象下，即可通过 var demo = layui.demo 去得到该模块接口

# 3、加载模块（layui.use([mods], callback)）：
```
// 若 mods 不填，只传一个 callback 参数，则表示引用所有内置模块
// callback 会在 html 文档加载完毕后再执行，确保代码在任何地方都能对元素进行操作
```
# 4、加载动态的css文件（layui.link(href)）
# 5、本地存储：
// 其中参数 table 为表名，settings是一个对象，用于设置 key、value。
localStorage 持久化存储：layui.data(table, settings)
sessionStorage 会话性存储：layui.sessionData(table, settings)  注：layui 2.2.5 新增
```
//【增】：向 test 表插入一个 nickname 字段，如果该表不存在，则自动建立。
layui.data('test', {
  key: 'nickname',
  value: '贤心'
});
 
//【删】：删除 test 表的 nickname 字段
layui.data('test', {
  key: 'nickname',
  remove: true
});
layui.data('test', null); //删除test表
  
//【改】：同【增】，会覆盖已经存储的数据
  
//【查】：向 test 表读取全部的数据
var localTest = layui.data('test');
console.log(localTest.nickname); // 获得“贤心”
```
# 6、获取浏览器信息（layui.device(key)，参数 key 是可选的）：
```
// 参数解释：
{
  os: "windows", //当前浏览器所在的底层操作系统，如：Windows、Linux、Mac 等
  ie: false, //当前浏览器是否为 ie6-11 的版本，如果不是 ie 浏览器，则为 false
  weixin: false, //当前浏览器是否为微信 App 环境
  android: false, //当前浏览器是否为安卓系统环境
  ios: false, //当前浏览器是否为 IOS 系统环境
  mobile: false, //当前浏览器是否为移动设备环境（v2.5.7 新增）
}
```
# 7、其它底层方法：
- layui.cache	静态属性。获得一些配置及临时的缓存信息
- layui.extend(options)	拓展一个模块别名，如：layui.extend({test: '/res/js/test'})
- layui.each(obj, fn)	对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句。
- layui._typeof(operand)	获取详细数据类型（基本数据类型和各类常见引用类型，该方法为 layui 2.6.7 新增）如：
    - layui._typeof([]); //array 
    - layui._typeof({}); //object 
    - layui._typeof(new Date()); //date等等。
- layui._isArray(obj)	对象是否为泛数组结构（该方法为 layui 2.6.7 新增）。如 Array、NodeList、jQuery 对象等等。
    - layui._isArray([1,6]); //true 
    - layui._isArray($('div')); //true 
    - layui._isArray(document.querySelectorAll('div')); //true
- layui.getStyle(node, name)	获得一个原始 DOM 节点的 style 属性值，如：
    - layui.getStyle(document.body, 'font-size')
- layui.img(url, callback, error)	图片预加载
- layui.sort(obj, key, desc)	将数组中的对象按某个成员重新对该数组排序，如：
    - layui.sort([{a: 3},{a: 1},{a: 5}], 'a')
    - // desc取值：？？？
- layui.router()	获得 location.hash 路由结构。
- layui.url(href)	用于将一段 URL 链接中的 pathname、search、hash 属性值进行对象化处理
    - 参数： href 可选。若不传，则自动读取当前页面的 url（即：location.href）
    - 示例：var url = layui.url();
- layui.hint()	向控制台打印一些异常信息，目前只返回了 error 方法：
    - layui.hint().error('出错啦');
- layui.stope(e)	阻止事件冒泡
- layui.onevent(modName, events, callback)	增加自定义模块事件？？？？。
- layui.event(modName, events, params)	执行自定义模块事件，搭配 onevent 使用？？？？
- layui.off(events, modName)	用于移除模块相关事件的监听（v2.5.7 新增）
    - 如：layui.off('select(filter)', 'form')，
    - 那么 form.on('select(filter)', callback)的事件将会被移除。
- layui.factory(modName)	用于获取模块对应的 define 回调函数


    

