$(document).ready(function () {
    gridview.funcs.init();
});

var gridview = {

    vars: {
        notifyTime: 3000,
        notifyTemplate: ['success', 'error', 'info', 'warning']
    },

    dataSource: {
    
        columns: null

    },

    funcs: {
        init: function () {
            try {

                gridview.funcs.loadDataGrid();
            }
            catch (e) {
                //console.log(e);
                //alert(e.message);
            };
        },

        showLogEvent: function (s, e) {

            console.log('sender: ' + s);
            console.log('event: ' + e);

        },

        showNotifyData: function (data) {
            DevExpress.ui.notify(data.MsgError, gridview.vars.notifyTemplate[data.Error], gridview.vars.notifyTime);
        },

        showNotifySuccess: function (msg) {
            DevExpress.ui.notify(msg, 'success', gridview.vars.notifyTime);
        },

        showNotifyError: function (msg) {
            DevExpress.ui.notify(msg, 'error', gridview.vars.notifyTime);
        },

        showNotifyInfo: function (msg) {
            DevExpress.ui.notify(msg, 'info', gridview.vars.notifyTime);
        },

        showNotifyWarning: function (msg) {
            DevExpress.ui.notify(msg, 'warning', gridview.vars.notifyTime);
        },

        loadGridViewWithFeedbackData: function (data) {

            gridview.funcs.loadDataGrid();
            gridview.funcs.showNotifyData(data);

        },

        saveItem: function (item) {

            console.log(item);

            $.ajax({
                type: "POST",
                url: main.vars.urlSave,
                data: item,
                success: function (data) {

                    gridview.funcs.loadGridViewWithFeedbackData(data);
                },
                error: function (request, status, error) {

                    gridview.funcs.showNotifyError(request.responseText);
                }
            });
        },

        deleteItem: function (item) {


            $.ajax({
                type: "POST",
                url: main.vars.urlRemove,
                data: item,
                success: function (data) {
                    gridview.funcs.loadGridViewWithFeedbackData(data);
                },
                error: function (request, status, error) {

                    console.log(request.responseText);

                    gridview.funcs.showNotifyError(request.responseText);
                }
            });
        },

        loadDataGrid: function () {

            $.ajax({
                type: "GET",
                url: main.vars.urlFind,
                success: function (data) {

                    if (data.Error == 0) {
                        $("#dataGrid").dxDataGrid({
                            noDataText: "Não existem dados para exibir.",
                            dataSource: data.Object,
                            onRowInserted: function (e) {
                                gridview.funcs.saveItem(e.key);
                            },
                            onRowUpdated: function (e) {
                                gridview.funcs.saveItem(e.key);
                            },
                            onRowRemoved: function (e) {
                                gridview.funcs.deleteItem(e.key);
                            },
                            editing: {
                                mode: "popup",
                                //mode: "batch",
                                allowDeleting: true,
                                allowUpdating: true,
                                allowAdding: true,
                                popup: {
                                    title: "Employee Info",
                                    showTitle: true,
                                    width: 800,
                                    height: 600,
                                    position: {
                                        my: "top",
                                        at: "top",
                                        of: window
                                    }
                                }
                            },
                            paging: {
                                pageSize: 10
                            },
                            showColumnLines: true,
                            showRowLines: true,
                            rowAlternationEnabled: true,
                            showBorders: true,
                            pager: {
                                //showPageSizeSelector: true,
                                //allowedPageSizes: [5, 10, 20],
                                showInfo: true
                            },
                            //filterRow: {
                            //    visible: true,
                            //    applyFilter: "auto"
                            //},
                            searchPanel: {
                                align: "right",
                                visible: true,
                                width: 240,
                                placeholder: "Pesquisar..."
                            },
                            //headerFilter: {
                            //    visible: true
                            //},
                            selection: {
                                mode: "single"
                            },
                            //columnFixing: {
                            //    enabled: true
                            //},
                            //columnChooser: {
                            //    enabled: true
                            //},
                            allowColumnReordering: true,
                            hoverStateEnabled: true,
                            columns: gridview.dataSource.columns

                        });
                    }
                },
                error: function (request, status, error) {

                    console.log(request.responseText);
                    //devextreme.funcs.showNotifyNoCallback(request.responseText);
                }
            });
        }
    }
}
