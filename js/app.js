document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
    // інтерполяція
        style: ` 
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
            --move-y: ${(e.clientY - window.innerHeight/ 2) * -.01}deg;
        `
    })
})
