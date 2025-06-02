document.addEventListener('DOMContentLoaded', () => {
    // Create floating hearts
    const heartsContainer = document.querySelector('.floating-hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 15 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        // Random animation duration
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 300);
    
    // Add some initial hearts
    for(let i = 0; i < 10; i++) {
        createHeart();
    }
    
    // Add confetti effect on click
    document.addEventListener('click', (e) => {
        const colors = ['#ff6b6b', '#ffd93d', '#6c5ce7', '#a8e6cf'];
        
        for(let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random position
            confetti.style.left = e.clientX + 'px';
            confetti.style.top = e.clientY + 'px';
            
            // Random color
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Random size
            const size = Math.random() * 10 + 5;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            
            // Random rotation
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Random movement
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 3 + 2;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let posX = e.clientX;
            let posY = e.clientY;
            
            document.body.appendChild(confetti);
            
            // Animate confetti
            const animate = () => {
                posX += vx;
                posY += vy;
                vy += 0.1; // gravity
                
                confetti.style.left = posX + 'px';
                confetti.style.top = posY + 'px';
                
                if(posY < window.innerHeight) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    });
}); 