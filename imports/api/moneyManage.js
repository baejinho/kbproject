import SimpleSchema from "simpl-schema";
import { extendSchema } from "./CommonUtils.js"; 

const MoneyManage = new Mongo.Collection("moneyManage", {
  idGeneration: "MONGO"
}); 

MoneyManage.attachSchema(
  new SimpleSchema(
    extendSchema({
      moneyTitle :  {
        type:  String 
      },
      moneyContent  :  {
        type:  String 
      },
      fee :  {
        type:  Number 
      },
      useDate :  {
        type:  Date 
      }
    })
  )
);

export default MoneyManage;
