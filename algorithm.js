function getDayName(day) {
    if (typeof day !== 'number') {
        return 'error';
    }

    if (day > 0 && day < 8) {
        let days = ['пон', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
        return days;
    } else {
        return 'неверные данные на входе';
    }
}

console.log(getDayName);