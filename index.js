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
  
})

