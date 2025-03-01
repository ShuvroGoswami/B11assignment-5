
 function updateDateTime() {
    const now = new Date();
    const dayDiv = document.getElementById("day");
    const dateDiv = document.getElementById("date");
    const timediv = document.getElementById('time')
        
    const optionsDay = { weekday: 'short' }; 
    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
    const optionstime = {hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true} 
        
    dayDiv.innerHTML = now.toLocaleDateString(undefined, optionsDay);
    dateDiv.innerHTML = now.toLocaleDateString(undefined, optionsDate);
    timediv.innerHTML = now.toLocaleTimeString(undefined, optionstime)
        
}
        
       
    updateDateTime();
    
    setInterval(updateDateTime, 1000);
       