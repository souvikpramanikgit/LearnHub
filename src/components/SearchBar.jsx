import React, { useState, useEffect, useMemo } from 'react';
import styles from './SearchBar.module.css';
import { Search, X } from 'lucide-react';

const SearchBar = ({ courses, onSearch }) => {
  const [query, setQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const allKeywords = useMemo(() => {
    const keywords = new Set();
    courses.forEach(course => {
      keywords.add(course.title);
      keywords.add(course.level);
      // Add more keywords from course data if needed
    });
    return Array.from(keywords);
  }, [courses]);

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = courses.filter(
        course => 
          course.title.toLowerCase().includes(lowercasedQuery) ||
          course.description.toLowerCase().includes(lowercasedQuery) ||
          course.level.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]);
    }
    onSearch(query);
  }, [query, courses, onSearch]);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} // delay to allow click
          placeholder="Search courses, topics, or keywords..."
          className={styles.input}
        />
        {query && <X className={styles.clearIcon} onClick={handleClear} />}
      </div>
      {isFocused && query && filteredCourses.length > 0 && (
        <div className={styles.resultsDropdown}>
          {filteredCourses.map(course => (
            <a href={`/docs/category/${course.id}`} key={course.id} className={styles.resultItem}>
              <div className={styles.resultTitle}>{course.title}</div>
              <div className={styles.resultDescription}>{course.description}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
