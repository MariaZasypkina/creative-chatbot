import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatWindow({ messages, onSend, onClose }) {
  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>Assistant</span>
        <button onClick={onClose}>×</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <ChatMessage key={i} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <ChatInput onSend={onSend} />
    </div>
  );
}
