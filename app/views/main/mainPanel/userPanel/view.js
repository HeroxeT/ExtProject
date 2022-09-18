Ext.define('App.views.main.mainPanel.userPanel.view', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userPanel',
    controller: 'userPanel',

    requires: [
        'App.views.main.mainPanel.userPanel.viewController',
    ],

    flex: 0.2,
    border: 0,

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
