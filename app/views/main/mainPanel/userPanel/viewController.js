Ext.define('App.views.main.mainPanel.userPanel.viewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userPanel',

    logout(button) {
        const mainPanel = button.up('mainPanel');

        if (!mainPanel || mainPanel.destroyed) {
            return;
        }

        mainPanel.destroy();

        const formAuth = Ext.create({
            xtype: 'authorizationForm',
        });

        formAuth.show();
    },
});
