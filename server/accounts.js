import { Accounts } from "meteor/accounts-base";

   
 



if (Meteor.isServer) {
    
  Accounts.config({
    // enable client user creation
    forbidClientAccountCreation: false
  });
}

 
 