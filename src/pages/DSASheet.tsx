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

    // Force light mode for this page
    React.useEffect(() => {
        document.body.classList.remove('dark');
        document.body.classList.add('bg-white');
        return () => {
            document.body.classList.remove('bg-white');
        };
    }, []);

    return (
        <>
            <TopNav onMenuClick={() => {}} sidebarOpen={false} />
            <div className="min-h-screen bg-white text-gray-900 px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-2">DSA Practice Problems</h1>
                {/* <p className="text-center text-gray-600 mb-8">
        <b>Note:</b> The provided code solutions in this section serve as hints or are solutions to similar problems from platforms like
        <a href="https://leetcode.com" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">LeetCode</a>,
        <a href="https://geeksforgeeks.org" className="text-green-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>, or
        <a href="https://hackerrank.com" className="text-yellow-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">HackerRank</a> ...
      </p> */}
                <div className="max-w-4xl mx-auto space-y-4 mt-10">
                    {demoData.map((section, idx) => (
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
                                            {section.problems.map((problem, pidx) => {
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
                                                            {problem.solved ? (
                                                                <CheckSquare className="inline h-5 w-5 text-green-600" />
                                                            ) : (
                                                                <Square className="inline h-5 w-5 text-gray-400" />
                                                            )}
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
                    ))}
                </div>
            </div>
        </>
    );
};

export default DSASheet; 