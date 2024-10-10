function formatAmount(amount, addSign = true) {
    return `${addSign && '$'}${Number.parseInt(amount).toLocaleString("en-US")}`;
}

function formatDate(rawDate) {
    const date = new Date(rawDate ?? "");
    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
export { formatAmount, formatDate };