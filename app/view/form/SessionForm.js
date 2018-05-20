Ext.define('App.view.form.SessionForm', {
    extend: 'Ext.Dialog',
    xtype: 'sessionForm',
    title: 'Edit Sessions',

    //controller: 'sessionFormController',
    items: [
        {
            xtype: 'formpanel',
            padding: 10,
            items: [
                {
                    xtype: 'textfield',
                    label: 'Title',
                    name: 'title',
                    bind: '{record.title}'
                },
                {
                    xtype: 'textfield',
                    label: 'Description',
                    name: 'description',
                    bind: '{record.description}'
                },
                {
                    xtype: 'checkboxfield',
                    label: 'Approved',
                    name: 'approved',
                    bind: '{record.approved}'
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    items: [
                        '->', 
                        {
                            xtype: 'button',
                            text: 'Submit',
                            iconCls: 'x-fa fa-check',
                            handler: function() {
                                this.up('dialog').destroy();
                            }
                        }, 
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            iconCls: 'x-fa fa-close',
                            handler: function() {
                                this.up('dialog').destroy();
                            }
                        }
                    ]
                }
            ],
        }
    ]
})