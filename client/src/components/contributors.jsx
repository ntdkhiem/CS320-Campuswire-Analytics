import React from 'react';
import Card from './card.jsx';
import './contributors.css';

function Contributors() {
  const contributorsData = [
    { id: 1, username: 'Anonymous1', postsCreated: 3, questionsAnswered: 7, endorsedComments: 5, status: 'Active', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 2, username: 'Anonymous2', postsCreated: 1, questionsAnswered: 2, endorsedComments: 0, status: 'Active', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 3, username: 'Anonymous3', postsCreated: 0, questionsAnswered: 1, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 4, username: 'Anonymous4', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 5, username: 'Anonymous5', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 6, username: 'Anonymous6', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 7, username: 'Anonymous7', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 8, username: 'Anonymous8', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 9, username: 'Anonymous9', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
  ];

  return (
    <div className="container">
      <div className="contributors-wrapper">
        {contributorsData.map(contributor => (
          <Card
            key={contributor.id}
            avatarSrc={contributor.avatarSrc}
            username={contributor.username}
            postsCreated={contributor.postsCreated}
            questionsAnswered={contributor.questionsAnswered}
            endorsedComments={contributor.endorsedComments}
            status={contributor.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Contributors;