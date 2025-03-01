
      const buttons = document.querySelectorAll('.task-button');
      const log = document.getElementById('log');
      let completedTasks = 0;

      const messages = [
      "You have Complete The Task Fix Mobile Button Issue  at ",
      "You have Complete The Task Add Dark Mode at 12:48:15 PM",
      "You have Complete The Task Optimize  Home page  at 12:48:15 PM",
      "You have Complete The Task Add new emoji 🤲 at 12:48:15 PM",
      "You have Complete The Task Integrate OpenAI API  at 12:48:15 PM",
      "You have Complete The Improve Job searching  at 12:48:15 PM"
    ];

    const now = new Date();
        const time = now.toLocaleTimeString(); 


      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event)  {
          event.preventDefault()
          buttons[i].disabled = true;
          alert('Board updated successfully');

          

          log.innerHTML += "<p class=bg-[#f4f7ff] >" + messages[i]+ time  +"</p>";
          completedTasks++;

          if (completedTasks === buttons.length) {
            alert("congrates!!! you have completed all the current task");
            
          }
         
        });
        

      }
      