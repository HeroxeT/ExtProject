Ext.define('ItemApp.store.ItemStore', { //стор для того чтобы собрать данные
    extend: 'Ext.data.Store',
    model: 'ItemApp.model.Item',
    autoLoad: true,
    storeId: 'ItemStore',
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

