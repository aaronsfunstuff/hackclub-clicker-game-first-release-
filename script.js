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
