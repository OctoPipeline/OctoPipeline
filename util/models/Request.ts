import mongoose, { Document, model, Model, Schema } from "mongoose";

export enum status {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  APPROVED = "APPROVED",
  PRINTING = "PRINTING",
}
export interface I_Request {
  status: status;
  gcode: string;
  owner_email: string;
  owner_id: string;
  approver?: string;
  approval_date?: Date;
  submitted_date: Date;
  expected_price?: number;
}
export interface IRequest extends Document {
  status: status;
  gcode: string;
  owner_email: string;
  owner_id: string;
  approver?: string;
  approval_date?: Date;
  submitted_date: Date;
  expected_price?: number;
}

const RequestSchema: Schema = new Schema({
  status: {
    type: String,
    required: [true, "Please provide a status for this request."],
  },
  gcode: {
    type: String,
  },
  owner_id: {
    type: String,
    required: [true, "Please provide an owner id for this request."],
  },
  owner_email: {
    type: String,
    required: [true, "Please provide an owner email for this request."],
  },
  approver: {
    type: String,
  },
  approval_date: {
    type: Date,
  },
  submitted_date: {
    type: Date,
    required: [true, "Please provide a date for this request."],
  },
  expected_price: {
    type: Number,
  },
});

// TODO: Fix the starting bug where overwriting the request model errors out.
export const Request: Model<IRequest> =
  mongoose.models.RequestSchema || model("Request", RequestSchema);
