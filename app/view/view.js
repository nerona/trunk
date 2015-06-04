/**
 * Created by yaxin on 2015/6/4.
 */
app.views.viewport = Ext.extend(Ext.Panel,{
    id: 'viewport',
    fullscreen: true,
    layout: 'card',
    activeItem: 0,
    items: [
        {
            xtype:'listPanel'
        },{
            xtype:'noteForm'
        },{
            xtype:'viewNote'
        }
    ],
    initComponent: function(){
        app.views.viewport.superclass.initComponent.apply(this,arguments);
    }
});