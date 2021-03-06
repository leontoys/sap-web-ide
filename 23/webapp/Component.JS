sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{
            metadata:{
                manifest : "json"
            },
            onInit:function(){
                UIComponent.prototype.init.apply(this);
            },
            createContent:function(){
                var appView = new sap.ui.core.mvc.XMLView("appView",{
                    viewName : "sap.ui.demo.view.App",
                    type : "XML"
                });
                var viewOne = new sap.ui.core.mvc.XMLView("viewOne",{
                    viewName : "sap.ui.demo.view.viewOne",
                    type : "XML"
                });
                var appContainer = appView.byId("appId");
                appContainer.addPage(viewOne);
                return appView;
            },
            //search Event Handler in view controller
        });
});
