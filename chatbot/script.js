// // // script.js

// // const chatInput = 
// // 	document.querySelector('.chat-input textarea');
// // const sendChatBtn = 
// // 	document.querySelector('.chat-input button');
// // const chatbox = document.querySelector(".chatbox");

// // let userMessage;
// // const API_KEY = 
// // 	"AIzaSyAqi_xOYjq0OU5djT-Yr-2arvxr8wujXV0";

// // //OpenAI Free APIKey

// // const createChatLi = (message, className) => {
// // 	const chatLi = document.createElement("li");
// // 	chatLi.classList.add("chat", className);
// // 	let chatContent = 
// // 		className === "chat-outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
// // 	chatLi.innerHTML = chatContent;
// // 	return chatLi;
// // }

// // const generateResponse = (incomingChatLi) => {
// // 	const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAqi_xOYjq0OU5djT-Yr-2arvxr8wujXV0";
// // 	const messageElement = incomingChatLi
// // 	.querySelector("p");
// // 	const requestOptions = {
// // 		method: "POST",
// // 		headers: {
// // 			"Content-Type": "application/json",
// // 			"Authorization": `Bearer ${API_KEY}`
// // 		},
// // 		body: JSON.stringify({
// // 			"model": "gemini-1.5-flash",
// // 			"messages": [
// // 				{
// // 					role: "user",
// // 					content: userMessage
// // 				}
// // 			]
// // 		})
// // 	};

// // 	fetch(API_URL, requestOptions)
// // 		.then(res => {
// // 			if (!res.ok) {
// // 				throw new Error("Network response was not ok");
// // 			}
// // 			return res.json();
// // 		})
// // 		.then(data => {
// // 			messageElement
// // 			.textContent = data.choices[0].message.content;
// // 		})
// // 		.catch((error) => {
// // 			messageElement
// // 			.classList.add("error");
// // 			messageElement
// // 			.textContent = "Oops! Something went wrong. Please try again!";
// // 		})
// // 		.finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// // };


// // const handleChat = () => {
// // 	userMessage = chatInput.value.trim();
// // 	if (!userMessage) {
// // 		return;
// // 	}
// // 	chatbox
// // 	.appendChild(createChatLi(userMessage, "chat-outgoing"));
// // 	chatbox
// // 	.scrollTo(0, chatbox.scrollHeight);

// // 	setTimeout(() => {
// // 		const incomingChatLi = createChatLi("Thinking...", "chat-incoming")
// // 		chatbox.appendChild(incomingChatLi);
// // 		chatbox.scrollTo(0, chatbox.scrollHeight);
// // 		generateResponse(incomingChatLi);
// // 	}, 600);
// // }

// // sendChatBtn.addEventListener("click", handleChat);

// // function cancel() {
// // 	let chatbotcomplete = document.querySelector(".chatBot");
// // 	if (chatbotcomplete.style.display != 'none') {
// // 		chatbotcomplete.style.display = "none";
// // 		let lastMsg = document.createElement("p");
// // 		lastMsg.textContent = 'Thanks for using our Chatbot!';
// // 		lastMsg.classList.add('lastMessage');
// // 		document.body.appendChild(lastMsg)
// // 	}
// // }

