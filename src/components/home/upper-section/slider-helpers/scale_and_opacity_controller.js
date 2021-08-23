const formatNumber = (number, accuracy = 2) => {
    const formatterToAccuracy = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: accuracy,
        maximumFractionDigits: accuracy,
    });
    return formatterToAccuracy.format(number)
}

export default formatNumber