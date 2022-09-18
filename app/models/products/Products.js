Ext.define('App.models.products.Products', {
    extend: 'Ext.data.Model',
    requires: ['App.data.products.proxy'],

    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'about',
            type: 'string',
        },
        {
            name: 'price',
            type: 'float',
        },
        {
            name: 'count',
            type: 'int',
        },
    ],

    proxy: {
        type: 'productsProxy',

        reader: {
            type: 'json',
            root: 'items',
            successProperty: 'success',
        },
    },
});
