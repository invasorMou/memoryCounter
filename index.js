document.addEventListener('DOMContentLoaded', function() {
	
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js')
			.catch(function(err){
				console.log('SW not supported.')
			})
	}
  
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

	const digimons = {
		agumon: ['sprites/agumon-1.png', 'sprites/agumon-2.png'], 
		gabumon: ['sprites/gabumon-1.png', 'sprites/gabumon-2.png'], 
		biyomon: ['sprites/biyomon-1.png', 'sprites/biyomon-2.png'], 
		tentomon: ['sprites/tentomon-1.png', 'sprites/tentomon-2.png'], 
		palmon: ['sprites/palmon-1.png', 'sprites/palmon-2.png'], 
		patamon: ['sprites/patamon-1.png', 'sprites/patamon-2.png'], 
		gomamon: ['sprites/gomamon-1.png', 'sprites/gomamon-2.png'], 
		salamon: ['sprites/salamon-1.png', 'sprites/salamon-2.png'], 
	}

	const digiList = ['agumon', 'gabumon', 'biyomon', 'tentomon', 'palmon', 'patamon', 'gomamon', 'salamon']
  
  let spriteRatio = 500
  let opDigimon = document.querySelector('.op-digimon')
  let opSprite = 0
	let opDigiIdx = 0
  setInterval(function(){ 
    if (opSprite === 0) {
      opDigimon.src = digimons[digiList[opDigiIdx]][1]
      opSprite = 1
    } else {
      opDigimon.src = digimons[digiList[opDigiIdx]][0]
      opSprite = 0
    }
  }, spriteRatio);

	opDigimon.addEventListener('touchstart', function(){ opDigiIdx < 7 ? opDigiIdx++ : opDigiIdx = 0 })
  
  let myDigimon = document.querySelector('.my-digimon')
  let mySprite = 0
	let myDigiIdx = 1;
  setInterval(function(){ 
    if (mySprite === 0) {
      myDigimon.src = digimons[digiList[myDigiIdx]][1]
      mySprite = 1
    } else {
      myDigimon.src = digimons[digiList[myDigiIdx]][0]
      mySprite = 0
    }
  }, spriteRatio);
  
	myDigimon.addEventListener('touchstart', function(){ myDigiIdx < 7 ? myDigiIdx++ : myDigiIdx = 0 })

  let isSupported = false;

  if ('wakeLock' in navigator) {
    isSupported = true;
  }
  
  if (isSupported) {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
      } catch (err) {
      }
    }
    requestWakeLock()
  }

})

