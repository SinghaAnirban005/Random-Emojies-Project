const emoji = document.querySelector("#emoji");

const emojis = [
   "😀",
   "😃",
   "😄",
   "🤣",
   "😘",
   "😋",
];

emoji.addEventListener(
   "mouseover", () => {
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
   }
)
