Ext.application({
    //реализация MVC модели на наши товары
    requires: ['Ext.container.Viewport'],
    name: 'ItemApp',
    appFolder: 'app',
    controllers: ['Items'],


    launch: function () {
        //окно входа
        let formAuth = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            title: 'Авторизация',
            width: 300,
            style: 'margin:auto;margin-top:100px;',
            items: [{
                margin: '20 5 10 5',
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'login'
            },
                {
                    margin: '10 5 20 5',
                    xtype: 'textfield',
                    fieldLabel: 'Пароль',
                    name: 'password'
                }],
            buttons: [{
                text: 'Войти',
                handler: function () {
                    auth();
                }
            }],
            draggable: true,
            renderTo: Ext.getBody()
        });


        //экран с товарами
        let mainEvent = Ext.create('Ext.tab.Panel', {
                title: 'Учет товаров',
                minHeight: 200,
                bodyPadding: 5,
                style: 'margin: 20px',
                items: [],
                buttons: [{

                    //идет добавление товаров
                    text: 'Товары',
                    handler: function () {
                        let formS = Ext.create('Ext.form.Panel', {//фильтры
                            items: [{
                                //первый фильтр
                                xtype: 'numberfield',
                                fieldLabel: 'ID:',
                                padding: '20',
                                name: 'ids',
                                listeners: {
                                    keydown: {
                                        element: 'el',
                                        fn: function (e) {
                                            if (e.browserEvent.keyCode === 13) {
                                                let id = formS.items.get(0).getValue();
                                                let store = Ext.widget('itemlist').getStore();
                                                // let sf = formS.up('panel').down('grid').getStore(); думал что будет уникальное но нет(
                                                if (id == null) {
                                                    store.clearFilter();
                                                } else {
                                                    store.addFilter(function (item) {
                                                        return item.get("id") === id;
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }, {
                                //второй фильтр
                                xtype: 'textfield',
                                fieldLabel: 'Описание: ',
                                padding: '20',
                                name: 'ids',
                                listeners: {
                                    keydown: {
                                        element: 'el',
                                        fn: function (e) {
                                            if (e.browserEvent.keyCode === 13) {
                                                let str = formS.items.get(1).getValue().toLowerCase();
                                                let store = Ext.widget('itemlist').getStore();
                                                console.log(str);
                                                // let sf = formS.up('panel').down('grid').getStore(); думал что будет уникальное но нет(
                                                if (str == "") {
                                                    store.clearFilter();
                                                } else {
                                                    store.addFilter(function (item) {
                                                        let strmain = item.get("about").toLowerCase();
                                                        return strmain.indexOf(str) >= 0;
                                                    });
                                                }
                                            }

                                        }
                                    }
                                }
                            }]
                        });
                        let tab = mainEvent.add({ //само добавление фильтра и itemлиста
                            xtype: 'panel',
                            title: 'Товары',
                            items: [
                                formS, {
                                    xtype: 'itemlist'
                                }
                            ]
                        });
                        mainEvent.setActiveTab(tab);
                    }
                },
                    {
                        text: 'Выход',
                        handler: function () {
                            formAuth.show();
                            mainEvent.hide();
                        }
                    }
                ],
                renderTo: Ext.getBody()
            });
        mainEvent.hide();


        //аутендификация (если нужно могу реализовать POST запросом на php
        function auth() {
            let login = formAuth.items.get(0).getValue();
            let password = formAuth.items.get(1).getValue();
            if (login === 'admin' && password === 'padmin') {
                formAuth.hide();
                mainEvent.show();
                formAuth.getForm().reset();
            } else {
                alert('неверный логин или пароль');
            }
        }
    }
})
;

