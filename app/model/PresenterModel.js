Ext.define('App.model.PresenterModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'firstName',
            type: 'string'
        },
        {
            name: 'lastName',
            type: 'string'
        },
        {
            convert: function(v, rec) {
                return rec.get('firstName') + ' ' + rec.get('lastName');
            },
            name: 'fullName',
            type: 'string'
        },
        {
            name: 'website'
        },
        {
            name: 'bio'
        },
        {
            name: 'imageUrl'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/api/presenter',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
})