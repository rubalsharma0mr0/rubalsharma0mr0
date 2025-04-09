// Updated emojis for data engineering theme
const emojis = [
    '📊', // charts
    '📈', // trending up
    '💾', // floppy disk/storage
    '🗄️', // file cabinet/database
    '⚡', // processing/speed
    '☁️', // cloud
    '🔄', // sync/ETL
    '🎯', // target/optimization
    '🔍', // search/analysis
    '📡', // satellite/data transmission
    '🔋', // power/processing
    '🌐', // global/big data
    '📚', // books/knowledge
    '🔑', // key/security
    '⚙️', // gear/configuration
    '🔮', // crystal ball/predictions
    '🎲', // dice/random sampling
    '📥', // inbox/data input
    '📤', // outbox/data output
    '🔗'  // link/pipeline
];

const initEmojis = () => {
    const emojiContainer = document.querySelector('.emoji-background');
    
    // Create 40 random emojis
    for (let i = 0; i < 40; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random starting position
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;
        
        // Faster animation duration between 10-20s
        emoji.style.animationDuration = `${10 + Math.random() * 10}s`;
        
        // Random size between 1.5rem and 3.5rem
        emoji.style.fontSize = `${1.5 + Math.random() * 2}rem`;
        
        // Random delay
        emoji.style.animationDelay = `-${Math.random() * 10}s`;
        
        // Random rotation
        emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        emojiContainer.appendChild(emoji);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initEmojis); 