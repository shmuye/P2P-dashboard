// pages/TransactionPage.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTransactionDetails } from '../services/api';

const TransactionPage = () => {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchTransactionDetails(id);
            setTransaction(data);
            setLoading(false);
        };
        loadData();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="transaction-details">
            <h1>Transaction Details</h1>
            <div className="detail-row">
                <span className="label">ID:</span>
                <span>{transaction.id}</span>
            </div>
            <div className="detail-row">
                <span className="label">Sender:</span>
                <span>{transaction.senderName}</span>
            </div>
            <div className="detail-row">
                <span className="label">Receiver:</span>
                <span>{transaction.receiverName}</span>
            </div>
            <div className="detail-row">
                <span className="label">Amount:</span>
                <span>${transaction.amount.toFixed(2)}</span>
            </div>
            <div className="detail-row">
                <span className="label">Status:</span>
                <span className={`status-${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                </span>
            </div>
            <div className="detail-row">
                <span className="label">Date:</span>
                <span>{new Date(transaction.timestamp).toLocaleString()}</span>
            </div>
            {transaction.notes && (
                <div className="detail-row">
                    <span className="label">Notes:</span>
                    <span>{transaction.notes}</span>
                </div>
            )}
        </div>
    );
};

export default TransactionPage;