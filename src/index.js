// 第二步，定义需要用的模块，并且导出

// 以依赖 layui 的 layer 和 form 模块为例
// layui.define(['layer', 'form'], function(exports){
//     var layer = layui.layer // 弹窗
//         ,form = layui.form; // 表单

//     layer.msg('这是layUI的弹窗');

//     form

//     exports('index', {}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
// }); 
layui.define(['form'], function(exports){
    var form = layui.form; // 表单
    // 提交表单
    form.on('submit(*)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })

    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
}); 