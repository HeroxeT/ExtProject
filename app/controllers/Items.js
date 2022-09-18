Ext.define('ItemApp.controller.Items', {
    //полностью контроллер
    extend: 'Ext.app.Controller',

    views: ['ItemList', 'Item'],
    stores: ['ItemStore'],
    models: ['Item'],
    //инициализация всех активных часте в views
    init: function () {
        this.control({
            'container > itemlist': {
                itemmousedown: this.editBook,
            },
            'itemwindow button[action=save]': {
                click: this.updateBook,
            },
        });
    },
    // обновление
    updateBook: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
        values.id = id;
        Ext.Ajax.request({
            url: 'app/data/update.php',
            params: values,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    if (data.returnable) {
                        var store = Ext.widget('itemlist').getStore();
                        store.load();
                        Ext.Msg.alert('Обновление', data.message);
                    }
                } else {
                    Ext.Msg.alert('Обновление', 'Не удалось обновить книгу в библиотеке');
                }
            },
        });
    },

    //открытие формы для изменения
    editBook: function (grid, record) {
        var view = Ext.widget('itemwindow');
        view.setTitle('Карточка товара: ' + record.get('name') + ' (ID : ' + record.get('id') + ')');
        view.down('form').loadRecord(record);
    },
});
