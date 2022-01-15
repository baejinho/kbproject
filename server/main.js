import { Meteor } from 'meteor/meteor';

import "./accounts"
import "/imports/api/methods";


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  console.log("Start Up")
});
