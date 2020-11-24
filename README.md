# StreamingCurrency

## Part 1: Setup the Salesforce Org.

- Click on the button below to install the DriveSafe application package. The Salesforce Org should be Enterprise and above.

<a href="https://githubsfdeploy.herokuapp.com?owner=kaul-vineet&amp;repo=StreamingCurrency-sf">
  <img src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png" alt="Deploy to Salesforce" />
</a>

- Import seed data into the Org:
  - Use the <a href="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/data/Trade_Asset__c-plan.json"> plan file </a> and <a href="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/data/Trade_Asset__cs.json"> data file </a> to load data into Trade_Asset__c object in the Org. Use the sf:dx command to import data:

```sfdx force:data:tree:import -p data/Trade_Asset__c-plan.json -u <Org Alias>```
  
  - Another alternative is to convert data file to CSV and upload the Trade_Asset__c.Name field by using DataLoader, Workbench or your favorite data management tool 

- Open Salesforce1 app and go to App Launcher.
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/24899C74-328D-48E5-8C55-F756E1AAFD3E.png">

- Search and select **Crypto Exchange** app.
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/BB7369D3-5BFA-4D26-8C39-44381A01DBA6.png">

- Go to **trades** and click on the **New** button.
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/9E495286-E6D0-4CC0-A644-21047D83B442.png">

- A form appears for adding a new trade. Select the **Base Asset** and **Quote Asset**. 
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/35B622F5-0E3E-4E76-ABD4-C53BDA03851E.png">
  
- If Trade_Asset__c data has been properly uploaded, options would appear.
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/5CDE6986-8C59-4E17-9256-A3C112BD8F0A.png">

- Any possible combination of **Base Asset** and **Quote Asset** could be used. Suggested options are provided below. Create two-three different trade records with different **Base Asset** and **Quote Asset** combinations.
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/0FB182B4-D9AC-4F9D-AC10-82D77DBFF81B.png">
  
Base Asset   | Quote Asset
------------ | -------------
bitcoin      | etherium
bitcoin      | tether
                                                                                                                           

## Part 2: Setup Mulesoft ESB.

- Checkout a local copy of <a href="https://github.com/kaul-vineet/StreamingCurrency-mule/tree/master"> Mulesoft project </a>.

- Open the project using <a href="https://www.mulesoft.com/platform/studio"> Anypoint Studio </a>.
<img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/mule-project.png">

- Channge the parameters.


## Part 3: Finally, test your solution.

- Run the Mule application. There are 2 options to run the project: 
 - Option 1.
   - Right Click the project in **Package Explorer**.
   
   - Click **Export**. 
   <img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/mule-export-option.png">
   
   
   - Select **Anypoint Studio project to Mule Deployable Archive**.
   <img src='https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/mule-export.png'>
   
   - Save the .jar file locally on your drive. 
   - Follow the <a href="https://www.apisero.com/setup-mule-standalone-runtime-locally-and-reploy-application/"> instruction </a> son how to setup Mule Standalone Runtime locally and deploy application.
   
 - Option 2.
  - Right Click the project in **Package Explorer**.
   - Click **Run As >> Mule Application**.
   <img src="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/images/mule-run.png">
