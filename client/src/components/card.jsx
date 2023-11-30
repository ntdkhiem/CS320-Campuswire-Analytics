import React from 'react';
import './contributors.css';

function Card(props) {
  const { avatarSrc, username, postsCreated, questionsAnswered, endorsedComments, status } = props;

  return (
    <div className="card">
      <div className="header">
        <img className="avatar" src={avatarSrc} alt="Avatar" />
        <div className="status">
          <div className={`dot ${status === 'Active' ? 'green' : 'red'}`} style={{position:'absolute', right:'235px', top:'50px'}}></div>
        </div>
      </div>
      <p style={{position:'relative', top:'5px', fontWeight:'bold', fontFamily:'Segoe UI'}} >{username}</p>
      <ul style={{fontFamily:'Segoe UI'}}>
      <li>{`${postsCreated} posts created`}</li>
      <li>{`${questionsAnswered} questions answered`}</li>
      <li>{`${endorsedComments} endorsed comments`}</li>
      </ul>
    </div>
  );
}

export default Card;
