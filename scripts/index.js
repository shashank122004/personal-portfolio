
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true // Use 24-hour format if set to false
        };
        document.getElementById("date-time").innerText = now.toLocaleString('en-US', options);
    }

    setInterval(updateDateTime, 1000); // Updates every second
    updateDateTime();