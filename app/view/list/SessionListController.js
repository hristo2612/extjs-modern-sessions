Ext.define('App.view.list.SessionListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sessionListController',
    
    onEditSession: function(grid, info) {
        var dialogBox = Ext.Viewport.add({
            xtype: 'sessionForm',
            record: info.record,
            viewModel: {
                data: {
                    record: info.record
                }
            }
        });

        dialogBox.show();
    },

    onViewSession: function(grid, record) {
        grid.up('mainView').down('#sessionDetails').getViewModel().set('record', record[0]);
    }
});