import courses from '../data/courses';
import { ChangeEvent, KeyboardEvent } from 'react';
import { SearchHandlers } from '../types/navbar';

export const handleSearch = ({ searchTerm, setCoursesFiltered }: SearchHandlers) => {
  if (searchTerm.trim()) {
    const filtered = courses.filter(course =>
      course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCoursesFiltered(filtered);
  } else {
    setCoursesFiltered([]);
  }
};

export const handleSearchChange = (
  e: ChangeEvent<HTMLInputElement>,
  setSearchTerm: (value: string) => void
) => {
  setSearchTerm(e.target.value);
};

export const handleKeyDown = (
  e: KeyboardEvent<HTMLInputElement>,
  handlers: SearchHandlers
) => {
  if (e.key === 'Enter') handleSearch(handlers);
};

export const handleResultClick = (
  courseName: string,
  setSearchTerm: (value: string) => void,
  setCoursesFiltered: (courses: string[]) => void,
  navigate: (path: string) => void
) => {
  setSearchTerm('');
  setCoursesFiltered([]);
  navigate(`/${courseName.toLowerCase().replace(/\s+/g, '-')}`);
};