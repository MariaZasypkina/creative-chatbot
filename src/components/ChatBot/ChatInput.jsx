import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
