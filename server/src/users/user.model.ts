import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String},
  name: {type: String},
  emailAuthCode: {type: Object},
  telegramtoken: {type: String},
  telegramId: {type: Number},
  currentOrderMedia: {type: String},
  photos: {type: Array},
  reminderToTelegram: {type: Array, default: []}
}, {timestamps: true})

export interface User {
  email: string,
  password: number,
  name: string,
  emailAuthCode: object,
  role: string,
  telegramtoken: string,
  telegramId: number,
  _id: any,
  reminderToTelegram: [],
  photos: []
}
