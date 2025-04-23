document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // General chatbot responses
  const botResponses = {
    hello: "Hello! Welcome to DeMart. How can I help you today?",
    hi: "Hi there! Looking for something?",
    "how are you": "I'm doing great! Need help finding a product?",
    "what can you do": "I can help you locate products in the store and answer basic questions.",
    bye: "Thank you for visiting! Have a great day!",
    default: "I'm here to help! Please ask about a product or any assistance you need.",
  };

  // Product locations in the store
  const productLocations = {
    rice: "Rice is in Aisle 3 – Grains Section.",
    milk: "Milk is in the Refrigerated Section near Aisle 1.",
    bread: "Bread is in the Bakery near the entrance.",
    shampoo: "Shampoo is in Aisle 6 – Personal Care.",
    sugar: "Sugar is in Aisle 3 with grocery items.",
    chips: "Chips are in Aisle 5 – Snacks section.",
    water: "Water bottles are in Aisle 4.",
    eggs: "Eggs are kept in the Chiller section beside milk.",
    soap: "Soap is in Aisle 6 – Personal Hygiene.",
    toothpaste: "Toothpaste is also in Aisle 6.",
    coffee: "Coffee is in Aisle 2 – Beverages section.",
    tea: "Tea is right next to coffee in Aisle 2.",
    oil: "Cooking oil is in Aisle 3 – Essentials.",
    chocolate: "Chocolate is in Aisle 5 – Sweet Snacks.",
    detergent: "Detergents are in Aisle 7 – Cleaning Supplies.",
    noodles: "Instant noodles are in Aisle 4 – Packaged Foods.",
    biscuits: "Biscuits are in Aisle 5 – Snacks and Treats.",
    fruits: "Fresh fruits are near the front in the Produce section.",
    vegetables: "Vegetables are beside the fruits in the Produce area.",
  };

  // Function to add a message to the chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Function to get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check if user asked for a product
    for (const [product, location] of Object.entries(productLocations)) {
      if (lowerMessage.includes(product)) {
        return location;
      }
    }

    // Check for general greetings/responses
    for (const [key, value] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    return botResponses.default;
  }

  // Function to handle sending messages
  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      addMessage(message, true);
      userInput.value = "";

      // Simulate bot typing
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
      }, 500);
    }
  }

  // Event listeners
  sendButton.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
