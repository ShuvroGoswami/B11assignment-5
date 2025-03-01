

  const BgBtn = document.getElementById('bg-color-btn') ;
   const body = document.body;
   const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgray'];
   let colorI = 0;
   BgBtn.addEventListener('click', function(){
    body.style.backgroundColor = colors[colorI];
    colorI = (colorI + 1) % colors.length;
   })
