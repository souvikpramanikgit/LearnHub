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
        total: 14,
        problems: [
            { question: 'Reverse an Array', difficulty: 'Easy', solved: true },
            { question: 'Two Sum - Pairs with 0 sum', difficulty: 'Easy', solved: false },
            { question: 'Remove Duplicates from sorted array', difficulty: 'Easy', solved: false },
            { question: 'Left Rotate an array by D places', difficulty: 'Easy', solved: false },
            { question: 'Maximum Consecutive Ones', difficulty: 'Easy', solved: false },
            { question: 'Find the Maximum Subarray Sum', difficulty: 'Medium', solved: false },
            { question: 'Find the number that appears once and other twice', difficulty: 'Medium', solved: false },
            { question: "Sort an array of 0's 1's and 2's", difficulty: 'Medium', solved: false },
            { question: "Next Permutation", difficulty: 'Medium', solved: false },
            { question: "Count Inversions", difficulty: 'Medium', solved: false },
            { question: "Spirally traversing a matrix", difficulty: 'Medium', solved: false },
            { question: "Find the repeating and missing number", difficulty: 'Hard', solved: false },
            { question: "Count number of subarrays with given xor K", difficulty: 'Hard', solved: false },
            { question: "4 Sum Problem", difficulty: 'Hard', solved: false },
        ],
    },
    {
        title: 'Strings',
        solved: 0,
        total: 11,
        problems: [
            { question: 'Reverse a String', difficulty: 'Easy', solved: false },
            { question: 'Check for Palindrome', difficulty: 'Easy', solved: false },
            { question: 'Sort Characters by frequency', difficulty: 'Easy', solved: false },
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
    {
       title: 'Recursion',
        solved: 0,
        total: 10, 
        problems:[
             { question: 'Reverse a stack using recursion', difficulty: 'Easy', solved: false },
             { question: 'Count Good numbers', difficulty: 'Easy', solved: false },
             { question: 'Letter Combinations of a Phone number', difficulty: 'Medium', solved: false },
             { question: 'Combination Sum', difficulty: 'Medium', solved: false },
             { question: 'Check if there exists a subsequence with sum K', difficulty: 'Medium', solved: false },
             { question: 'Print all subsequences/Power Set', difficulty: 'Medium', solved: false },
             { question: 'Word Search', difficulty: 'Medium', solved: false },
             { question: 'Count all subsequences with sum K', difficulty: 'Hard', solved: false },
             { question: 'Expression Add Operators', difficulty: 'Hard', solved: false },
             { question: 'N Queen', difficulty: 'Hard', solved: false },

        ],

    },
    {
       title: 'Hash',
        solved: 0,
        total: 8, 
        problems:[
             { question: 'Frequencies in a Limited Array', difficulty: 'Easy', solved: false },
             { question: 'Non Repeating Character', difficulty: 'Easy', solved: false },
             { question: 'Longest Substring with K Unique ', difficulty: 'Medium', solved: false },
             { question: 'Zero Sum Subarrays', difficulty: 'Medium', solved: false },
             { question: 'Smallest distinct window', difficulty: 'Medium', solved: false },
             { question: 'Longest subarray with sum divisible by K', difficulty: 'Medium', solved: false },
             { question: 'Smallest window containing all characters of a string', difficulty: 'Hard', solved: false },
             { question: 'Minimum operations to convert Array A to B', difficulty: 'Hard', solved: false },

        ],

    },
    {
       title: 'Linked List',
        solved: 0,
        total: 10, 
        problems:[
             { question: 'Linked List Insertion At End', difficulty: 'Easy', solved: false },
             { question: 'Reverse a linked list', difficulty: 'Easy', solved: false },
             { question: 'Add Number Linked Lists', difficulty: 'Medium', solved: false },
             { question: 'Rotate a Linked List', difficulty: 'Medium', solved: false },
             { question: 'Check if there exists a subsequence with sum K', difficulty: 'Medium', solved: false },
             { question: 'Detect a loop in Linked List', difficulty: 'Medium', solved: false },
             { question: 'Delete the middle node of LL', difficulty: 'Medium', solved: false },
             { question: 'Reverse LL in group of given size K', difficulty: 'Hard', solved: false },
             { question: 'Linked List Group Reverse', difficulty: 'Hard', solved: false },
             { question: 'Clone a Linked List with random and next pointer', difficulty: 'Hard', solved: false },

        ],

    },
    {
       title: 'Trees',
        solved: 0,
        total: 11, 
        problems:[
             { question: 'Left View of Binary Tree', difficulty: 'Easy', solved: false },
             { question: 'Right View of Binary Tree', difficulty: 'Easy', solved: false },
             { question: 'Balanced Tree Check', difficulty: 'Easy', solved: false },
             { question: 'Tree Boundary Traversal', difficulty: 'Medium', solved: false },
             { question: 'Vertical Tree Traversal', difficulty: 'Medium', solved: false },
             { question: 'Sum of nodes on the longest Path', difficulty: 'Medium', solved: false },
             { question: 'Isomorphic Trees', difficulty: 'Medium', solved: false },
             { question: 'Maximum path sum from any node', difficulty: 'Medium', solved: false },
             { question: 'Burning Tree', difficulty: 'Hard', solved: false },
             { question: 'Min distance between two given nodes in a Binary Tree', difficulty: 'Hard', solved: false },
             { question: 'Max Path Sum 2 Special Nodes', difficulty: 'Hard', solved: false },

        ],

    },
    {
       title: 'Graphs',
        solved: 0,
        total: 9, 
        problems:[
             { question: 'BFS of Graph', difficulty: 'Easy', solved: false },
             { question: 'DFS of Graph', difficulty: 'Easy', solved: false },
             { question: 'Number of provinces', difficulty: 'Medium', solved: false },
             { question: '0/1 Matrix (Bfs Problem)', difficulty: 'Medium', solved: false },
             { question: 'Dijkstra Algorithm', difficulty: 'Medium', solved: false },
             { question: 'Minimum Spanning Tree', difficulty: 'Medium', solved: false },
             { question: 'Bipartite Graph (DFS)', difficulty: 'Hard', solved: false },
             { question: 'Cycle Detection in Directed Graph (DFS)', difficulty: 'Hard', solved: false },
             { question: 'Surrounded Regions (dfs)', difficulty: 'Hard', solved: false },

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

    // Toggle section open/close
    const toggleSection = (idx: number) => {
        setOpenSections((prev) =>
            prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
        );
    };

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
            <TopNav onMenuClick={() => { }} sidebarOpen={false} />
            <div className="min-h-screen  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 flex flex-row gap-8 max-w-7xl mx-auto">
                {/* Stats Sidebar */}
                <aside className="w-80 flex-shrink-0">
                    <div className="sticky top-20 bg-gray-900 dark:bg-gray-800 border border-gray-800 dark:border-gray-700 rounded-2xl shadow-lg p-6">
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
                    <h1 className="text-4xl font-bold text-center mb-2 bg-white dark:bg-gray-900 sticky top-20 z-30">DSA Practice Problems</h1>
                    {/* Search and Filter UI */}
                    <div className="flex flex-row items-center gap-4 mt-6 mb-4 sticky top-36 z-20 bg-white dark:bg-gray-900 py-2 rounded justify-center">
                        {/* Search Input */}
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search all problems..."
                            className="w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-base text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        {/* Topic Dropdown */}
                        <select
                            value={topic}
                            onChange={e => { setTopic(e.target.value); setShowBookmarks(false); }}
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-gray-100"
                        >
                            {sectionTitles.map(title => (
                                <option key={title} value={title}>{title}</option>
                            ))}
                        </select>
                        {/* Difficulty Dropdown */}
                        <select
                            value={filter}
                            onChange={e => setFilter(e.target.value as 'All' | 'Easy' | 'Medium' | 'Hard')}
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-gray-100"
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
                    <div className="max-w-4xl mx-auto space-y-4 mt-10 pt-20 text-gray-900 dark:text-gray-100" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                        {showBookmarks ? (
                            // Show only bookmarked problems, grouped by section
                            bookmarkedBySection.length === 0 ? (
                                <div className="text-center text-gray-500 dark:text-gray-400">No bookmarked problems yet.</div>
                            ) : (
                                bookmarkedBySection.map((section) => (
                                    <div key={section.title} className="border rounded-lg dark:border-gray-700 bg-blue-50 dark:bg-gray-800 shadow">
                                        <div className="px-6 py-2 font-semibold text-blue-900 dark:text-blue-300">{section.title}</div>
                                        <div className="px-6 pb-4">
                                            <table className="w-full text-left border-t dark:border-gray-700 mt-2">
                                                <thead>
                                                    <tr className="text-gray-700 dark:border-gray-300">
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
                                                            <tr key={problem.question} className="border-b dark:border-gray-700  last:border-b-0">
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
                                                                            <Square className="inline h-5 w-5 text-gray-400 dark:text-gray-500" />
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
                                                                            <Bookmark className="inline h-5 w-5 text-gray-400 dark:text-gray-500" />
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
                                                                            <div className="w-[38rem] bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-xl shadow-2xl p-8 flex flex-col items-stretch">
                                                                                <textarea
                                                                                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-lg resize-none p-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                                                                                        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded font-semibold text-base transition"
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
                                        <div key={section.title} className="border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
                                            <button
                                                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none"
                                                onClick={() => toggleSection(idx)}
                                            >
                                                <span>{section.title}</span>
                                                <span className="flex items-center space-x-2">
                                                    <span className="text-green-600 dark:text-green-400  font-medium">
                                                        {section.solved} / {section.total} solved
                                                    </span>
                                                    {openSections.includes(idx) ? (
                                                        <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                                    )}
                                                </span>
                                            </button>
                                            {openSections.includes(idx) && (
                                                <div className="px-6 pb-4">
                                                    <table className="w-full text-left border-t mt-2 dark:border-gray-700">
                                                        <thead>
                                                            <tr className="text-gray-700 dark:text-gray-300">
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
                                                                    <tr key={problem.question} className="border-b last:border-b-0 dark:border-gray-700">
                                                                        <td className="py-2 text-gray-900 dark:text-gray-100">{problem.question}</td>
                                                                        <td className={
                                                                            'py-2 ' +
                                                                            (problem.difficulty === 'Easy'
                                                                                ? 'text-green-600 dark:text-green-400'
                                                                                : problem.difficulty === 'Medium'
                                                                                    ? 'text-yellow-600 dark:text-yellow-400'
                                                                                    : 'text-red-600 dark:text-red-400')
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
                                                                                    <CheckSquare className="inline h-5 w-5 text-green-600 dark:text-green-400" />
                                                                                ) : (
                                                                                    <Square className="inline h-5 w-5 text-gray-400 dark:text-gray-500" />
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
                                                                                    <div className="w-[38rem] bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-600 rounded-xl shadow-2xl p-8 flex flex-col items-stretch">
                                                                                        <textarea
                                                                                            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500"
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
                                                                                                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-6 py-2 rounded font-semibold text-base transition"
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

export default DSASheet;
