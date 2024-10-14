import React from 'react';
import PayBill from '../components/PayBill';
import Header from '../components/common/Header';

const PayBillpage = () => {
  return (
    <div>
      <Header text='back' path='paybill'/>
      <PayBill  />
    </div>
  );
};

export default PayBillpage ;
