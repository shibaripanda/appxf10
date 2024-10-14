import { rendomLetteOrder } from "./rendomLetteOrder"
import { rendomNumberOrder } from "./rendomNumberOrder"
import { sessionData } from "./sessionData"

export const createNewOrder = async (order) => {
    const number = () => rendomNumberOrder({min: 1000, max: 9999}) 
    const letter = () => rendomLetteOrder()
    const date = Date.now()

    console.log(sessionData('read', 'name'))
    
        return {
            ...order,
            date: date,
            order: number() + '_' + letter() + letter() + letter(),
            campId: sessionData('read', 'campId'),
            historylist: [{date: Date.now(), text: 'Greated', name: sessionData('read', 'name')}],
            status: 'new',
            manager: sessionData('read', 'name'),
            soglas: false,
            dateOut: 0
            }
}