import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';
import './Chat.css' // Import the custom CSS

const ChatDisplay = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat when messages are updated
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <List className="chat-display">
      {messages.map((msg, index) => (
        <ListItem key={index} style={{ display: 'flex', justifyContent: msg.user === 'User1' ? 'flex-end' : 'flex-start' }}>
          <ListItemText
            className={msg.user === 'User1' ? 'user-message' : 'bot-message'} 
            primary={msg.content}
            secondary={msg.timestamp}
          />
        </ListItem>
      ))}
      <div ref={chatEndRef} />
    </List>
  );
};

export default ChatDisplay;
