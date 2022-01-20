

import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; 

import Sample from './sample'; 
import Users from './users'; 
import { Email } from 'meteor/email'
//import {Storage} from '@google-cloud/storage';
 

import _ from "lodash";


Meteor.methods({
  "sample.save"({ index }) { 
    
    Sample.update(
      {
        type:"sample"
      },
      {
        $set: {
          type:"sample",
          index
        }
      },
      { upsert: true }
    );
 
  },
  "sample.load"({ }) {
    console.log("sample.load");
   
    /*
    let ret = Sample.find({
      type:"sample"
    }).fetch();

    console.log("sample.load : Result == >", ret[0].type);
*/
    
    let ret = Sample.findOne({
      type:"sample"
    });

    console.log("sample.load : Result == >", ret);
    
   
    return ret;
  },

  "users.validAdminEmail"({ email }) {
    console.log(email);

    const targetUser = Accounts.findUserByEmail(email);
   
    if (
      !targetUser ||
      (!Roles.userIsInRole(targetUser, 'admin') )
    ) {


      throw new Meteor.Error(403, "Access denied");
    }
  },
   
  //회원 가입
  "user.createAccount"({
    email,
    password,
    name,
    phone 
  }){
    
    const userId = Accounts.createUser({
      email,
      password,
      profile: {
        name,
        phone 
      }
    });

    return userId;
  }
                 
}
);