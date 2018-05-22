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

    bind: {
        data: {
            title: '{record.title}',
            description: '{record.description}',
            presenters: '{presenters}'
        }
    },

    tpl: [
        '<h1>{title}</h1>',
        '<h3>{description}</h3>',
        '<tpl for="presenters">',
        '   <h4>Presenter: {data.firstName} {data.lastName}</h4>',
        '   <img class="presenterPhoto" src="{data.imageUrl}" width="300" height="300"/>',
        '</tpl>'
    ]
});
