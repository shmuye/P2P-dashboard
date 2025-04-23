// components/StatusFilter.js
const StatusFilter = ({ selectedStatus, onStatusChange }) => {
    const statuses = ['All', 'Pending', 'Completed', 'Failed'];

    return (
        <div className="filter-container">
            <label htmlFor="status-filter">Filter by Status: </label>
            <select
                id="status-filter"
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value)}
            >
                {statuses.map(status => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StatusFilter;