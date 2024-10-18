import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../features/chatSlice';
import { TextField, Button, Snackbar } from '@mui/material';
import './Chat.css'; // Import the custom CSS

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage(input)); // Send user message
      onSend(input); // Trigger bot response
      setInput('');
    } else {
      setError(true);
    }
  };

  return (
    <div className="message-input-container">
      <TextField
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        fullWidth
      />
      <Button variant="contained" onClick={handleSend}>Send</Button>

      {/* Error snackbar for empty message */}
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        message="Message cannot be empty"
      />
    </div>
  );
};

export default MessageInput;
