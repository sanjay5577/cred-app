import React from 'react';
import AuthForm from '../components/AuthForm';
import Header from '../components/common/Header';

const Login = () => {
  return (
    <div>
       <Header text='back' />
      <AuthForm isLogin={true} />
    </div>
  );
};

export default Login;
