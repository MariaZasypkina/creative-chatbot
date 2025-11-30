import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatWindow({ messages, onSend, onClose }) {
  const messagesEndRef = useRef(null);
  const initialLengthRef = useRef(messages.length); // запоминаем, сколько сообщений было в начале

  useEffect(() => {
    if (messages.length === 0) return;

    // Пока количество сообщений такое же, как при первом рендере,
    // считаем, что это приветствие — не скроллим вниз.
    if (messages.length === initialLengthRef.current) {
      return;
    }

    // Все последующие изменения — скроллим к низу.
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>Assistant</span>
        <button onClick={onClose}>×</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            text={msg.text}
            sender={msg.sender}
            optionId={msg.optionId}
            onOptionClick={(id, label) => onSend(label, id)}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={onSend} />
    </div>
  );
}
