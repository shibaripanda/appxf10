import CryptoJS from "crypto-js"

export const decryptMode = async (ciphertext, key) => {
    return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8)
}