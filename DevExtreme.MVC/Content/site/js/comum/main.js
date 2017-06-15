$(document).ready(function () {
    main.funcs.init();
});

var main = {

    vars: {

        hostUrl: null,
        host: window.location.host,
        hostName: window.location.hostname,
        hostPathName: window.location.pathname,
        hostProtocol: window.location.protocol,
        hostPort: window.location.port,
        hostUrlController: null,
        urlFind: null,
        urlSave: null,
        urlRemove: null

    },

    funcs: {

        init: function () {
            try {

                main.funcs.loadContext();
            }
            catch (e) {
                //console.log(e);
                //alert(e.message);
            };
        },

        loadContext: function () {

            main.funcs.loadHostUrl();
            main.funcs.loadHostUrlController();
            main.funcs.loadUrlRepository();

        },

        loadHostUrl: function () {

            main.vars.hostUrl = '';
            main.vars.hostUrl += main.vars.hostProtocol.concat('//');
            main.vars.hostUrl += main.vars.hostName;
            main.vars.hostUrl += main.vars.hostPort != '' ? ':' + main.vars.hostPort : '';
        },

        loadHostUrlController: function (){
            main.vars.hostUrlController = main.vars.hostUrl.concat(main.vars.hostPathName);
        },

        loadUrlRepository: function () {

            main.vars.urlFind = main.vars.hostUrlController.concat('/Find');
            main.vars.urlSave = main.vars.hostUrlController.concat('/Save');
            main.vars.urlRemove = main.vars.hostUrlController.concat('/Remove');

        }
    }
}
