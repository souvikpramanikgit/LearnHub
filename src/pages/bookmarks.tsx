import { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';

import { notesMeta as webdNotes } from '../../docs/notes/web-dev.mdx';
import { notesMeta as dsaNotes } from '../../docs/notes/dsa.mdx';
import { notesMeta as genaiNotes } from '../../docs/notes/gen-ai.mdx';
import { notesMeta as devopsNotes } from '../../docs/notes/devops.mdx';
import { notesMeta as blockchainNotes } from '../../docs/notes/blockchain.mdx';

import '../css/bookmarks.css';

interface Note {
  id: string;
  title: string;
  subject: string;
  pdf: string;
}

export default function Bookmarks() {
  const [bookmarkedNotes, setBookmarkedNotes] = useState<Note[]>([]);
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);

  useEffect(() => {
    const allNotes: Note[] = [
      ...webdNotes,
      ...dsaNotes,
      ...genaiNotes,
      ...devopsNotes,
      ...blockchainNotes,
    ];

    const bookmarks = allNotes.filter(
      (note) => localStorage.getItem(`bookmark-${note.id}`) === 'true'
    );
    setBookmarkedNotes(bookmarks);
  }, []);

  const grouped: Record<string, Note[]> = {};
  bookmarkedNotes.forEach((note) => {
    if (!grouped[note.subject]) grouped[note.subject] = [];
    grouped[note.subject].push(note);
  });

  const toggleSubject = (subject: string) => {
    setExpandedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  return (
    <Layout title="Bookmarks" description="Your bookmarked notes">
      <div className="bookmarks-container">
        <h1 className="bookmarks-title">📑 Your Bookmarked Notes</h1>

        {Object.keys(grouped).length === 0 && (
          <p className="empty-message">
            You haven't bookmarked any notes yet.
          </p>
        )}

        {Object.entries(grouped).map(([subject, notes]) => (
          <motion.div
            key={subject}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="subject-card"
          >
            <motion.button
              onClick={() => toggleSubject(subject)}
              whileHover={{ scale: 1.02 }}
              className="subject-header"
            >
              {subject} <span>{expandedSubjects.includes(subject) ? '−' : '+'}</span>
            </motion.button>

            {expandedSubjects.includes(subject) && (
              <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="notes-scroll">
                {notes.map((note) => (
                  <motion.div
                    key={note.id}
                    whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
                    className="note-card"
                  >
                    <h3 className="note-title">{note.title}</h3>
                    <p className="note-subject">{note.subject}</p>
                    <a href={note.pdf} download className="download-btn">
                      📥 Download PDF
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
