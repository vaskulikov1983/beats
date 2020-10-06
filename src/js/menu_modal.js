(function () {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', evt => { 
        evt.preventDefault();
    
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('overlay_active');
    
        const hamburgerLines = document.querySelectorAll('.hamburger__line');
        for (let hamburgerLine of hamburgerLines) { 
            hamburgerLine.classList.toggle('hamburger__line_active');
        }
    
        hamburger.classList.toggle('hamburger_active');
    
        const page = document.querySelector('.page');
        page.classList.toggle('page_fixed');
    })
})();
