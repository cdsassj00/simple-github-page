const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
