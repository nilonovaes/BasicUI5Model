sap.ui.define([
    "sap/ui/core/mvc/Controller",
],

function (Controller) {
    "use strict";
    return Controller.extend("ModelUI5.controller.Page1", {

        onInit: function () {},
        onBeforeRendering: function () {},
        onAfterRendering: function () {},
        onExit: function () {},
        onPress: function () {
            
            this.getOwnerComponent()
                .getRouter().navTo("Page2");
        }
    });

});