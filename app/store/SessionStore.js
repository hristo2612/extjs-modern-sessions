Ext.define('App.store.SessionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.sessionStore',
    model: 'App.model.SessionModel',
    autoLoad: true,
    sorters: [        
        { property: 'id' }
    ]
});