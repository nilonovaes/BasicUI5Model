sap.ui.define([
    "sap/ui/core/UIComponent",
    "ModelUI5/model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("ModelUI5.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createDeviceModel(), "device");

            this.getRouter().initialize();

        }
    });
});