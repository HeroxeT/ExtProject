Ext.define('App.views.main.mainPanel.userPanel.viewController', {
    extend: 'Ext.app.viewController',
    alias: 'controller.userPanel',

    logout(button) {
        const mainPanel = button.up('mainPanel');

        if (!mainPanel || mainPanel.destroyed) {
            return;
        }

        const tabPanel = mainPanel.down('tabpanel');
    },
});
