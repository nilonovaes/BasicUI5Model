sap.ui.define([
    "sap/ui/core/UIComponent",
    "ModelUI5/model/models",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, models, JSONModel) {
    "use strict";

    return UIComponent.extend("ModelUI5.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            // var oModel = new JSONModel(jQuery.sap.getModulePath("ModelUI5.model.data", "/Birthdays.json"));

            // this.setModel(oModel, "birthdays");

            this.setModel(models.createDeviceModel(), "device");

            this.getRouter().initialize();

        }
    });
});