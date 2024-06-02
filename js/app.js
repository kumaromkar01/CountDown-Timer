const clock = () => {
    const endDate = document.getElementById('in').value; // Correct ID selector
    console.log(endDate);
    document.getElementById("end-date").innerText = endDate;
    const inputs = document.querySelectorAll("input");
    
    const end = new Date(endDate);
    const curr = new Date();

    let diff = (end - curr) / 1000; // Calculate difference in seconds
    if (diff < 0) diff = 0;
    
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
}

// Set interval to update the clock every second
setInterval(clock, 1000);
