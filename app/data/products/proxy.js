Ext.define('App.data.products.proxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.productsProxy',

    type: 'ajax',

    api: {
        read: 'app/data/items.json',
        update: 'app/data/update.php',
        create: 'app/data/update.php',
    },
});
