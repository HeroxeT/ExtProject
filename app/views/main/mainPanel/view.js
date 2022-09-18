Ext.define('App.views.main.mainPanel.view', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainPanel',
    viewModel: {
        data: {
            username: null,
            userId: null,
        },
    },

    requires: ['App.views.main.mainPanel.tabPanel.view', 'App.views.main.mainPanel.userPanel.view'],
    layout: {
        type: 'hbox',
        align: 'stretch',
    },

    items: [
        {
            xtype: 'mainTabPanel',
        },
        {
            xtype: 'userPanel',
        },
    ],
});
