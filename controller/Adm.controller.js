sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/core/routing/History",
        "sap/ui/model/json/JSONModel"
    ],

    function (Controller, ResourceModel, History, JSONModel) {
        "use strict";
        return Controller.extend("ModelUI5.controller.Adm", {

            onInit: function (evt) {
                var oModel = new JSONModel(jQuery.sap.getModulePath("ModelUI5.model.data", "/Birthdays.json"));
                this.getView().setModel(oModel, "birthdays");
            },

            onPress: function (evt) {
                var oColumnListItem = evt.getSource();
                this.getOwnerComponent().getRouter().navTo("User", {
                    value: oColumnListItem.getCells()[0].getBinding("title").oValue
                });
            },

            onNavPress: function () {

                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("Faces");
                }

            }

        });

    });