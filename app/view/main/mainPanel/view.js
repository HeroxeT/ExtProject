Ext.define('App.view.main.mainPanel.view', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainPanel',
    // controller: 'authorizationForm',

    requires: ['App.view.main.mainPanel.tabPanel.view'],
    layout: {
        type: 'hbox',
        align: 'stretch',
    },

    items: [
        {
            xtype: 'mainTabPanel',
        },
    ],

})