Ext.define('App.controllers.FilterController', {
    singleton: true,
    alternateClassName: '_Filter',

    filter(filter, filterFunction) {
        const {searchProperty} = filter;
        const filterValue = filter.getValue();

        const filterTarget = filter.up('grid');

        if (!filterTarget || filterTarget.destroyed) {
            return;
        }

        const filterTargetStore = filterTarget.getStore();

        if (!filterValue) {
            filterTargetStore.removeFilter(searchProperty);
            return;
        }

        filterTargetStore.addFilter(filterFunction(searchProperty, filterValue));
    },

    searchForEnteredValue(searchProperty, filterValue) {
        return {
            property: searchProperty,
            value: filterValue,
            operator: '=',
        }
    },

    searchByOccurrence(searchProperty, filterValue) {
        return {
            property: searchProperty,
            value: filterValue,
            operator: 'like',
        }
    },
});
