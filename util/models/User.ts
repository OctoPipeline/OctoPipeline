import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface I_User {
  name: string;
  email: string;
  admin: boolean;
}
export interface IUser extends Document {
  name: string;
  email: string;
  admin: boolean;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this user."],
  },
  email: {
    type: String,
    required: [true, "Please provide an email for this user."],
  },
  admin: {
    type: Boolean,
    required: [true, "Please indicate whether this user is an admin"],
  },
});
// TODO: Fix the starting bug where overwriting the user model errors out.
export const User: Model<IUser> =
  mongoose.models.UserSchema || model("User", UserSchema);
