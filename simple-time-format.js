function formatTime(format, timeInSeconds) {
    let remainingTime = timeInSeconds;
    let hours = (remainingTime / 3600) | 0;
    remainingTime = remainingTime % 3600;

    let minutes = (remainingTime / 60) | 0;
    if (format == "HH:mm:ss") {
        let seconds = remainingTime % 60;

        if (hours < 10)
            hours = "0" + hours;
        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;

        return hours + ":" + minutes + ":" + seconds;
    } else if (format == "HH:mm") {
        if (hours < 10)
            hours = "0" + hours;
        if (minutes < 10)
            minutes = "0" + minutes;

        return hours + ":" + minutes;

    } else if (format == "H:m:s") {
        let seconds = remainingTime % 60;

        return hours + ":" + minutes + ":" + seconds;
    }

    return null;
}

noInline(formatTime);

let formatRequests = [{format: "HH:mm:ss", time: 10}, {format: "HH:mm:ss", time: 120}, {format: "HH:mm:ss", time: 3600}];
for (let i = 0; i < 10000; i++) {
    let r = formatRequests[i % formatRequests.length];
    formatTime(r.format, r.time);
}

