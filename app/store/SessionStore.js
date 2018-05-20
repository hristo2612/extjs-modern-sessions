Ext.define('App.store.SessionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.sessionstore',
    model: 'App.model.SessionModel',
    autoLoad: true,
    sorters: [        
        { property: 'title' }
    ]
});