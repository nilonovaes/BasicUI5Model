sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast"
],

function (Controller, History, Toast) {
    "use strict";
    return Controller.extend("ModelUI5.controller.Page2", {


        onNavPress: function () {

            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Page1");
            }

        },
        onInit: function () {

            this.getOwnerComponent()
                .getRouter()
                .getRoute("Page2")
                .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (evt) {
            // debugger;
            var oValue = evt.getParameter("arguments").value;
            Toast.show(oValue);
        }

    });

});