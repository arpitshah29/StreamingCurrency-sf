({
    doInit: function(component, event, helper) {
        //Call apex class method
        var action = component.get('c.getTradeDetails');
        action.setParams({
            "tradeId": component.get("v.recordId")
        });
        action.setCallback(this, function(response) {
            //Get state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                //Set result in accList attribute on component.
                component.set('v.base', response.getReturnValue()[0].Name);
                component.set('v.quote', response.getReturnValue()[1].Name);
            }
        });
        $A.enqueueAction(action);
    },
        
    loadChart : function(component, event, helper) {
  
       let selectedFieldValue  = component.get("v.selectedFieldValue");
   
     //   let selectedFieldLabel  = component.get("v.selectedFieldLabel");
        
        
        let chart  = component.get("v.chart");
        
        if(chart == null) {
            helper.buildChart(component, event, helper);
            return;
        }
    
        chart.load({  columns: [['data', selectedFieldValue]]}); 
       
    },
    
    receivePayload : function(component, event, helper) {
		//payload comes from supercomponent listener
		//
        let payload  = component.get("v.payload");

        if(payload['base__c'] == component.get("v.base") && payload['quote__c'] == component.get("v.quote"))
        { 
            let selectedField  = component.get("v.selectedField");
            // console.log(selectedField);
            let payloadAtField = payload[selectedField];
           // console.log( payload[selectedField]);
            let selectedFieldValue = +(payload[selectedField]).toFixed(2);
         //  console.log( selectedFieldValue);
            if(selectedFieldValue != undefined){
                component.set("v.selectedFieldValue", selectedFieldValue);
            }
            
        	if ((payload['direction__c']) == "buy")
            {
                component.set("v.message", payload['direction__c']);
                component.set("v.severity","info");
            }
            else
            {
                component.set("v.message", payload['direction__c']);
                component.set("v.severity","warning");
            }
                
    	}       
    },
    
    scriptsLoaded : function(component, event, helper) {
       helper.buildChart(component, event, helper);
    },

    updateSelectedFields : function(component, event, helper) {
		let eventName = event.getSource().get("v.value");
        let eventNameFieldsMap = component.get("v.eventNameFieldsMap");
        let selectedFields = eventNameFieldsMap[eventName];
        component.set("v.selectedFields", selectedFields);
        
    },
        
    setFieldLabel : function(component, event, helper) {		
        let selectedField  = component.get("v.selectedField");
        helper.setFieldLabel(...arguments);
    },
        
    toggleOptions : function(component, event, helper) {		
		helper.toggleClass(arguments,  "options-container", "hidden");
        
        let optionsLabel  = component.get("v.optionsLabel");
        
        optionsLabel = optionsLabel === "Show Options" ? "Hide Options" : "Show Options";
        
        component.set("v.optionsLabel", optionsLabel);
        
    },        
            
})