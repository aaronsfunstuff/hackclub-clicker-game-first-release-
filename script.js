let tickets = 0;
let linesOfCode = 0;
let codingSpeed = 1; 
let ticketsPerSecond = 0;
const linesPerTicket = 70; 

// Item Quantities Tracker
const itemQuantities = {
    upgrades: {
        doubleTicketValue: 0,
        autoClicker: 0,
        tripleTicketValue: 0,
        quadrupleTicketValue: 0,
        megaAutoClicker: 0,
        speedCoder: 0,
        superSpeedCoder: 0,
        codeOptimization: 0,
        megaCodeOptimization: 0
    },
    store: {
        pileOfStickers: 0,
        domain: 0,
        solderingIron: 0,
        octocatPlush: 0,
        keychronK6Pro: 0,
        flipperZero: 0,
        iPad: 0,
        quest3: 0,
        rtx3090: 0,
        macBook: 0
    }
};

// DOM Elements
const ticketCountElement = document.getElementById('ticket-count');
const clickableImageElement = document.getElementById('clickable-image');
const codeLinesCountElement = document.getElementById('code-lines-count');
const clickRateElement = document.getElementById('click-rate');
const ticketsPerSecondElement = document.getElementById('tickets-per-second');
const achievementsContainer = document.getElementById('achievements');
const itemQuantitiesContainer = document.getElementById('item-quantities');
const upgradesContainer = document.getElementById('upgrades');
const storeContainer = document.getElementById('store');

// Function to update the ticket count display
function updateTicketCount() {
    ticketCountElement.textContent = `🎟️ Tickets: ${tickets}`;
}

// Function to update the lines of code count display
function updateCodeLinesCount() {
    codeLinesCountElement.textContent = `👨‍💻 Lines of Code: ${linesOfCode}`;
}

// Function to update the coding speed display
function updateCodingSpeed() {
    clickRateElement.textContent = `👨‍💻 Coding Speed: ${codingSpeed} Lines/Click`;
}

// Function to update the tickets per second display
function updateTicketsPerSecond() {
    ticketsPerSecondElement.textContent = `🎟️ Tickets/Sec: ${ticketsPerSecond}`;
}

// Function to handle ticket click
function handleTicketClick() {
    linesOfCode += codingSpeed;
    if (linesOfCode >= linesPerTicket) {
        // Calculate tickets based on lines of code
        const ticketsEarned = Math.floor(linesOfCode / linesPerTicket);
        tickets += ticketsEarned;
        linesOfCode %= linesPerTicket; // Reset linesOfCode to the remaining after tickets
        updateTicketCount();
    }
    updateCodeLinesCount();
}

// Function to get the multiplier for ticket value based on upgrades
function getUpgradeMultiplier(...upgradeKeys) {
    let multiplier = 1;
    upgradeKeys.forEach(key => {
        if (itemQuantities.upgrades[key] > 0) {
            if (key === 'doubleTicketValue') multiplier *= 2;
            if (key === 'tripleTicketValue') multiplier *= 3;
            if (key === 'quadrupleTicketValue') multiplier *= 4;
        }
    });
    return multiplier;
}

// Function to update the achievements display
function updateAchievements() {
    achievementsContainer.innerHTML = '';
    // Example achievements
    const achievements = [
        { name: 'First Click', condition: tickets >= 1 },
        { name: 'Early Adopter', condition: tickets >= 10 },
        { name: 'Code Master', condition: linesOfCode >= 100 },
        { name: 'Upgrade Enthusiast', condition: Object.values(itemQuantities.upgrades).some(q => q > 0) }
    ];
    
    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement-item';
        if (achievement.condition) {
            achievementElement.classList.add('completed');
        }
 achievementElement.textContent = achievement.name;
        achievementsContainer.appendChild(achievementElement);
    });
}

// Function to update the item quantities display
function updateItemQuantities() {
    itemQuantitiesContainer.innerHTML = '';
    Object.keys(itemQuantities.upgrades).forEach(upgrade => {
        const quantityElement = document.createElement('div');
        quantityElement.className = 'item-quantity-item';
        quantityElement.textContent = `${upgrade}: ${itemQuantities.upgrades[upgrade]}`;
        itemQuantitiesContainer.appendChild(quantityElement);
    });
    Object.keys(itemQuantities.store).forEach(item => {
        const quantityElement = document.createElement('div');
        quantityElement.className = 'item-quantity-item';
        quantityElement.textContent = `${item}: ${itemQuantities.store[item]}`;
        itemQuantitiesContainer.appendChild(quantityElement);
    });
}

