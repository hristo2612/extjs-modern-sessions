Ext.define('App.view.presenters.PresenterList', {
    extend: 'Ext.grid.Grid',

    xtype: 'presenterList',

    bind: {
        store: '{presenters}'
    },

    title: 'Presenter(s)',
 
    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            flex: 1
        },
        {
            text: 'Presenter Name',
            dataIndex: 'fullName',
            flex: 1
        },
    ],
    height: '100%',
    width: '100%',

});