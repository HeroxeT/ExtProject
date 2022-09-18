Ext.application({
    name: 'App',
    appFolder: 'app',

    requires: [
        'App.views.main.authorizationForm.view',
        'App.views.main.mainPanel.view',
        'App.views.products.grid.view',

        'App.controllers.ComponentController',
        'App.controllers.FilterController',
    ],

    launch() {
        const formAuth = Ext.create({
            xtype: 'authorizationForm',
        });

        formAuth.show();
    },
});

