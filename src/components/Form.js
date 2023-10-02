import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../features/transaction/transactionSlice";

export default function Form() {
    const [name , setName] = useState("");
    const [type , setType] = useState("");
    const [amount, setAmount] = useState("");
    const dispatch=useDispatch();
    const {isError}= useSelector(state=> state.transaction);

    const handleCreate =(e)=>{
        e.preventDefault();
        dispatch(createTransaction({
            name,
            type,
            amount:Number(amount)
        }))
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>
           <form onSubmit={handleCreate}>
            <div className="form-group">
                <label htmlFor="transaction_name">Name</label>
                <input
                    type="text"
                    required
                    name="transaction_name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder="Enter Salary"
                />
            </div>

            <div className="form-group radio">
                <label htmlFor="transaction_type">Type</label>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="transaction_type"
                        required
                        onChange={()=> setType("income")}
                        checked={type=== "income"}
                    />
                    <label htmlFor="transaction_type">Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="transaction_type"
                        placeholder="Expense"
                        onChange={()=> setType("expense")}
                        checked={type=== "expense"}
                    />
                    <label htmlFor="transaction_type">Expense</label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="transaction_amount">Amount</label>
                <input
                    type="number"
                    placeholder="Enter your amount"
                    value={amount}
                    required
                    onChange={(e)=>setAmount(e.target.value)}
                    name="transaction_amount"
                />
            </div>

            <button className="btn">Add Transaction</button>
            {isError && <p className="error">There was an error occured</p>}
            </form>

            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
}
