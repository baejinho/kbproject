

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
      
     } , { sort: { useDate: -1 } }).fetch();
 
   
    return ret;

 

  },

  "moneyManage.save"({ title, content, fee, useDate }) {
    
    let ret = MoneyManage.insert(
        {
          moneyTitle:title,
          moneyContent:content,
          fee:fee,
          useDate:useDate,
        } 
    );

    console.log(ret);

  }, 
  "schedule.load"({ }) {
    
   
    let ret = Schedule.find({
      
    }).fetch();
 
   
    return ret;
  },

  "diary.load"({ }) {
    
   
    
    let ret = Diary.find({
      
    }, { sort: { createdAt: -1 } }).fetch();
    console.log(ret);
   
    return ret;
  },


  "diary.save"({ title, content, image }) {
    
    let ret = Diary.insert(
        {
          diaryTitle:title,
          diaryContent:content,
          image:image,
        } 
    );

    console.log(ret);

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