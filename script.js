const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; 
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; 
}

const generateResponse = (userMessage) => {
  
  const responses = {
    "hi chat bot": "Hello! How can I assist you today?",
    "can you speak bisaya?": "Sige unsa man?",
    "how are you": "I'm just a computer program, but I'm here to help!",
    "goodbye": "Goodbye! Feel free to return if you have more questions.",
    "help": "Sure, I can help with a wide range of topics. Just ask me a question!",
    "who are you": "I'm an AI assistant created by OpenAI. My purpose is to assist and provide information.",
    "thank you": "You're welcome! If you have any more questions, feel free to ask.",
    "weather": "I'm sorry, I can't provide real-time weather information. You can check a weather website or app for that.",
    "joke": "Why don't scientists trust atoms? Because they make up everything!",
    "hoy": "Unsa man? yawa ka",
    "naa koy pangutana": "Unsa man? dalii ga lulu pako",
    "giatay ka": "Humana, unsa man to?",
    "hi": "unsa naman pud?",
    "wala lang": "aypag samok samok bi litse",
    "english language": "English speaking, hello! how can I assist you today?",
    "tagalog language": "Philippine speaking, magandang araw sir! ano ang ipag lilingkod ko sa iyo?",
    "pag bisaya ragud": "Sge unsa man yawaa ka?",
    "kinsa akong future wife?": "Si Joanna Mae Bacurayo",
    "kinsa gani akong future wife?": "Si Joanna Mae Bacurayo lagi balik balik oy!!!",
    "okay": "yes",
    "hmm okay": "yes",
    "huy nimal tabangi ko naa koy quiz ugma sa math": "Paningkamot og imo diba IT man ka diba? paningkamot litse puros raka biga.",
    "goodnight bro": "Goodnight sir! have a good sleep.",
    "thankyou": "You're welcome sir!.",
    "goodmorning": "Good morning sir! How can I assist you today?.",
    "am i handsome?": "Yes sir",
    "good": "Thankyou sir",
    "thankyou": "You're welcome always sir!",
    "who created you?": "The man created me is jasper kim sale sir!",
    "who create you?": "The man created me is jasper kim sale sir!"
    
  };

  
  const lowerCaseMessage = userMessage.toLowerCase();

  
  if (responses.hasOwnProperty(lowerCaseMessage)) {
      return responses[lowerCaseMessage];
  } else {
      
      return "I'm not sure how to respond to that. Can you please rephrase your question?";
  }
}


const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
      const response = generateResponse(userMessage);
      const incomingChatLi = createChatLi(response, "incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 600);
}


chatInput.addEventListener("input", () => {
    
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));




function downloadZip() {
    
    var link = document.createElement('a');
    link.href = 'skynet_chatbot.zip'; 
    link.download = 'skynet_chatbot.zip'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


var button = document.getElementById('downloadButton');
button.addEventListener('click', downloadZip);



const textArray = ["AI", "Technology", "Innovation"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

const textElement = document.querySelector('.multiple-text');
const h3Element = document.querySelector('h3');

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        textElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    if (charIndex > 0) {
        const text = textArray[textIndex].substring(0, charIndex - 1);
        textElement.textContent = text;
        charIndex--;
        setTimeout(eraseText, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed); 
    }
}


typeText();





window.addEventListener('load', function () {
    const homeContent = document.querySelector('.home-content');
    homeContent.style.display = 'block';
});











