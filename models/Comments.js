// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CommentSchema = new Schema({
  // Just a string
  // Just a string
  body: {
   ofString : [String]
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

// Create the Note model with the NoteSchema
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;
