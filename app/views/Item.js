Ext.define('ItemApp.view.Item', {
    extend: 'Ext.window.Window',
    alias: 'widget.itemwindow',

    title: 'item',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        padding: '30 20 15 20',
                        xtype: 'numberfield',
                        name: 'price',
                        fieldLabel: 'Цена',
                        minValue: 0,
                    },
                    {
                        padding: '15 20 30 20',
                        xtype: 'numberfield',
                        name: 'count',
                        fieldLabel: 'Количество',
                        minValue: 0,
                    },
                ],
            },
        ];
        this.dockedItems = [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    '->',
                    {
                        text: 'Сохранить',
                        action: 'save',
                    },
                ],
            },
        ];

        this.callParent(arguments);
    },
});
