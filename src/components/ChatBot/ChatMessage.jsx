export default function ChatMessage({ text, sender, optionId, onOptionClick }) {
  if (optionId) {
    return (
      <div className="chat-message assistant">
        <button
          className="chat-option-button"
          onClick={() => onOptionClick(optionId, text)}
        >
          {text}
        </button>
      </div>
    );
  }

  return (
    <div className={`chat-message ${sender}`}>
      <div className="chat-bubble">{text}</div>
    </div>
  );
}
