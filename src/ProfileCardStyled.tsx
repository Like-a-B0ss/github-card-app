import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface UserProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;  // Fundo suave
`;

const Card = styled.div`
  max-width: 20rem;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 10px;  // Adiciona um pequeno espaço entre os cards
  text-align: center;
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardButton = styled.a`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 8px 20px;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #45a049;
  }
`;

const ProfileCardStyled: React.FC = () => {
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
    <Container>
      <Card>
        {profile && (
          <>
            <CardImageContainer>
              <CardImage src={profile.avatar_url} alt="Profile" />
            </CardImageContainer>
            <CardContent>
              <h2>{profile.name}</h2>
              <p>{profile.bio}</p>
              <p><strong>Public Repositories:</strong> {profile.public_repos}</p>
              <CardButton href={profile.html_url} target="_blank">GitHub Profile</CardButton>
            </CardContent>
          </>
        )}
      </Card>
    </Container>
  );
};

export default ProfileCardStyled;
