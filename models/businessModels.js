
var mongoose = require('mongoose');
var Schema = mongoose.Schema;  



// *********************************************************************
var eventSchema = new Schema({
  //3-5 events
  Title:String,
  StartDate:Date,
  Duration:String,
  Address:String,
  LinkToEventPage:String,//internal
  EventPhotoID:String

})

var featureSchema = new Schema({
  id:Number,
  name:String,
  parent_id:String,
  ancestor_id:String,
  features:[String]
});


var businessSchema = new Schema({
  item: String,
  name: {type: String, required: true, index: {unique: true}},
  location: {
    address: String,
    locality: String,
    region: String,
    country: String,
    lat: String,
    lng: String,
    neighborhood:String
  },
  type: String,
  photo: {
    group: String
  },
  hours: {
    status: String,
    workhours: String
  },
  pricelevel: String,
  placeID: String,
  website: String,
  email: String,
  featureListID:Number,
  dealsID:String,//key to deal table, dealSchema.id
  events:[eventSchema]
});


var businessModel = mongoose.model('testbusinessDB', businessSchema);
// var userProfileModel = mongoose.model('UserProfile', userProfileSchema);







module.exports = businessModel;