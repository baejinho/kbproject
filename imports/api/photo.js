import SimpleSchema from "simpl-schema";
import { extendSchema } from "./CommonUtils.js"; 

const Photo = new Mongo.Collection("photo", {
  idGeneration: "MONGO"
}); 

Photo.attachSchema(
  new SimpleSchema(
    extendSchema({ 
      image :  {
        type:  String 
      },
      imageTitle : {
        type:  String 
      },
      imageDesc : {
        type:  String 
      }
    })
  )
);

export default Photo;
