Ext.define('App.views.main.mainPanel.toolBar.view', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mainToolBar',

    items: [
        {
            xtype: 'products',
            text: 'Товары',
        },
    ],
});