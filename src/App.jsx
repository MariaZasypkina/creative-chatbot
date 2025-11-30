import { useState } from "react";
import ChatButton from "./components/ChatBot/ChatButton";
import ChatWindow from "./components/ChatBot/ChatWindow";
import "./components/ChatBot/styles.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  function handleSend(text) {
    setMessages((prev) => [...prev, { text, sender: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I received your message.", sender: "assistant" }
      ]);
    }, 500);
  }

  return (
    <div>
      {!isOpen && <ChatButton onClick={() => setIsOpen(true)} />}
      {isOpen && (
        <ChatWindow
          messages={messages}
          onSend={handleSend}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
