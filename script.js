function showLove() {
    const responseDiv = document.getElementById('response-message');
    const messages = [
        '💕 I Love You Too! 💕',
        '❤️ Selamanya Milikmu ❤️',
        '💗 Terima Kasih Atas Cintamu 💗',
        '💖 Kamu Adalah Takdirku 💖',
        '💝 Aku Janji Tidak Akan Mengecewakan Lagi 💝'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    responseDiv.textContent = randomMessage;
    
    // Efek confetti
    createConfetti();
    
    setTimeout(() => {
        responseDiv.textContent = '';
    }, 3000);
}

function showMessage() {
    const responseDiv = document.getElementById('response-message');
    responseDiv.textContent = '✨ Terima Kasih Telah Memaafkan Aku ✨';
    
    // Efek bunga jatuh
    createFlowers();
    
    setTimeout(() => {
        responseDiv.textContent = '';
    }, 3000);
}

function createConfetti() {
    const colors = ['❤️', '💗', '💕', '💖', '💝'];
    const confettiCount = 20;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.fontSize = '30px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(confetti);
        
        const duration = 2000 + Math.random() * 1000;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;
            
            if (progress >= 1) {
                confetti.remove();
                return;
            }
            
            confetti.style.top = (progress * window.innerHeight) + 'px';
            confetti.style.opacity = 1 - progress;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
}

function createFlowers() {
    const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷'];
    const flowerCount = 15;
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.style.position = 'fixed';
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = '-20px';
        flower.style.fontSize = '30px';
        flower.style.zIndex = '9999';
        flower.style.pointerEvents = 'none';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        document.body.appendChild(flower);
        
        const duration = 3000 + Math.random() * 1000;
        const startTime = Date.now();
        const xOffset = (Math.random() - 0.5) * 200;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;
            
            if (progress >= 1) {
                flower.remove();
                return;
            }
            
            flower.style.top = (progress * window.innerHeight) + 'px';
            flower.style.left = 'calc(' + (Math.random() * 100) + '% + ' + (xOffset * progress) + 'px)';
            flower.style.opacity = 1 - (progress * progress);
            flower.style.transform = 'rotate(' + (progress * 720) + 'deg)';
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
}

// Efek suara saat halaman dimuat (optional)
window.addEventListener('load', () => {
    console.log('Website Permintaan Maaf Loaded ❤️');
});

// Prevent zoom pada mobile untuk UX yang lebih baik
document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });
