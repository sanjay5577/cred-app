import React from 'react';
import AuthForm from '../components/AuthForm';
import Header from '../components/common/Header';
import VideoBackground from '../components/VideoBackground';

const Register = () => {
  return (
    <div>
       <Header text='back' />
       <VideoBackground />
      <AuthForm isLogin={false} />

    </div>
  );
};

export default Register;