// Function to update the upgrades display
function updateUpgrades() {
    upgradesContainer.innerHTML = '';
    const upgrades = [
        { name: 'Double Ticket Value', icon: 'https://images.emojiterra.com/google/android-oreo/512px/1f39f.png', description: 'Doubles the value of each ticket.', key: 'doubleTicketValue' },
        { name: 'Auto Clicker', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxTTKQEmqM2zhzO5UORaCooWXgLy11gQwWw&s', description: 'Automatically clicks the ticket every second.', key: 'autoClicker' },
        { name: 'Triple Ticket Value', icon: 'https://static-00.iconduck.com/assets.00/admission-tickets-emoji-2048x2048-nc3fqb62.png', description: 'Triples the value of each ticket.', key: 'tripleTicketValue' },
        { name: 'Quadruple Ticket Value', icon: 'https://static-00.iconduck.com/assets.00/admission-tickets-emoji-2048x2048-nc3fqb62.png', description: 'Quadruples the value of each ticket.', key: 'quadrupleTicketValue' },
        { name: 'Mega Auto Clicker', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxTTKQEmqM2zhzO5UORaCooWXgLy11gQwWw&s', description: 'Auto clicks the ticket every 0.5 seconds.', key: 'megaAutoClicker' },
        { name: 'Speed Coder', icon: 'https://images.emojiterra.com/google/android-oreo/512px/1f39f.png', description: 'Increases coding speed by 2 lines per click.', key: 'speedCoder' },
        { name: 'Super Speed Coder', icon: 'https://images.emojiterra.com/google/android-oreo/512px/1f39f.png', description: 'Increases coding speed by 5 lines per click.', key: 'superSpeedCoder' },
        { name: 'Code Optimization', icon: 'https://images.emojiterra.com/google/android-oreo/512px/1f39f.png', description: 'Reduces lines needed per ticket by 10.', key: 'codeOptimization' },
        { name: 'Mega Code Optimization', icon: 'https://images.emojiterra.com/google/android-oreo/512px/1f39f.png', description: 'Reduces lines needed per ticket by 30.', key: 'megaCodeOptimization' }
    ];
    
    upgrades.forEach(upgrade => {
        const upgradeElement = document.createElement('div');
        upgradeElement.className = 'upgrade-item';
        upgradeElement.innerHTML = `
            <img src="${upgrade.icon}" alt="${upgrade.name}">
            <div class="upgrade-tooltip">${upgrade.description}</div>
            ${upgrade.name}
            <button onclick="buyUpgrade('${upgrade.key}')">Buy</button>
        `;
               upgradesContainer.appendChild(upgradeElement);
    });
}

// Function to update the store display
function updateStore() {
    storeContainer.innerHTML = '';
    const storeItems = [
        { name: 'Pile of Stickers', cost: 1, key: 'pileOfStickers' },
        { name: 'Domain', cost: 4, key: 'domain' },
        { name: 'Soldering Iron', cost: 8, key: 'solderingIron' },
        { name: 'Octocat Plush', cost: 15, key: 'octocatPlush' },
        { name: 'Keychron K6 Pro', cost: 50, key: 'keychronK6Pro' },
        { name: 'Flipper Zero', cost: 70, key: 'flipperZero' },
        { name: 'iPad', cost: 160, key: 'iPad' },
        { name: 'Quest 3', cost: 200, key: 'quest3' },
        { name: 'RTX 3090', cost: 280, key: 'rtx3090' },
        { name: 'MacBook', cost: 400, key: 'macBook' }
    ];

    storeItems.forEach(item => {
        const storeItemElement = document.createElement('div');
        storeItemElement.className = 'store-item';
        storeItemElement.innerHTML = `
            <div class="store-item-name">${item.name}</div>
            <div class="store-item-cost">Cost: ${item.cost} Tickets</div>
            <button onclick="buyItem('${item.key}', ${item.cost})">Buy</button>
        `;
        storeContainer.appendChild(storeItemElement);
    });
}

// Function to handle buying an item from the store
function buyItem(itemKey, cost) {
    if (tickets >= cost) {
        tickets -= cost;
        itemQuantities.store[itemKey]++;
        updateTicketCount();
        updateItemQuantities();
    }
}

