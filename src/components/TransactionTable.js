// components/TransactionTable.js
import { Link } from 'react-router-dom';

const TransactionTable = ({ transactions }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Sender Name</th>
                    <th>Receiver Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(tx => (
                    <tr key={tx.id}>
                        <td><Link to={`/transaction/${tx.id}`}>{tx.id}</Link></td>
                        <td>{tx.senderName}</td>
                        <td>{tx.receiverName}</td>
                        <td>${tx.amount.toFixed(2)}</td>
                        <td className={`status-${tx.status.toLowerCase()}`}>
                            {tx.status}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;