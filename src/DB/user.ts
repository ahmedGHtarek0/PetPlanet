import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  OwnerName: string;
  Phone: string;
  OwnerID?: string;

  Species: string; // Dog, Cat, Bird, Other
  Sex: string; // Male, Female
  Age: number;

  Weight?: number;
  Diagnosis?: string;

  Category?: string;

  Type?: string[];     // comma separated values -> array
  SubType?: string[];  // comma separated values -> array
}

const UserSchema: Schema = new Schema(
{
  OwnerName: {
    type: String,
    required: true
  },

  Phone: {
    type: String,
    required: true
  },

  OwnerID: {
    type: String
  },

  Species: {
    type: String,
    enum: ["Dog", "Cat", "Bird", "Other"],
    required: true
  },

  Sex: {
    type: String,
    enum: ["Male", "Female"],
    required: true
  },

  Age: {
    type: Number,
    required: true
  },

  Weight: {
    type: Number
  },

  Diagnosis: {
    type: String
  },

  Category: {
    type: String
  },

  Type: [{
    type: String
  }],

  SubType: [{
    type: String
  }]
},
{
  timestamps: true
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;