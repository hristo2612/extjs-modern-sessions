Ext.define('App.model.SessionModel', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        {
            name: 'title',
            sortType: 'asUCString'
        },
        {
            name: 'description',
            type: 'string'
        },
        'approved',
        {
            dateFormat: 'c',
            name: 'sessionTimeDateTime',
            sortType: 'asDate',
            type: 'date'
        },
        {
            convert: function(v, rec) {
                var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a')
                var pretty = convertIt(rec.get("sessionTimeDateTime"));
                return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/api/session',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
})