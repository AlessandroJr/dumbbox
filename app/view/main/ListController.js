Ext.define('App.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-listcontroller',

    onItemSelected: function () {
        console.log('Clica na mãe');
    }
});