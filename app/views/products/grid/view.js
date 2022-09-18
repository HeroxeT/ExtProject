Ext.define('App.views.products.grid.view', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productsGrid',
    title: 'Список товаров',
    controller: 'productsGrid',

    requires: ['App.stores.products.Products', 'App.views.products.grid.viewController'],

    viewConfig: {
        enableTextSelection: true,
    },

    store: {
        type: 'productsStore',
    },

    tbar: [
        {
            xtype: 'numberfield',
            fieldLabel: 'ID:',
            labelWidth: 70,

            listeners: {
                specialkey(field, e) {
                    if (e.browserEvent.keyCode !== 13) {
                        return;
                    }

                    _Filter.filter(field, _Filter.searchForEnteredValue);
                },
            },
        },
    ],

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            width: 30,
        },
        {
            text: 'Название',
            dataIndex: 'name',
            flex: 1,
        },
        {
            text: 'Описание',
            dataIndex: 'about',
            flex: 1,
        },
        {
            text: 'Количество',
            dataIndex: 'price',
            flex: 1,
        },
        {
            text: 'Количество',
            dataIndex: 'count',
            flex: 1,

            renderer: 'renderCount',
        },
    ],
});
