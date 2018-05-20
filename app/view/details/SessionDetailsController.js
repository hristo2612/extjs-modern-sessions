/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('App.view.details.SessionDetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sessionDetailsController',

    onFormSubmitted: function (sender) {
        var record = this.getViewModel().get('record');
        // sender.up('app-main').down('#sessionList').getStore().save(record, {
        //     success: function() {
        //         console.log('success');
        //     }, 
        //     failure: function() {
        //         console.log("failed");
        //     }
        // });
    },

    onFormCanceled: function (sender, record) {  
    }
});
