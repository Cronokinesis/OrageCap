function shift(array, cmd, time) {
    let size = array.length
    let newArray = [...array]
    switch (cmd) {
        case "right":
            for (var i = 0; i < size; i++) {
                let item = array[i]
                let newIndex = (i + time) % size
                newArray[newIndex] = item
            }
            break;
        case "left":
            for (var i = 0; i < size; i++) {
                let item = array[i]
                let newIndex = (i - time) % size
                newIndex = newIndex < 0 ? newIndex + size : newIndex
                newArray[newIndex] = item
            }
            break;
        default:
            return
    }

    return newArray
}