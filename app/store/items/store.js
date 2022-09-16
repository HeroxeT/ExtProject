Ext.define('App.store.ItemStore', { //стор для того чтобы собрать данные
    extend: 'Ext.data.Store',
    alias: 'store.itemsStore',
    model: 'App.model.Item',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'app/data/items.json',
        reader: {
            type: 'json',
            root: 'items',
            successProperty: 'success'
        }
    }
});

