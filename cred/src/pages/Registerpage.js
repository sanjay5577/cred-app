import React from 'react';
import AuthForm from '../components/AuthForm';
import Header from '../components/common/Header';

const Register = () => {
  return (
    <div>
       <Header text='back' />
      <AuthForm isLogin={false} />
    </div>
  );
};

export default Register;
