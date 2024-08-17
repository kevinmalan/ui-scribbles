function countdown(targetDate) {
    const countdownElement = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.days.innerText = days;
        countdownElement.hours.innerText = hours;
        countdownElement.minutes.innerText = minutes;
        countdownElement.seconds.innerText = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("mainHeader").innerText = "Arrived!";
            countdownElement.days.innerText = 0;
            countdownElement.hours.innerText = 0;
            countdownElement.minutes.innerText = 0;
            countdownElement.seconds.innerText = 0;
        }
    }

    const interval = setInterval(updateCountdown, 1000);
}

const targetDate = new Date("2024-08-25T08:30:00").getTime();
countdown(targetDate);
