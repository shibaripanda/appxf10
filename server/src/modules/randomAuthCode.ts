export const rendomNumberOrder = () => {
    const min = Math.ceil(1000)
    const max = Math.floor(9999)
    return Math.floor(Math.random() * (max - min) + min)
}