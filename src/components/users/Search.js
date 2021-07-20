import React, { Fragment, useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const { searchUsers, users, clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);

      setText('');
    }

    e.preventDefault();
  };

  return (
    <Fragment>
      <form className='form' onSubmit={onSubmit}>
        <input
          name='text'
          type='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          className='btn btn-block btn-dark'
          type='submit'
          value='Search'
        />
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-block btn-light'
          type='button'
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
