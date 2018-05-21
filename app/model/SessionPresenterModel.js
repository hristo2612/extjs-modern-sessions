Ext.define('App.model.SessionPresenterModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
        },
        {
            name: 'sessionId',
        },
        {
            name: 'presenterId',
        },
        {
            name: 'sequence',
            sortType: 'asUCString'
        },
        {
            name: 'speakerName'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/api/sessionPresenter',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
})