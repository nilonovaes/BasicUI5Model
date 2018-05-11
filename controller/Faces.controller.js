sap.ui.define([
        "jquery.sap.global",
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],

    function (jQuery, Controller, JSONModel) {
        "use strict";
        return Controller.extend("ModelUI5.controller.Faces", {

            onInit: function (evt) {

                var oModel = new JSONModel(jQuery.sap.getModulePath("ModelUI5.model.data", "/Birthdays.json"));

                this._changeTitle(oModel);


                // this._changeframeType(oModel); Important ativar 

                this.getView().setModel(oModel, "birthdays");

            },

            onBeforeRendering: function () {},
            onAfterRendering: function () {},
            onExit: function () {},
            onPress: function () {

                this.getOwnerComponent().getRouter().navTo("Adm");

            },

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
            },


            _changeTitle: function (oModel) {

                var _months = [{
                        month: "{i18n>Jan}"
                    },
                    {
                        month: "{i18n>Feb}"
                    },
                    {
                        month: "{i18n>Mar}"
                    },
                    {
                        month: "{i18n>Apr}"
                    },
                    {
                        month: "{i18n>May}"
                    },
                    {
                        month: "{i18n>Jun}"
                    },
                    {
                        month: "{i18n>Jul}"
                    },
                    {
                        month: "{i18n>Aug}"
                    },
                    {
                        month: "{i18n>Sep}"
                    },
                    {
                        month: "{i18n>Oct}"
                    },
                    {
                        month: "{i18n>Nov}"
                    },
                    {
                        month: "{i18n>Dec}"
                    }
                ];

                // var model = new sap.ui.model.json.JSONModel(_months);
                // sap.ui.getCore().setModel(model);

                var birthdays = oModel.getProperty("/Birthdays");

            }


        });

    });