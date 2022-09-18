Ext.define('App.controllers.ComponentController', {
    singleton: true,
    alternateClassName: '_Component',

    openComponentByMenu(xtype, options) {
        return (button) => {
            const tabPanel = button.up('mainTabPanel');

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
        };
    },
});
