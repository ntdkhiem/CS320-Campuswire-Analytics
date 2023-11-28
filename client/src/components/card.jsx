import React from 'react';
import './contributors.css';

function Card(props) {
  const { avatarSrc, username, postsCreated, questionsAnswered, endorsedComments, status } = props;

  return (
    <div className="card">
      <div className="header">
        <img className="avatar" src={avatarSrc} alt="Avatar" />
        <div className="status">
          <div className={`dot ${status === 'Active' ? 'green' : 'red'}`}></div>
          <p style={{ fontWeight: 'bold', position: 'relative', top: '8px' }}>{status}</p>
        </div>
      </div>
      <p>{username}</p>
      <p>{`${postsCreated} posts created`}</p>
      <p>{`${questionsAnswered} questions answered`}</p>
      <p>{`${endorsedComments} endorsed comments`}</p>
    </div>
  );
}

export default Card;
