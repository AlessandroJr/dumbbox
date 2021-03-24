/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DumbBox.Application',

    name: 'DumbBox',

    requires: [
        // This will automatically load all classes in the DumbBox namespace
        // so that application classes do not need to require each other.
        'App.view.main.Main'
    ],

    // The name of the initial view to create.
    mainView: 'App.view.main.Main'
});
