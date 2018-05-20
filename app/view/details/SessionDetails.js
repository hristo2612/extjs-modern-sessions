/**
 * This view is an example list of people.
 */
Ext.define('App.view.details.SessionDetails', {
    extend: 'Ext.form.Panel',

    xtype: 'sessionDetails',

    requires: [
        'App.view.details.SessionDetailsViewModel'
    ],

    controller: 'sessionDetailsController',
    viewModel: 'sessionDetailsViewModel',

    title: 'Details Panel',
    itemId: 'sessionDetails',
    width: '70%',
    height: '100%',

    items: [
        {
            xtype: 'textfield',
            label: 'Title',
            bind: '{record.title}'
        },
        {
            xtype: 'textfield',
            label: 'Description',
            bind: '{record.description}'
        },
        {
            xtype: 'checkboxfield',
            label: 'Approved',
            bind: '{record.approved}'
        },
        {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'onFormSubmitted'
        },
        {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'onFormCanceled'
        }
    ]
});
