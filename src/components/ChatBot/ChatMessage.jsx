export default function ChatMessage({ text, sender }) {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="chat-bubble">{text}</div>
    </div>
  );
}
