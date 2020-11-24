# StreamingCurrency

## Part 1: Setup the Salesforce Org.

- Click on the button below to install the DriveSafe application package. The Salesforce Org should be Enterprise and above.

<a href="https://githubsfdeploy.herokuapp.com?owner=kaul-vineet&amp;repo=StreamingCurrency-sf">
  <img src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png" alt="Deploy to Salesforce" />
</a>

- Import seed data into the Org:
  - Use the <a href="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/data/Trade_Asset__c-plan.json"> plan file </a> and <a href="https://github.com/kaul-vineet/StreamingCurrency-sf/blob/master/data/Trade_Asset__cs.json"> data file </a> to load data into Trade_Asset__c object in the Org. Use the sf:dx command to import data:
  '''sfdx force:data:tree:import -p data/Trade_Asset__c-plan.json -u vkaul-rezang-la-demo.lightning.force.com
  - Another alternative is to convert data file to CSV and upload the Trade_Asset__c.Name field by using DataLoader, Workbench or your favorite data management tool 

- Open Salesforce1 app. 

## Part 2: Setup Mulesoft ESB.


## Part 3: Finally, test your solution.
