// pages/Dashboard.js
import { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api';
import TransactionTable from '../components/TransactionTable';
import StatusFilter from '../components/StatusFilter';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [statusFilter, setStatusFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchTransactions();
            setTransactions(data);
            setFilteredTransactions(data);
            setLoading(false);
        };
        loadData();
    }, []);

    useEffect(() => {
        if (statusFilter === 'All') {
            setFilteredTransactions(transactions);
        } else {
            setFilteredTransactions(
                transactions.filter(tx => tx.status === statusFilter)
            );
        }
    }, [statusFilter, transactions]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>P2P Transactions</h1>
            <StatusFilter
                selectedStatus={statusFilter}
                onStatusChange={setStatusFilter}
            />
            <TransactionTable transactions={filteredTransactions} />
        </div>
    );
};

export default Dashboard;