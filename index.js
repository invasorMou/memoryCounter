document.addEventListener('DOMContentLoaded', function() {
  
  let memoryGauge = document.querySelectorAll('.memory-value')
  
  memoryGauge.forEach(mem => {
    mem.addEventListener('touchstart', function(ev) {
      memoryGauge.forEach(m => {
        m.classList.remove('current-memory')
      })
      
      if (ev.target.nodeName === 'SPAN') {
        ev.target.parentNode.classList.add('current-memory')
      } else {
        ev.target.classList.add('current-memory')
      }
    })
  })
  
  let opDigimon = document.querySelector('.op-digimon')
  let opSprite = 0
  setInterval(function(){ 
    console.log(opSprite);
    if (opSprite === 0) {
      opDigimon.src = 'agumon-2.png'
      opSprite = 1
    } else {
      opDigimon.src = 'agumon-1.png'
      opSprite = 0
    }
  }, 1000);
  
  let myDigimon = document.querySelector('.my-digimon')
  let mySprite = 0
  setInterval(function(){ 
    if (mySprite === 0) {
      myDigimon.src = 'tentomon-2.png'
      mySprite = 1
    } else {
      myDigimon.src = 'tentomon-1.png'
      mySprite = 0
    }
  }, 1000);
})

