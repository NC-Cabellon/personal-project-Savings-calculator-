document.getElementById('calculate').addEventListener('click', function() {
    const currency = document.getElementById('currency').value;
    const initial = parseFloat(document.getElementById('initial').value);
    const monthly = parseFloat(document.getElementById('monthly').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(initial) || isNaN(monthly) || isNaN(interest) || isNaN(years)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const months = years * 12;
    let total = initial;

    for (let i = 0; i < months; i++) {
        total += monthly;
        total *= (1 + interest);
    }

    document.getElementById('result').textContent = `Total savings: ${currency}${total.toFixed(2)}`;
});

const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const themeRadios = document.getElementsByName('theme');

settingsBtn.onclick = function() {
    settingsModal.style.display = "block";
}

closeSettings.onclick = function() {
    settingsModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == settingsModal) {
        settingsModal.style.display = "none";
    }
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

themeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        setTheme(this.value);
    });
});

// Set initial theme
setTheme(document.querySelector('input[name="theme"]:checked').value);