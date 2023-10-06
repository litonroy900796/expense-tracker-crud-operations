import { useSelector } from "react-redux";

export default function Balance() {
      const {transactions} = useSelector((state)=> state.transaction);
      
       let income = 0;
        const netTransactions =(transaction)=>{
            transaction?.forEach(element => {
                const { type ,amount}= element;
                if(type=== 'income'){
                     income+=amount
                }else{
                  income-=amount
                }
            });
            return income;
        }

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>{transactions ? netTransactions(transactions) : "0"}</span>
            </h3>
        </div>
    );
}
