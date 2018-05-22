Ext.define('App.store.SessionPresenterStore', {
    extend: 'Ext.data.Store',
    alias: 'store.sessionPresenterStore',
    model: 'App.model.SessionPresenterModel',
    storeId: 'SessionPresenters',
    autoLoad: true,
    // filters: [
    //     function(item) {
    //         return false;
    //     }
    // ]
});