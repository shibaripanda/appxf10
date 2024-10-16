export const dateToLokalFormat = (date) => {
    return new Date(date).toLocaleString().split(',')[0]
}

export const dateToLokalFormatFull = (date) => {
    return new Date(date).toLocaleString()
}

export const dateToLokalFormatClock = (date) => {
    return new Date(date).toLocaleString().split(',')[1].toString().slice(0, -3)
}

export const dateToLokalFormatForMainTable = (date) => {
    if(date === 0){
        return '--'
    }
    else if(new Date(Date.now()).toLocaleString().split(',')[0] === new Date(date).toLocaleString().split(',')[0]){
        return new Date(date).toLocaleString().split(',')[1].toString().slice(0, -3)
    }
    return new Date(date).toLocaleString().split(',')[0]
}