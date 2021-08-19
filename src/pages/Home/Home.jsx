import PostForm from 'components/PostForm/PostForm';
import React from 'react';
import { useSelector } from 'react-redux';


const Home = () => {
  
  const userState = useSelector((state) => state.userReducer);
  
  return (
    <div className="home container d-flex row">
      <div className="col-3"></div>
        <p className="col-6">
          Welcome on My Social Network. This website is a training to Redux and React.
          We use auth and routing to create a small social media website.
        </p>
      <div className="col-3"></div>
      { userState.user !== undefined && (
        <>
        <PostForm />
        </>
      )}
    </div>
  );
};

export default Home;