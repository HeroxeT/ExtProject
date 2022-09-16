Ext.define('App.view.main.authorizationForm.view', {
    extend: 'Ext.window.Window',
    alias: 'widget.authorizationForm',
    controller: 'authorizationForm',

    requires: ['App.view.main.authorizationForm.viewController',],

    fullscreen: true,
    closable: false,
    title: 'Авторизация',
    width: 300,
    style: 'margin:auto;margin-top:100px;',
    items: [

        {
            xtype: 'form',

            defaults: {
                margin: '20 5 10 5',
                xtype: 'textfield',
                allowBlank: false,
            },
            items: [
                {
                    fieldLabel: 'Логин',
                    name: 'login',
                },
                {
                    fieldLabel: 'Пароль',
                    inputType: 'password',
                    name: 'password',
                },
            ],

            buttons: [
                {
                    text: 'Войти',
                    handler: 'authorization',
                    formBind: true,
                },
            ],
        },
    ],
    draggable: true,
})