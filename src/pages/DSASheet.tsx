import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckSquare, Square } from 'lucide-react';
import { TopNav } from '@/components/TopNav';

const STORAGE_KEY = 'dsa_progress';

const defaultData = [
  {
    title: 'Basics of Programming',
    problems: [
      { question: 'Say "Hello, World!" with c++ (for practice)', difficulty: 'Easy', solved: false },
      { question: 'Basic Data Types (for practice)', difficulty: 'Easy', solved: false },
      { question: 'Input and Output (for practice)', difficulty: 'Easy', solved: false },
    ],
  },
  {
    title: 'Arrays',
    problems: [
      { question: 'Reverse an Array', difficulty: 'Easy', solved: false },
      { question: 'Find the Maximum Subarray Sum', difficulty: 'Medium', solved: false },
    ],
  },
];

const DSASheet = () => {
  const [sections, setSections] = useState([]);
  const [openSections, setOpenSections] = useState<number[]>([]);

  // Load data from localStorage or use default
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setSections(stored ? JSON.parse(stored) : defaultData);
  }, []);

  // Force light mode
  useEffect(() => {
    document.body.classList.remove('dark');
    document.body.classList.add('bg-white');
    return () => document.body.classList.remove('bg-white');
  }, []);

  const toggleSection = (idx: number) => {
    setOpenSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleSolved = (sectionIdx: number, problemIdx: number) => {
    const updated = [...sections];
    updated[sectionIdx].problems[problemIdx].solved =
      !updated[sectionIdx].problems[problemIdx].solved;
    setSections(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <>
      <TopNav onMenuClick={() => {}} sidebarOpen={false} />
      <div className="min-h-screen bg-white text-gray-900 px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2">DSA Practice Problems</h1>

        <div className="max-w-4xl mx-auto space-y-4 mt-10">
          {sections.map((section, sectionIdx) => {
            const total = section.problems.length;
            const solved = section.problems.filter((p) => p.solved).length;

            return (
              <div key={section.title} className="border rounded-lg bg-white shadow">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none"
                  onClick={() => toggleSection(sectionIdx)}
                >
                  <span>{section.title}</span>
                  <span className="flex items-center space-x-2">
                    <span className="text-green-600 font-medium">
                      {solved} / {total} solved
                    </span>
                    {openSections.includes(sectionIdx) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {openSections.includes(sectionIdx) && (
                  <div className="px-6 pb-4">
                    <table className="w-full text-left border-t mt-2">
                      <thead>
                        <tr className="text-gray-700">
                          <th className="py-2">Question</th>
                          <th className="py-2">Difficulty</th>
                          <th className="py-2 text-center">Solved</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.problems.map((problem, problemIdx) => (
                          <tr
                            key={problem.question}
                            className="border-b last:border-b-0 hover:bg-gray-50"
                          >
                            <td className="py-2">{problem.question}</td>
                            <td
                              className={
                                'py-2 ' +
                                (problem.difficulty === 'Easy'
                                  ? 'text-green-600'
                                  : problem.difficulty === 'Medium'
                                  ? 'text-yellow-600'
                                  : 'text-red-600')
                              }
                            >
                              {problem.difficulty}
                            </td>
                            <td className="py-2 text-center">
                              <button
                                onClick={() => toggleSolved(sectionIdx, problemIdx)}
                                className="focus:outline-none"
                                aria-label="Toggle solved"
                              >
                                {problem.solved ? (
                                  <CheckSquare className="inline h-5 w-5 text-green-600" />
                                ) : (
                                  <Square className="inline h-5 w-5 text-gray-400" />
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DSASheet;
