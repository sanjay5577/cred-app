import React from 'react';
import AuthForm from '../components/AuthForm';
import Header from '../components/common/Header';
import VideoBackground from '../components/VideoBackground';

const Login = () => {
  return (
    <div>
       <Header text='back' />
       <VideoBackground />
      <AuthForm isLogin={true} />
    </div>
  );
};

export default Login;
