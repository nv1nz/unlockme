// 🔐 Unlock Me – Skills Quiz Step
// File: src/SkillsQuiz.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const predefinedSkills = [
  { label: "Coding", emoji: "💻" },
  { label: "Design", emoji: "🎨" },
  { label: "Writing", emoji: "✍️" },
  { label: "Public Speaking", emoji: "🎤" },
  { label: "Leadership", emoji: "🧠" },
  { label: "Marketing", emoji: "📈" },
  { label: "Problem Solving", emoji: "🧩" },
  { label: "Teamwork", emoji: "🤝" },
  { label: "Critical Thinking", emoji: "🧐" },
  { label: "Creativity", emoji: "✨" },
  { label: "Adaptability", emoji: "🌊" },
];

export default function SkillsQuiz() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState("");

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const addCustomSkill = () => {
    const trimmed = customSkill.trim();
    if (trimmed && !selectedSkills.includes(trimmed)) {
      setSelectedSkills([...selectedSkills, trimmed]);
      setCustomSkill("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 text-white flex items-center justify-center p-4">
      <div className="bg-white/10 border border-white/20 backdrop-blur-md p-8 rounded-3xl w-full max-w-3xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-6"
        >
          What are your skills?
        </motion.h1>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {predefinedSkills.map((item) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              key={item.label}
              onClick={() => toggleSkill(item.label)}
              className={`px-4 py-2 text-sm rounded-full border ${
                selectedSkills.includes(item.label)
                  ? "bg-white text-purple-800 font-semibold"
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
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
            placeholder="Add your own skill..."
            className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={addCustomSkill}
            className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {selectedSkills.length > 0 && (
          <div className="text-sm mb-4">
            <strong>Selected:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/30 px-3 py-1 rounded-full text-white text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 w-full bg-white text-indigo-800 font-bold py-3 rounded-xl"
          onClick={() => console.log("Selected Skills:", selectedSkills)}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}
