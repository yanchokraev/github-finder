import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => (
  <div className='card text-center'>
    <img
      className='round-img'
      style={{ width: '60px' }}
      src={avatar_url}
      alt='avatar'
    />
    <h3>{login}</h3>
    <div>
      <Link className='btn btn-sm btn-dark my-1' to={`/user/${login}`}>
        More
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
