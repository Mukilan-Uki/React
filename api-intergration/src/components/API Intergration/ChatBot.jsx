import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "sk-5b5e70a92f7e46d880ccb1af2218adbb"; // replace with your API key
  const API_URL = "https://api.deepseek.com/v1/chat"; // example endpoint

  const sendMessage = async () => {
    if (!input) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          messages: [
            { role: "user", content: input }
          ]
        }),
      });

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content || "No response";

      // Add bot message
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "bot", text: "Error: could not get response" }]);
    }

    setInput(""); // clear input
  };

  return (
    <div>
      <h1>AI Chatbot</h1>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <b>{msg.sender}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

//sk-5b5e70a92f7e46d880ccb1af2218adbb
