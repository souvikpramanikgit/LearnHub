import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckSquare, Square, Bookmark, BookmarkCheck, StickyNote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TopNav } from '@/components/TopNav';

const demoData = [
    {
        title: 'Basics of Programming',
        solved: 0,
        total: 3,
        problems: [
            { question: 'Say "Hello, World!" with c++ (for practice)', difficulty: 'Easy', solved: false },
            { question: 'Basic Data Types (for practice)', difficulty: 'Easy', solved: false },
            { question: 'Input and Output (for practice)', difficulty: 'Easy', solved: false },
        ],
    },
    {
        title: 'Arrays',
        solved: 1,
        total: 2,
        problems: [
            { question: 'Reverse an Array', difficulty: 'Easy', solved: true },
            { question: 'Find the Maximum Subarray Sum', difficulty: 'Medium', solved: false },
        ],
    },
    {
        title: 'Strings',
        solved: 0,
        total: 10,
        problems: [
            { question: 'Reverse a String', difficulty: 'Easy', solved: false },
            { question: 'Check for Palindrome', difficulty: 'Easy', solved: false },
            { question: 'Longest Common Prefix', difficulty: 'Medium', solved: false },
            { question: 'String to Integer (atoi)', difficulty: 'Medium', solved: false },
            { question: 'Group Anagrams', difficulty: 'Medium', solved: false },
            { question: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', solved: false },
            { question: 'Minimum Window Substring', difficulty: 'Hard', solved: false },
            { question: 'Wildcard Matching', difficulty: 'Hard', solved: false },
            { question: 'Regular Expression Matching', difficulty: 'Hard', solved: false },
            { question: 'Count and Say', difficulty: 'Easy', solved: false },
        ],
    },
];

const DSASheet = () => {
    const [openSections, setOpenSections] = useState<number[]>([]);
    // Bookmark state: { 'sectionIdx-problemIdx': true }
    const [bookmarks, setBookmarks] = useState<{ [key: string]: boolean }>(() => {
        const saved = localStorage.getItem('dsaBookmarks');
        return saved ? JSON.parse(saved) : {};
    });
    // Notes state: { 'sectionIdx-problemIdx': 'note text' }
    const [notes, setNotes] = useState<{ [key: string]: string }>(() => {
        const saved = localStorage.getItem('dsaNotes');
        return saved ? JSON.parse(saved) : {};
    });
    // Track which note editor is open
    const [openNote, setOpenNote] = useState<string | null>(null);
    const [noteDraft, setNoteDraft] = useState<string>('');
    // Add solved state: { 'sectionIdx-problemIdx': boolean }
    const [solved, setSolved] = useState<{ [key: string]: boolean }>(() => {
        const saved = localStorage.getItem('dsaSolved');
        if (saved) return JSON.parse(saved);
        // fallback to demoData initial solved state
        const initial: { [key: string]: boolean } = {};
        demoData.forEach((section, sIdx) => {
            section.problems.forEach((problem, pIdx) => {
                initial[`${sIdx}-${pIdx}`] = problem.solved;
            });
        });
        return initial;
    });
    // Filter state
    const [filter, setFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Bookmarked'>('All');
    // Search state
    const [search, setSearch] = useState('');
    // Topic filter state
    const sectionTitles = ['All Topics', ...demoData.map(s => s.title)];
    const [topic, setTopic] = useState('All Topics');
    const [showBookmarks, setShowBookmarks] = useState(false);

  // Load data from localStorage or use default
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setSections(stored ? JSON.parse(stored) : defaultData);
  }, []);

    // Handle bookmark toggle
    const handleBookmark = (sectionIdx: number, problemIdx: number) => {
        const key = `${sectionIdx}-${problemIdx}`;
        setBookmarks((prev) => {
            const updated = { ...prev, [key]: !prev[key] };
            localStorage.setItem('dsaBookmarks', JSON.stringify(updated));
            return updated;
        });
    };

    // Handle opening note editor
    const handleOpenNote = (sectionIdx: number, problemIdx: number) => {
        const key = `${sectionIdx}-${problemIdx}`;
        setOpenNote(key);
        setNoteDraft(notes[key] || '');
    };
    // Handle saving note
    const handleSaveNote = (sectionIdx: number, problemIdx: number) => {
        const key = `${sectionIdx}-${problemIdx}`;
        setNotes((prev) => {
            const updated = { ...prev, [key]: noteDraft };
            localStorage.setItem('dsaNotes', JSON.stringify(updated));
            return updated;
        });
        setOpenNote(null);
    };
    // Handle cancel note
    const handleCancelNote = () => {
        setOpenNote(null);
        setNoteDraft('');
    };

    const handleToggleSolved = (sectionIdx: number, problemIdx: number) => {
        const key = `${sectionIdx}-${problemIdx}`;
        setSolved(prev => {
            const updated = { ...prev, [key]: !prev[key] };
            localStorage.setItem('dsaSolved', JSON.stringify(updated));
            return updated;
        });
    };

    // Force light mode for this page
    React.useEffect(() => {
        document.body.classList.remove('dark');
        document.body.classList.add('bg-white');
        return () => {
            document.body.classList.remove('bg-white');
        };
    }, []);

    // Calculate stats
    const stats = { Easy: { solved: 0, total: 0 }, Medium: { solved: 0, total: 0 }, Hard: { solved: 0, total: 0 } };
    demoData.forEach((section, sIdx) => {
        section.problems.forEach((problem, pIdx) => {
            const key = `${sIdx}-${pIdx}`;
            const diff = problem.difficulty;
            if (stats[diff]) {
                stats[diff].total++;
                if (solved[key]) stats[diff].solved++;
            }
        });
    });

    // Helper: Get all bookmarked problems grouped by section
    const bookmarkedBySection = demoData.map((section, idx) => {
        const problems = section.problems
            .map((problem, pidx) => ({ ...problem, _sectionIdx: idx, _problemIdx: pidx }))
            .filter((_, pidx) => bookmarks[`${idx}-${pidx}`]);
        return { title: section.title, problems };
    }).filter(s => s.problems.length > 0);

    return (
        <>
            <TopNav onMenuClick={() => {}} sidebarOpen={false} />
            <div className="min-h-screen bg-white text-gray-900 px-4 py-8 flex flex-row gap-8 max-w-7xl mx-auto">
                {/* Stats Sidebar */}
                <aside className="w-80 flex-shrink-0">
                    <div className="sticky top-20 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6">
                        <h2 className="text-3xl font-bold mb-6 text-center text-white">Stats</h2>
                        {/* Easy */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-green-400 text-lg">Easy</span>
                                <span className="text-white text-lg">{stats.Easy.solved} / {stats.Easy.total}</span>
                            </div>
                            <div className="w-full h-3 bg-gray-700 rounded-full">
                                <div
                                    className="h-3 rounded-full bg-green-400 transition-all"
                                    style={{ width: `${stats.Easy.total ? (stats.Easy.solved / stats.Easy.total) * 100 : 0}%` }}
                                />
                            </div>
                        </div>
                        {/* Medium */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-yellow-400 text-lg">Medium</span>
                                <span className="text-white text-lg">{stats.Medium.solved} / {stats.Medium.total}</span>
                            </div>
                            <div className="w-full h-3 bg-gray-700 rounded-full">
                                <div
                                    className="h-3 rounded-full bg-yellow-400 transition-all"
                                    style={{ width: `${stats.Medium.total ? (stats.Medium.solved / stats.Medium.total) * 100 : 0}%` }}
                                />
                            </div>
                        </div>
                        {/* Hard */}
                        <div className="mb-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-red-400 text-lg">Hard</span>
                                <span className="text-white text-lg">{stats.Hard.solved} / {stats.Hard.total}</span>
                            </div>
                            <div className="w-full h-3 bg-gray-700 rounded-full">
                                <div
                                    className="h-3 rounded-full bg-red-400 transition-all"
                                    style={{ width: `${stats.Hard.total ? (stats.Hard.solved / stats.Hard.total) * 100 : 0}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </aside>
                {/* Main Content */}
                <main className="flex-1 overflow-x-auto">
                    <h1 className="text-4xl font-bold text-center mb-2 bg-white sticky top-20 z-30">DSA Practice Problems</h1>
                    {/* Search and Filter UI */}
                    <div className="flex flex-row items-center gap-4 mt-6 mb-4 sticky top-36 z-20 bg-white py-2 rounded justify-center">
                        {/* Search Input */}
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search all problems..."
                            className="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-base"
                        />
                        {/* Topic Dropdown */}
                        <select
                            value={topic}
                            onChange={e => { setTopic(e.target.value); setShowBookmarks(false); }}
                            className="px-4 py-2 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white shadow-sm"
                        >
                            {sectionTitles.map(title => (
                                <option key={title} value={title}>{title}</option>
                            ))}
                        </select>
                        {/* Difficulty Dropdown */}
                        <select
                            value={filter}
                            onChange={e => setFilter(e.target.value as 'All' | 'Easy' | 'Medium' | 'Hard')}
                            className="px-4 py-2 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white shadow-sm"
                        >
                            <option value="All">All Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        {/* Bookmarks Button */}
                        <button
                            className={`px-4 py-2 rounded-lg font-semibold border text-base transition focus:outline-none ${showBookmarks ? 'bg-blue-100 text-blue-700 border-blue-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                            onClick={() => setShowBookmarks(true)}
                        >
                            Bookmarks
                        </button>
                    </div>
                    {/* Main Problems List (unchanged design) */}
                    <div className="max-w-4xl mx-auto space-y-4 mt-10 pt-20" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                        {showBookmarks ? (
                            // Show only bookmarked problems, grouped by section
                            bookmarkedBySection.length === 0 ? (
                                <div className="text-center text-gray-500">No bookmarked problems yet.</div>
                            ) : (
                                bookmarkedBySection.map((section) => (
                                    <div key={section.title} className="border rounded-lg bg-blue-50 shadow">
                                        <div className="px-6 py-2 font-semibold text-blue-900">{section.title}</div>
                                        <div className="px-6 pb-4">
                                            <table className="w-full text-left border-t mt-2">
                                                <thead>
                                                    <tr className="text-gray-700">
                                                        <th className="py-2">Question</th>
                                                        <th className="py-2">Difficulty</th>
                                                        <th className="py-2">Solved</th>
                                                        <th className="py-2">Bookmark</th>
                                                        <th className="py-2">Notes</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {section.problems.map((problem) => {
                                                        const key = `${problem._sectionIdx}-${problem._problemIdx}`;
                                                        return (
                                                            <tr key={problem.question} className="border-b last:border-b-0">
                                                                <td className="py-2">{problem.question}</td>
                                                                <td className={
                                                                    'py-2 ' +
                                                                    (problem.difficulty === 'Easy'
                                                                        ? 'text-green-600'
                                                                        : problem.difficulty === 'Medium'
                                                                            ? 'text-yellow-600'
                                                                            : 'text-red-600')
                                                                }>
                                                                    {problem.difficulty}
                                                                </td>
                                                                <td className="py-2 text-center">
                                                                    <button
                                                                        aria-label={solved[key] ? 'Mark as Unsolved' : 'Mark as Solved'}
                                                                        onClick={() => handleToggleSolved(problem._sectionIdx, problem._problemIdx)}
                                                                        className="focus:outline-none"
                                                                    >
                                                                        {solved[key] ? (
                                                                            <CheckSquare className="inline h-5 w-5 text-green-600" />
                                                                        ) : (
                                                                            <Square className="inline h-5 w-5 text-gray-400" />
                                                                        )}
                                                                    </button>
                                                                </td>
                                                                <td className="py-2 text-center">
                                                                    <button
                                                                        aria-label={bookmarks[key] ? 'Remove Bookmark' : 'Add Bookmark'}
                                                                        onClick={() => handleBookmark(problem._sectionIdx, problem._problemIdx)}
                                                                        className="focus:outline-none"
                                                                    >
                                                                        {bookmarks[key] ? (
                                                                            <BookmarkCheck className="inline h-5 w-5 text-blue-600" />
                                                                        ) : (
                                                                            <Bookmark className="inline h-5 w-5 text-gray-400" />
                                                                        )}
                                                                    </button>
                                                                </td>
                                                                <td className="py-2 text-center relative">
                                                                    <button
                                                                        aria-label="Add/Edit Note"
                                                                        onClick={() => handleOpenNote(problem._sectionIdx, problem._problemIdx)}
                                                                        className="focus:outline-none mr-2"
                                                                    >
                                                                        <StickyNote className={notes[key] ? 'inline h-5 w-5 text-yellow-500' : 'inline h-5 w-5 text-gray-400'} />
                                                                    </button>
                                                                    {/* Inline note editor popover */}
                                                                    {openNote === key && (
                                                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                                                                            <div className="w-[38rem] bg-white border border-gray-400 rounded-xl shadow-2xl p-8 flex flex-col items-stretch">
                                                                                <textarea
                                                                                    className="w-full border border-gray-300 rounded-md p-4 text-gray-900 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                                                    rows={8}
                                                                                    maxLength={600}
                                                                                    value={noteDraft}
                                                                                    onChange={e => setNoteDraft(e.target.value)}
                                                                                    placeholder="Write your note here..."
                                                                                    style={{ minHeight: '160px', maxHeight: '320px' }}
                                                                                />
                                                                                <div className="flex gap-4 mt-6 justify-end">
                                                                                    <button
                                                                                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold text-base transition"
                                                                                        onClick={() => handleSaveNote(problem._sectionIdx, problem._problemIdx)}
                                                                                    >Save</button>
                                                                                    <button
                                                                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded font-semibold text-base transition"
                                                                                        onClick={handleCancelNote}
                                                                                    >Cancel</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            // Original sectioned problems list
                            demoData
                                .filter((section) => topic === 'All Topics' || section.title === topic)
                                .map((section, idx) => {
                                    let filteredProblems = section.problems;
                                    if (filter !== 'All') {
                                        filteredProblems = filteredProblems.filter(p => p.difficulty === filter);
                                    }
                                    if (search.trim()) {
                                        filteredProblems = filteredProblems.filter(p => p.question.toLowerCase().includes(search.trim().toLowerCase()));
                                    }
                                    if (filteredProblems.length === 0) return null;
                                    return (
                        <div key={section.title} className="border rounded-lg bg-white shadow">
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none"
                                onClick={() => toggleSection(idx)}
                            >
                                <span>{section.title}</span>
                                <span className="flex items-center space-x-2">
                                    <span className="text-green-600 font-medium">
                                        {section.solved} / {section.total} solved
                                    </span>
                                    {openSections.includes(idx) ? (
                                        <ChevronUp className="h-5 w-5" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5" />
                                    )}
                                </span>
                            </button>
                            {openSections.includes(idx) && (
                                <div className="px-6 pb-4">
                                    <table className="w-full text-left border-t mt-2">
                                        <thead>
                                            <tr className="text-gray-700">
                                                <th className="py-2">Question</th>
                                                <th className="py-2">Difficulty</th>
                                                <th className="py-2">Solved</th>
                                                                <th className="py-2">Bookmark</th>
                                                                <th className="py-2">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                            {filteredProblems.map((problem, pidx) => {
                                                                const key = `${idx}-${pidx}`;
                                                                return (
                                                <tr key={problem.question} className="border-b last:border-b-0">
                                                    <td className="py-2">{problem.question}</td>
                                                    <td className={
                                                        'py-2 ' +
                                                        (problem.difficulty === 'Easy'
                                                            ? 'text-green-600'
                                                            : problem.difficulty === 'Medium'
                                                                ? 'text-yellow-600'
                                                                : 'text-red-600')
                                                    }>
                                                        {problem.difficulty}
                                                    </td>
                                                    <td className="py-2 text-center">
                                                                            <button
                                                                                aria-label={solved[key] ? 'Mark as Unsolved' : 'Mark as Solved'}
                                                                                onClick={() => handleToggleSolved(idx, pidx)}
                                                                                className="focus:outline-none"
                                                                            >
                                                                                {solved[key] ? (
                                                            <CheckSquare className="inline h-5 w-5 text-green-600" />
                                                        ) : (
                                                            <Square className="inline h-5 w-5 text-gray-400" />
                                                                                )}
                                                                            </button>
                                                                        </td>
                                                                        <td className="py-2 text-center">
                                                                            <button
                                                                                aria-label={bookmarks[key] ? 'Remove Bookmark' : 'Add Bookmark'}
                                                                                onClick={() => handleBookmark(idx, pidx)}
                                                                                className="focus:outline-none"
                                                                            >
                                                                                {bookmarks[key] ? (
                                                                                    <BookmarkCheck className="inline h-5 w-5 text-blue-600" />
                                                                                ) : (
                                                                                    <Bookmark className="inline h-5 w-5 text-gray-400" />
                                                                                )}
                                                                            </button>
                                                                        </td>
                                                                        <td className="py-2 text-center relative">
                                                                            <button
                                                                                aria-label="Add/Edit Note"
                                                                                onClick={() => handleOpenNote(idx, pidx)}
                                                                                className="focus:outline-none mr-2"
                                                                            >
                                                                                <StickyNote className={notes[key] ? 'inline h-5 w-5 text-yellow-500' : 'inline h-5 w-5 text-gray-400'} />
                                                                            </button>
                                                                            {/* Inline note editor popover */}
                                                                            {openNote === key && (
                                                                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                                                                                    <div className="w-[38rem] bg-white border border-gray-400 rounded-xl shadow-2xl p-8 flex flex-col items-stretch">
                                                                                        <textarea
                                                                                            className="w-full border border-gray-300 rounded-md p-4 text-gray-900 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                                                            rows={8}
                                                                                            maxLength={600}
                                                                                            value={noteDraft}
                                                                                            onChange={e => setNoteDraft(e.target.value)}
                                                                                            placeholder="Write your note here..."
                                                                                            style={{ minHeight: '160px', maxHeight: '320px' }}
                                                                                        />
                                                                                        <div className="flex gap-4 mt-6 justify-end">
                                                                                            <button
                                                                                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold text-base transition"
                                                                                                onClick={() => handleSaveNote(idx, pidx)}
                                                                                            >Save</button>
                                                                                            <button
                                                                                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded font-semibold text-base transition"
                                                                                                onClick={handleCancelNote}
                                                                                            >Cancel</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                        )}
                                                    </td>
                                                </tr>
                                                                );
                                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                                    );
                                })
                        )}
                </div>
                </main>
            </div>
        </>
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
