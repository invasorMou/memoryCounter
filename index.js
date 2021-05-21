document.addEventListener('DOMContentLoaded', function() {
  
  let memoryGauge = document.querySelectorAll('.memory-value')
  
  memoryGauge.forEach(mem => {
    mem.addEventListener('touchstart', function(ev) {
      
      memoryGauge.forEach(m => {
        m.classList.remove('current-memory')
      })
      
      ev.target.classList.add('current-memory')
    })
  })
  
})

