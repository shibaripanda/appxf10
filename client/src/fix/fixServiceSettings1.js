import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"


export const updateUserSettings = async (obj) => {
    await axiosCall('PUT', `http://localhost:5000/api/updateusersettings/${sessionData('read', 'campId')}`, obj)
}

export const updateDocumentSettings = async (obj) => {
    await axiosCall('PUT', `http://localhost:5000/api/updatedocumentsettings/${sessionData('read', 'campId')}`, obj)
}

export const updateGeneralSettings = async (obj) => {
    await axiosCall('PUT', `http://localhost:5000/api/updategeneralsettings/${sessionData('read', 'campId')}`, obj)
}

export const addNewUserToCamp = async (obj) => {
    await axiosCall('PUT', `http://localhost:5000/api/addnewusertocamp/${sessionData('read', 'campId')}`, obj)
}

export const getUsersOfCamp = async () => {
    return await axiosCall('GET', `http://localhost:5000/api/getusersofcamp/${sessionData('read', 'campId')}`, {})
}

export const deleteUserFromCamp = async (obj) => {
    await axiosCall('PUT', `http://localhost:5000/api/deleteuserfromcamp/${sessionData('read', 'campId')}`, obj)
}

export const editUserRole = async (obj) => {
    await axiosCall('PUT', `http://localhost:5000/api/edituserrole/${sessionData('read', 'campId')}`, obj)
}


