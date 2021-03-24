/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DumbBox.store.Personnel',
        'App.view.main.List'
    ],

    // controller: 'main',
    viewModel: {
        data: {
            loremIpsum: 'teste',
            loremIpsumSS: 'teste Fois',
            name: 'DumbBox'
        },

        // stores: {
        //     Personnel: {
        //         type: 'personnel'
        //     }
        // }
    },

    ui: 'navigation',

    tabBarHeaderPosition: 0,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    headerPosition: 'left',


    // joga a barra lateral pra um menu no topo da tela(de forma responsiva), tentar ver uma forma disso ajudar a fazer uma barra padrão
    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     },
    //     wide: {
    //         headerPosition: 'left'
    //     }
    // },

    // defaults: {
    //     bodyPadding: 20,
    //     tabConfig: {
    //         responsiveConfig: {
    //             wide: {
    //                 iconAlign: 'left',
    //                 textAlign: 'left'
    //             },
    //             tall: {
    //                 iconAlign: 'top',
    //                 textAlign: 'center',
    //                 width: 120
    //             }
    //         }
    //     }
    // },

    items: [{
        // xtype: '',
        title: 'Home',
        iconCls: 'fa fa-home',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
