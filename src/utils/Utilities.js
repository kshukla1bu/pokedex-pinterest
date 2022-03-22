export const randomIntFromInterval = () => {
    return Math.floor(Math.random() * (1107 - 1 + 1) + 1)
}

export const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }