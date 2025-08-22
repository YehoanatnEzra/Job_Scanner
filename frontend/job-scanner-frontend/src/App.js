
import React, { useState } from 'react';
import './App.css';

function App() {
  const [roles, setRoles] = useState('');
  const [levels, setLevels] = useState('');
  const [locations, setLocations] = useState('');
  const [sortBy, setSortBy] = useState('location');
  const [limit, setLimit] = useState(100);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roles: roles.split(',').map(r => r.trim()),
          levels: levels.split(',').map(l => l.trim()),
          locations: locations.split(',').map(loc => loc.trim()),
          sort_by: sortBy,
          limit: Number(limit)
        })
      });
      const data = await response.json();
      if (data.success === false) throw new Error(data.error || 'Unknown error');
      setResults(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="animated-bg"></div>
      <div className="content">
        <h1 className="title">Job Scanner</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Roles (comma separated)" value={roles} onChange={e => setRoles(e.target.value)} />
          <input type="text" placeholder="Levels (comma separated)" value={levels} onChange={e => setLevels(e.target.value)} />
          <input type="text" placeholder="Locations (comma separated)" value={locations} onChange={e => setLocations(e.target.value)} />
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="location">Location</option>
            <option value="role">Role</option>
            <option value="level">Level</option>
          </select>
          <input type="number" min="1" max="500" value={limit} onChange={e => setLimit(e.target.value)} />
          <button type="submit" disabled={loading}>{loading ? 'Searching...' : 'Search Jobs'}</button>
        </form>
        {error && <div className="error">{error}</div>}
        <div className="results">
          {Array.isArray(results) && results.length > 0 ? (
            <ul>
              {results.map((job, idx) => (
                <li key={idx} className="job-card">
                  <h3>{job.Description}</h3>
                  <p><strong>Location:</strong> {job.Location}</p>
                  <p><strong>Published At:</strong> {job["Published At"]}</p>
                  <p><strong>Full Description:</strong> {job["Full Description"]}</p>
                  {job.Link && (
                    <p><a href={job.Link} target="_blank" rel="noopener noreferrer">View Job</a></p>
                  )}
                </li>
              ))}
            </ul>
          ) : loading ? null : <p className="no-results">Search completed, your dream job is saved in the CSV file.</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
