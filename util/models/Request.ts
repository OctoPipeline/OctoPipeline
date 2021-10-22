import mongoose, { Document, model, Model, Schema } from "mongoose";
import { IUser } from "./User";

export enum status {
  SUBMITTED = "SUBMITTED",
  APPROVED = "APPROVED",
  PRINTING = "PRINTING",
}

export interface IRequest extends Document {
  status: status;
  gcode: string;
  owner: Pick<IUser, "email">;
  approver: Pick<IUser, "email">;
}

const RequestSchema: Schema = new Schema({
  status: {
    type: String,
    required: [true, "Please provide a status for this request."],
  },
  gcode: {
    type: String,
  },
  owner: {
    type: String,
    required: [true, "Please provide an owner for this request."],
  },
  approver: {
    type: String,
  },
});

// mongoose.model("Request") ? mongoose.models.RequestSchema
export const Request: Model<IRequest> =
  mongoose.models.RequestSchema || model("Request", RequestSchema);
