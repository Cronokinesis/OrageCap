function secondMax(array) {
    if (array.length == 0) {
        return "Error!"
    }
    var isNumbers = array.every(function (n) { return typeof n === 'number'; });
    if (isNumbers) {
        let max = Math.max(...array)
        array = array.map((n, i) => n == max ? -Infinity : n)
        let secondMax = Math.max(...array)
        if (isFinite(secondMax)) {
            return secondMax
        }
        return max
    } else {
        return "Error!"
    }
}