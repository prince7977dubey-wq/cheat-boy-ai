function sendMessage() {

    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let text = input.value.trim();

    if (text === "") return;

    // User Message
    let userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerText = text;
    chatBox.appendChild(userMsg);

    let userText = text.toLowerCase();

    input.value = "";

    setTimeout(() => {

        let aiMsg = document.createElement("div");
        aiMsg.classList.add("message", "ai");

        // NAME
        if (
            userText.includes("what is your name") ||
            userText.includes("your name") ||
            userText.includes("who are you")
        ) {
            aiMsg.innerHTML =
                "👋 Hello! My name is <b>Prince Dubey</b>.";
        }

        // OWNER
        else if (
            userText.includes("who is your owner") ||
            userText.includes("your owner") ||
            userText.includes("who made you") ||
            userText.includes("who created you")
        ) {
            aiMsg.innerHTML =
                "👑 My owner is <b>Shwet Dubey</b>.";
        }

        // HELLO
        else if (
            userText.includes("hello") ||
            userText.includes("hi")
        ) {
            aiMsg.innerHTML =
                "😊 Hello! How can I help you today?";
        }

        // HOW ARE YOU
        else if (
            userText.includes("how are you")
        ) {
            aiMsg.innerHTML =
                "😄 I am fine. Thanks for asking!";
        }

        // TIME
        else if (
            userText.includes("time")
        ) {
            aiMsg.innerHTML =
                "⏰ Current Time: " +
                new Date().toLocaleTimeString();
        }

        // DATE
        else if (
            userText.includes("date")
        ) {
            aiMsg.innerHTML =
                "📅 Today's Date: " +
                new Date().toLocaleDateString();
        }

        // WEATHER
        else if (
            userText.includes("weather")
        ) {

            let hour = new Date().getHours();

            if (hour >= 5 && hour < 10) {
                aiMsg.innerHTML =
                    "🌤️ Morning Weather<br><br>Temperature: <b>38°C</b><br><img src='https://cdn-icons-png.flaticon.com/512/869/869869.png' width='80'>";
            }

            else if (hour >= 10 && hour < 16) {
                aiMsg.innerHTML =
                    "☀️ Afternoon Weather<br><br>Temperature: <b>45°C</b><br><img src='https://cdn-icons-png.flaticon.com/512/979/979585.png' width='80'>";
            }

            else if (hour >= 16 && hour < 20) {
                aiMsg.innerHTML =
                    "🌥️ Evening Weather<br><br>Temperature: <b>40°C</b><br><img src='https://cdn-icons-png.flaticon.com/512/414/414825.png' width='80'>";
            }

            else {
                aiMsg.innerHTML =
                    "🌙 Night Weather<br><br>Temperature: <b>38°C</b><br><img src='https://cdn-icons-png.flaticon.com/512/1146/1146869.png' width='80'>";
            }
        }

        // JOKE
        else if (
            userText.includes("joke")
        ) {
            aiMsg.innerHTML =
                "😂 Why do programmers love dark mode? Because light attracts bugs!";
        }

        // HTML
        else if (
            userText.includes("html")
        ) {
            aiMsg.innerHTML =
                "💻 HTML is used to create webpages.";
        }

        // CSS
        else if (
            userText.includes("css")
        ) {
            aiMsg.innerHTML =
                "🎨 CSS is used to style webpages.";
        }

        // JAVASCRIPT
        else if (
            userText.includes("javascript")
        ) {
            aiMsg.innerHTML =
                "⚡ JavaScript adds functionality to websites.";
        }

        // AMAZON
        else if (
            userText.includes("amazon")
        ) {
            aiMsg.innerHTML =
                "🛒 Amazon is a popular online shopping website.";
        }

        // THANK YOU
        else if (
            userText.includes("thank")
        ) {
            aiMsg.innerHTML =
                "😊 You're welcome!";
        }

        // BYE
        else if (
            userText.includes("bye")
        ) {
            aiMsg.innerHTML =
                "👋 Goodbye! Have a great day!";
        }

        // SIMPLE MATH
        else if (userText === "1+1") {
            aiMsg.innerHTML = "2";
        }

        else if (userText === "2+2") {
            aiMsg.innerHTML = "4";
        }

        else if (userText === "5+5") {
            aiMsg.innerHTML = "10";
        }

        // DEFAULT ANSWERS
        else {

            let answers = [
                "🤔 Interesting!",
                "😊 Tell me more.",
                "👍 I understand.",
                "💡 That's a good question.",
                "🚀 I'm still learning.",
                "📚 Can you explain more?",
                "😄 Nice!",
                "🎉 Awesome!",
                "💬 Let's talk about it.",
                "🌟 Sounds good!"
            ];

            aiMsg.innerHTML =
                answers[Math.floor(Math.random() * answers.length)];
        }

        chatBox.appendChild(aiMsg);
        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);
}

// ENTER KEY SUPPORT
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});