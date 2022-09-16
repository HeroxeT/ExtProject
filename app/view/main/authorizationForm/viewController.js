Ext.define('App.view.main.authorizationForm.viewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authorizationForm',

    authorization(button) {
        const form = button.up('form');
        const authWindow = form.up('window');
        const formValues = form.getForm().getFieldValues();
        const { login, password } = formValues;

        if (login === '123' && password === '123') {
            authWindow.hide();

            const mainTabPanel = Ext.create({
                xtype: 'mainPanel',
            });

            mainTabPanel.show();

        } else {
            Ext.MessageBox.alert('Ошибка', 'Неправильное имя пользователя или пароль');
        }
    },

});