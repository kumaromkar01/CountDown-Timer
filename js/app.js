
const endDate = "15 August 2047 09:30:47 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = ()=>{
    var tar = document.getElementById('Jun 02 2024 10:41:20');
    const end = new Date(endDate);
    let curr = new Date();

    const diff = (end-curr)/1000; //difference tells the seconds between specified time and current time
    // console.log(diff);
    console.log(end);
    console.log(curr);
    if(diff<0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600)%24 );
    inputs[2].value = Math.floor((diff / 60) % 60 );
    inputs[3].value = Math.floor(diff % 60);
}
setInterval(
    () => {
        clock()
    },
    1000
)

