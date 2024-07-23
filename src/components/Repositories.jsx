import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Repositories.css';

export default function Repositories() {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`https://api.github.com/users/${login}/repos`);
      const data = await response.json();
      setRepos(data);
    }

    fetchRepos();
  }, [login]);

  return (
    <div className="repo-list">
      <h3>{login}'s Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
