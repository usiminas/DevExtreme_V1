$(document).ready(function () {
    pessoa.funcs.init();
});

var pessoa = {

    funcs: {
        init: function () {
            try {

                pessoa.funcs.loadContext();
            }
            catch (e) {
                //console.log(e);
                //alert(e.message);
            };
        },

        loadContext: function () {

            gridview.dataSource.columns =
                [{
                    dataField: "Nome",
                    caption: "Nome",
                    fixed: false
                },
                {
                    dataField: "DataNascimento",
                    caption: "Data de Nascimento",
                    fixed: false
                }]
        }
    }
}
