/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('App.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',

    requires: [
        'App.store.SessionStore',
        'App.store.PresenterStore',
        'App.store.SessionPresenterStore'
    ],

    alias: 'viewmodel.mainViewModel',

    stores: {
        sessionPresenters: {
            type: 'sessionPresenterStore'
        },
        presenters: {
            type: 'presenterStore'
        },
        sessions: {
            type: 'sessionStore'
        }
    }
});
