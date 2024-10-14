import { getLink } from "../modules/getLink";
import { axiosCall } from "../modules/axiosCall";

export class AuthClass {

    constructor(){
        this.link = getLink()
    }

    async startRequest(obj){
        return await axiosCall('POST', `${this.link}/auth/login`, obj)
    }

    async startPasswordRequest(obj){
        return await axiosCall('POST', `${this.link}/auth/authemailcode`, obj)
    }

    async createNewCamp(obj){
        return await axiosCall('POST', `${this.link}/auth/registration`, obj)
    }

}