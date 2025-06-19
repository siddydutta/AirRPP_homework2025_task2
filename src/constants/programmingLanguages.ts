export const PROGRAMMING_LANGUAGES = [
  "C / C++",
  "C#", 
  "Go",
  "HTML / CSS",
  "Java / Kotlin",
  "JavaScript / TypeScript",
  "PHP",
  "Python",
  "Rust",
  "SQL (PL/SQL, T-SQL, or other programming extensions of SQL)",
  "Shell scripting languages (Bash, Shell, PowerShell, etc.)"
] as const;

export type ProgrammingLanguage = typeof PROGRAMMING_LANGUAGES[number];