import React from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './features/chatSlice'; 
import ChatDisplay from './components/ChatDisplay';
import MessageInput from './components/MessageInput';
import { Container, Typography } from '@mui/material';
import './Chat.css'; // Import the custom CSS

const App = () => {
  const dispatch = useDispatch();

  // Simulate bot response with common human questions
  const simulateBotResponse = (userMessage) => {
    let botResponse;

    // Respond based on the user's message
    if (userMessage.toLowerCase().includes("hi") || userMessage.toLowerCase().includes("hello")) {
      botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
      botResponse = "I'm just a bot, but I'm here to help you!";
    } else if (userMessage.toLowerCase().includes("weather")) {
      botResponse = "The weather is great! What is your favorite season?";
    } else if (userMessage.toLowerCase().includes("raining")) {
      botResponse = "I hope you have an umbrella! How do you feel about rain?";
    } else if (userMessage.toLowerCase().includes("help")) {
      botResponse = "I'm here to help! What do you need assistance with?";
    } else if (userMessage.toLowerCase().includes("thank you") || userMessage.toLowerCase().includes("thanks")) {
      botResponse = "You're welcome! If you have more questions, feel free to ask.";
    } else if (userMessage.toLowerCase().includes("favorite color")) {
      botResponse = "I don't have a favorite color, but I hear blue is quite popular!";
    } else if (userMessage.toLowerCase().includes("tell me a joke")) {
      botResponse = "Why did the scarecrow win an award? Because he was outstanding in his field!";
    } else {
      const botResponses = [
        "I'm here to help!",
        "Tell me more.",
        "That's interesting!",
        "How can I assist you further?",
        "Please ask me anything!"
      ];
      botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    }

    setTimeout(() => {
      dispatch(receiveMessage(botResponse));
    }, 1000); 
  };

  return (
    <Container maxWidth="sm"> {/* Use Container for layout */}
      <Typography variant="h4" align="center" gutterBottom>
        Chat Application
      </Typography>
      <ChatDisplay />
      <MessageInput onSend={simulateBotResponse} />
    </Container>
  );
};

export default App;
