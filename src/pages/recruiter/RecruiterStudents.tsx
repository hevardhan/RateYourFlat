import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Download } from 'lucide-react';
import { Student } from '../../types';

export default function RecruiterStudents() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/students')
      .then((res) => res.json())
      .then((data) => {
        const studentsFromApi = data.recordset.map((student: any) => ({
          id: student.student_id.toString(),
          name: student.name,
          college: student.college,
          gpa: student.gpa,
          githubLink: student.github_link,
          linkedinLink: student.linkedin_link,
          resumeLink: student.resume_link
        }));
        setStudents(studentsFromApi);
      })
      .catch((err) => console.error('Failed to fetch students:', err));
  }, []);

  return (
    <Layout title="Student Directory">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.college}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.gpa}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <a href={student.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
                      <a href={student.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={student.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
