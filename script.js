// 1. Store conditions and matching icons in an object
const weatherData = {
    sunny: {
        title: "Sunny",
        description: "Clear skies with plenty of sunshine. Perfect for outdoor activities!",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
        bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        iconColor: "#ff8c00",
        textColor: "#ffffff",
        cardBg: "rgba(255, 255, 255, 0.2)"
    },
    rainy: {
        title: "Rainy",
        description: "Steady rain falling. Don't forget your umbrella and a waterproof jacket.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>`,
        bg: "linear-gradient(135deg, #4b79a1 0%, #283e51 100%)",
        iconColor: "#85a3b9",
        textColor: "#ffffff",
        cardBg: "rgba(0, 0, 0, 0.2)"
    },
    snowy: {
        title: "Snowy",
        description: "Freezing temperatures and snowfall. Bundle up and drive safely.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`,
        bg: "linear-gradient(135deg, #83a4d4 0%, #b6fbff 100%)",
        iconColor: "#ffffff",
        textColor: "#1a1a1a", // Dark text for light background
        cardBg: "rgba(255, 255, 255, 0.6)"
    },
    cloudy: {
        title: "Cloudy",
        description: "Overcast skies. It might be a bit gloomy, but the temperature is mild.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
        bg: "linear-gradient(135deg, #757F9A 0%, #D7DDE8 100%)",
        iconColor: "#b0bec5",
        textColor: "#ffffff",
        cardBg: "rgba(0, 0, 0, 0.15)"
    },
    stormy: {
        title: "Stormy",
        description: "Severe thunderstorms expected. Stay indoors and avoid open areas.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>`,
        bg: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        iconColor: "#ffd700",
        textColor: "#ffffff",
        cardBg: "rgba(0, 0, 0, 0.3)"
    }
};

// 2. DOM Elements
const selectEl = document.getElementById('weather-select');
const cardEl = document.getElementById('display-card');
const iconEl = document.getElementById('weather-icon');
const titleEl = document.getElementById('weather-title');
const descEl = document.getElementById('weather-description');
const bodyEl = document.documentElement; // For CSS variables
const effectsContainer = document.getElementById('weather-effects-container');

// 3. Clear Animations
function clearEffects() {
    effectsContainer.innerHTML = '';
}

// 4. Generate New Animations
function createEffects(type) {
    clearEffects();
    
    // SUNNY EFFECT
    if (type === 'sunny') {
        let glow = document.createElement('div');
        glow.classList.add('sun-glow');
        effectsContainer.appendChild(glow);
    } 
    // RAINY EFFECT
    else if (type === 'rainy') {
        for (let i = 0; i < 70; i++) {
            let drop = document.createElement('div');
            drop.classList.add('rain-drop');
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.animationDuration = (Math.random() * 0.4 + 0.3) + 's'; 
            drop.style.animationDelay = Math.random() * 1 + 's';
            drop.style.opacity = Math.random() * 0.5 + 0.2;
            effectsContainer.appendChild(drop);
        }
    } 
    // SNOWY EFFECT
    else if (type === 'snowy') {
        const flakeTypes = ['❄', '❅', '❆'];
        for (let i = 0; i < 40; i++) {
            let flake = document.createElement('div');
            flake.classList.add('snow-flake');
            flake.innerHTML = flakeTypes[Math.floor(Math.random() * flakeTypes.length)];
            flake.style.left = Math.random() * 100 + 'vw';
            flake.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
            flake.style.animationDuration = (Math.random() * 3 + 3) + 's';
            flake.style.animationDelay = Math.random() * 3 + 's';
            effectsContainer.appendChild(flake);
        }
    } 
    // CLOUDY EFFECT
    else if (type === 'cloudy') {
        for (let i = 0; i < 10; i++) {
            let cloud = document.createElement('div');
            cloud.classList.add('cloud-shape');
            let size = Math.random() * 250 + 100;
            cloud.style.width = size + 'px';
            cloud.style.height = size + 'px';
            cloud.style.top = (Math.random() * 60) + 'vh'; // Spread across top 60%
            cloud.style.animationDuration = (Math.random() * 20 + 15) + 's';
            cloud.style.animationDelay = (Math.random() * 10) + 's';
            effectsContainer.appendChild(cloud);
        }
    } 
    // STORMY EFFECT (Rain + Lightning)
    else if (type === 'stormy') {
        // Heavy Rain
        for (let i = 0; i < 100; i++) {
            let drop = document.createElement('div');
            drop.classList.add('rain-drop');
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.animationDuration = (Math.random() * 0.3 + 0.2) + 's'; 
            drop.style.animationDelay = Math.random() * 1 + 's';
            effectsContainer.appendChild(drop);
        }
        // Lightning
        let flash = document.createElement('div');
        flash.classList.add('lightning-flash');
        effectsContainer.appendChild(flash);
    }
}

// 5. Update UI Main Function
function updateWeatherDisplay(conditionKey) {
    const data = weatherData[conditionKey];

    if (!data) {
        // Default State Reset
        iconEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
        titleEl.textContent = "Awaiting Selection";
        descEl.textContent = "Please select a weather condition from the dropdown above to see its details.";
        bodyEl.style.setProperty('--bg-gradient', "linear-gradient(135deg, #1e1e24, #3a3a4a)");
        bodyEl.style.setProperty('--text-color', '#ffffff');
        bodyEl.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.1)');
        clearEffects();
        return;
    }

    // Update DOM text and icons
    iconEl.innerHTML = data.icon;
    titleEl.textContent = data.title;
    descEl.textContent = data.description;

    // Update Dynamic Theme Variables
    bodyEl.style.setProperty('--bg-gradient', data.bg);
    bodyEl.style.setProperty('--icon-color', data.iconColor);
    bodyEl.style.setProperty('--text-color', data.textColor);
    bodyEl.style.setProperty('--card-bg', data.cardBg);
    
    // Trigger the background animations
    createEffects(conditionKey);
}

// 6. Event Listener
selectEl.addEventListener('change', (event) => {
    updateWeatherDisplay(event.target.value);
});