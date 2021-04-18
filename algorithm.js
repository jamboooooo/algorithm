function getDayName(day) {
    return typeof day !== 'number' && 'error'
}

console.log(getDayName);