import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTransaction,addTransaction ,editTransaction} from "./transactionApi";



const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchTransaction = createAsyncThunk("transaction/fetchTransactions",async ()=>{
    const transactions = await getTransaction();
    return transactions;
})
export const createTransaction = createAsyncThunk("transaction/addTransactions",async (data)=>{
    const transaction = await addTransaction(data);
    return transaction;
})
export const changeTransaction = createAsyncThunk("transaction/changeTransactions",async ({id , data})=>{
    const transaction = await editTransaction(id,data);
    return transaction;
})
export const deleteTransaction = createAsyncThunk("transaction/deleteTransactions",async (id)=>{
    const transaction = await deleteTransaction(id);
    return transaction;
})

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTransaction.pending , (state,action)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(fetchTransaction.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.transactions=action.payload;

        })
        .addCase(fetchTransaction.rejected, (state,action)=>{
               state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.transactions = [];
        })
        .addCase(createTransaction.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(createTransaction.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions.push(action.payload);
        })
        .addCase(createTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
        .addCase(changeTransaction.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(changeTransaction.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            const indexToUpdate = state.transactions.findIndex((t)=> t.id === action.payload.id);
            state.transactions[indexToUpdate] = action.payload
           
        })
        .addCase(changeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
        .addCase(deleteTransaction.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(deleteTransaction.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;

            state.transactions = state.transactions.filter(
                (t) => t.id !== action.payload
            );
        })
        .addCase(deleteTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        });
    }
})


export default transactionSlice.reducer