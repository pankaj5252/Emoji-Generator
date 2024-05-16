const emojis = ['😀', '😂', '😊', '😍', '🥳', '😎', '🤩', '😜', '😇', '🤔', "🤩", "😋", "🥳", "🎉", "🚀", "💡", "🔥", "💯", "👍", "👌", "✨", "💫"];

function generateRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    return randomEmoji;
}

const button = document.getElementById('generateButton');
button.addEventListener('click', function () {
    const emojiDisplay = document.getElementById('emojiDisplay');
    emojiDisplay.textContent = generateRandomEmoji();
});