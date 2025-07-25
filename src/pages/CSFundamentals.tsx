import React, { useState } from 'react';
import { BookOpen, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const coreSubjects = [
	{
		key: 'os',
		title: 'Operating Systems',
		description: 'Learn about process management, memory, scheduling, and more.',
		resources: [
			{ name: 'GeeksforGeeks OS', url: 'https://www.geeksforgeeks.org/operating-system/' },
			{ name: 'TutorialsPoint OS', url: 'https://www.tutorialspoint.com/operating_system/index.htm' },
		],
	},
	{
		key: 'dbms',
		title: 'Database Management Systems',
		description: 'Relational databases, SQL, normalization, and transactions.',
		resources: [
			{ name: 'GeeksforGeeks DBMS', url: 'https://www.geeksforgeeks.org/dbms/' },
			{ name: 'TutorialsPoint DBMS', url: 'https://www.tutorialspoint.com/dbms/index.htm' },
		],
	},
	{
		key: 'cn',
		title: 'Computer Networks',
		description: 'Networking layers, protocols, TCP/IP, and network security.',
		resources: [
			{ name: 'GeeksforGeeks CN', url: 'https://www.geeksforgeeks.org/computer-network-tutorials/' },
			{ name: 'TutorialsPoint CN', url: 'https://www.tutorialspoint.com/computer_network/index.htm' },
		],
	},
	{
		key: 'oop',
		title: 'Object Oriented Programming',
		description: 'OOP principles, design patterns, and coding examples.',
		resources: [
			{ name: 'JavaTpoint OOPs', url: 'https://www.javatpoint.com/java-oops-concepts' },
			{ name: 'GeeksforGeeks OOPs', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
		],
	},
];

const otherSections = [
	{
		key: 'system-design',
		title: 'System Design',
		description: 'Master system design concepts for scalable applications.',
		resources: [
			{ name: 'System Design Primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer' },
			{ name: 'InterviewBit System Design', url: 'https://www.interviewbit.com/system-design-interview-questions/' },
		],
	},
	{
		key: 'aptitude',
		title: 'Aptitude',
		description: 'Sharpen your aptitude skills for placement and interviews.',
		resources: [
			{ name: 'Indiabix Aptitude', url: 'https://www.indiabix.com/aptitude/questions-and-answers/' },
			{ name: 'GeeksforGeeks Aptitude', url: 'https://www.geeksforgeeks.org/aptitude-questions-and-answers/' },
		],
	},
];

const allSections = [
	...coreSubjects,
	...otherSections,
];

const sectionButtons = [
    { key: 'all', label: 'All' },
    { key: 'os', label: 'Operating Systems' },
    { key: 'dbms', label: 'DBMS' },
    { key: 'cn', label: 'Computer Networks' },
    { key: 'oop', label: 'OOP' },
    { key: 'system-design', label: 'System Design' },
    { key: 'aptitude', label: 'Aptitude' },
];

const CSFundamentals: React.FC = () => {
    const [search, setSearch] = useState('');
    const [showResources, setShowResources] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('all');
    const navigate = useNavigate();

    // Filter by section and search
    const filteredSections = allSections.filter(
        (section) =>
            (activeSection === 'all' || section.key === activeSection) &&
            (
                section.title.toLowerCase().includes(search.toLowerCase()) ||
                section.description.toLowerCase().includes(search.toLowerCase())
            )
    );

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back to Home Button */}
                <div className="mb-8 flex justify-start">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white text-blue-700 font-semibold rounded-lg px-4 py-2 hover:bg-blue-100 transition"
                    >
                        ← Back to Home
                    </button>
                </div>
                <h1 className="text-4xl font-bold text-white text-center mb-4">
                    CS Fundamentals 🚀
                </h1>
                <p className="text-lg text-gray-300 text-center mb-10">
                    All the core Computer Science subjects you need for interviews and real-world engineering: OS, DBMS, CN, OOP, System Design, Aptitude, and more.
                </p>
                {/* Section Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {sectionButtons.map((btn) => (
                        <button
                            key={btn.key}
                            className={`px-3 py-1 rounded font-semibold border text-sm transition min-w-[120px] ${
                                activeSection === btn.key
                                    ? 'bg-blue-700 text-white border-blue-700'
                                    : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-50'
                            }`}
                            onClick={() => setActiveSection(btn.key)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
                {/* Universal Search Bar */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search any section..."
                            className="w-full px-4 py-2 rounded-lg border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-blue-700" />
                    </div>
                </div>
                {/* All Sections Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {filteredSections.length === 0 ? (
                        <p className="text-center text-gray-400 col-span-2">No subjects found.</p>
                    ) : (
                        filteredSections.map((section) => (
                            <Card
                                key={section.key}
                                className="bg-gradient-to-br from-blue-700 to-teal-600 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <CardHeader className="pb-4">
                                    <div className="bg-blue-700 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
                                        <BookOpen className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-white text-sm leading-relaxed">{section.description}</p>
                                    <button
                                        className="flex items-center justify-center w-40 mx-auto bg-white text-blue-700 font-semibold rounded-lg mt-4 hover:bg-blue-100 transition"
                                        onClick={() => setShowResources(showResources === section.key ? null : section.key)}
                                    >
                                        <span>View Resources</span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </button>
                                    {showResources === section.key && (
                                        <div className="mt-4 text-left">
                                            <h3 className="text-blue-200 font-bold mb-2">Resources:</h3>
                                            <ul className="space-y-2">
                                                {section.resources.map((res, idx) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={res.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline text-blue-100 hover:text-blue-300"
                                                        >
                                                            {res.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CSFundamentals;

