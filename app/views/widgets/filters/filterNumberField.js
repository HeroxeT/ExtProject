Ext.define('App.views.widgets.filters.filterNumberField', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.filterNumberField',

    config: {
        searchProperty: 'id',
    },

    hideTrigger: true,

    listeners: {
        specialkey(field, e) {
            if (e.browserEvent.keyCode !== 13) {
                return;
            }

            _Filter.filter(field, _Filter.searchForEnteredValue);
        },
    },

});