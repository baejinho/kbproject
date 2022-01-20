import SimpleSchema from "simpl-schema";
import { extendSchema } from "./CommonUtils.js"; 

const Diary = new Mongo.Collection("diary", {
  idGeneration: "MONGO"
}); 

Diary.attachSchema(
  new SimpleSchema(
    extendSchema({ 
      diaryTitle :  {
        type:  String 
      },
      diaryContent : {
        type:  String 
      }
    })
  )
);

export default Diary;
