Ext.define('App.views.products.card.view', {
    extend: 'Ext.window.Window',
    alias: 'widget.productCard',
    controller: 'productCard',

    requires: [
        'App.views.products.card.viewController',
    ],

    viewModel: {
        data: {
            productId: null,
        },

        formulas: {
            setTitleFormula: (get) => {
                const productId = get('productId');

                return productId ? `Карточка товара №${productId}.` : 'Карточка нового товара.';
            },
        },
    },

    bind: {
        title: '{setTitleFormula}',
    },
    width: 300,

    layout: 'fit',
    items: [
        {
            xtype: 'form',
            padding: 5,
            border: 0,

            defaults: {
                minValue: 0,
                xtype: 'numberfield',
                hideTrigger: true,
            },

            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Наименование',

                    bind: {
                        disabled: '{productId}',
                    }
                },
                {
                    name: 'price',
                    fieldLabel: 'Цена',
                    allowExponential: false,
                },
                {
                    name: 'count',
                    fieldLabel: 'Количество',
                    allowExponential: false,
                    allowDecimals: false,
                },
                {
                    xtype: 'textarea',
                    name: 'about',
                    fieldLabel: 'Описание',

                    bind: {
                        disabled: '{productId}',
                    }
                },
            ],

            buttons: [
                {
                    text: 'Сохранить',
                    handler: 'saveRecord',
                }
            ]
        },
    ],
});
