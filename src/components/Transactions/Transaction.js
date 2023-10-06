import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { activeEdit, deleteTransactions } from "../../features/transaction/transactionSlice";

export default function Transaction({transaction}) {
     const dispatch = useDispatch()
   const handleEdit=()=>{
        dispatch(activeEdit(transaction))
   }
   const handleDelete=()=>{
      dispatch(deleteTransactions(transaction.id))
    }

    return (
        <li className={`transaction ${transaction?.type}`}>
            <p>{transaction.name}</p>
            <div className="right">
                <p>৳ {transaction.amount}</p>
                <button onClick={handleEdit} className="link">
                    <img alt="Edit" className="icon" src={editImage} />
                </button>
                <button onClick={handleDelete} className="link">
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
