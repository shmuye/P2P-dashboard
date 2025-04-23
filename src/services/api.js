export const fetchTransactions = async () => {
    const response = await fetch('http//localhost:4000/transactions')
    return await response.json()
}
export const fetchTransactionDetails = async (id) => {
    const response = await fetch(`http//localhost:4000/transactions/${id}`)
    return await response.json()
}