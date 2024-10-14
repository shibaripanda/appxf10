import EventEmitter from 'events';

export const myEmitter = new EventEmitter()//.setMaxListeners(100)

export const createLisener = (name, callback) => {
    if(typeof myEmitter._events[name] === 'undefined'){
        myEmitter.on(name, callback)
    }
}