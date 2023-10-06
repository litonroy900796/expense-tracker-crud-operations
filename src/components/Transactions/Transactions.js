import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch()
    const {transactions ,isLoading, isError}= useSelector(state=> state.transaction);


    useEffect(()=>{
         dispatch(fetchTransaction())
    },[dispatch])


    if (!isLoading && isError){

        return <p>There was an error occured</p>
    }
   
    if (!isLoading && !isError && transactions?.length === 0) {
       return <p>No transactions found!</p>;
    }
    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {
                        !!transactions?.length && transactions?.map((data, i)=>{
                              return <Transaction transaction={data} key={i} /> 
                        })
                    }
                
                </ul>
            </div>
        </>
    );
}
