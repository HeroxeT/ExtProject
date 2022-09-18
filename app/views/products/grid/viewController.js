Ext.define('App.views.products.grid.viewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productsGrid',

    renderCount(value, metaData) {
        if ((value === 0 || !value) && metaData) {
            metaData.style = 'background: red; font-weight: bold; color: white;';
        }

        return value;
    },

    openCreateCard() {
        const productWindow = _Component.openComponentCard('productCard', 'productCardNew')();
        productWindow.show();
    },

    openEditCard(grid, record) {
        const recordId = record.getId();
        const productWindow = _Component.openComponentCard('productCard', `productCard${recordId}`)();

        const viewModel = productWindow.getViewModel();
        const form = productWindow.down('form');

        viewModel.set({productId: recordId});
        form.loadRecord(record);

        productWindow.show();
    },
});
