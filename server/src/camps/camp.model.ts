import * as mongoose from 'mongoose';

export const CampSchema = new mongoose.Schema({
  name: {type: String},
  owner: {type: String},
  userSettings: {type: Object},
  documentSettings: {type: Object},
  generalSettings: {type: Object},
  users: {type: []},
  subcamps: {type: []}
}, {timestamps: true})

export interface Camp {
  name: string,
  owner: string,
  userSettings: object,
  users: [],
  documentSettings: object,
  generalSettings: object,
  subcamps: []
}
