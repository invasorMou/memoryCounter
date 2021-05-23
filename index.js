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
  
  let spriteRatio = 500
  let opDigimon = document.querySelector('.op-digimon')
  let opSprite = 0
  setInterval(function(){ 
    if (opSprite === 0) {
      opDigimon.src = 'agumon-2.png'
      opSprite = 1
    } else {
      opDigimon.src = 'agumon-1.png'
      opSprite = 0
    }
  }, spriteRatio);
  
  let myDigimon = document.querySelector('.my-digimon')
  let mySprite = 0
  setInterval(function(){ 
    if (mySprite === 0) {
      myDigimon.src = 'gabumon-2.png'
      mySprite = 1
    } else {
      myDigimon.src = 'gabumon-1.png'
      mySprite = 0
    }
  }, spriteRatio);
})

