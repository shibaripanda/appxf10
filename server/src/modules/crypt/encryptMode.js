import CryptoJS from "crypto-js"

export const encryptMode = async (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString()
}