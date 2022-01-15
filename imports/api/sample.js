import SimpleSchema from "simpl-schema";
import { extendSchema } from "./CommonUtils.js"; 

const Sample = new Mongo.Collection("sample", {
  idGeneration: "MONGO"
}); 

Sample.attachSchema(
  new SimpleSchema(
    extendSchema({
      type: {
        type:  String 
      }, 
      index: {
        type:  Number 
      }, 
    })
  )
);

export default Sample;
