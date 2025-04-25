import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface UserProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

const ProfileCardTailwind: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setProfile(data));
    }
  }, [username]);

  return (
    <div className="max-w-sm rounded-xl bg-gray-100 overflow-hidden shadow-lg mx-auto mt-10 p-5 center">
      {profile && (
        <>
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={profile.avatar_url}
            alt="Profile"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-700 mb-3">{profile.bio}</p>
            <p className="text-gray-600"><strong>Public Repositories:</strong> {profile.public_repos}</p>
            <a
              href={profile.html_url}
              target="_blank"
              className="inline-block bg-green-500 text-white py-2 px-4 mt-4 rounded-full font-semibold hover:bg-green-600"
            >
              GitHub Profile
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCardTailwind;
