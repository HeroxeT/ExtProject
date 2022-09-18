Ext.define('App.views.widgets.filters.filterTextField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.filterTextField',

    config: {
        searchProperty: 'name',
    },

    fieldLabel: 'Наименование:',

    listeners: {
        specialkey(field, e) {
            if (e.browserEvent.keyCode !== 13) {
                return;
            }

            _Filter.filter(field, _Filter.searchByOccurrence);
        },
    },
});