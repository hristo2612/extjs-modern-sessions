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
        grid.up('mainView').down('#sessionDetails').getViewModel().set('record', record);
    },

    onViewPresenter: function(grid, record) {
        var sessionId = record.get('id');
        
        var presenterIds = [];

        var mainViewModel = grid.up('mainView').getViewModel().get('sessions');

        mainViewModel.each(function(rec){
            if (rec.get('id') === sessionId ) {
                console.log('FOUND RECORD WITH CURRENT ID', rec);
            }
        })

    }
});