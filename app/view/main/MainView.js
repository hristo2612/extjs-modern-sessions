/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('App.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainView',

    requires: [
        'App.view.details.SessionDetails',
        'App.view.list.SessionList',
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    viewModel: 'mainViewModel',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [ {
        xtype: 'panel',
        layout: {
            type: 'vbox',
        },
        style: {
            width: '40%'
        },
        items: [
            {
                xtype: 'panel',
                title: 'Sessions Panel',
                style: {
                    height: '50%'
                },
                items: [
                    {
                        xtype: 'sessionList',
                        height: 500
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Speaker Panel',
                style: {
                    height: '50%'
                }
            }
        ]
    },
    {
        xtype: 'sessionDetails',
        title: 'Details Panel',
        style: {
            width: '100%',
            height: '100%'
        }
    }]
});
