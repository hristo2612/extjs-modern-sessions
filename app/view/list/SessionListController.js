Ext.define('App.view.list.SessionListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sessionListController',

    onEditSession: function (grid, info) {
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

    onViewSession: function (grid, record) {
        grid.up('mainView').down('#sessionDetails').getViewModel().set('record', record);
    },

    onViewPresenter: function (grid, record) {
        var sessionId = record.get('id');

        var presenterIds = [];

        var mainViewModel = grid.up('mainView').getViewModel();
        var sessionPresenters = mainViewModel.get('sessionPresenters');

        sessionPresenters.each(function (rec) {
            if (rec.get('sessionId') === sessionId) {
                presenterIds.push(rec.get('presenterId'));
            }
        });

        var presenters = mainViewModel.get('presenters')
        
        function filterPresenters(presenterRecords) {
            presenterRecords.clearFilter();
            presenterRecords.filterBy(function (rec) {
                var foundMatch = false;
                for (var i = 0; i < presenterIds.length; i++) {
                    if (rec.get("id") === presenterIds[i]) {
                        foundMatch = true;
                    }
                }
                return foundMatch;
            })
        }

        if (presenters.data.items.length < 1) {
            presenters.load({
                callback: function (record, operation, success) {
                    filterPresenters(presenters);
                }
            });
        } else {
            filterPresenters(presenters);
        }

    }
});