/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('App.view.main.SessionListViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sessionListViewModel',

    stores: {
        records: {
            type: 'sessionStore'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
