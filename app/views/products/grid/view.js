Ext.define('App.views.products.grid.view', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productsGrid',
    title: 'Список товаров',
    controller: 'productsGrid',

    requires: ['App.stores.products.Products', 'App.views.products.grid.viewController'],

    viewConfig: {
        enableTextSelection: true,
    },
    closable: true,

    store: {
        type: 'productsStore',
    },

    listeners: {
        itemdblclick: 'openEditCard',
    },

    tbar: [
        {
            xtype: 'filterNumberField',
            fieldLabel: 'ID:',
            labelWidth: 30,
        },
        {
            xtype: 'filterTextField',
        },
        {
            xtype: 'filterTextField',
            fieldLabel: 'Описание',
            searchProperty: 'about',
            labelWidth: 80,
        },
        '->',
        {
            xtype: 'button',
            text: 'Добавить',
            handler: _Component.openComponentCard('productCard', 'productCardNew'),
        }
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
            text: 'Цена',
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
