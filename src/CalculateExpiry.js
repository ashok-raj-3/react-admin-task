export const CalculateExpiry = (timestamp) => {
    const date_future = new Date(timestamp);

    const date_now = new Date();

    let seconds = Math.floor((date_future - (date_now)) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);

    return `${days} Days , ${minutes} Minutes , ${hours} Hours `
}