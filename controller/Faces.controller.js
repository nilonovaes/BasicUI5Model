sap.ui.define([
        "jquery.sap.global",
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
    ],

    function (jQuery, Controller, JSONModel) {
        "use strict";
        return Controller.extend("ModelUI5.controller.Faces", {

            onInit: function (evt) {

                var oModel = new JSONModel(jQuery.sap.getModulePath("ModelUI5.model.data", "/Birthdays.json"));

                this._changeframeType(oModel);


                // var that = this;
                // oModel.attachRequestCompleted(function () {
                //     that._changeframeType(oModel);
                //     console.log("loaded");
                // });

                this.getView().setModel(oModel, "birthdays");

            },

            onBeforeRendering: function () {},
            onAfterRendering: function () {},
            onExit: function () {},
            onPress: function () {},

            _changeframeType: function (oModel) {

                var currentDate = this._getCurrentDate();

                var birthdays = oModel.getProperty("/Birthdays");

                for (var i = 0; i < birthdays.length; i++) {

                    if (birthdays[i].date.substring(0, 5) == currentDate.substring(0, 5)) {
                        birthdays[i].isBirthday = "TwoByOne";
                    } else {
                        birthdays[i].isBirthday = "OneByOne";
                    }

                }
            },

            _getCurrentDate: function () {
                var q = new Date();
                var m = q.getMonth() + 1;
                var d = q.getDate();
                var y = q.getFullYear();

                d = this._addZero(d);
                m = this._addZero(m);

                var date = d + '/' + m + '/' + y;

                return date;
            },

            _addZero: function (date) {

                if (date < 10) {
                    return date = '0' + date;
                }
            }


        });

    });