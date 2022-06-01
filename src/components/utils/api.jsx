import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:27015"
export const fetchClientsApi = () => {
    return axios.get("/clients").then(response=>response.data).catch(error=>error)
}
export const fetchClientApi = async (id) => {
    return axios.get(`/clients/${id}`).then(response=> response.data).catch(error=>error)
}
export const addClientApi = (data) =>{
    return axios.post("/clients", data).then(({data})=>data).catch(error=>error)
}
export const deleteClientApi = (id) => {
    return axios.delete(`/clients/${id}`).then(r=>r)
}
export const clientUpdateApi = async (elId, newData) => {
    console.log(elId, newData)
    const newDataUp  = await axios.patch(`/clients/${elId}`, newData).then(({data})=>data)
    console.log(newDataUp)
    return newDataUp
}
