
import { Meteor } from "meteor/meteor";
import bodyParser from "body-parser";
import moment from "moment";
import _ from "lodash";


WebApp.connectHandlers.use("/sample/load", bodyParser.json());
WebApp.connectHandlers.use(
  "/sample/load",
  bodyParser.urlencoded({ extended: true })
);

WebApp.connectHandlers.use(
  "/sample/load",
  Meteor.bindEnvironment((req, res, next) => {
    Meteor.call("sample.load", {}, (error, data) => {
        if (error) {
          res.writeHead(403);
          res.end();
        } else {
          const json = new Object();
          json.data = data;
  
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(json));
          res.end();
        }
      });
  })
);
