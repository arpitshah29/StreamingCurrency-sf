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
    
    onInitChart : function(component, event, helper) {
        
      //     console.log("Loading onInitChart  ...");
        
        var eventName =   component.get("v.eventName");
        if(eventName == null) {return;}
        if(!eventName.includes("__e")) {
            //  console.log("event name (" + eventName + ") does not include __e");
            helper.displayToast(component, "error", "event name (" + eventName + ")  should be the API name (including '__e')");
            return;
        }
        
   		component.set("v.jsLoaded", true);
        
     //   helper.loadChart(component, event, helper);
       // helper.loadFieldsAndData(component, event, helper);
        
    },
    
    receivePayload : function(component, event, helper) {
        let title = component.get('v.title');

          let chartId  = component.get("v.chartId");
       // var canvas = document.getElementById("myChart");
        var chart = document.getElementById(chartId);

        let chart2 = component.get("v.chart");   
        
         if(chart2 == null) {
            console.error("update date error: chart not rendered " + title);
           helper.loadChart(component, event, helper);
            return;
        }
        
        let payload  = component.get("v.payload");
        if(payload['base__c'] == component.get("v.base") && payload['quote__c'] == component.get("v.quote"))
        {
            //payload comes from supercomponent listener
            
          
            let selectedField  = component.get("v.selectedField");
           
            if(selectedField == null) {
                selectedField = 0;
            }
            let payloadAtField = payload[selectedField];
    
             var newNotification = {
                x : payload.CreatedDate,
                y : payloadAtField
            };

        chart2.data.datasets[0].data.push(newNotification);
        chart2.update();
      //  console.log(chart2);
        // console.log(chart2.data);
       // helper.loadChart(component, event, helper);
    
       
      //  var chart = window.myChart;
        
  
    //    chart.data.datasets[0].data.push(newNotification);
     //   chart.update();
       } 
        
    },
  setFieldLabel : function(component, event, helper) {	
   
     	helper.loadChart(component, event, helper);
      
      let eventDataList = component.get("v.eventDataList");
       let chartId  = component.get("v.chartId");
      
      
      
     // var chart = window.myChart;
      let chart = document.getElementById(chartId); 
      for(var i=0; i<eventDataList.length; i++) {
             if(eventDataList[i][selectedField] != null) {
                var newNotification = {
                    x : eventDataList[i].CreatedDate,
                    y :eventDataList[i][selectedField]
                };
           
        		chart.data.datasets[0].data.push(newNotification);
            }
        }
           chart.update();
    },
    loadChart : function(component, event, helper) {
        
        
       // let selectedFieldValue  = component.get("v.selectedFieldValue");
	 	helper.loadChart(component, event, helper);
   
    } 
})