import axios from "../../utils/axios"

export const getTransaction = async ()=>{
    const response = axios.get("/transactions");
    return response.data;
}
export const addTransaction = async (data)=>{
    const response = axios.post("/transactions", data);
    return response.data;
}
export const editTransaction = async (id,data)=>{
    const response = axios.put(`/transactions/${id}` , data)
    return response.data;
}
export const deleteTransaction = async (id,data)=>{
    const response = axios.delete(`/transactions/${id}`);
    return response.data;
}