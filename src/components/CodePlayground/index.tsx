import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Save, Download, Share2, RotateCcw } from 'lucide-react';
import './CodePlayground.css';

interface CodePlaygroundProps {
  defaultCode?: {
    html: string;
    css: string;
    js: string;
  };
  title?: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ 
  defaultCode = {
    html: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Web Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>Welcome to LearnHub Code Playground</p>\n</body>\n</html>',
    css: 'body {\n  font-family: Arial, sans-serif;\n  margin: 40px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}',
    js: '// Add your JavaScript here\nconsole.log("Hello from LearnHub!");\n\ndocument.addEventListener("DOMContentLoaded", function() {\n  console.log("Page loaded successfully!");\n});'
  },
  title = "Interactive Code Playground"
}) => {
  const [code, setCode] = useState(defaultCode);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Generate the complete HTML document with embedded CSS and JS
  const generateOutput = () => {
    const fullHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnHub Playground</title>
    <style>
        ${code.css}
    </style>
</head>
<body>
    ${code.html}
    <script>
        ${code.js}
    </script>
</body>
</html>`;
    return fullHTML;
  };

  // Update output when code changes
  useEffect(() => {
    const html = generateOutput();
    setOutput(html);
  }, [code]);

  // Run the code
  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 100);
  };

  // Save code to localStorage
  const saveCode = () => {
    const projectData = {
      code,
      timestamp: new Date().toISOString(),
      title: title
    };
    localStorage.setItem('learnhub-playground', JSON.stringify(projectData));
    alert('Code saved successfully!');
  };

  // Load code from localStorage
  const loadCode = () => {
    const saved = localStorage.getItem('learnhub-playground');
    if (saved) {
      const projectData = JSON.parse(saved);
      setCode(projectData.code);
      alert('Code loaded successfully!');
    } else {
      alert('No saved code found!');
    }
  };

  // Download the code as HTML file
  const downloadCode = () => {
    const html = generateOutput();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'learnhub-project.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Share code (copy to clipboard)
  const shareCode = async () => {
    const shareText = `HTML:\n${code.html}\n\nCSS:\n${code.css}\n\nJavaScript:\n${code.js}`;
    try {
      await navigator.clipboard.writeText(shareText);
      alert('Code copied to clipboard!');
    } catch (err) {
      alert('Failed to copy code. Please copy manually.');
    }
  };

  // Reset code to default
  const resetCode = () => {
    if (confirm('Are you sure you want to reset the code?')) {
      setCode(defaultCode);
    }
  };

  return (
    <div className="code-playground">
      <div className="playground-header">
        <h2>{title}</h2>
        <div className="playground-controls">
          <button onClick={runCode} className="control-btn run-btn" disabled={isRunning}>
            <Play size={16} />
            {isRunning ? 'Running...' : 'Run'}
          </button>
          <button onClick={saveCode} className="control-btn">
            <Save size={16} />
            Save
          </button>
          <button onClick={loadCode} className="control-btn">
            <RotateCcw size={16} />
            Load
          </button>
          <button onClick={downloadCode} className="control-btn">
            <Download size={16} />
            Download
          </button>
          <button onClick={shareCode} className="control-btn">
            <Share2 size={16} />
            Share
          </button>
          <button onClick={resetCode} className="control-btn reset-btn">
            Reset
          </button>
        </div>
      </div>

      <div className="playground-content">
        <div className="editor-section">
          <div className="editor-tabs">
            <button 
              className={`tab-btn ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
            <button 
              className={`tab-btn ${activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'js' ? 'active' : ''}`}
              onClick={() => setActiveTab('js')}
            >
              JavaScript
            </button>
          </div>
          
          <div className="editor-container">
            <Editor
              height="400px"
              language={activeTab === 'html' ? 'html' : activeTab === 'css' ? 'css' : 'javascript'}
              value={code[activeTab]}
              onChange={(value) => setCode(prev => ({ ...prev, [activeTab]: value || '' }))}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                folding: true,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible'
                }
              }}
            />
          </div>
        </div>

        <div className="preview-section">
          <div className="preview-header">
            <h3>Live Preview</h3>
            <button onClick={runCode} className="preview-run-btn" disabled={isRunning}>
              <Play size={14} />
              Refresh
            </button>
          </div>
          <div className="preview-container">
            <iframe
              srcDoc={output}
              title="Code Preview"
              className="preview-frame"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground; 