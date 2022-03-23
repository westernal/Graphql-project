import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/friends");

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  language: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Friends = mongoose.model("friends", friendSchema);

export { Friends }