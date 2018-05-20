/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('App.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.mainViewModel',

    stores: {
        sessions: {
            type: 'sessionStore'
        }
    },

    data: {
    }

    //TODO - add data, formulas and/or methods to support your view
});
