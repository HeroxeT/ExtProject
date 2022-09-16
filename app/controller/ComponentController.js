Ext.define('App.controller.ComponentController', {
    singleton: true,
    alternateClassName: '_Component',


    openComponent(xtype, options) {
        const tabPanel = Ext.ComponentQuery.query('mainTabPanel')[0];

        if (!tabPanel) {
            return;
        }

        const component = tabPanel.lookupReference(xtype) ||
            tabPanel.add(Ext.create({
                xtype,
                reference: xtype,
                ...options,
            }));

        component.show();
    }
})