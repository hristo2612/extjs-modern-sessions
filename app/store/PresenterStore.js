Ext.define('App.store.PresenterStore', {
    extend: 'Ext.data.Store',
    alias: 'store.presenterStore',
    model: 'App.model.PresenterModel',
    //autoLoad: true,
    // filters: [
    //     function(item) {
    //         return false;
    //     }
    // ]
});