$(document).ready(function () {
    usuario.funcs.init();
});

var usuario = {

    funcs: {
        init: function () {
            try {

                usuario.funcs.loadContext();
            }
            catch (e) {
                //console.log(e);
                //alert(e.message);
            };
        },

        loadContext: function () {

            gridview.dataSource.columns =
                [{
                    dataField: "Usuario",
                    caption: "Usuario",
                    fixed: false
                },
                {
                    dataField: "Login",
                    caption: "Login",
                    fixed: false
                }]
        }
    }
}
