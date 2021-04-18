function getDayName(day) {
    if (typeof day !== 'number') {
        return 'error';
    }

    if (day > 0 && day < 8) {
        return 'Все верно'
    } else {
        return 'неверные данные на входе';
    }
}

console.log(getDayName);