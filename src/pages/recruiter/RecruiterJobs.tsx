import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Briefcase, Plus } from 'lucide-react';

export default function RecruiterJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched raw data:', data);
  
        const formattedJobs = data.recordset.map((job) => ({
          id: job.job_id,
          title: job.title,
          location: job.place,
          type: job.job_type
        }));
  
        console.log('Formatted jobs:', formattedJobs);
  
        setJobs(formattedJobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, []);
  
  

  return (
    <Layout title="Job Postings">
      <div className="space-y-6">
        <button className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create New Job Posting</span>
        </button>

        {loading ? (
          <p className="text-center text-gray-500">Loading job postings...</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.location}</p>
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
