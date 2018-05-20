/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('App.view.details.SessionDetailsViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sessionDetailsViewModel',

    data: {
        record: {
            id: null,
            title: '',
            description: '',
            approved: false
        }
    }
});
