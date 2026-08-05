// Define the color mapping for landing page buttons
const buttonColors = {
    "War & Defence": "rgb(234, 21, 35)",
    "Governance & Law": "#0a6dc4",
    "Economy": "hsl(38, 89%, 51%)",
    "Mobility": "#519c0b",
    "Social Order": "rgb(138, 9, 155)",
    "Currencies": "hsl(40, 75%, 37%)",
    "Knowledge": "rgb(84, 141, 151)"
};

// Apply colors to buttons based on their text
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button.btn.btn-info').forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonColors[buttonText]) {
            button.style.backgroundColor = buttonColors[buttonText];
        }
    });
});