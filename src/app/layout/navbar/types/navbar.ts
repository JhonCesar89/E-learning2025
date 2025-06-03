// Valid course names. This use in courses.ts
export type CourseName = 
  | 'UX Design' 
  | 'UI Design' 
  | 'Full Stack Developer' 
  | 'Scrum Master' 
  | 'Agile Coach';

// Structure for each nav link
export interface NavLink {
  label: string;
  path: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

// Props for the Navbar component
export interface NavbarProps {
  links: NavLink[];
  brand?: string;
}

// Props for the container layout (topbar or sidebar)
export interface NavbarContainerProps {
  layoutMode?: 'sidebar' | 'topbar';
}

// Handlers and state for the NavbarContainer. Use in navbarActions.ts
export interface SearchHandlers {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  coursesFiltered: string[];
  setCoursesFiltered: (courses: string[]) => void;
  navigate: (path: string) => void;
}