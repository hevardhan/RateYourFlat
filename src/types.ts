export type UserType = 'student' | 'college' | 'recruiter';

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'bot';
  attachments?: string[];
}

export interface Student {
  id: string;
  name: string;
  gpa: number;
  githubLink: string;
  linkedinLink: string;
  resumeLink: string;
  college: string;
}