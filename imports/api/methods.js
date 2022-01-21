

import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; 

import Sample from './sample'; 

import Diary from './diary'; 
import Photo from './photo'; 
import Schedule from './schedule'; 
import MoneyManage from './moneyManage'; 
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
  "moneyManage.load"({ }) {
    
   
    let ret = MoneyManage.find({
      
    }).fetch();
 
   
    return ret;
  },

  "schedule.load"({ }) {
    
   
    let ret = Schedule.find({
      
    }).fetch();
 
   
    return ret;
  },

  "diary.load"({ }) {
    
   
    
    let ret = Diary.find({
      
    }).fetch();
    console.log(ret);
   
    return ret;
  },

  "photo.load"({ }) {
    
    let ret = Photo.find({
      
    }).fetch();

    console.log(ret);
 
   
    return ret;
  },

  "sample.load"({ }) {
    
   
    
    
    let ret = Sample.findOne({
      type:"sample"
    });
 
   
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