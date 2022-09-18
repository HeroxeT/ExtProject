Ext.define('App.views.main.mainPanel.userPanel.view', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userPanel',
    flex: 0.2,

    layout: {
        type: 'vbox',
        align: 'center',
    },

    items: [
        {
            xtype: 'panel',
            border: null,
            margin: 20,

            bind: {
                html: 'Добрый день {username}',
            },
        },
        {
            xtype: 'button',
            text: 'Выйти',
            handler: 'logout',
        },
    ],
});
