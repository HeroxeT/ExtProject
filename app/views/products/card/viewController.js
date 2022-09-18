Ext.define('App.views.products.card.viewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productCard',

    async saveRecord(button) {
        const form = button.up('form');
        const productCard = form.up('window');
        const record = form.getRecord() || Ext.create('App.models.products.Products');
        const formData = form.getForm().getFieldValues();

        record.set(formData);

        if (!record.dirty) {
            return;
        }

        try {
            await _Async.saveRecord(record);

            _Component.asyncWorkingWithComponent(productCard, () => {
                productCard.close();
            });

            const productsGrid = Ext.ComponentQuery.query('productsGrid')[0];

            _Component.asyncWorkingWithComponent(productsGrid, () => {
                const store = productsGrid.getStore();
                store.reload();
            });
        } catch (error) {
            _Error.errorHandler(error, 'App.views.products.card.viewController');
        }
    },
})