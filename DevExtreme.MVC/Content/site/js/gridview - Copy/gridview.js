$(document).ready(function () {
    devextreme.funcs.init();
});

var devextreme = {

    vars: {
        notifyTime: 3000,
        notifyTemplate: ['success', 'error', 'info', 'warning'],
        listURL: "http://localhost/DevExtreme.MVC/GridView/Listar",
        saveURL: "http://localhost/DevExtreme.MVC/GridView/Salvar",
        removeURL: "http://localhost/DevExtreme.MVC/GridView/Remover?ID="
    },

    funcs: {
        init: function () {
            try {

                devextreme.funcs.loadDataGrid();
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
            DevExpress.ui.notify(data.MsgError, devextreme.vars.notifyTemplate[data.Error], devextreme.vars.notifyTime);
        },

        showNotifySuccess: function (msg) {
            DevExpress.ui.notify(msg, 'success', devextreme.vars.notifyTime);
        },

        showNotifyError: function (msg) {
            DevExpress.ui.notify(msg, 'error', devextreme.vars.notifyTime);
        },

        showNotifyInfo: function (msg) {
            DevExpress.ui.notify(msg, 'info', devextreme.vars.notifyTime);
        },

        showNotifyWarning: function (msg) {
            DevExpress.ui.notify(msg, 'warning', devextreme.vars.notifyTime);
        },

        saveItem: function (item) {
            console.log(item);

            $.ajax({
                type: "POST",
                url: devextreme.vars.saveURL,
                data: item,
                success: function (data) {
                    devextreme.funcs.loadDataGrid();
                    devextreme.funcs.showNotifyData(data);
                },
                error: function (request, status, error) {

                    devextreme.funcs.showNotifyError(request.responseText);
                }
            });
        },

        deleteItem: function (ID) {
            
            console.log(ID);

            $.ajax({
                type: "GET",
                url: devextreme.vars.removeURL + ID,
                success: function (data) {
                    devextreme.funcs.loadDataGrid();
                    devextreme.funcs.showNotifyData(data);
                },
                error: function (request, status, error) {

                    console.log(request.responseText);

                    devextreme.funcs.showNotifyError(request.responseText);
                }
            });
        },

        loadDataGrid: function () {

            $.ajax({
                type: "GET",
                url: devextreme.vars.listURL,
                success: function (data) {

                    if (data.Error == 0) {
                        $("#dataGrid").dxDataGrid({
                            noDataText: "Não existem dados para exibir.",
                            dataSource: data.Object,
                            onRowInserted: function (e) {
                                devextreme.funcs.saveItem(e.key);
                            },
                            onRowUpdated: function (e) {
                                devextreme.funcs.saveItem(e.key);
                            },
                            onRowRemoved: function (e) {
                                devextreme.funcs.deleteItem(e.key.ID);
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
                            columns: [{
                                dataField: "CompanyName",
                                caption: "Company Name",
                                fixed: false
                            },
                             {
                                 dataField: "Phone",
                                 fixed: false
                             }, {
                                 dataField: "Fax",
                                 fixed: false
                             }]
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
