/**
 * Created by yaxin on 2015/6/4.
 */
Ext.regApplication({
    /*定义应用程序名称，并作为命名空间*/
    name: 'app',
    /*默认目标名称*/
    defaultTarget: 'viewport',
    /*初始化函数*/
    launch: function(){
        this.viewport = new app.views.viewport();
    }
});