// 🔐 Unlock Me – Career Explorer App
// File: src/App.js

import React from 'react';
import InterestsQuiz from './InterestsQuiz';

function App() {
  return <InterestsQuiz />;
}

export default App;

// File: src/InterestsQuiz.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const predefinedInterests = [
  { label: "Drawing", emoji: "🎨" },
  { label: "Coding", emoji: "💻" },
  { label: "Photography", emoji: "📷" },
  { label: "Music", emoji: "🎧" },
  { label: "Writing", emoji: "✍️" },
  { label: "Marketing", emoji: "📢" },
  { label: "Traveling", emoji: "✈️" },
  { label: "Gaming", emoji: "🎮" },
  { label: "Fitness", emoji: "🏋️" },
  { label: "Speaking", emoji: "🎤" },
  { label: "DIY", emoji: "🛠️" },
  { label: "Productivity", emoji: "⚡" },
];

export default function InterestsQuiz() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [customInterest, setCustomInterest] = useState("");

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const addCustomInterest = () => {
    const trimmed = customInterest.trim();
    if (trimmed && !selectedInterests.includes(trimmed)) {
      setSelectedInterests([...selectedInterests, trimmed]);
      setCustomInterest("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white flex items-center justify-center p-4">
      <div className="bg-white/10 border border-white/20 backdrop-blur-md p-8 rounded-3xl w-full max-w-3xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-6"
        >
          What are you interested in?
        </motion.h1>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {predefinedInterests.map((item) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              key={item.label}
              onClick={() => toggleInterest(item.label)}
              className={`px-4 py-2 text-sm rounded-full border ${
                selectedInterests.includes(item.label)
                  ? "bg-white text-indigo-800 font-semibold"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30"
              }`}
            >
              {item.emoji} {item.label}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={customInterest}
            onChange={(e) => setCustomInterest(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomInterest()}
            placeholder="Add your own interest..."
            className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={addCustomInterest}
            className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {selectedInterests.length > 0 && (
          <div className="text-sm mb-4">
            <strong>Selected:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="bg-white/30 px-3 py-1 rounded-full text-white text-xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 w-full bg-white text-purple-800 font-bold py-3 rounded-xl"
          onClick={() => console.log("Selected Interests:", selectedInterests)}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}
