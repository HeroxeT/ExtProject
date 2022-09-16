Ext.application({

    name: 'App',
    appFolder: 'app',
    requires: [
        'Ext.container.Viewport',
        'App.view.main.authorizationForm.view',
        'App.view.main.mainPanel.view',
    ],
    // controllers: ['Items'],


    launch() {

        const formAuth = Ext.create({
            xtype: 'authorizationForm',
        });

        formAuth.show();


    }
})
;

