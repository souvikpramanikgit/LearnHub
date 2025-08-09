import React, { useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import parse from "html-react-parser";
import { Highlight, themes } from "prism-react-renderer";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  codeSnippet?: {
    code: string;
    language?: string;
  };
};

const CodeBlock = ({
  code,
  language = "javascript",
  isDarkTheme,
}: {
  code: string;
  language?: string;
  isDarkTheme: boolean;
}) => (
  <Highlight
    theme={isDarkTheme ? themes.vsDark : themes.github}
    code={code.trim()}
    language={language as any}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <div
        style={{
          position: "relative",
          margin: "12px 0",
          borderRadius: "8px",
          overflow: "hidden",
          border: `1px solid ${isDarkTheme ? "#444" : "#e1e4e8"}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "12px",
            backgroundColor: isDarkTheme
              ? "rgba(0,0,0,0.5)"
              : "rgba(255,255,255,0.8)",
            color: isDarkTheme ? "#ccc" : "#666",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "500",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          {language}
        </div>

        <pre
          className={className}
          style={{
            ...style,
            margin: 0,
            padding: "16px",
            fontSize: "14px",
            lineHeight: "1.5",
            overflow: "auto",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      </div>
    )}
  </Highlight>
);

export const Quiz = ({ questions }: { questions: Question[] }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

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
    if (score === 1) return "green";
    if (score >= 0.6) return "orange";
    return "red";
  };

  return (
    <div
      style={{
        background: isDarkTheme ? "#1e1e1e" : "#ffffff",
        color: isDarkTheme ? "#f0f0f0" : "#111",
        padding: "1.5rem",
        borderRadius: 12,
        marginTop: 40,
        boxShadow: isDarkTheme
          ? "0 4px 20px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        border: `1px solid ${isDarkTheme ? "#333" : "#e0e0e0"}`,
        maxWidth: 800,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {questions.map((q, index) => (
        <div
          key={q.id}
          style={{
            marginBottom: 32,
            paddingBottom: 16,
            borderBottom: `1px solid ${isDarkTheme ? "#444" : "#ddd"}`,
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            {index + 1}. {parse(q.question)}
          </p>

          {q.codeSnippet && (
            <CodeBlock
              code={q.codeSnippet.code}
              language={q.codeSnippet.language}
              isDarkTheme={isDarkTheme}
            />
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {q.options.map((option) => {
              const isSelected = answers[q.id] === option;
              const isCorrect = submitted && option === q.correctAnswer;
              const isIncorrect =
                submitted && isSelected && option !== q.correctAnswer;

              return (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: isCorrect
                      ? "#28a74533"
                      : isIncorrect
                      ? "#dc354533"
                      : isSelected
                      ? isDarkTheme
                        ? "#333"
                        : "#f3f4f6"
                      : isDarkTheme
                      ? "#2a2a2a"
                      : "#fafafa",
                    border: `1px solid ${
                      isSelected
                        ? isDarkTheme
                          ? "#aaa"
                          : "#666"
                        : isDarkTheme
                        ? "#444"
                        : "#ccc"
                    }`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    cursor: submitted ? "default" : "pointer",
                    fontWeight: isSelected ? 600 : 400,
                    color: isDarkTheme ? "#f5f5f5" : "#111",
                    lineHeight: "normal",
                  }}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    disabled={submitted}
                    checked={isSelected}
                    onChange={() => handleChange(q.id, option)}
                    style={{
                      marginRight: 10,
                      accentColor: isDarkTheme ? "#90cdf4" : "#4f46e5",
                    }}
                  />
                  <span
                    style={{
                      fontFamily:
                        option.includes("`") ||
                        option.includes("function") ||
                        option.includes("var") ||
                        option.includes("let") ||
                        option.includes("const")
                          ? "Consolas, Monaco, 'Courier New', monospace"
                          : "inherit",
                    }}
                  >
                    {parse(option)}
                  </span>
                </label>
              );
            })}
          </div>
          {submitted && q.explanation && (
            <div
              style={{
                marginTop: 12,
                padding: "12px",
                backgroundColor: isDarkTheme ? "#2a2a2a" : "#f8f9fa",
                borderRadius: "8px",
                border: `1px solid ${isDarkTheme ? "#444" : "#e1e4e8"}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: isDarkTheme ? "#bbb" : "#555",
                }}
              >
                💡 {parse(q.explanation)}
              </p>
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          style={{
            padding: "12px 24px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Submit Quiz
        </button>
      ) : (
        <div style={{ marginTop: 20 }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              color: getScoreColor(),
            }}
          >
            🎉 You scored {correctCount} out of {questions.length}
          </p>
          <button
            onClick={handleReset}
            style={{
              marginTop: 10,
              padding: "10px 18px",
              background: isDarkTheme ? "#555" : "#e2e8f0",
              color: isDarkTheme ? "#fff" : "#000",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};
