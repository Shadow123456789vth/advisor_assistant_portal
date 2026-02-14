import { useRef, useEffect, useState } from 'react';
import useSpeech from './useSpeech';

/**
 * Voice command processor for conversational AI
 * Listens for commands after speaking and executes actions
 */
export const useVoiceCommands = (onCommand) => {
  const { speak, getRandomResponse } = useSpeech();
  const [isListening, setIsListening] = useState(false);
  const [conversationMode, setConversationMode] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Initialize Speech Recognition for commands
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        setIsListening(false);
        processCommand(command);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Voice command error:', event.error);
        setIsListening(false);
        if (event.error !== 'no-speech') {
          speak("Sorry, I didn't catch that. Could you try again?");
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  /**
   * Start listening for voice command
   */
  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting voice recognition:', error);
        setIsListening(false);
      }
    }
  };

  /**
   * Stop listening
   */
  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  /**
   * Speak a message and then ask for a command
   */
  const speakAndListen = (message, delay = 1000) => {
    speak(message);

    // After speaking, ask what the user needs
    setTimeout(() => {
      const followUps = [
        "What can I help you with?",
        "What would you like to do?",
        "How can I assist you?",
        "What do you need?",
        "What's next?"
      ];
      speak(getRandomResponse(followUps));

      // Start listening after the follow-up question
      setTimeout(() => {
        startListening();
      }, 2000);
    }, delay);
  };

  /**
   * Process voice command and determine intent
   */
  const processCommand = (command) => {
    console.log('Processing command:', command);

    // Task-related commands
    if (command.includes('create task') || command.includes('add task') || command.includes('new task')) {
      const taskDescription = command
        .replace('create task', '')
        .replace('add task', '')
        .replace('new task', '')
        .replace('to', '')
        .trim();

      if (taskDescription) {
        onCommand({ type: 'CREATE_TASK', data: taskDescription });
        speak(`Great! I'll create that task for you: ${taskDescription}`);
      } else {
        speak("Sure, what task would you like to create?");
        setTimeout(startListening, 1500);
      }
      return;
    }

    // Appointment-related commands
    if (command.includes('schedule') || command.includes('appointment') || command.includes('meeting')) {
      onCommand({ type: 'SCHEDULE_APPOINTMENT' });
      speak("Perfect! Let me open the appointment scheduler for you");
      return;
    }

    // Customer-related commands
    if (command.includes('customer') || command.includes('client') || command.includes('add note')) {
      onCommand({ type: 'VIEW_CUSTOMERS' });
      speak("Opening your customer list now");
      return;
    }

    // Read/view commands
    if (command.includes('read my tasks') || command.includes('what are my tasks') || command.includes('show tasks')) {
      onCommand({ type: 'READ_TASKS' });
      return;
    }

    if (command.includes('read appointments') || command.includes('what appointments') || command.includes('my calendar')) {
      onCommand({ type: 'READ_APPOINTMENTS' });
      return;
    }

    if (command.includes('daily summary') || command.includes('how am i doing') || command.includes('my progress')) {
      onCommand({ type: 'DAILY_SUMMARY' });
      return;
    }

    // Navigation commands
    if (command.includes('go home') || command.includes('home screen') || command.includes('dashboard')) {
      onCommand({ type: 'NAVIGATE', screen: 0 });
      speak("Taking you to the home screen");
      return;
    }

    if (command.includes('go to tasks') || command.includes('show tasks')) {
      onCommand({ type: 'NAVIGATE', screen: 1 });
      speak("Opening your tasks");
      return;
    }

    if (command.includes('go to calendar') || command.includes('show calendar')) {
      onCommand({ type: 'NAVIGATE', screen: 3 });
      speak("Opening your calendar");
      return;
    }

    // Help command
    if (command.includes('help') || command.includes('what can you do')) {
      const helpMessage = "I can help you create tasks, schedule appointments, add customer notes, read your tasks and appointments, provide daily summaries, and navigate the app. Just tell me what you need!";
      speak(helpMessage);
      setTimeout(() => {
        speak("What would you like to do?");
        setTimeout(startListening, 1500);
      }, 8000);
      return;
    }

    // Didn't understand
    const clarifications = [
      "I'm not sure what you mean. You can ask me to create tasks, schedule appointments, view customers, or read your tasks",
      "Sorry, I didn't understand that. Try saying 'create task', 'schedule appointment', or 'read my tasks'",
      "I'm still learning! You can ask me to create tasks, schedule meetings, add notes, or check your calendar"
    ];
    speak(getRandomResponse(clarifications));
    setTimeout(() => {
      speak("What would you like to do?");
      setTimeout(startListening, 1500);
    }, 5000);
  };

  return {
    isListening,
    conversationMode,
    setConversationMode,
    startListening,
    stopListening,
    speakAndListen,
    processCommand
  };
};

export default useVoiceCommands;
