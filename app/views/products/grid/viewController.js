Ext.define('App.views.products.grid.viewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productsGrid',

    renderCount(value, metaData) {
        if (value === 0 || !value) {
            metaData.style = 'background: red; font-weight: bold; color: white;';
        }

        return value;
    },
});
