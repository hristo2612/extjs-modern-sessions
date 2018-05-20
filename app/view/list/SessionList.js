Ext.define('App.view.list.SessionList', {
    extend: 'Ext.grid.Grid',
    xtype: 'sessionList',

    requires: [
        'App.view.form.SessionForm',
        'App.store.SessionStore'
    ],

    store: {
        type: 'sessionStore'
    },
    //viewModel: 'sessionListViewModel',
    controller: 'sessionListController',

    columns: [{
        text: 'Id',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Approved',
        dataIndex: 'approved',
        flex: 1
    }, {
        text: 'Session Start Time',
        dataIndex: 'sessionTimePretty',
        flex: 1
    }, {
        text: 'Actions',
        width: 50,
        cell: {
            tools: {
                gear: {
                    handler: 'onEditSession'
                }
            }
        }
    }],
    height: '100%',
    width: '100%',

    listeners: {
        select: 'onViewSession'
    }
})
