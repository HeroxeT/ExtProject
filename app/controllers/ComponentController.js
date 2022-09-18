Ext.define('App.controllers.ComponentController', {
    singleton: true,
    alternateClassName: '_Component',

    openComponentByMenu(xtype, options) {
        return (button) => {
            const tabPanel = button.up('mainPanel').down('mainTabPanel');

            const component =
                tabPanel.lookupReference(xtype) ||
                tabPanel.add(
                    Ext.create({
                        xtype,
                        reference: xtype,
                        ...options,
                    }),
                );

            component.show();
            return component;
        };
    },

    openComponentCard(xtype, itemId, options) {
        return () => {
            const card = Ext.ComponentQuery.query(`#${itemId}`)[0] ||
                Ext.create({
                    xtype,
                    itemId,
                    ...options,
                });

            card.show();

            return card;
        }
    },

    asyncWorkingWithComponent(component, componentFunction) {
        if(component && !component.destroyed) {
            componentFunction();
        }
    },
});
