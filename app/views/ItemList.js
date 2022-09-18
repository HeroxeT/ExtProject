Ext.define('App.view.ItemList', {
    //таблица и ее отрисовка
    extend: 'Ext.grid.Panel',
    alias: 'widget.itemlist',
    title: 'Список товаров',
    store: 'ItemStore',
    initComponent: function () {
        this.columns = [
            {
                flex: 1,
                dataIndex: 'id',
                text: 'ID',
            },
            {
                flex: 1,
                dataIndex: 'name',
                text: 'Название',
            },
            {
                flex: 1,
                dataIndex: 'about',
                text: 'Описание',
            },
            {
                flex: 1,
                dataIndex: 'price',
                text: 'Цена',
            },
            {
                flex: 1,
                dataIndex: 'count',
                text: 'Количество',
                renderer: function (v, m) {
                    if (v === 0) {
                        m.style = 'background:#bb3f3f';
                    }
                    return v;
                },
            },
        ];

        this.callParent(arguments);
    },
});
