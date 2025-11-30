import { useState } from "react";
import ChatButton from "./components/ChatBot/ChatButton";
import ChatWindow from "./components/ChatBot/ChatWindow";
import "./components/ChatBot/styles.css";
import { chatTree } from "./components/ChatBot/treeData";

function App() {
  const [isOpen, setIsOpen] = useState(false);
 const [messages, setMessages] = useState([
  { text: chatTree.start.message, sender: "assistant" },
  ...chatTree.start.options.map(o => ({
    text: o.label,
    sender: "assistant",
    optionId: o.id
  }))
]);




function handleSend(text, optionId = null) {
 // 1. Добавляем сообщение пользователя
setMessages(prev => [...prev, { text, sender: "user" }]);

const key = optionId || text.toLowerCase().trim();

// ---- BACK goes to START ----
if (key === "back") {
  setMessages(prev => [
    ...prev,
    { text: chatTree.start.message, sender: "assistant" },
    ...chatTree.start.options.map(o => ({
      text: o.label,
      sender: "assistant",
      optionId: o.id
    }))
  ]);
  return;
}

// ---- REGULAR TREE LOGIC ----
if (chatTree[key]) {
  const reply = chatTree[key].message;
  const options = chatTree[key].options || [];

  setMessages(prev => [
    ...prev,
    { text: reply, sender: "assistant" },
    ...options.map(o => ({
      text: o.label,
      sender: "assistant",
      optionId: o.id
    }))
  ]);

  if (chatTree[key].action === "email") {
    window.location.href = "mailto:creative.code.palette@gmail.com";
  }

  return;
}


  // 3. Unknown input
  setMessages((prev) => [
    ...prev,
    {
      text: "I can help with: pricing, timeline, types, contact, process, portfolio.",
      sender: "assistant"
    }
  ]);
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
