Ext.define('ItemApp.model.Item', { //модель товаров
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'about',
        type: 'string'
    }, {
        name: 'price',
        type: 'float'
    }, {
        name: 'count',
        type: 'int'
    }]
});
