sap.ui.define([
        "jquery.sap.global",
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
    ],

    function (jQuery, Controller, JSONModel) {
        "use strict";
        return Controller.extend("ModelUI5.controller.Faces", {

            onInit: function (evt) {
                var sDataPath = jQuery.sap.getModulePath("ModelUI5.model.data", "/Birthdays.json");
                var oModel = new JSONModel(sDataPath);
                this.getView().setModel(oModel, "birthdays");



                // var birthdays = this.getView().getModel("birthdays").getData().Birthdays;
                // var currentdate = new Date();

                // for (var i = 0; i < birthdays.length; i++) {

                // if (birthdays[i].date === currentdate) {
                //     birthdays[i].isBirthday = "OneByOne";
                // } else {
                //     birthdays[i].isBirthday = "TwoByOne";
                // }
                // }
                // oJson.setData(birthdays);
                // this.getView().setModel(oJson, "produtoSelecionado");

            },

            onBeforeRendering: function () {},
            onAfterRendering: function () {},
            onExit: function () {},
            onPress: function () {}
        });

    });