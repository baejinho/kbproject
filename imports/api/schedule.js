import SimpleSchema from "simpl-schema";
import { extendSchema } from "./CommonUtils.js"; 

const Schedule = new Mongo.Collection("schedule", {
  idGeneration: "MONGO"
}); 

Schedule.attachSchema(
  new SimpleSchema(
    extendSchema({
      scheduleTitle: {
        type:  String 
      },
      scheduleContent: {
        type:  String 
      },
      scheduleStartDate: {
        type:  Date 
      },
      scheduleEndDate : {
        type:  Date 
      },
      status: {
        type:  String 
      } 
    })
  )
);

export default Schedule;
