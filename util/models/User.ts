import mongoose, { Document, model, Model, Schema } from "mongoose";

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
//mongoose.model("User") ? mongoose.models.UserSchema
export const User: Model<IUser> =
  mongoose.models.UserSchema || model("User", UserSchema);
