import axios from "../../utils/axios"

export const getTransaction = async ()=>{
    const response =await axios.get("/transactions");
    return response.data;
}
export const addTransaction = async (data)=>{
    const response =await axios.post("/transactions", data);
    return response.data;
}
export const editTransaction = async (id,data)=>{
    const response =await axios.put(`/transactions/${id}` , data)
    return response.data;
}
export const deleteTransaction = async (id,data)=>{
    const response =await axios.delete(`/transactions/${id}`);
    return response.data;
}