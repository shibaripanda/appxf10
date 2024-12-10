import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  //x client: {type: String},
  //x contact: {type: String},
  //x clientAdress: {type: String},
  //x title: {type: String}, 
  //x firm: {type: String},
  //x problem: {type: String},
  //x model: {type: String}, 
  //x sn: {type: String},
  //x look: {type: String},
  //x speed: {type: String},
  //x info: {type: String},
  //x cost: {type: String},
  //x orderId: {type: String},
  //x dateOut: {type: String},
  //x status: {type: String},
  //x manager: {type: String}, 
  //x masters: {type: String, default: '--'},
  //x date: {type: Number},
  //x campId: {type: String},
  //x history: {type: Array}
    
  
  manager: {type: String},
  title: {type: String},
  model: {type: String},
  sn: {type: String},
  problem: {type: String},
  name: {type: String},
  addres: {type: String},
  date: {type: Number},
  clientTel: {type: String},
  cost: {type: String},
  historylist: {type: Array},
  order: {type: String},
  view: {type: String},
  complect: {type: String}, //g
  speed: {type: String},
  campId: {type: String},
  service: {type: Array}, //g
  status: {type: String},
  masters: {type: String, default: '--'}, //g
  dateOut: {type: Number}, //g
  info: {type: String}, //g
  firm: {type: String},
  filial: {type: String},
  campName: {type: String}, //g
  soglas: {type: Boolean}, //g
  photos: {type: Array},
}, {timestamps: true})

export interface Order {
  orderId: string,
  date: number,
  title: string;
  sn: string;
  model: string;
  firm: string;
  order: string;
  status: string;
  problem: string;
  history: [];
  photos: []
}
