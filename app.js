Ext.application({
    name: 'App',
    appFolder: 'app',

    requires: [
        'App.controllers.ComponentController',
        'App.controllers.FilterController',
        'App.controllers.AsyncController',
        'App.controllers.ErrorController',

        'App.views.main.authorizationForm.view',
        'App.views.main.mainPanel.view',
        'App.views.products.view',
        'App.views.widgets.filters.index',
    ],

    launch() {
        const formAuth = Ext.create({
            xtype: 'authorizationForm',
        });

        formAuth.show();
    },
});

