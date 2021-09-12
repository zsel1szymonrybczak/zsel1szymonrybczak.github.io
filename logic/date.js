let footer = document.getElementById("date")

const getCurrentTimeDate = () => {
    let today = new Date()

    const month = today.getMonth() + 1
    let monthToReturn = month

    const day = today.getDate()
    let dayToReturn = day

    const hours = today.getHours()
    let hoursToReturn = hours

    const minutes = today.getMinutes()
    let minutesToReturn = minutes

    const seconds = today.getSeconds()
    let secondsToReturn = seconds

    if (month.toString().length === 1) {
        monthToReturn = "0" + month
    }

    if (day.toString().length === 1) {
        dayToReturn = "0" + day
    }

    if (hours.toString().length === 1) {
        hoursToReturn = "0" + hours
    }

    if (minutes.toString().length === 1) {
        minutesToReturn = "0" + minutes
    }

    if (seconds.toString().length === 1) {
        secondsToReturn = "0" + seconds
    }

    const date = "  " + dayToReturn + "." + monthToReturn + "." + today.getFullYear()
    const time = " " + hoursToReturn + ":" + minutesToReturn + ":" + secondsToReturn

    return date + time
}

const addContentToFooter = () => {
    footer.innerHTML = getCurrentTimeDate()
}

addContentToFooter()

footer.onclick = addContentToFooter
