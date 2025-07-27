import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
};

export const Quiz = ({ questions }: { questions: Question[] }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const { colorMode } = useColorMode(); // <== this works
  const isDarkTheme = colorMode === 'dark';

  const handleChange = (id: string, selected: string) => {
    setAnswers((prev) => ({ ...prev, [id]: selected }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;

  const getScoreColor = () => {
    const score = correctCount / questions.length;
    if (score === 1) return 'green';
    if (score >= 0.6) return 'orange';
    return 'red';
  };

  return (
    <div
      style={{
        background: isDarkTheme ? '#1e1e1e' : '#ffffff',
        color: isDarkTheme ? '#f0f0f0' : '#111',
        padding: 24,
        borderRadius: 12,
        marginTop: 40,
        boxShadow: isDarkTheme
          ? '0 4px 20px rgba(0,0,0,0.4)'
          : '0 4px 20px rgba(0,0,0,0.08)',
        border: `1px solid ${isDarkTheme ? '#333' : '#e0e0e0'}`
      }}
    >
      {questions.map((q, index) => (
        <div
          key={q.id}
          style={{
            marginBottom: 24,
            borderBottom: `1px solid ${isDarkTheme ? '#444' : '#e0e0e0'}`,
            paddingBottom: 12
          }}
        >
          <p style={{ fontWeight: 'bold' }}>
            {index + 1}. {q.question}
          </p>
          {q.options.map((option) => {
            const isSelected = answers[q.id] === option;
            const isCorrect = submitted && option === q.correctAnswer;
            const isIncorrect =
              submitted && isSelected && option !== q.correctAnswer;

            return (
              <label
                key={option}
                style={{
                  display: 'block',
                  marginBottom: 6,
                  padding: '6px 12px',
                  borderRadius: 6,
                  cursor: submitted ? 'default' : 'pointer',
                  backgroundColor: isCorrect
                    ? '#28a74533'
                    : isIncorrect
                    ? '#dc354533'
                    : isSelected
                    ? isDarkTheme
                      ? '#333'
                      : '#e2e3e5'
                    : 'transparent',
                  border: isSelected
                    ? `1px solid ${isDarkTheme ? '#aaa' : '#888'}`
                    : '1px solid transparent',
                  fontWeight: isSelected ? 'bold' : 'normal',
                  color: isDarkTheme ? '#f5f5f5' : '#111'
                }}
              >
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  disabled={submitted}
                  checked={isSelected}
                  onChange={() => handleChange(q.id, option)}
                  style={{ marginRight: 8 }}
                />
                {option}
              </label>
            );
          })}

          {submitted && q.explanation && (
            <p style={{ marginTop: 6, fontStyle: 'italic', color: isDarkTheme ? '#ccc' : '#555' }}>
              💡 {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          style={{
            padding: '10px 20px',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          Submit Quiz
        </button>
      ) : (
        <div style={{ marginTop: 20 }}>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '1.1rem',
              color: getScoreColor()
            }}
          >
            🎉 You scored {correctCount} out of {questions.length}
          </p>
          <button
            onClick={handleReset}
            style={{
              marginTop: 10,
              padding: '8px 16px',
              background: isDarkTheme ? '#555' : '#e2e8f0',
              color: isDarkTheme ? '#fff' : '#000',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};
