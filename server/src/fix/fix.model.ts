import * as mongoose from 'mongoose';

export const FixSchema = new mongoose.Schema({
  client: {type: String},
  contact: {type: String},
  clientAdress: {type: String},
  title: {type: String},
  firm: {type: String},
  problem: {type: String},
  model: {type: String},
  sn: {type: String},
  look: {type: String},
  speed: {type: String},
  info: {type: String},
  cost: {type: String},
  orderId: {type: String},
  dateOut: {type: String},
  status: {type: String},
  manager: {type: String},
  masters: {type: String},
  date: {type: Number},
}, {timestamps: true})

export interface Fix {
  orderId: string,
  date: number,
  title: string;
  sn: string;
  model: string;
}
