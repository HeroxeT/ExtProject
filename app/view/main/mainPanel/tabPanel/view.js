Ext.define('App.view.main.mainPanel.tabPanel.view', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainTabPanel',
    referenceHolder: true,
    bodyPadding: 5,
    flex: 1,

    tbar: [
        {
            text: 'Товары',
            handler:'',
        },
    ],
    items: [],
    buttons: [{

        text: 'Товары',
        // handler: function () {
        //     let formS = Ext.create('Ext.form.Panel', {//фильтры
        //         items: [{
        //             //первый фильтр
        //             xtype: 'numberfield',
        //             fieldLabel: 'ID:',
        //             padding: '20',
        //             name: 'ids',
        //             listeners: {
        //                 keydown: {
        //                     element: 'el',
        //                     fn: function (e) {
        //                         if (e.browserEvent.keyCode === 13) {
        //                             let id = formS.items.get(0).getValue();
        //                             let store = Ext.widget('itemlist').getStore();
        //                             // let sf = formS.up('panel').down('grid').getStore(); думал что будет уникальное но нет(
        //                             if (id == null) {
        //                                 store.clearFilter();
        //                             } else {
        //                                 store.addFilter(function (item) {
        //                                     return item.get("id") === id;
        //                                 });
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         }, {
        //             //второй фильтр
        //             xtype: 'textfield',
        //             fieldLabel: 'Описание: ',
        //             padding: '20',
        //             name: 'ids',
        //             listeners: {
        //                 keydown: {
        //                     element: 'el',
        //                     // fn: function (e) {
        //                     //     if (e.browserEvent.keyCode === 13) {
        //                     //         let str = formS.items.get(1).getValue().toLowerCase();
        //                     //         let store = Ext.widget('itemlist').getStore();
        //                     //         console.log(str);
        //                     //         // let sf = formS.up('panel').down('grid').getStore(); думал что будет уникальное но нет(
        //                     //         if (str == "") {
        //                     //             store.clearFilter();
        //                     //         } else {
        //                     //             store.addFilter(function (item) {
        //                     //                 let strmain = item.get("about").toLowerCase();
        //                     //                 return strmain.indexOf(str) >= 0;
        //                     //             });
        //                     //         }
        //                     //     }
        //                     // }
        //                 }
        //             }
        //         }]
        //     });
        //     let tab = mainEvent.add({ //само добавление фильтра и itemлиста
        //         xtype: 'panel',
        //         title: 'Товары',
        //         items: [
        //             formS, {
        //                 xtype: 'itemlist'
        //             }
        //         ]
        //     });
        //     mainEvent.setActiveTab(tab);
        // }
    },
        {
            text: 'Выход',
            handler: function () {
            }
        }
    ],

});

