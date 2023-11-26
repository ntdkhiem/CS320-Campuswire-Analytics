import React from 'react';
import Card from './card.jsx';
import './contributors.css';

function Contributors() {
  const contributorsData = [
    { id: 1, username: 'UserCS320', postsCreated: 3, questionsAnswered: 7, endorsedComments: 5, status: 'Active', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 2, username: 'UserCS321', postsCreated: 1, questionsAnswered: 2, endorsedComments: 0, status: 'Active', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 3, username: 'UserCS322', postsCreated: 0, questionsAnswered: 1, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 4, username: 'UserCS323', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 5, username: 'UserCS324', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 6, username: 'UserCS325', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 7, username: 'UserCS326', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 8, username: 'UserCS327', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
    { id: 9, username: 'UserCS328', postsCreated: 0, questionsAnswered: 0, endorsedComments: 0, status: 'Inactive', avatarSrc: 'https://via.placeholder.com/50' },
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