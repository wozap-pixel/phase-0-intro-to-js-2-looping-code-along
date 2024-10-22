// Code your solutions in this file
// index.js

// Function to wrap gifts
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

// Function to create thank you cards
function writeCards(names, event) {
  const messages = [];
  
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  
  return messages;
}

// Function to count down from a given number
function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

// Example usage
const gifts = ["teddy bear", "drone", "doll"];
wrapGifts(gifts);

const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thankYouMessages);

countDown(10);
