const TOP = document.getElementById('link')
	window.addEventListener('scroll', (e) => {

    if(window.scrollY >= 1) {
        TOP.classList.add("fix")
        
    } else {
        TOP.classList.remove('fix')
    }
})
    const TOP1 = document.getElementById('link1')
    window.addEventListener('scroll', (e) => {

    if(window.scrollY >= 1) {
        TOP1.classList.add("fix")
       
    } else {
        TOP1.classList.remove('fix')
    }
})
    const TOP2 = document.getElementById('link2')
    window.addEventListener('scroll', (e) => {

    if(window.scrollY >= 1) {
        TOP2.classList.add("fix")
       
    } else {
        TOP2.classList.remove('fix')
    }
})
    const TOP3 = document.getElementById('link3')
    window.addEventListener('scroll', (e) => {

    if(window.scrollY >= 1) {
        TOP3.classList.add("fix")
      
    } else {
        TOP3.classList.remove('fix')
    }
})
    const TOP4 = document.getElementById('btn1')
    window.addEventListener('scroll', (e) => {

    if(window.scrollY >= 1) {
        TOP4.classList.add("btn2")
        console.log(window.scrollY)
    } else {
        TOP4.classList.remove('btn2')
    }
})

