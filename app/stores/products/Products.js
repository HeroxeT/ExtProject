Ext.define('App.stores.products.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.productsStore',
    model: 'App.models.products.Products',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'app/data/items.json',
        reader: {
            type: 'json',
            root: 'items',
            successProperty: 'success',
        },
    },
});
