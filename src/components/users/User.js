import React, { useContext, useEffect, Fragment } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, getUserRepos, user, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    hireable,
    avatar_url,
    name,
    location,
    bio,
    html_url,
    login,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link className='btn btn-light' to='/'>
        Back to Search
      </Link>
      Hireable: {hireable ? 'true' : 'false'}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            className='round-img'
            style={{ width: '200px' }}
            src={avatar_url}
            alt='avatar'
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a className='btn btn-dark my-1' href={html_url}>
            Visit Profile
          </a>
          <ul>
            <li>{login && <Fragment>Username: {login}</Fragment>}</li>
            <li>{company && <Fragment>Company: {company}</Fragment>}</li>
            <li>{blog && <Fragment>Website: {blog}</Fragment>}</li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-warning'>Following: {following}</div>
        <div className='badge badge-danger'>Repos: {public_repos}</div>
        <div className='badge badge-dark'>Gists: {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default User;
