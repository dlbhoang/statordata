import { useState } from 'react';
import styles from './Group.module.css';

export default function Group() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Admin', text: 'Chào mừng đến với nhóm Statordata.com!', time: new Date().toLocaleTimeString() },
    { id: 2, user: 'User1', text: 'Xin chào mọi người!', time: new Date().toLocaleTimeString() },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'Bạn',
        text: newMessage,
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className={styles.group}>
      <h1>Nhóm trao đổi Statordata.com</h1>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messages.map(msg => (
            <div key={msg.id} className={styles.message}>
              <strong>{msg.user}:</strong> {msg.text} <small>({msg.time})</small>
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Nhập tin nhắn..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Gửi</button>
        </div>
      </div>
    </div>
  );
}