import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem',
      }}
    >
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
