// Function to handle tab switching and style changes
function handleTabClick(tabId, sectionId, activeColor, inactiveColor) {
    console.log(`${tabId} button clicked`);
    showSectionById(sectionId);

    // Update background colors for active and inactive tabs
    document.getElementById('donation').style.backgroundColor = (tabId === 'donation') ? activeColor : inactiveColor;
    document.getElementById('transaction').style.backgroundColor = (tabId === 'transaction') ? activeColor : inactiveColor;
}

// Event listeners for donation and transaction tabs
document.getElementById('donation').addEventListener('click', function() {
    handleTabClick('donation', 'donation-collect', '#B4F461', 'white');
});

document.getElementById('transaction').addEventListener('click', function() {
    handleTabClick('transaction', 'transaction-history', '#B4F461', 'white');
});

// Get today's date
const todayDate = new Date();

