Ext.define('App.controllers.FilterController', {
    singleton: true,
    alternateClassName: '_Filter',

    filter(filter, filterFunction) {
        const { searchProperty } = filter;
        const filterValue = filter.getValue();

        const filterTarget = filter.up('grid');

        if (!filterTarget || filterTarget.destroyed) {
            return;
        }

        const filterTargetStore = filterTarget.getStore();

        if (!filterValue) {
            filterTargetStore.removeeFilter(filterFunction());
        }

        filterTargetStore.addFilter(filterFunction(searchProperty, filterValue));
    },

    searchForEnteredValue(searchProperty, filterValue) {
        return (item) => item.get(searchProperty) === filterValue;
    },

    searchByOccurrence(searchProperty, filterValue) {
        const parsedValue = filterValue.toLowerCase();

        return (item) => {
            const parsedProperty = item.get(searchProperty).toLowerCase();
            return parsedProperty.indexOf(parsedValue) >= 0;
        };
    },
});
