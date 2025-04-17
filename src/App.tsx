// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import StudentChat from './pages/student/StudentChat.tsx';
import StudentHistory from './pages/student/StudentHistory.tsx';
import StudentSettings from './pages/student/StudentSettings.tsx';
import CollegeAdmin from './pages/college/CollegeAdmin.tsx';
import CollegeChat from './pages/college/CollegeChat.tsx';
import CollegeSettings from './pages/college/CollegeSettings.tsx';
import RecruiterJobs from './pages/recruiter/RecruiterJobs.tsx';
import RecruiterStudents from './pages/recruiter/RecruiterStudents.tsx';
import RecruiterChat from './pages/recruiter/RecruiterChat.tsx';
import RecruiterSettings from './pages/recruiter/RecruiterSettings.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import { Download } from 'lucide-react';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Public Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Student Routes */}
        <Route path="/student" element={<Navigate to="/student/chat" replace />} />
        <Route path="/student/chat" element={<StudentChat />} />
        <Route path="/student/jobs" element={<RecruiterJobs />} />
        <Route path="/student/history" element={<StudentHistory />} />
        <Route path="/student/settings" element={<StudentSettings />} />
        
        {/* College Routes */}
        <Route path="/college" element={<Navigate to="/college/admin" replace />} />
        <Route path="/college/admin" element={<CollegeAdmin />} />
        <Route path="/college/chat" element={<CollegeChat />} />
        <Route path="/college/settings" element={<CollegeSettings />} />
        
        {/* Recruiter Routes */}
        <Route path="/recruiter" element={<Navigate to="/recruiter/jobs" replace />} />
        <Route path="/recruiter/jobs" element={<RecruiterJobs />} />
        <Route path="/recruiter/users" element={<RecruiterStudents />} />
        <Route path="/recruiter/chat" element={<RecruiterChat />} />
        <Route path="/recruiter/settings" element={<RecruiterSettings />} />
      </Routes>
    </Router>
  );
}

export default App;