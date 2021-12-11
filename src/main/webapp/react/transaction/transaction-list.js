import transactionService from "./transaction-service";

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const TransactionList = () => {
    const history = useHistory();
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        transactionService.findAllTransactions().then(transactions => setTransactions(transactions));
    }, []);

    history.push(`/sellers/${id}`);


    return (
        <div>
            <h2>Transactions List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/transactions/new")}>
                Add Transaction
            </button>
            <h4>Transactions Information</h4><br/>
            <ul className="list-group">

                <table width="100%">
                    <tr>
                        <th>Transaction Id</th>
                        <th>Buyer Id</th>
                        <th>Seller Id</th>
                        <th>Transaction Date</th>
                        <th>Transaction Amount</th>
                    </tr>
                    {transactions.map(transaction => <tr>
                            <td>{transaction.id}</td>
                            <td><h5><a
                                href={`http://localhost:63342/ebaby/spring-template/src/main/webapp/react/buyer/index.html#/buyers/${transaction.buyerId}`}>{transaction.buyerId}</a>
                            </h5></td>
                            <td><h5><a
                                href={`http://localhost:63342/ebaby/spring-template/src/main/webapp/react/seller/index.html#/sellers/${transaction.sellerId}`}>{transaction.sellerId}</a>
                            </h5></td>
                            <td>{transaction.transactionDate}</td>
                            <td>{transaction.amount}</td>

                        </tr>
                    )}
                </table>
                <Link to={`/transactions/2`}>
                    <button className="wd-btn-primary">Edit Seller</button>
                </Link>
                }
            </ul>
        </div>
    );
}
// <Link to={`/sellers/${transaction.sellerId}`}> </Link>

export default TransactionList;