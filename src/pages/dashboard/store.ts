import { create } from 'zustand'
import type { Moive } from './types';



type MovieStates = {
  userMessage: string,
  setUserMessage: (message: string) => void,
  messages:Moive[],
  submitUserMessage: () => void
}
export const useMovieStore = create<MovieStates>()((set) => ({
  userMessage: '',
  messages: [],
  setUserMessage: (message: string) => set(() =>{
    console.log('Setting user message:', message);
    return { userMessage: message }}
  ),
  submitUserMessage: () => set((state) =>{
    const newMessage: Moive = {
      id: Date.now().toString(),
      title: state.userMessage,
      description: 'This is a placeholder description for the movie.',
      releaseDate: new Date().toISOString().split('T')[0],
      rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
      posterUrl: 'https://via.placeholder.com/150' // Placeholder image URL
    }
    return({ messages: [...state.messages,newMessage], userMessage:'' });
  })
}))