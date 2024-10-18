import { createSlice } from '@reduxjs/toolkit';

// Initial state containing messages, current user, and user avatars
const initialState = {
  messages: [],
  currentUser: {
    name: 'User1',
    avatar: 'https://via.placeholder.com/40?text=U1', // Mocked avatar
  },
  users: {
    User1: {
      name: 'User1',
      avatar: 'https://via.placeholder.com/40?text=U1',
    },
    User2: {
      name: 'ChatBot', // Bot user
      avatar: 'https://via.placeholder.com/40?text=BOT', // Mocked bot avatar
    },
  },
};

// Create chatSlice for managing messages and user state
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // Action to handle sending a message
    sendMessage: (state, action) => {
      state.messages.push({
        user: state.currentUser.name,
        avatar: state.currentUser.avatar,
        content: action.payload, // Message content from input
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Formatted timestamp
      });
    },
    // Action to simulate receiving a bot response
    receiveMessage: (state, action) => {
      state.messages.push({
        user: 'ChatBot', // Mocked bot
        avatar: state.users.User2.avatar,
        content: action.payload, // Mocked message content
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Formatted timestamp
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
