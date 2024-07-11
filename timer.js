let timer;
let countdown;
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const notifyBtn = document.getElementById('notify-btn');

// Task 1: Countdown Timer
function startCountdown(seconds) {
    // Clear any previous timer
    clearInterval(countdown);
    let timeRemaining = seconds;

    // Update the display every second
    countdown = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = '00:00';
            alert('Time is up!');
            // Call function to display notification after timer ends
            showDelayedNotification();
        } else {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const secs = timeRemaining % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }, 1000);

    // Disable start button and enable stop button
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

// Stop the countdown timer
function stopCountdown() {
    clearInterval(countdown);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Task 2: Delayed Notification
function showDelayedNotification() {
    setTimeout(() => {
        alert('The timer has expired!');
    }, 1000); // 1 second delay for demonstration purposes
}

// Task 3: Repeat Notification
let notificationInterval;
function startNotifications() {
    notificationInterval = setInterval(() => {
        alert('This is a recurring notification!');
    }, 5000); // Notify every 5 seconds
}

// Stop repeating notifications
function stopNotifications() {
    clearInterval(notificationInterval);
}

// Event listeners for buttons
startBtn.addEventListener('click', () => {
    const duration = parseInt(document.getElementById('duration').value, 10);
    if (duration && duration > 0) {
        startCountdown(duration);
    } else {
        alert('Please enter a valid duration.');
    }
});

stopBtn.addEventListener('click', stopCountdown);
notifyBtn.addEventListener('click', () => {
    startNotifications();
    // Disable the notify button after starting notifications
    notifyBtn.disabled = true;
});

// Stop notifications if the user wants to stop them manually (could be added in a real app)
// Example:
// const stopNotifyBtn = document.getElementById('stop-notify-btn');
// stopNotifyBtn.addEventListener('click', stopNotifications);