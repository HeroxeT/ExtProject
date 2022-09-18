Ext.define('App.views.products.view', {
    extend: 'Ext.menu.Item',
    alias: 'widget.products',

    text: 'Товары',

    requires: [
        'App.views.products.grid.view',
        'App.views.products.card.view',
    ],

    listeners: {
        activate: _Component.openComponentByMenu('productsGrid'),
    },
});
